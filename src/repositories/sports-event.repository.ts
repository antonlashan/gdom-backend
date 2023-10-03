import SportsEvent from '../models/sports-event.model';

interface ISportsEventRepository {
    retrieveAll(): Promise<SportsEvent[]>;
    retrieveById(eventId: number): Promise<SportsEvent | null>;
}

class SportsEventRepository implements ISportsEventRepository {
    async retrieveAll(): Promise<SportsEvent[]> {
        try {
            return await SportsEvent.findAll();
        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve SportsEvents!');
        }
    }

    async retrieveById(eventId: number): Promise<SportsEvent | null> {
        try {
            return await SportsEvent.findByPk(eventId);
        } catch (error) {
            throw new Error('Failed to retrieve SportsEvent!');
        }
    }
}

export default new SportsEventRepository();
