import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from '../config/auth.config';
import User from '../models/user.model';

interface IAuthRepository {
    getjwtToken(user: User): string;
}

class AuthRepository implements IAuthRepository {
    getjwtToken(user: User) {
        try {
            const token = sign({ id: user.id }, JWT_SECRET, {
                algorithm: 'HS256',
                allowInsecureKeySizes: true,
                expiresIn: 86400, // 24 hours
            });

            return token;
        } catch (error) {
            throw new Error('Failed jsonwebtoken sign');
        }
    }
}

export default new AuthRepository();
