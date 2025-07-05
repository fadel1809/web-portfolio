"use client";
import {  Linkedin, MessageCircleMore,File, Github } from "lucide-react";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className={` min-h-screen flex flex-col md:flex-row items-center justify-between bg-black text-white px-6 md:px-20 py-12 gap-10`}
    >
      <div className="flex-1">
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", delay: 0.5, duration: 0.5 }}
          className="text-lg text-gray-100"
        >
          Hello,
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", delay: 1, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mt-2"
        >
          I am <span className="text-purple-500">Fadel Maulana</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", delay: 1.5, duration: 0.5 }}
          className="text-gray-200 mt-2 mb-4 font-bold"
        >
          Fullstack Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", delay: 1.5, duration: 0.5 }}
          className="border-t-2 border-gray-600 w-12 my-4"
        />

        <motion.p
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeIn", delay: 2, duration: 0.5 }}
          className="text-gray-300 leading-relaxed text-sm md:text-base max-w-xl"
        >
          I’m a person with a strong passion for technology and development. I
          believe that building a high-quality digital product requires not only
          clean code, but also thoughtful architecture and seamless user
          experience. As a Fullstack Developer, I focus on both frontend and
          backend development to ensure functionality, responsiveness, and
          scalability of web and mobile applications. Currently, I’m honing my
          skills in building dynamic, user-centric solutions by integrating
          modern frameworks, API integrations, and database management. I enjoy
          transforming ideas into functional digital products that are
          efficient, intuitive, and impactful.
        </motion.p>

        <div className="mt-6 flex gap-4 flex-wrap">
          <motion.a
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeIn", delay: 2.5, duration: 0.5 }}
            href="https://drive.google.com/file/d/15-BBENbDY6WFTFdmrQcTtYtJHjtGotTJ/view?usp=sharing"
            target="_blank"
            download={true}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded flex items-center gap-2"
          >
            <span>
              <File size={20} />
            </span>{" "}
            Download CV
          </motion.a>
        </div>

        <div className="mt-10 flex items-center gap-4 text-gray-300">
          <motion.span
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeIn", delay: 2.5, duration: 0.5 }}
            className="text-sm"
          >
            Find Me On
          </motion.span>
          <div className="flex gap-4 text-xl">
            <motion.a
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeIn", delay: 3, duration: 0.5 }}
              href="https://github.com/fadel1809"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="hover:text-white w-5 h-5" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeIn", delay: 3.5, duration: 0.5 }}
              href="https://wa.me/087784467864"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircleMore className="hover:text-white w-5 h-5" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeIn", delay: 4, duration: 0.5 }}
              href="https://www.linkedin.com/in/fadel-maulana-558a51263/"
              rel="noopener noreferrer"
            >
              <Linkedin className="hover:text-white w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            src="/fotoCV_2.png"
            alt="Profile"
            className=" max-w-xs md:max-w-sm "
          />
          {/* Tambahkan background elemen bentuk jika perlu */}
          <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-purple-800/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
