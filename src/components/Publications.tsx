import { motion } from 'framer-motion';

const publications = [
  {
    title: "Method of Securing a Data Capture Session of a Portable Data Capture Device",
    date: "August 2018",
    link: "https://patents.google.com/patent/US20180027208A1/en"
  },
  {
    title: "Method to deduce post-active period for load",
    date: "August 2022",
    link: "https://patents.google.com/patent/US20230245015A1/en"
  }
];

export default function Publications() {
  return (
    <section className="my-16" id="publications">
      <motion.h2 style={{ fontFamily: 'Nasalization, sans-serif' }} className="text-4xl font-bold mb-8 text-indigo-400" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:1.6}}>Publications</motion.h2>
      <div className="space-y-6">
        {publications.map((pub, i) => (
          <motion.div 
            key={pub.title} 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true}} 
            transition={{duration:0.5, delay:i*0.1}} 
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg font-inter"
          >
            <h3 className="font-sora text-xl font-semibold text-white mb-2">{pub.title}</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">{pub.date}</span>
              <a 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                View Patent
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 