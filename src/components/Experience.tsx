import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Product & QA Manager',
    company: 'Loop Health',
    period: 'Aug 2023 - Present',
    details: [
      'Increased Delivery Efficiency by 70% and reduced escape defect by 90%',
      'Lead and grew the Quality Team, crafting Test Automation suites across for portfolio solutions',
      'Build Pipelines, frameworks and effective test strategies for robust and speedy product deliveries, reducing release cycle time by 70%',
    ],
  },
  {
    role: 'Lead SDET',
    company: 'Locus',
    period: 'June 2021 - July 2023',
    details: [
      'Lead the SDET function across various products and core functions',
      'Designed Automation Suites and benchmarked multiple route optimisation engines',
      'Created Jenkins jobs and pipelines for efficient code coverage and robust deployments',
      'Mentored and Collaborated with peers within and outside the team to increase synergy',
    ],
  },
  {
    role: 'Senior Software Engineer in Test',
    company: 'Zebra Technologies',
    period: 'April 2020 - June 2021',
    details: [
      'Designed and developed automation test suites for Smartpack for functional and non-functional requirements.',
      'Implemented Performance tests for auto-scaling systems',
      'Developed automation for Kafka, UI and RESTful APIs',
      'Setup Alerts, Loggers and Monitoring tools using open-source tools',
    ],
  },
  {
    role: 'Senior Test Engineer',
    company: 'Carlson Wagonlit Travel (CWT)',
    period: 'Aug 2018 - Mar 2020',
    details: [
      'Design and Test functional and non-functional behaviours for a travel repository system.',
      'Implemented logging, monitoring and alerting tools.',
    ],
  },
  {
    role: 'Software Test Engineer',
    company: 'Zebra Technologies (Motorola Solution)',
    period: 'Mar 2014 - July 2018',
    details: [],
  },
];

export default function Experience() {
  return (
    <section className="my-18" id="experience">
      <motion.h2 style={{ fontFamily: 'Nasalization, sans-serif' }} className="text-4xl font-bold mb-8 text-indigo-400" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>Experience</motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div 
            key={exp.role+exp.company} 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true}} 
            transition={{duration:0.5, delay:i*0.1}} 
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <span style={{ fontFamily: 'Nasalization, sans-serif' }} className="text-xl font-semibold text-white">{exp.role}</span>
              <span style={{ fontFamily: 'Clepto, sans-serif' }} className="text-indigo-300 text-2xl" >{exp.company}</span>
              <span className="font-inter text-gray-400 text-sm">{exp.period}</span>
              {/* <span className="font-clepto">This is Clepto</span> */}
              {/* <span style={{ fontFamily: 'Nasalization, sans-serif' }} className="font-nasalization">This is Nasalization</span> */}
              {/* <span className="test-clepto">Test Clepto</span> */}
              {/* <span style={{ fontFamily: 'Clepto, sans-serif' }}>Should be Clepto</span> */}
            </div>
            <ul className="list-disc ml-6 text-gray-200 font-inter">
              {exp.details.map((d, j) => <li key={j}>{d}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}