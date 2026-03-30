import { Risk } from '../models/risk.model.ts';
import { RiskRepository } from '../repositories/risk.repository.ts';

export class RiskService {
  private repository: RiskRepository;

  constructor() {
    this.repository = new RiskRepository();
  }

  async getAllRisks(): Promise<Risk[]> {
    return this.repository.findAll();
  }

  async getRiskById(id: string): Promise<Risk | null> {
    return this.repository.findById(id);
  }

  async createRisk(risk: Risk): Promise<Risk> {
    // Add business logic here (e.g. validation, AI scoring placeholder)
    return this.repository.create(risk);
  }

  async updateRisk(id: string, risk: Partial<Risk>): Promise<Risk | null> {
    return this.repository.update(id, risk);
  }

  async deleteRisk(id: string): Promise<boolean> {
    return this.repository.delete(id);
  }
}
