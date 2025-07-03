
"use client";

import { GraduationCap, Laptop2, FileCode2, Rocket, BetweenHorizonalEnd } from "lucide-react";

const journey = [
  {
    title: "Start Learning Data Structure & Algorithm",
    description:
      "I began my journey by learning the fundamentals of computer science algorithm & data structure with C++.",
    icon: <BetweenHorizonalEnd className="w-6 h-6 text-purple-500" />,
    year: "2020",
  },
  {
    title: "Learn Problem Solving",
    description:
      "I honed my problem-solving skills with python by completing various coding challenges on platforms like HackerRank, sharpening my ability to tackle real-world programming tasks and improving my logical thinking.",
    icon: <Laptop2 className="w-6 h-6 text-purple-500" />,
    year: "2021",
  },
  {
    title: "Diving Into Web Development",
    description:
      "I began my journey in web development through both offline and online courses, building a strong foundation in front-end and back-end technologies while working on hands-on projects.",
    icon: <FileCode2 className="w-6 h-6 text-purple-500" />,
    year: "2022",
  },
  {
    title: "Real-World Experience through Freelance and Internship",
    description:
      "I gained practical experience by working on real-world projects through freelance opportunities and internships. This allowed me to enhance my technical skills, collaborate with clients, and understand the workflow of professional software development. I use several techstack like Laravel, Code Igniter, React JS, Node JS, Express JS etc.",
    icon: <Rocket className="w-6 h-6 text-purple-500" />,
    year: "2023-2024",
  },
  {
    title: "Graduated and Ready for New Challenges",
    description:
      "I proudly completed my degree in Software Engineering with a focus on Software Development (RPL), marking a significant milestone in my journey. This achievement represents years of dedication to mastering programming concepts, software architecture, and problem-solving techniques. Throughout my academic journey, I not only gained theoretical knowledge but also applied it in practical projects, internships, and freelance work, which enriched my understanding of real-world software development processes. Equipped with a strong foundation in both academic and practical aspects, I am eager to take on new challenges, contribute to impactful projects, and continue growing as a professional in the tech industry.",
    icon: <GraduationCap className="w-6 h-6 text-purple-500" />,
    year: "2025",
  },
];
const Journey = () => {
  return (
    <section id="journey" className="w-full bg-black text-white px-4 md:px-20 py-10">
      <div className="text-center mb-12">
        <h3 className="text-sm uppercase text-gray-400">My Journey</h3>
        <h2 className="text-3xl font-bold text-white">Programming Journey</h2>
        <div className="h-1 w-24 bg-purple-500 mx-auto mt-3 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 justify-center items-center">
        {journey.map((item, index) => (
          <div
            key={index}
            className={`relative group bg-[#1a1729] p-6 rounded-xl border border-[#463591] w-full md:w-full hover:shadow-purple-500/20 hover:shadow-xl transition max-h-[35rem] ${
              index == 4 ? "md:col-span-2 col-span-1" : ""
            }`}
          >

            <div className="mb-4 flex items-center gap-3">
              <div className="bg-[#292340] p-2 rounded-full">{item.icon}</div>
              <span className="text-sm text-gray-400">{item.year}</span>
            </div>
            <h4 className="text-lg font-semibold text-purple-400">
              {item.title}
            </h4>
            <p className="text-sm text-gray-300 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Journey