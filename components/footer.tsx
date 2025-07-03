"use client";

import {  Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function FooterSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("fadelmaulana087@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // badge hilang setelah 2 detik
  };
  return (
    <section className="w-full bg-black text-white px-4 md:px-20 py-20 border-t border-purple-900">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-gray-400 mb-6 text-sm md:text-base">
          Whether you have an idea for a project or just want to say hi, feel
          free to drop me a message. I’m always open to discussing new
          opportunities, collaborations, or freelance work.
        </p>
        <p className="text-sm text-gray-400 mt-4">
          Email me at{" "}
          <button
            className="text-white underline underline-offset-4 hover:text-purple-400 transition relative cursor-pointer"
            onClick={handleCopyEmail}
          >
            fadelmaulana087@gmail.com
          </button>
          {copied && (
            <span className="text-xs bg-purple-700 text-white px-2 py-0.5 rounded-full animate-fade-in">
              Copied!
            </span>
          )}
        </p>
        <div className="mt-10 flex justify-center gap-6 text-gray-400 text-lg">
          <a
            href="https://github.com/fadel1809"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Linkedin />
          </a>
        </div>

        <p className="text-xs text-gray-600 mt-8">
          &copy; {new Date().getFullYear()} Fadel Maulana. All rights reserved.
        </p>
        <p className="text-xs text-gray-600 mt-2">
          Made with <span className="text-red-500">❤️</span> using{" "}
          <span className="text-white">Next.js</span>,{" "}
          <span className="text-sky-400">Tailwind CSS</span>, and{" "}
          <span className="text-purple-400">Lucide Icons</span>.
        </p>
      </div>
    </section>
  );
}
