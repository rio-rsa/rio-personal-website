import React from 'react';

import { Publication } from '@/types';

export const PublicationItem: React.FC<{ publication: Publication }> = ({
  publication,
}) => {
  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-12 py-8 border-b border-stone-200 last:border-0 group'>
      <div className='flex-shrink-0 md:w-32 text-sm font-bold text-stone-400 font-mono pt-1'>
        {publication.year}
      </div>
      <div className='flex-1'>
        <h4 className='text-xl md:text-2xl font-serif font-medium text-stone-900 mb-2'>
          <a
            href={publication.link || '#'}
            className='hover:text-stone-600 transition-colors'
          >
            {publication.title}
          </a>
        </h4>
        <div className='text-sm font-medium text-stone-500 mb-4 uppercase tracking-widest text-[10px]'>
          {publication.journal}
        </div>
        <p className='text-stone-600 text-sm leading-relaxed font-light max-w-2xl'>
          {publication.abstract}
        </p>
      </div>
    </div>
  );
};
