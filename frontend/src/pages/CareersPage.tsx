import { useState, useCallback } from 'react';
import { CareersHero } from '../components/careers/CareersHero';
import { JobGrid } from '../components/careers/JobGrid';
import { ApplicationForm } from '../components/careers/ApplicationForm';
import { jobPositions } from '../data/jobPositions';
import type { JobPosition } from '../types/careers';

export const CareersPage = () => {
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  const handleApply = useCallback((job: JobPosition) => {
    setSelectedJobId(job.id);
    
    // Smooth scroll to form
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="pt-20">
      <main>
        <CareersHero />
        
        <JobGrid 
          jobs={jobPositions} 
          onApply={handleApply} 
        />
        
        <ApplicationForm 
          jobs={jobPositions}
          selectedJobId={selectedJobId}
        />
      </main>
    </div>
  );
};
