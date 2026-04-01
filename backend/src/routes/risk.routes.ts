import { Router } from 'express';
import {
  getAllRisks,
  getRiskById,
  createRisk,
  updateRisk,
  deleteRisk,
} from '../controllers/risk.controller';

const router = Router();

router.get('/', getAllRisks);
router.get('/:id', getRiskById);
router.post('/', createRisk);
router.put('/:id', updateRisk);
router.delete('/:id', deleteRisk);

export default router;
