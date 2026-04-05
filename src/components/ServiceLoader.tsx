'use client';

interface ServiceLoaderProps {
  message?: string;
  className?: string;
}

const ServiceLoader = ({
  message = 'Loading services...',
  className = 'bg-slate-50',
}: ServiceLoaderProps) => {
  return (
    <div className={`${className} min-h-screen flex items-center justify-center`}>
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-slate-600 font-medium">{message}</p>
      </div>
    </div>
  );
};

export default ServiceLoader;
