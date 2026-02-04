"use client";
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "A Nibuy é uma loja virtual?",
      a: "Não! Nós somos uma vitrine inteligente. Nós buscamos as melhores ofertas em lojas confiáveis e redirecionamos você para finalizar a compra com segurança diretamente no site oficial da loja parceira."
    },
    {
      q: "Os produtos têm garantia?",
      a: "Sim! A garantia é fornecida diretamente pela loja parceira (como Amazon, Magalu ou Mercado Livre) onde o produto foi adquirido, seguindo as políticas do fabricante."
    },
    {
      q: "Eu pago algum valor adicional para usar a Nibuy?",
      a: "De jeito nenhum! O nosso serviço é 100% gratuito para o usuário. Você paga o valor direto na loja parceira, e muitas vezes aproveita preços exclusivos que encontramos."
    },
    {
      q: "Como vocês garantem que o link é seguro?",
      a: "Os Links são disponibilizados por sites seguros como (Amazon, Magalu e outros)"
    },
    {
      q: "O preço pode mudar depois que eu clico no link?",
      a: "As ofertas na internet são muito dinâmicas. O preço pode variar ou o estoque acabar conforme a loja atualiza o site. Recomendamos finalizar a compra rápido para garantir o desconto."
    },
    {
      q: "O que eu faço se tiver um problema com a minha compra?",
      a: "Como o pagamento e a entrega são realizados diretamente pela loja parceira (como Amazon ou Magalu), você deve entrar em contato com o suporte oficial deles."
    }
  ];

  return (
    <div className="bg-transparent pt-16 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Como podemos <span className="text-[#ff5722]">ajudar você?</span>
          </h1>
        </div>

        {/* Cards de Contato Rápido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:border-[#ff5722] transition-all group">
            <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">WhatsApp Suporte</h3>
            <p className="text-gray-500 text-sm mb-4">Fale conosco agora para dúvidas rápidas e parcerias.</p>
            <a href="https://wa.me/558193611017" className="text-[#ff5722] font-bold hover:underline">Chamar no Whats →</a>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:border-[#ff5722] transition-all group">
            <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">E-mail Oficial</h3>
            <p className="text-gray-500 text-sm mb-4">Envie sua proposta ou reporte problemas técnicos.</p>
            <a href="mailto:nibuyoficial@nibuy.com.br" className="text-[#ff5722] font-bold hover:underline">Enviar e-mail →</a>
          </div>
        </div>

        {/* FAQ Section Expandida */}
        <div className="max-w-4xl mx-auto pb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Dúvidas Frequentes</h2>
            <p className="text-gray-500">Tudo o que você precisa saber sobre a Nibuy</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden text-left shadow-sm">
                <button 
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-800 text-lg">{faq.q}</span>
                  <svg className={`transition-transform text-[#ff5722] ${activeFaq === index ? 'rotate-180' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed border-t border-gray-50 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;