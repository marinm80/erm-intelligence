import type { JobPosition } from '../../types/careers';
import { MapPin, Clock } from 'lucide-react';

interface JobCardProps {
  job: JobPosition;
  onApply: (job: JobPosition) => void;
}

export const JobCard = ({ job, onApply }: JobCardProps) => {
  const departmentColors: Record<string, string> = {
    'Engineering': 'bg-blue-100 text-blue-700 border-blue-200',
    'Product': 'bg-purple-100 text-purple-700 border-purple-200',
    'Business': 'bg-green-100 text-green-700 border-green-200',
    'Security': 'bg-orange-100 text-orange-700 border-orange-200',
  };

  const badgeColor = departmentColors[job.department] || 'bg-gray-100 text-gray-700 border-gray-200';

  return (
    <div className="bg-white border border-[var(--color-stone-200)] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:scale-[1.02] flex flex-col h-full group">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${badgeColor}`}>
          {job.department}
        </span>
      </div>
      
      <h3 className="text-xl font-display font-bold text-[var(--color-stone-800)] mb-2 group-hover:text-[var(--color-brand-red)] transition-colors line-clamp-2">
        {job.title}
      </h3>
      
      <p className="text-[var(--color-stone-500)] text-sm mb-6 flex-grow line-clamp-3">
        {job.description}
      </p>
      
      <div className="flex flex-wrap gap-4 mb-6 text-sm text-[var(--color-stone-500)] font-medium">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4" />
          {job.modality}
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          {job.contractType}
        </div>
      </div>
      
      <button 
        onClick={() => onApply(job)}
        className="w-full py-3 bg-[var(--color-stone-100)] text-[var(--color-stone-800)] rounded-xl font-bold font-display hover:bg-[var(--color-brand-red)] hover:text-white transition-colors group-hover:shadow-md"
      >
        Aplicar Ahora
      </button>
    </div>
  );
};
