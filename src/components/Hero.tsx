import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="hero-greeting">Olá, eu sou o Nikolas</h2>
          <h1 className="hero-title">
            <TypeAnimation
              sequence={[
                'Engenheiro de Computação',
                2000,
                'Analista de Dados',
                2000,
                'Desenvolvedor Web',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient"
            />
          </h1>
          <p className="hero-description">
            Engenheiro de Computação com experiência prática em análise de dados, gestão de indicadores e otimização de processos operacionais. Atuo diretamente na tomada de decisões estratégicas utilizando Power BI, ERP e soluções tecnológicas modernas.
          </p>
          <div className="hero-buttons">
            <a href="#projetos" className="btn btn-primary">Ver Projetos</a>
            <a href="https://linkedin.com/in/nikolas-cardoso-eng" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-wrapper">
            <img src="/profile.jpg" alt="Nikolas Cardoso" />
            <div className="glow-effect"></div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-down" 
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'center', width: '100%' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#sobre" style={{ color: 'var(--accent-primary)', fontSize: '2rem' }}>
          <FiChevronDown />
        </a>
      </motion.div>
    </section>
  );
}
