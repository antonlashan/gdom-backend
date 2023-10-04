import { Request, Response } from 'express';
import { compareSync } from 'bcryptjs';

import authRepository from '../repositories/auth.repository';
import { handleApiResponse } from '../utils/response';
import User from '../models/user.model';

export default class AuthController {
    async signin(req: Request, res: Response) {
        const email = req.body.email;
        const password = req.body.password;

        if (!email || !password) {
            return handleApiResponse(res, 400, null, 'Email and Password are required!');
        }

        const user = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!user) {
            return handleApiResponse(res, 404, null, 'User Not found.');
        }

        try {
            const passwordIsValid = compareSync(req.body.password, user.password);

            if (!passwordIsValid) {
                return handleApiResponse(res, 401, null, 'Invalid Password!');
            }

            const token = authRepository.getjwtToken(user);

            return handleApiResponse(res, 200, { email: user.email, accessToken: token });
        } catch (err) {
            return handleApiResponse(res, 500, null, 'Error retrieving User.');
        }
    }
}
