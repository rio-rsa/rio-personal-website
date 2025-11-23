import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { SKILLS } from '@/data/content';

export const Hero: React.FC = () => {
  return (
    <section
      id='home'
      className='min-h-[85vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-12'
    >
      <div className='max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center'>
        {/* Text Content */}
        <div className='order-2 md:order-1'>
          <div className='mb-8 flex items-center gap-3'>
            <div className='h-px w-8 bg-stone-400'></div>
            <span className='text-xs font-bold tracking-widest uppercase text-stone-500'>
              Available for Collaboration
            </span>
          </div>

          <h1 className='text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-stone-900 tracking-tight mb-8 leading-[1.05]'>
            Hello, I'm Rio. <br />
            <span className='text-stone-400 italic'>Data Engineer</span> <br />&
            Researcher.
          </h1>

          <p className='text-lg md:text-xl text-stone-600 max-w-lg leading-relaxed mb-10 font-light'>
            Building scalable distributed systems and exploring the theoretical
            underpinnings of information architecture. Bridging the gap between
            industry engineering and academic rigor.
          </p>

          <div className='flex flex-wrap gap-4 mb-12'>
            <a
              href='#projects'
              className='px-8 py-4 bg-stone-900 text-stone-50 text-sm font-medium tracking-wide rounded-md hover:bg-stone-700 transition-all flex items-center gap-2'
            >
              View Projects <ArrowRight className='w-4 h-4' />
            </a>
            <a
              href='#contact'
              className='px-8 py-4 bg-transparent text-stone-900 border border-stone-300 text-sm font-medium tracking-wide rounded-md hover:bg-stone-100 transition-all'
            >
              Get in Touch
            </a>
          </div>

          <div className='border-t border-stone-200 pt-8'>
            <p className='text-xs font-bold text-stone-400 uppercase tracking-widest mb-4'>
              Technical Focus
            </p>
            <div className='flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm text-stone-600'>
              {SKILLS.slice(0, 5).map((skill) => (
                <span key={skill} className='relative'>
                  {skill}
                </span>
              ))}
              <span className='text-stone-400 italic'>+ more</span>
            </div>
          </div>
        </div>

        {/* Headshot Image */}
        <div className='order-1 md:order-2 flex justify-center md:justify-end relative'>
          {/* Image Container with aesthetic borders */}
          <div className='relative w-64 h-64 md:w-[400px] md:h-[400px]'>
            <div className='absolute inset-0 rounded-full border border-stone-200 transform translate-x-4 translate-y-4'></div>
            <Image
              src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'
              alt='Rio Headshot'
              className='relative w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl shadow-stone-200'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
