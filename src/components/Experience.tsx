import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const experiences = [
  {
    role: 'Analista Operacional',
    company: 'Embraps',
    period: '2024 - Atual',
    tasks: [
      'Criação e gestão de indicadores',
      'Desenvolvimento de dashboards',
      'Suporte a sistemas ERP',
      'Liderança de equipe',
      'Otimização de processos'
    ]
  },
  {
    role: 'Assistente de Operações',
    company: 'Embraps',
    period: '2021 - 2024',
    tasks: [
      'Suporte operacional e administrativo',
      'Gestão de planilhas e indicadores',
      'Uso de ERP',
      'Melhoria de processos'
    ]
  },
  {
    role: 'Assistente de Comunicação',
    company: 'Campanha Política',
    period: '2020 - 2021',
    tasks: [
      'Apoio em comunicação',
      'Mobilização de equipes',
      'Organização operacional'
    ]
  }
];

export function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Experiência Profissional</h2>
          <div className="divider"></div>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="timeline-company">{exp.company}</span>
                  <span className="timeline-date">{exp.period}</span>
                </div>
                <ul className="timeline-desc">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>
                      <FaCheck /> {task}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
