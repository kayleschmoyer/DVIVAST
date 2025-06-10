import { Router } from 'express';
import { getWorkOrders } from '../controllers/workorderController';

const router = Router();
router.get('/', getWorkOrders);
export default router;
