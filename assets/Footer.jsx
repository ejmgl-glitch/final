const Footer = () => {
    return (
        /* Reemplaza este contenido con tu HTML original, cambiando 'class' por 'className' */
        <footer className="tu-clase-actual-de-footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Mi Proyecto. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

// Renderizar el componente en el div que creamos en footer.php
const rootElement = document.getElementById('react-footer-root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Footer />);