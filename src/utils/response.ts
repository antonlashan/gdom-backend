import { Response } from 'express';

export const handleApiResponse = (res: Response, statusCode: number, data: unknown, message: string | null = null) => {
    const response = {
        success: statusCode >= 200 && statusCode < 300,
        message: message || (statusCode >= 200 && statusCode < 300 ? 'Success' : 'Error'),
        data,
    };

    return res.status(statusCode).json(response);
};
