import { Router } from 'express';
import {
  apply,
  upload,
  getAllApplications,
  getApplicationById
} from '../controllers/application.controller';

const router = Router();

// Endpoint for applying (handles file upload)
router.post('/apply', upload.single('cv'), apply);

// Endpoints for admin visualization
router.get('/', getAllApplications);
router.get('/:id', getApplicationById);

export default router;
