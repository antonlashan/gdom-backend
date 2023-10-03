import { Request, Response } from 'express';

import sportsEventlRepository from '../repositories/sports-event.repository';
import { handleApiResponse } from '../utils/response';

export default class SportsEventController {
    async findAll(req: Request, res: Response) {
        try {
            const events = await sportsEventlRepository.retrieveAll();

            return handleApiResponse(res, 200, events);
        } catch (err) {
            return handleApiResponse(res, 500, null, 'Some error occurred while retrieving SportsEvents.');
        }
    }

    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const event = await sportsEventlRepository.retrieveById(id);

            if (event) return handleApiResponse(res, 200, event);
            else return handleApiResponse(res, 404, null, `Cannot find SportsEvent with id=${id}.`);
        } catch (err) {
            return handleApiResponse(res, 500, null, `Error retrieving SportsEvent with id=${id}.`);
        }
    }
}
