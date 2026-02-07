import React, { useState } from 'react';
import PillarCard from './PillarCard';
import PartnerLogos from './PartnerLogos';
import { ICONS } from '../constants';
import { ChevronDown } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "A Nibuy é uma loja virtual?", a: "Não! Somos uma vitrine inteligente. Buscamos as melhores ofertas e redirecionamos você para lojas oficiais como Amazon e Shopee." },
    { q: "Os produtos têm garantia?", a: "Sim! A garantia é fornecida diretamente pela loja parceira onde o produto foi adquirido." },
    { q: "O preço pode mudar?", a: "Sim, as ofertas são dinâmicas. Recomendamos finalizar a compra rápido para garantir o desconto anunciado." },
    { q: "Como garantem que o link é seguro?", a: "Monitoramos apenas domínios oficiais e certificados das maiores varejistas do país." }
  ];

  return (
    <div className="bg-white">
      <section className="bg-[#ff5722] text-white pt-32 pb-24 px-4 text-center italic">
        <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter">
          O seu atalho para as <br /> <span className="text-gray-900">melhores ofertas.</span>
        </h1>
      </section>

      <PartnerLogos />

      <section className="py-24 bg-gray-50 text-center px-4">
        <h2 className="text-4xl font-black text-gray-900 mb-16 uppercase italic">Nossos Pilares</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <PillarCard title="Curadoria" description="Analisamos tudo diariamente." icon={ICONS.CheckBadge} />
          <PillarCard title="Segurança" description="Lojas 100% oficiais." icon={ICONS.ShieldCheck} />
          <PillarCard title="Economia" description="Descontos de verdade." icon={ICONS.TrendingDown} />
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 uppercase italic tracking-tighter text-gray-900">
            Dúvidas <span className="text-[#ff5722]">Frequentes</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-2 border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:border-[#ff5722]/30 transition-colors">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-8 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-black text-gray-800 text-lg uppercase tracking-tighter text-left">{faq.q}</span>
                  <ChevronDown className={`text-[#ff5722] transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === index ? 'max-h-96 p-8 pt-0' : 'max-h-0'}`}>
                  <p className="text-gray-500 font-bold leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;