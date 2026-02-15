'use client';

import * as React from 'react';
import { SiGmail, SiLinkedin } from 'react-icons/si';

// You will need to create this data file and export these constants
import { BLOG_POSTS, PROJECTS, PUBLICATIONS } from '@/data/content';

// You will need to create these component files
import { ChatWidget } from '@/app/components/ChatWidget';
import { Hero } from '@/app/components/Hero';
import { ProjectCard } from '@/app/components/ProjectCard';
import { PublicationItem } from '@/app/components/PublicationItem';
import { Section } from '@/app/components/Section';

export default function HomePage() {
  return (
    // The <main> tag is a good container. The outer div is not needed here
    // because the main layout is handled by layout.tsx
    <main>
      <Hero />

      <Section id='projects' title='Selected Projects'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Section>

      <Section id='research' title='Research & Publications' light>
        <div className='flex flex-col max-w-3xl mx-auto'>
          {PUBLICATIONS.map((p) => (
            <PublicationItem key={p.id} publication={p} />
          ))}
        </div>
      </Section>

      <Section id='blog' title='Thoughts'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto'>
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className='flex flex-col group cursor-pointer'
            >
              <div className='flex items-center gap-3 mb-3 border-b border-stone-200 pb-2'>
                <span className='text-xs font-mono text-stone-400'>
                  {post.date}
                </span>
                <span className='text-xs font-bold text-stone-900 uppercase tracking-wider'>
                  {post.tags[0]}
                </span>
              </div>
              <h3 className='text-2xl font-serif font-bold text-stone-900 mb-3 group-hover:text-stone-600 transition-colors'>
                {post.title}
              </h3>
              <p className='text-stone-600 leading-relaxed text-sm mb-4'>
                {post.excerpt}
              </p>
              <span className='text-sm font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 group-hover:decoration-stone-900 transition-all'>
                Read Article
              </span>
            </article>
          ))}
        </div>
      </Section>

      <Section id='contact' title='Get in Touch' className='mb-20'>
        <div className='bg-white border border-stone-200 rounded-md p-10 md:p-16 text-center max-w-3xl mx-auto shadow-sm'>
          <h3 className='font-serif text-2xl md:text-3xl text-stone-900 mb-6'>
            Interested in collaboration?
          </h3>
          <p className='text-lg text-stone-600 mb-10 leading-relaxed font-light'>
            If you wish to get in contact with me in regards to a professional
            or academic opportunity, you can email me or connect with me on
            LinkedIn.
          </p>
          <a
            href='mailto:rio@riothinks.com'
            className='inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-stone-50 font-medium text-sm tracking-wide rounded-md hover:bg-stone-700 transition-all'
          >
            <SiGmail className='w-4 h-4' />
            RIO@RIOTHINKS.COM
          </a>
          <a
            href='https://www.linkedin.com/in/rioraj777881840519/'
            className='inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-stone-50 font-medium text-sm tracking-wide rounded-md hover:bg-stone-700 transition-all'
          >
            <SiLinkedin className='w-4 h-4' />
          </a>
        </div>
      </Section>

      <ChatWidget />
    </main>
  );
}
