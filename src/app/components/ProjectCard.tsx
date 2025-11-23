import { ExternalLink, Github } from 'lucide-react';
import React from 'react';

import { Project } from '@/types';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className='group flex flex-col h-full'>
      <div className='mb-4 flex items-center justify-between border-b border-stone-200 pb-4'>
        <span className='font-mono text-xs text-stone-400'>0{project.id}</span>
        <div className='flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity'>
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              rel='noreferrer'
              className='text-stone-400 hover:text-stone-900 transition-colors'
            >
              <Github className='w-4 h-4' />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target='_blank'
              rel='noreferrer'
              className='text-stone-400 hover:text-stone-900 transition-colors'
            >
              <ExternalLink className='w-4 h-4' />
            </a>
          )}
        </div>
      </div>

      <h3 className='text-2xl font-serif font-medium text-stone-900 mb-3 group-hover:underline decoration-stone-300 underline-offset-4'>
        {project.title}
      </h3>

      <p className='text-stone-600 text-sm leading-relaxed mb-6 flex-1 font-light'>
        {project.description}
      </p>

      <div className='flex flex-wrap gap-2 mt-auto'>
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className='text-[10px] uppercase tracking-wider font-bold text-stone-500 border border-stone-200 px-2 py-1 rounded-sm'
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
