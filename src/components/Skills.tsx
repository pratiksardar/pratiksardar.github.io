"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaCubes, FaRobot } from 'react-icons/fa';

const skills = [
  {
    category: "Languages",
    icon: <FaCode />,
    items: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Blockchain",
    icon: <FaCubes />,
    items: ["Solidity", "Smart Contracts", "Foundry", "Cairo", "Ethereum", "Starknet", "Berachain"],
  },
  {
    category: "Automation",
    icon: <FaRobot />,
    items: ["TestNG", "RestAssured", "Cucumber", "Appium", "Selenium", "JMeter", "Robot Framework", "Cypress", "WebdriverIO", "Playwright"],
  },
];

export default function Skills() {
  const [active, setActive] = useState(0);
  return (
    <section className="my-16" id="skills">
      <motion.h2 style={{ fontFamily: 'Nasalization, sans-serif' }} className="text-4xl font-bold mb-8 text-indigo-400" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>Skills</motion.h2>
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg flex flex-col items-center">
        <div className="flex gap-4 mb-8 justify-center">
          {skills.map((skill, i) => (
            <motion.button
              key={skill.category}
              onClick={() => setActive(i)}
              className={`flex flex-col items-center px-6 py-3 rounded-lg transition-colors font-semibold focus:outline-none font-sora ${active === i ? 'bg-indigo-700/80 text-white shadow-lg' : 'bg-gray-900/10 text-indigo-200 hover:bg-indigo-800/20'}`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span>{skill.icon}</span>
              <span className="mt-2">{skill.category}</span>
            </motion.button>
          ))}
        </div>
        <div className="min-h-[80px] w-full">
          <AnimatePresence mode="wait">
            <motion.ul
              key={skills[active].category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {skills[active].items.map((item) => (
                <motion.li
                  key={item}
                  className="font-inter bg-indigo-700/60 text-white px-4 py-2 rounded-full text-sm shadow-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 2.5s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
} 