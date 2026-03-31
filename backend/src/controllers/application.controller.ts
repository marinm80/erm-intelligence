import { Request, Response } from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs';
import { ApplicationService } from '../services/application.service.ts';
import { Application } from '../models/application.model.ts';

const applicationService = new ApplicationService();

// Ensure uploads directory exists
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${uuidv4()}`;
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Formato de archivo inválido. Solo PDF o Word son aceptados.'));
  }
};

export const upload = multer({ 
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

export const apply = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'El CV es obligatorio' });
    }

    const { positionId, fullName, email, linkedinUrl, motivationLetter } = req.body;

    if (!positionId || !fullName || !email || !motivationLetter) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const applicationData: Application = {
      positionId,
      fullName,
      email,
      linkedinUrl,
      motivationLetter,
      cvPath: file.filename, // store relative filename
    };

    const newApp = await applicationService.createApplication(applicationData);
    res.status(201).json({ message: 'Application submitted successfully', application: newApp });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllApplications = async (req: Request, res: Response) => {
  try {
    const apps = await applicationService.getAllApplications();
    res.json(apps);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getApplicationById = async (req: Request, res: Response) => {
  try {
    const app = await applicationService.getApplicationById(req.params['id']!);
    if (!app) return res.status(404).json({ message: 'Application not found' });
    res.json(app);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
