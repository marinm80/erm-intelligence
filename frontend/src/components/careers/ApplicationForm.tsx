import { useState, useRef } from 'react';
import type { JobPosition, JobApplication } from '../../types/careers';
import { UploadCloud, CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ApplicationFormProps {
  jobs: JobPosition[];
  selectedJobId?: string | null;
}

export const ApplicationForm = ({ jobs, selectedJobId }: ApplicationFormProps) => {
  const [formData, setFormData] = useState<Partial<JobApplication>>({
    positionId: selectedJobId || '',
    fullName: '',
    email: '',
    linkedinUrl: '',
    motivationLetter: ''
  });
  
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update position if selected via props (scroll clicked)
  if (selectedJobId && selectedJobId !== formData.positionId && status === 'idle') {
    setFormData(prev => ({ ...prev, positionId: selectedJobId }));
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const validateFile = (selectedFile: File): boolean => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(selectedFile.type)) {
      setErrorMessage('Formato no soportado. Sube un PDF o DOCX.');
      return false;
    }
    if (selectedFile.size > 5 * 1024 * 1024) {
      setErrorMessage('El archivo excede los 5MB.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (validateFile(droppedFile)) {
        setFile(droppedFile);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
      }
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setErrorMessage('Debes adjuntar tu CV');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('positionId', formData.positionId || '');
      formDataToSubmit.append('fullName', formData.fullName || '');
      formDataToSubmit.append('email', formData.email || '');
      if (formData.linkedinUrl) formDataToSubmit.append('linkedinUrl', formData.linkedinUrl);
      formDataToSubmit.append('motivationLetter', formData.motivationLetter || '');
      formDataToSubmit.append('cv', file);

      // Call API
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${API_URL}/api/careers/apply`, {
        method: 'POST',
        body: formDataToSubmit,
      });

      if (!response.ok) {
        throw new Error('Error al enviar la postulación. Inténtelo más tarde.');
      }

      setStatus('success');
      setFormData({
        positionId: '',
        fullName: '',
        email: '',
        linkedinUrl: '',
        motivationLetter: ''
      });
      setFile(null);
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 p-12 rounded-2xl text-center space-y-4 shadow-sm max-w-2xl mx-auto my-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-green-200">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-display font-bold text-green-800">¡Postulación Enviada!</h3>
        <p className="text-green-700">
          Gracias por tu interés en ERM Intelligence. Nuestro equipo revisará tu perfil y nos pondremos en contacto contigo pronto.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition"
        >
          Enviar otra postulación
        </button>
      </div>
    );
  }

  return (
    <section id="application-form" className="py-24 bg-white border-t border-[var(--color-stone-200)]">
      <div className="container-custom max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-[var(--color-stone-800)] tracking-tight">
            Aplica Ahora
          </h2>
          <p className="text-[var(--color-stone-500)] text-lg">
            Completa el formulario y cuéntanos por qué eres el fit ideal para ERM Intelligence.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl border border-[var(--color-stone-200)] shadow-lg space-y-8">
          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-medium">{errorMessage}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2 md:col-span-2">
                 <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-stone-500)]">Cargo al que aplicas *</label>
                 <select 
                   required
                   name="positionId"
                   value={formData.positionId}
                   onChange={handleInputChange}
                   className="w-full p-4 bg-[var(--color-stone-50)] border border-[var(--color-stone-200)] rounded-xl focus:outline-none focus:border-[var(--color-brand-red)] focus:ring-1 focus:ring-[var(--color-brand-red)] transition-all font-display text-black"
                 >
                   <option value="" disabled>Selecciona una posición</option>
                   {jobs.filter(j => j.isActive).map(job => (
                     <option key={job.id} value={job.id}>{job.title} ({job.contractType} - {job.modality})</option>
                   ))}
                 </select>
             </div>

             <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-stone-500)]">Nombre Completo *</label>
                 <input 
                   required minLength={3}
                   name="fullName"
                   value={formData.fullName}
                   onChange={handleInputChange}
                   type="text" 
                   className="w-full p-4 bg-[var(--color-stone-50)] border border-[var(--color-stone-200)] rounded-xl focus:outline-none focus:border-[var(--color-brand-red)] transition-colors placeholder-black text-black" 
                   placeholder="John Doe" 
                 />
             </div>

             <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-stone-500)]">Email Comercial *</label>
                 <input 
                   required type="email"
                   name="email"
                   value={formData.email}
                   onChange={handleInputChange}
                   className="w-full p-4 bg-[var(--color-stone-50)] border border-[var(--color-stone-200)] rounded-xl focus:outline-none focus:border-[var(--color-brand-red)] transition-colors placeholder-black text-black" 
                   placeholder="john@example.com" 
                 />
             </div>

             <div className="space-y-2 md:col-span-2">
                 <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-stone-500)]">LinkedIn / Portfolio URL</label>
                 <input 
                   type="url"
                   name="linkedinUrl"
                   value={formData.linkedinUrl}
                   onChange={handleInputChange}
                   className="w-full p-4 bg-[var(--color-stone-50)] border border-[var(--color-stone-200)] rounded-xl focus:outline-none focus:border-[var(--color-brand-red)] transition-colors placeholder-black text-black" 
                   placeholder="https://linkedin.com/in/..." 
                 />
             </div>

             <div className="space-y-2 md:col-span-2">
                 <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-stone-500)] flex justify-between">
                   <span>Carta de Motivación / Pitch *</span>
                   <span className="font-mono text-[var(--color-stone-400)] font-normal normal-case">
                     {formData.motivationLetter?.length || 0}/800
                   </span>
                 </label>
                 <textarea 
                   required minLength={50} maxLength={800}
                   name="motivationLetter"
                   value={formData.motivationLetter}
                   onChange={handleInputChange}
                   className="w-full p-4 bg-[var(--color-stone-50)] border border-[var(--color-stone-200)] rounded-xl focus:outline-none focus:border-[var(--color-brand-red)] transition-colors h-40 resize-y placeholder-black text-black" 
                   placeholder="¿Por qué eres el candidato ideal para ERM Intelligence?"
                 ></textarea>
             </div>

             <div className="space-y-2 md:col-span-2">
                 <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-stone-500)]">Sube tu CV (PDF o Word) *</label>
                 <div 
                   onDragOver={handleDragOver}
                   onDragLeave={handleDragLeave}
                   onDrop={handleDrop}
                   className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors
                     ${isDragging ? 'border-[var(--color-brand-red)] bg-red-50/50' : 'border-[var(--color-stone-200)] bg-[var(--color-stone-50)] hover:border-[var(--color-stone-400)]'}
                   `}
                 >
                   <input 
                     ref={fileInputRef}
                     type="file" 
                     className="hidden" 
                     accept=".pdf,.doc,.docx"
                     onChange={handleFileChange}
                   />
                   
                   {!file ? (
                     <div className="flex flex-col items-center gap-3">
                       <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-[var(--color-stone-200)]">
                         <UploadCloud className="w-5 h-5 text-[var(--color-stone-500)]" />
                       </div>
                       <div>
                         <p className="font-display font-bold text-[var(--color-stone-800)] text-lg">
                           Arrastra tu CV aquí o <button type="button" onClick={() => fileInputRef.current?.click()} className="text-[var(--color-brand-red)] hover:underline">explorar</button>
                         </p>
                         <p className="text-xs text-[var(--color-stone-400)] mt-1">Soporta PDF, DOC, DOCX. Max 5MB.</p>
                       </div>
                       {errorMessage && !formData.positionId && (
                           // Hide file error here if it's general submit error, wait, let's just show standard file errors
                           <p className="text-xs text-[var(--color-brand-red)] flex items-center gap-1 font-bold mt-2"><AlertCircle className="w-3 h-3"/> {errorMessage === 'Debes adjuntar tu CV' ? '' : errorMessage}</p>
                       )}
                     </div>
                   ) : (
                     <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-sm border border-green-200">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex items-center gap-4">
                           <span className="font-display font-medium text-[var(--color-stone-800)]">{file.name}</span>
                           <button type="button" onClick={removeFile} className="p-1 hover:bg-red-100 text-red-500 rounded-md transition" title="Remover archivo">
                             <X className="w-4 h-4" />
                           </button>
                        </div>
                        <p className="text-xs text-[var(--color-stone-400)] mt-1 font-mono">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                     </div>
                   )}
                 </div>
             </div>
          </div>

          <button 
            disabled={status === 'loading'}
            className="w-full py-4 bg-[var(--color-brand-red)] text-white font-display font-bold text-lg rounded-xl hover:bg-red-700 transition-all shadow-xl shadow-red-500/20 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Enviando postulación...
              </span>
            ) : (
              'Enviar Postulación'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
