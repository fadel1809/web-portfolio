"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    name: "Hotel Reservation",
    type: "Web Application",
    image: "/hotel_pantai.PNG",
    link: "https://github.com/fadel1809/hotel-system-CI-3",
    tagColor: "text-sky-400",
  },
  {
    name: "Interactive News Page",
    type: "Web Application",
    image: "/news_interactive.PNG",
    link: "https://ride-narrative-website.netlify.app/",
    tagColor: "text-rose-400",
  },
  {
    name: "Commercial Apps",
    type: "Mobile Application",
    image: "/mobileapp.PNG",
    link: "https://github.com/fadel1809/mobile-app-ecommerce",
    tagColor: "text-purple-400",
  },
  {
    name: "Order Fullfilment Tracker",
    type: "Web Application",
    image: "/xeno.PNG",
    link: "https://github.com/fadel1809/xeno-resource",
    tagColor: "text-red-500",
  },
  {
    name: "Laboratory Management System",
    type: "Web Application",
    image: "/lab.PNG",
    link: "https://github.com/fadel1809/FE-LAB-TI",
    tagColor: "text-blue-500",
  },
];

const Project = () => {
  return(
  <section id="project" className="w-full bg-black text-white px-4 md:px-20 py-20">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">Latest Project</h2>
      <div className="h-1 w-24 bg-purple-500 mx-auto mt-3 rounded" />
    </div>

    <div className="flex flex-col gap-6">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center justify-between bg-[#1a1729] border border-[#292340] rounded-xl p-5 hover:shadow-lg hover:shadow-purple-800/30 transition"
        >
          {/* Image */}
          <div className="w-full md:w-1/4 h-40 relative rounded-lg overflow-hidden mb-4 md:mb-0">
            <Image
              src={project.image}
              alt={project.name}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 px-4 text-center md:text-left">
            <h3 className="text-lg font-semibold">
              <span className={`${project.tagColor}`}>{project.name}</span>
            </h3>
            <p className="text-sm text-gray-400">{project.type}</p>
          </div>

          {/* Action */}
          <div className="mt-4 md:mt-0">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition"
            >
              View Details
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
)};
export default Project;
