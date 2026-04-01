import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { jobPositions } from '../data/jobPositions';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { ApplicationForm } from '../components/careers/ApplicationForm';

export const JobDetailPage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'es';
  const { jobId } = useParams<{ jobId: string }>();
  
  const job = jobPositions.find(j => j.id === jobId);
  
  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  const departmentColors: Record<string, string> = {
    'Engineering': 'bg-blue-100 text-blue-700 border-blue-200',
    'Product': 'bg-purple-100 text-purple-700 border-purple-200',
    'Business': 'bg-green-100 text-green-700 border-green-200',
    'Security': 'bg-orange-100 text-orange-700 border-orange-200',
  };

  const badgeColor = departmentColors[job.department] || 'bg-gray-100 text-gray-700 border-gray-200';

  return (
    <div className="bg-stone-950 min-h-screen text-stone-200 pt-20">
      <ScrollToTop />
      <Navbar />
      
      <main className="container-custom py-16 md:py-24 max-w-4xl mx-auto">
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-8 md:p-12 mb-12 shadow-xl shadow-black/20">
          {/* Header */}
          <div className="mb-8 border-b border-stone-800 pb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-400">
              {job.title[lang]}
            </h1>
            
            <div className="flex flex-wrap gap-3">
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${badgeColor}`}>
                {t(`careers.departments.${job.department}`)}
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border bg-stone-800 text-stone-300 border-stone-700">
                {t(`careers.modalities.${job.modality}`)}
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border bg-stone-800 text-stone-300 border-stone-700">
                {t(`careers.contracts.${job.contractType}`)}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <p className="text-lg text-stone-300 leading-relaxed whitespace-pre-wrap">
              {job.description[lang]}
            </p>
          </div>

          {/* Requirements */}
          {job.requirements && job.requirements[lang] && job.requirements[lang].length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                {t('careers.detail.requirements')}
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                {job.requirements[lang].map((req, index) => (
                  <li key={index} className="text-stone-300 leading-relaxed relative pl-2">
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Application Form Section */}
        <div className="mt-16">
          <ApplicationForm jobs={jobPositions} selectedJobId={job.id} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetailPage;
