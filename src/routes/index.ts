import { Application } from 'express';

import homeRoutes from './home.routes';
import sportsEventRoutes from './sports-event.routes';

export default class Routes {
    constructor(app: Application) {
        app.use('/api', homeRoutes);
        app.use('/api/events', sportsEventRoutes);
    }
}
