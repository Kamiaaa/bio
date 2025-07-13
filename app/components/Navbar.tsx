'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiChevronDown, FiSun, FiMoon } from 'react-icons/fi';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle clicks outside of menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Load and apply dark mode from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'About',
      dropdown: [
        { label: 'Mission & Vision', href: '/mission-vision' },
        { label: 'Board of Directors', href: '/bod' },
        { label: 'Our Clients', href: '/clients' },
      ],
    },
    {
      label: 'Projects',
      dropdown: [
        { label: 'Ongoing Projects', href: '/ongoing-project' },
        { label: 'Completed Projects', href: '/ongoing-project' },
        { label: 'Upcoming Projects', href: '/ongoing-project' },
      ],
    },
    { label: 'News and Events', href: '/news-events' },
    { label: 'Career', href: '/career' },
    { label: 'Contact', href: '/contact' },
  ];

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className="bg-gray-900 dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          <Image
            className="h-16 w-36"
            src="/img/logo.png"
            alt="Logo"
            height={300}
            width={300}
          />
        </Link>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="text-lg text-gray-50 dark:text-white"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>

          <button
            className="text-lg text-gray-50 dark:text-white"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center gap-1 text-gray-50 dark:text-white text-base hover:text-[#7AA859] dark:hover:text-[#7AA859] transition font-poppins"
                >
                  {item.label}
                  <FiChevronDown className="mt-0.5 transform transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-0 hidden group-hover:block bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 w-60 z-40">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 text-base hover:bg-gray-100 dark:hover:bg-gray-700 font-poppins"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`text-gray-50 dark:text-white text-base hover:text-[#7AA859] dark:hover:text-[#7AA859] transition font-poppins ${pathname === item.href ? 'font-semibold' : ''}`}
              >
                {item.label}
              </Link>
            )
          )}

          {/* Dark Mode Toggle for Desktop */}
          <button
            onClick={toggleDarkMode}
            className="text-base text-white dark:text-white"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div ref={menuRef} className="md:hidden px-4 pb-4 bg-white dark:bg-gray-900 space-y-2">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center justify-between w-full text-left py-2 text-gray-800 dark:text-white text-base font-medium"
                >
                  {item.label}
                  <FiChevronDown
                    className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                        className="block text-base text-gray-600 dark:text-gray-300 hover:text-[#7AA859] dark:hover:text-[#7AA859]"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                className="block py-2 text-base font-medium font-poppins text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
