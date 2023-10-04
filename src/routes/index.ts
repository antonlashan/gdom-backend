import { Application } from 'express';

import homeRoutes from './home.routes';
import sportsEventRoutes from './sports-event.routes';
import authRoutes from './auth.routes';

export default class Routes {
    constructor(app: Application) {
        app.use('/api', homeRoutes);
        app.use('/api/events', sportsEventRoutes);
        app.use('/api/auth', authRoutes);
    }
}
