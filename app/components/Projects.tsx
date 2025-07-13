import React from 'react';
import { PiBuildingApartmentFill } from "react-icons/pi";
import ProjectCard from './ProjectCard';

const services = [
  { name: 'Ongoing Projects', des: 'Discover our ongoing projects built with care and commitment. These developments are currently under construction and open for early booking.', link: '/ongoing-project', image: '/img/apartment.jpg' },
  { name: 'Completed Projects', des: 'Take a look at our successfully completed projects that reflect our dedication to quality, on-time delivery, and customer satisfaction. Proud homes, happy families.', link: '/ongoing-project', image: '/img/residential.png' },
  { name: 'Upcoming Projects', des: 'Exciting new projects are coming soon in prime locations! Stay tuned for innovative designs, modern amenities, and investment opportunities that deliver long-term value.', link: '/ongoing-project', image: '/img/commercial.avif' },

];

export default function Projects() {
  return (
    <div className="py-20 pt-10 bg-white dark:bg-gray-800">
      <h2 className='text-center py-20'>
        <span className="relative inline-block text-gray-900 dark:text-gray-50">
          Projects
          {/* Before and after lines with rings and a star in the center */}
          <span className="absolute inset-x-0 -bottom-10 flex items-center justify-center z-10">
            {/* Left Line and Ring */}
            <div className="relative flex items-center">
              <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-white dark:bg-gray-800"></span>
              <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
            </div>
            {/* Center Icon */}
            <span className="z-20 bg-gray-50 dark:bg-gray-800 px-1">
              <PiBuildingApartmentFill className="w-6 h-6 sm:w-8 sm:h-8 text-[#7AA859]" />
            </span>
            {/* Right Line and Ring */}
            <div className="relative flex items-center">
              <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
              <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-white dark:bg-gray-800"></span>
            </div>
          </span>
        </span>
      </h2>

      <div className="container mx-auto bg-white dark:bg-gray-900 grid gap-5 p-10 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {services.map((service, index) => (
          <ProjectCard key={index} name={service.name} des={service.des} link={service.link} image={service.image} />
        ))}
      </div>
    </div>
  );
}
