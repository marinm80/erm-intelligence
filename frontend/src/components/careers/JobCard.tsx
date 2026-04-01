import type { JobPosition } from '../../types/careers';
import { MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface JobCardProps {
  job: JobPosition;
  onApply: (job: JobPosition) => void;
}

export const JobCard = ({ job, onApply }: JobCardProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'es';

  const departmentColors: Record<string, string> = {
    'Engineering': 'bg-blue-100 text-blue-700 border-blue-200',
    'Product': 'bg-purple-100 text-purple-700 border-purple-200',
    'Business': 'bg-green-100 text-green-700 border-green-200',
    'Security': 'bg-orange-100 text-orange-700 border-orange-200',
  };

  const badgeColor = departmentColors[job.department] || 'bg-gray-100 text-gray-700 border-gray-200';

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:scale-[1.02] flex flex-col h-full group">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${badgeColor}`}>
          {t(`careers.departments.${job.department}`)}
        </span>
      </div>
      
      <h3 className="text-xl font-display font-bold text-stone-800 mb-2 group-hover:text-(--color-brand-red) transition-colors line-clamp-2">
        {job.title[lang]}
      </h3>
      
      <p className="text-stone-500 text-sm mb-6 grow line-clamp-3">
        {job.description[lang]}
      </p>
      
      <div className="flex flex-wrap gap-4 mb-6 text-sm text-stone-500 font-medium">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4" />
          {t(`careers.modalities.${job.modality}`)}
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          {t(`careers.contracts.${job.contractType}`)}
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <Link
          to={`/careers/${job.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center border border-stone-600 text-stone-300 hover:border-(--color-brand-red) hover:text-(--color-brand-red) py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
        >
          {t('careers.view_offer')}
        </Link>
        <button 
          onClick={() => onApply(job)}
          className="w-full py-3 bg-stone-100 text-stone-800 rounded-xl font-bold font-display hover:bg-(--color-brand-red) hover:text-white transition-colors group-hover:shadow-md"
        >
          {t('careers.apply')}
        </button>
      </div>
    </div>
  );
};
