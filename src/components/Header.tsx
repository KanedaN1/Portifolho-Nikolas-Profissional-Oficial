import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';


export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <a href="#hero">
            <span className="logo-name">Nikolas Cardoso</span>
            <span className="logo-title">Engenheiro de Computação</span>
          </a>
        </div>
        
        <nav className="nav-menu">
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir Menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
          
          <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
            <li><a href="#hero" className="nav-link active" onClick={() => setIsOpen(false)}>Início</a></li>
            <li><a href="#sobre" className="nav-link" onClick={() => setIsOpen(false)}>Sobre</a></li>
            <li><a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projetos" className="nav-link" onClick={() => setIsOpen(false)}>Projetos</a></li>
            <li><a href="#experiencia" className="nav-link" onClick={() => setIsOpen(false)}>Experiência</a></li>
            <li><a href="#contato" className="nav-link" onClick={() => setIsOpen(false)}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
