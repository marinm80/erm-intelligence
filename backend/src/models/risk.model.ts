export type RiskLevel = 'Low' | 'Medium' | 'High' | 'Critical';
export type RiskStatus = 'Identified' | 'Assessed' | 'Mitigated' | 'Closed';

export interface Risk {
  id?: string;
  title: string;
  description: string;
  level: RiskLevel;
  status: RiskStatus;
  category: string;
  probability: number; // 0 to 1
  impact: number; // 0 to 1
  createdAt?: Date;
  updatedAt?: Date;
}
