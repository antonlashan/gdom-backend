import { Request, Response } from 'express';
import { handleApiResponse } from '../utils/response';

export function welcome(req: Request, res: Response): Response {
    return handleApiResponse(res, 200, null, 'Welcome to gamdom backend.');
}
