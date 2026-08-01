import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Mapa Geoespacial',
    desc: 'Mapa com monitoramento de clima em tempo real, trânsito e rota de supervisão.',
    techs: ['React', 'Vite', 'Maps API'],
    link: 'https://teste-embraps-geo.vercel.app',
    github: 'https://github.com/KanedaN1/TESTE-EMBRAPS-GEO.git'
  },
  {
    title: 'Landing Page para Loja de Incenso',
    desc: 'Landing Page moderna para a loja Templo Ancestral.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://temploancestralsantos.com.br',
    github: 'https://github.com/KanedaN1/LANDING-PAGE-TEMPLO-ANCESTRAL.git'
  },
  {
    title: 'Dashboard de Indicadores Operacionais',
    desc: 'Desenvolvimento de dashboard em Power BI para acompanhamento de KPIs estratégicos.',
    techs: ['Power BI', 'Excel'],
    link: 'https://dashboard-de-indicadores.vercel.app',
    github: 'https://github.com/KanedaN1/Dashboard-de-indicadores-.git'
  },
  {
    title: 'Controle de treinamentos de porteiros',
    desc: 'Ferramenta para registro instantâneo de dados técnicos e operacionais.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://kanedan1.github.io/embraps-1/',
    github: 'https://github.com/KanedaN1/embraps-1.git'
  },
  {
    title: 'Sistema de chamados Setor de T.I',
    desc: 'Sistema para abertura de chamados do Setor de T.I.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://sistema-de-chamados-lac.vercel.app',
    github: 'https://github.com/KanedaN1/Sistema-de-Chamados.git'
  },
  {
    title: 'Landing Page para Oficina de Automoveis',
    desc: 'Uma Landing Page para Oficina Show de Brilho.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://landing-page-oficina-show-de-brilho.vercel.app',
    github: 'https://github.com/KanedaN1/Landing-Page-Oficina-Show-de-Brilho.git'
  }
];

export function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Meus Projetos</h2>
          <div className="divider"></div>
        </div>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-techs">
                  {project.techs.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                    Ver Projeto
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
