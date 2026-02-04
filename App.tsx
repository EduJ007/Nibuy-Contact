import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  // Define 'home' como padrão, mas como não temos o componente Home aqui, 
  // ele vai mostrar a ContactPage por enquanto até tu colares os teus outros componentes
  const [currentPage, setCurrentPage] = useState('contact'); 

  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {/* Aqui ele alterna apenas entre o que tu tens nos teus ficheiros */}
        {currentPage === 'about' ? (
          <AboutPage />
        ) : (
          <ContactPage />
        )}

        {/* Seção CTA - Ajustada para o fundo cinza */}
        <section className="py-10 px-4 bg-transparent">
          <div className="max-w-5xl mx-auto bg-gray-900 rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
               <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-black text-white mb-12 relative z-10">
              Pronto para encontrar sua <br /><span className="text-[#ff5722]">próxima grande oferta?</span>
            </h2>
            <a href="https://nibuy-produtos.vercel.app/">
              <button className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-[#e64a19] transition-all transform hover:scale-105 relative z-10">
                Ver Ofertas Agora
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;