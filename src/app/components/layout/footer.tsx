'use client';
import * as React from 'react';
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className='bg-stone-900 text-stone-400 py-16 px-6 text-center border-t border-stone-800'>
      <div className='flex justify-center gap-8 mb-8'>
        <a
          href='https://github.com/rio-rsa'
          className='hover:text-stone-100 transition-colors'
        >
          <SiGithub className='w-5 h-5' />
        </a>
        <a
          href='https://www.linkedin.com/in/rioraj777881840519/'
          className='hover:text-stone-100 transition-colors'
        >
          <SiLinkedin className='w-5 h-5' />
        </a>
        <a href='#' className='hover:text-stone-100 transition-colors'>
          <SiGmail className='w-5 h-5' />
        </a>
      </div>
      <p className='text-xs font-sans tracking-wider text-stone-500'>
        © {new Date().getFullYear()} RIOTHINKS.COM
      </p>
    </footer>
  );
}
