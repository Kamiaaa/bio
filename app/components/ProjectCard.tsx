import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
interface ProjectCardProps {
    name: string;
    des: string;
    image: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, des, link, image }) => {
    return (
        <div className="md:col-span-1 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <Image className="h-96 w-full object-cover" src={image} alt={name} height={500} width={500} />

            <div className="absolute inset-0 text-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <h3 className="text-2xl font-bold text-white mt-10 mb-2">{name}</h3>
                <p className="text-white mb-4">{des}</p>
                <button className="w-fit bg-gray-700 hover:bg-gray-900 text-white text-xl px-6 py-3 mt-auto rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg">
                    <Link href={link}>Explore</Link>
                    <FaArrowRight className="text-xl" />
                </button>

            </div>
        </div>
    );
};

export default ProjectCard;
