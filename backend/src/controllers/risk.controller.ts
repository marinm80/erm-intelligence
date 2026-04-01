import { Request, Response } from 'express';
import { RiskService } from '../services/risk.service';

const riskService = new RiskService();

export const getAllRisks = async (req: Request, res: Response) => {
  try {
    const risks = await riskService.getAllRisks();
    res.json(risks);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getRiskById = async (req: Request, res: Response) => {
  try {
    const risk = await riskService.getRiskById(req.params['id']!);
    if (!risk) return res.status(404).json({ message: 'Risk not found' });
    res.json(risk);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createRisk = async (req: Request, res: Response) => {
  try {
    const risk = await riskService.createRisk(req.body);
    res.status(201).json(risk);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateRisk = async (req: Request, res: Response) => {
  try {
    const risk = await riskService.updateRisk(req.params['id']!, req.body);
    if (!risk) return res.status(404).json({ message: 'Risk not found' });
    res.json(risk);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteRisk = async (req: Request, res: Response) => {
  try {
    const success = await riskService.deleteRisk(req.params['id']!);
    if (!success) return res.status(404).json({ message: 'Risk not found' });
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
