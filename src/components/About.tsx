import { motion } from 'framer-motion';

const about = `Experienced QA Manager and SDET inclined towards Product Management with a decade of experience in web2 technologies, seeking to transition into the web3 space. Passionate about building Products on blockchain technology, decentralised systems, de-fi and the potential of web3 to revolutionise digital interactions. Bringing strong technical skills in automation, testing strategies, and team leadership, coupled with a quick learning ability and adaptability to new technologies.`;

const contact = [
  { label: 'Phone', value: '+919035865220' },
  { label: 'Email', value: 'pratiksardar@gmail.com' },
  { label: 'LinkedIn', value: 'https://linkedin.com/in/pratiksardar' },
  { label: 'GitHub', value: 'https://github.com/pratiksardar' },
];

export default function About() {
  return (
    <section className="my-16" id="about">
      <motion.h2 style={{ fontFamily: 'Nasalization, sans-serif' }} className="text-4xl font-bold mb-4 text-indigo-400" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>About Me</motion.h2>
      <motion.div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1, duration:0.6}}>
        <p className="font-inter text-lg text-gray-200 mb-6">{about}</p>
        <ul className="space-y-2 font-inter">
          {contact.map((c) => (
            <li key={c.label} className="text-gray-300"><span className="font-semibold text-white">{c.label}:</span> <a href={c.value.startsWith('http') ? c.value : undefined} className="underline" target="_blank" rel="noopener noreferrer">{c.value}</a></li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
} 