import { Router } from 'express';
import { postInspection } from '../controllers/inspectionController';

const router = Router();
router.post('/', postInspection);
export default router;
