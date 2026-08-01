import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaChartBar, 
  FaDatabase, FaServer, FaTasks, FaRobot, FaTerminal,
  FaNodeJs, FaPython
} from 'react-icons/fa';
import { 
  SiVite, SiNextdotjs, SiJavascript, SiTypescript, 
  SiGoogleanalytics 
} from 'react-icons/si';
import { FaFileExcel } from 'react-icons/fa';

const skillsData = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Vite', icon: <SiVite /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Power BI', icon: <FaChartBar /> },
  { name: 'Excel Avançado', icon: <FaFileExcel /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'Sistemas ERP', icon: <FaServer /> },
  { name: 'Análise de Dados', icon: <SiGoogleanalytics /> },
  { name: 'Gestão de Indicadores', icon: <FaTasks /> },
  { name: 'Automação', icon: <FaRobot /> },
  { name: 'IA Prompting', icon: <FaTerminal /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'NoSQL', icon: <FaDatabase /> },
];

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Minhas Skills</h2>
          <div className="divider"></div>
        </div>
        
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
