import { motion } from 'framer-motion';
import { FaChartLine, FaCogs, FaLaptopCode } from 'react-icons/fa';

export function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Sobre Mim</h2>
          <div className="divider"></div>
        </div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>Sou <strong>Engenheiro de Computação</strong> com experiência na aplicação de tecnologia para otimização de processos operacionais, análise de dados e suporte a sistemas.</p>
            <p>Atuo como <strong>Analista Operacional</strong> na Embraps, onde utilizo indicadores, Power BI, sistemas ERP e soluções digitais para apoiar decisões estratégicas e aumentar a eficiência da operação.</p>
            <p>Tenho forte vivência em gestão de indicadores, análise de dados, suporte a sistemas e liderança de equipes. Meu diferencial está em <strong>traduzir dados e tecnologia em soluções práticas</strong> para o dia a dia do negócio.</p>
            <p>Estou em constante evolução técnica, com foco em desenvolvimento e tecnologia, buscando oportunidades que unam análise, sistemas e inovação.</p>
          </motion.div>
          
          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="stat-card glass-card">
              <FaChartLine className="stat-icon" />
              <h3>Análise Estratégica</h3>
              <p>Decisões baseadas em dados</p>
            </div>
            <div className="stat-card glass-card">
              <FaCogs className="stat-icon" />
              <h3>Otimização</h3>
              <p>Melhoria contínua de processos</p>
            </div>
            <div className="stat-card glass-card">
              <FaLaptopCode className="stat-icon" />
              <h3>Tecnologia</h3>
              <p>Soluções práticas aplicadas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
