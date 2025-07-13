'use client'
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-1/3 right-4">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="h-10 w-10 rounded-full bg-[#7AA859] text-white shadow-lg hover:bg-[#7aa859e3] focus:outline-none"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
