
import React from 'react';
import PillarCard from './PillarCard';
import PartnerLogos from './PartnerLogos';
import { ICONS } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#ff5722] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-red-400 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              Conheça a Nibuy
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              O seu atalho para as melhores ofertas.
            </h1>
            <p className="text-xl md:text-2xl text-orange-50 font-medium leading-relaxed mb-10">
              Não somos uma loja comum. Somos o seu filtro de confiança em um mar de promoções, conectando você aos produtos que deseja com o preço que merece.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#ff5722] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all">
                Explorar Ofertas
              </button>
              <div className="flex items-center gap-2 text-white/90 font-medium px-4">
                {ICONS.LockClosed}
                <span>Links 100% verificados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">
                Sua segurança é o nosso <span className="text-[#ff5722]">maior patrimônio.</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  A Nibuy nasceu da necessidade de encontrar ofertas reais em meio a tanta desinformação. Atuamos como um <strong>Shopping de Ofertas Curadas</strong>.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nossa missão é simples: pesquisar, filtrar e apresentar apenas o que vale a pena. Quando você clica em uma oferta na Nibuy, você é <strong>redirecionado instantaneamente para a loja oficial</strong>, onde conclui sua compra com total segurança.
                </p>
                <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl border border-green-100">
                  <div className="text-green-600 mt-1">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21a3.745 3.745 0 01-3.296-1.593 3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900">Compra 100% Protegida</h4>
                    <p className="text-green-800/80 text-sm">Você compra no site oficial da loja, com sua conta e seus dados protegidos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl aspect-square overflow-hidden shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800" 
                  alt="Compras seguras" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Nossos 3 Pilares</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PillarCard 
              title="Curadoria de Ofertas"
              description="Analisamos milhares de produtos diariamente para separar as melhores oportunidades reais."
              icon={ICONS.CheckBadge}
            />
            <PillarCard 
              title="Segurança na Compra"
              description="Apenas lojas oficiais e certificadas entram na nossa vitrine."
              icon={ICONS.ShieldCheck}
            />
            <PillarCard 
              title="Economia Real"
              description="Garantimos que o desconto seja verdadeiro através de monitoramento de preços."
              icon={ICONS.TrendingDown}
            />
          </div>
        </div>
      </section>

      <PartnerLogos />
    </>
  );
};

export default AboutPage;
