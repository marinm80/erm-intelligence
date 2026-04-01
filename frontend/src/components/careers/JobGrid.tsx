import { useState } from 'react';
import type { JobPosition, Department } from '../../types/careers';
import { JobCard } from './JobCard';
import { useTranslation } from 'react-i18next';

interface JobGridProps {
  jobs: JobPosition[];
  onApply: (job: JobPosition) => void;
}

export const JobGrid = ({ jobs, onApply }: JobGridProps) => {
  const { t } = useTranslation();
  const [filterDept, setFilterDept] = useState<Department | 'All'>('All');

  const filteredJobs = jobs.filter(
    job => job.isActive && (filterDept === 'All' || job.department === filterDept)
  );

  return (
    <section className="py-24 bg-stone-50">
      <div className="container-custom space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-stone-800 tracking-tight">
            {t('careers.open_positions')}
          </h2>
          
          <div className="flex flex-wrap gap-2">
            {['All', 'Engineering', 'Product', 'Business', 'Security'].map(dept => (
              <button
                key={dept}
                onClick={() => setFilterDept(dept as any)}
                className={`px-4 py-2 rounded-full text-sm font-bold font-display transition-colors ${
                  filterDept === dept 
                    ? 'bg-brand-red text-white' 
                    : 'bg-white border border-stone-200 text-stone-500 hover:bg-stone-100'
                }`}
              >
                {dept === 'All' ? t('careers.all') : dept}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard key={job.id} job={job} onApply={onApply} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-stone-500">{t('careers.empty')}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
