import { motion } from 'framer-motion';

const education = {
  degree: 'Bachelors of Engineering',
  college: 'BMS College of Engineering',
  field: 'Computer Science and Technology',
  cgpa: '8.05',
  period: 'Aug 09 - June 13',
};

export default function Education() {
  return (
    <section className="my-16" id="education">
      <motion.h2 style={{ fontFamily: 'Nasalization, sans-serif' }} className="text-4xl font-bold mb-8 text-indigo-400" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>Education</motion.h2>
      <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="bg-gray-900/40 rounded-lg p-6 shadow-lg font-inter">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
          <span className="font-sora text-xl font-semibold text-white">{education.degree}</span>
          <span className="font-sora text-indigo-300">{education.college}</span>
          <span className="font-inter text-gray-400 text-sm">{education.period}</span>
        </div>
        <div className="text-gray-200 font-inter">{education.field} <span className="ml-2 text-gray-400">CGPA: {education.cgpa}</span></div>
      </motion.div>
    </section>
  );
} 