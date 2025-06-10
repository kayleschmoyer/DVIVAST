import express from 'express';
import workorderRoutes from './routes/workorders';
import inspectionRoutes from './routes/inspection';
import { errorHandler } from './middleware/errorHandler';

const app = express();
app.use(express.json());
app.use('/api/workorders', workorderRoutes);
app.use('/api/inspection', inspectionRoutes);
app.use(errorHandler);
export default app;
