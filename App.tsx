import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('contact'); // Inicia na de contato como solicitado

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {currentPage === 'about' ? <AboutPage /> : <ContactPage />}
        
        {/* CTA Section - Comum a ambas as páginas */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
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
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 relative z-10">
              Pronto para encontrar sua <span className="text-[#ff5722]">próxima grande oferta?</span>
            </h2>
            <a href="https://nibuy-produtos.vercel.app/"
            >
            <button className="bg-[#ff5722] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#e64a19] hover:scale-105 transition-all shadow-2xl shadow-orange-900/40 relative z-10">
              Começar a Economizar
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
