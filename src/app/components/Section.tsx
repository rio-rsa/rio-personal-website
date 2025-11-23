import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  light?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className = '',
  light = false,
}) => {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 px-6 md:px-12 lg:px-24 ${light ? 'bg-white' : 'bg-stone-50'} ${className}`}
    >
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row md:items-end gap-4 mb-16 border-b border-stone-200 pb-6'>
          <h2 className='text-4xl md:text-5xl font-serif font-medium text-stone-900'>
            {title}
          </h2>
          <span className='text-stone-400 font-serif italic text-lg md:ml-4 pb-1'>
            Selected Works
          </span>
        </div>
        {children}
      </div>
    </section>
  );
};
