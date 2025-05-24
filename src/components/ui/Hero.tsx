"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const titles = [
  "QA Manager & SDET",
  "Web3 Product Enthusiast",
  "Automation Expert",
  "Blockchain Builder",
  "Creative Technologist",
  "Community Builder"
];

function useTypewriter(words: string[], speed = 80, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  useEffect(() => {
    const blinkTimeout = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return `${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`;
}

export default function Hero() {
  const typewriter = useTypewriter(titles);
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] relative z-10 mb-12">
      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        {/* Left Part */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 mb-8 md:mb-0">
          <motion.div
            className="w-32 h-32 rounded-full overflow-hidden mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.5 }}
          >
            <Image src="https://iili.io/3tPQ3S1.md.jpg" alt="Profile" className="w-full h-full object-cover" width={128} height={128} />
          </motion.div>
          <motion.h2
            style={{ fontFamily: 'Clepto, sans-serif' }}
            className="text-2xl sm:text-4xl font-semibold text-center md:text-left mb-6 h-12 text-indigo-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {typewriter}
          </motion.h2>
          <div className="flex space-x-4">
            <motion.a 
              href="https://github.com/pratiksardar" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image src="https://img.icons8.com/?size=50&id=12598&format=png&color=ffffff" alt="GitHub" className="w-8 h-8" width={32} height={32} />
            </motion.a>
            <motion.a 
              href="https://x.com/pratik_sardar" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image src="https://img.icons8.com/?size=48&id=cMRBi0rI3iwb&format=png&color=ffffff" alt="Twitter" className="w-8 h-8" width={32} height={32} />
            </motion.a>
            <motion.a 
              href="https://farcaster.com/0xpratik" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image src="https://scontent-iad4-1.choicecdn.com/-/rs:fill:2000:2000/g:ce/f:webp/aHR0cHM6Ly9tYWdpYy5kZWNlbnRyYWxpemVkLWNvbnRlbnQuY29tL2lwZnMvYmFma3JlaWNzcnAyaW83bnlxdXVqa2FuNjI2aWpsNmxydjQ0cW1kbW1neXE2NXdhMmQ3amJ0Nmd6NWE" alt="Farcaster" className="w-8 h-8" width={32} height={32} />
            </motion.a>
            <motion.a 
              href="https://instagram.com/0xpratik" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image src="https://img.icons8.com/?size=100&id=32292&format=png&color=ffffff" alt="Instagram" className="w-8 h-8" width={32} height={32} />
            </motion.a>
            <motion.a 
              href="mailto:radarsardar@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image src="https://img.icons8.com/?size=50&id=rUgzXdXFnhmg&format=png&color=ffffff" alt="Email" className="w-8 h-8" width={32} height={32} />
            </motion.a>
          </div>
        </div>
        {/* Right Part */}
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <motion.h1
            style={{ fontFamily: 'Nasalization, sans-serif' }}
            className="font-sora text-5xl sm:text-7xl font-extrabold text-center md:text-left mb-4 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            Pratik Sardar
          </motion.h1>
          <motion.p
            className="font-inter text-lg sm:text-xl text-gray-300 text-center md:text-left max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 2 }}
          >
            Passionate about building beautiful, functional, and innovative products at the intersection of automation, blockchain, and user experience.
          </motion.p>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-gray-400 text-sm mb-2 font-inter">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-6 border-2 border-indigo-400 rounded-full flex items-center justify-center"
        >
          <span className="block w-2 h-2 bg-indigo-400 rounded-full"></span>
        </motion.div>
      </motion.div>
    </section>
  );
} 