import { motion } from 'framer-motion';

const projects = [
  {
    name: "Regen Bazaar",
    description: "Onchain Real World Impact marketplace",
    link: null
  },
  {
    name: "Cookies 4m Groupies",
    description: "Web3 based Platform to support Local Artists",
    link: "https://cookies4mgroupies-y3u2.vercel.app/index.html"
  },
  {
    name: "W3 Split",
    description: "Developed a decentralised expense-sharing application inspired by splitwise",
    link: null
  },
  {
    name: "Sportnet",
    description: "Crowd funding for athletes and betting platform",
    link: "https://ethglobal.com/showcase/sportnet-2sice"
  }
];

export default function Projects() {
  return (
    <section className="my-16" id="projects">
      <motion.h2 style={{ fontFamily: 'Nasalization, sans-serif' }} className="text-4xl font-bold mb-8 text-indigo-400" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>Projects</motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div key={project.name} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.1}} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg font-inter">
            <h3 className="font-sora text-xl font-semibold text-white mb-2">{project.name}</h3>
            <p className="text-gray-200 mb-2">{project.description}</p>
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">View Project</a>}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 