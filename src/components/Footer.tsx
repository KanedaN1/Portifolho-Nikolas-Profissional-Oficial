export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <h3>Nikolas Cardoso</h3>
          <p>"Tecnologia aplicada à prática gera resultados reais."</p>
        </div>
        <div className="footer-copyright">
          <p>&copy; {currentYear} Nikolas Cardoso. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
