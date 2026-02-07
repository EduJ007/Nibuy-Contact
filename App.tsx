import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('contact'); 

  return (
    // Adicionei 'cursor-default' aqui para o fundo do site ser neutro
    <div className="min-h-screen flex flex-col bg-gray-200 select-none outline-none cursor-default">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {currentPage === 'about' ? (
          <AboutPage />
        ) : (
          <ContactPage />
        )}

        {/* Seção CTA */}
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
            
            {/* O título agora é neutro, sem cursor de escrita */}
            <h2 className="text-2xl md:text-4xl font-black text-white mb-12 relative z-10 select-text cursor-text">
              Pronto para encontrar sua <br /><span className="text-[#ff5722]">próxima grande oferta?</span>
            </h2>

            {/* Mantive o 'cursor-pointer' para a mãozinha aparecer no botão todo */}
            <a href="https://nibuy-produtos.vercel.app/" className="inline-block cursor-pointer">
              <button className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-[#e64a19] transition-all transform hover:scale-105 relative z-10 active:scale-95 shadow-lg cursor-pointer">
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