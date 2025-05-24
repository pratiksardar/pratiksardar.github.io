import { motion } from 'framer-motion';

const volunteering = [
  {
    role: "Director",
    organization: "The Phoenix Guild (TPG)",
    period: "June 2024 - Present",
    description: "Contributing to the growth and development of the organization"
  }
];

export default function Volunteering() {
  return (
    <section className="my-16" id="volunteering">
      <motion.h2  style={{ fontFamily: 'Nasalization, sans-serif' }} className="text-4xl font-bold mb-8 text-indigo-400" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>Volunteering</motion.h2>
      <div className="space-y-6">
        {volunteering.map((vol, i) => (
          <motion.div 
            key={vol.role+vol.organization} 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true}} 
            transition={{duration:0.5, delay:i*0.1}} 
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg font-inter"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <span className="font-sora text-xl font-semibold text-white">{vol.role}</span>
              <span className="font-sora text-indigo-300">{vol.organization}</span>
              <span className="font-inter text-gray-400 text-sm">{vol.period}</span>
            </div>
            <p className="text-gray-200">{vol.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 