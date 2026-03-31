export type Department = 'Engineering' | 'Product' | 'Business' | 'Security';
export type ModalityType = 'Remoto' | 'Híbrido' | 'Presencial';
export type ContractType = 'Full-time' | 'Part-time' | 'Freelance';

export interface JobPosition {
  id: string;
  title: string;
  department: Department;
  modality: ModalityType;
  contractType: ContractType;
  description: string;
  requirements: string[];
  isActive: boolean;
}

export interface JobApplication {
  positionId: string;
  positionTitle: string;
  fullName: string;
  email: string;
  linkedinUrl?: string;
  cvFile: File;
  motivationLetter: string;
}
