import { Application } from '../models/application.model';
import { ApplicationRepository } from '../repositories/application.repository';

export class ApplicationService {
  private repository: ApplicationRepository;

  constructor() {
    this.repository = new ApplicationRepository();
  }

  async getAllApplications(): Promise<Application[]> {
    return this.repository.findAll();
  }

  async getApplicationById(id: string): Promise<Application | null> {
    return this.repository.findById(id);
  }

  async createApplication(application: Application): Promise<Application> {
    // validation could be here
    if (!application.cvPath) {
        throw new Error("CV file is required.");
    }
    application.status = 'pending';
    return this.repository.create(application);
  }

  async updateApplicationStatus(id: string, status: 'pending' | 'reviewed' | 'accepted' | 'rejected'): Promise<Application | null> {
    return this.repository.update(id, { status });
  }

  async deleteApplication(id: string): Promise<boolean> {
    return this.repository.delete(id);
  }
}
