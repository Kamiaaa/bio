// components/Parallax.tsx
"use client"; // Required for Next.js 13+ to use client-side effects

import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  id?: string;
}

const Parallax = ({ children, speed = 1, className = '', id }: ParallaxProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const handleScroll = () => {
      if (elementRef.current) {
        const scrollY = window.scrollY || window.pageYOffset;
        const offset = scrollY * speed;
        elementRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={elementRef} 
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
      id={id}
    >
      {children}
    </div>
  );
};

export default Parallax;