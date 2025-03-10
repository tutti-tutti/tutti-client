'use client';

import { useState, useEffect } from 'react';

import { cn } from '@/utils';
import Button from './Button';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={cn(
        'px-lg fixed right-0 bottom-10 transition-all duration-300 ease-in-out',
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-10 opacity-0',
      )}
    >
      <Button
        icon="upArrow"
        iconProps={{
          width: 32,
          height: 32,
          style: {
            minWidth: '32px',
            minHeight: '32px',
            width: '32px',
            height: '32px',
          },
        }}
        onClick={scrollToTop}
        className="bg-bg-primary text-text-primary hover:text-text-inverse active:text-text-inverse shadow-custom-effect h-32 w-16 rounded-full"
      />
    </div>
  );
};

export default ScrollToTopButton;
