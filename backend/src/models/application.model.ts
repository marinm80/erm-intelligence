export type ApplicationStatus = 'pending' | 'reviewed' | 'accepted' | 'rejected';

export interface Application {
  id?: string;
  positionId: string;
  fullName: string;
  email: string;
  linkedinUrl?: string;
  motivationLetter: string;
  cvPath: string; // the path where the file is stored locally
  status?: ApplicationStatus;
  createdAt?: Date;
}
