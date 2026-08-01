import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

export function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Contato</h2>
          <div className="divider"></div>
          <p className="contact-subtitle">Vamos conversar sobre como posso ajudar a transformar seus dados em soluções reais.</p>
        </div>
        
        <div className="contact-cards">
          <motion.a 
            href="mailto:nikolassantiago@hotmail.com" 
            className="contact-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-icon"><FaEnvelope /></div>
            <h3>Email</h3>
            <p>nikolassantiago@hotmail.com</p>
          </motion.a>
          
          <motion.a 
            href="https://wa.me/5513991264326" 
            target="_blank" 
            rel="noreferrer" 
            className="contact-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="contact-icon"><FaWhatsapp /></div>
            <h3>WhatsApp</h3>
            <p>(13) 99126-4326</p>
          </motion.a>
          
          <motion.a 
            href="https://linkedin.com/in/nikolas-cardoso-eng" 
            target="_blank" 
            rel="noreferrer" 
            className="contact-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="contact-icon"><FaLinkedinIn /></div>
            <h3>LinkedIn</h3>
            <p>nikolas-cardoso-eng</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
