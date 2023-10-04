import { Router } from 'express';
import SportEventController from '../controllers/sports-event.controller';
import { verifyToken } from '../middlewares/authJwt.middleware';

class SportEventRoutes {
    router = Router();
    controller = new SportEventController();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {
        this.router.get('/', [verifyToken], this.controller.findAll);

        this.router.get('/:id', [verifyToken], this.controller.findOne);
    }
}

export default new SportEventRoutes().router;
