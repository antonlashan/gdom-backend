import { Router } from 'express';
import SportEventController from '../controllers/sports-event.controller';

class SportEventRoutes {
    router = Router();
    controller = new SportEventController();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {
        this.router.get('/', this.controller.findAll);

        this.router.get('/:id', this.controller.findOne);
    }
}

export default new SportEventRoutes().router;
