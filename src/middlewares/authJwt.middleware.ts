import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import { JWT_SECRET } from '../config/auth.config';
import { handleApiResponse } from '../utils/response';

interface ICustomRequest extends Request {
    token?: string | JwtPayload;
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['x-access-token'] as string;

    if (!token) {
        return handleApiResponse(res, 403, null, 'No token provided!');
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return handleApiResponse(res, 401, null, 'Unauthorized!');
        }
        (req as ICustomRequest).token = decoded;

        next();
    });
};
