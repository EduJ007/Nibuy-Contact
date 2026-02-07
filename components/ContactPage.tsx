import React, { useState } from 'react';
import { Mail, MessageCircle, Instagram, Copy, Check, ExternalLink } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "nibuyoficial@gmail.com"; 

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // 'cursor-default' no fundo para não bugar o clique no cinza
    <div className="bg-gray-200 pt-32 pb-12 select-none cursor-default outline-none">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-4">
            Contato <span className="text-[#ff5722]">𝙉𝙞𝙗𝙪𝙮</span>
          </h1>
          <p className="text-gray-500 font-black uppercase tracking-[0.2em] text-lg md:text-xl italic">
            Entre em Contato de um dos seguintes jeitos:
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* WHATSAPP */}
            <a href="https://wa.me/558193611017" target="_blank" rel="noopener noreferrer" 
               className="flex items-center p-6 bg-white rounded-[2rem] border-2 border-transparent hover:border-green-500 transition-all group shadow-sm cursor-pointer">
              <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                <MessageCircle size={28} />
              </div>
              <div className="ml-4">
                {/* REMOVIDO 'cursor-text' - Agora o link pai controla a mãozinha */}
                <h3 className="text-xl font-black text-gray-900 italic uppercase leading-none">WhatsApp</h3>
                <p className="text-gray-400 font-bold text-xs mt-1 uppercase">Suporte imediato</p>
              </div>
            </a>

            {/* INSTAGRAM */}
            <a href="https://instagram.com/nibuyoficial" target="_blank" rel="noopener noreferrer"
               className="flex items-center p-6 bg-white rounded-[2rem] border-2 border-transparent hover:border-[#ff5722] transition-all group shadow-sm cursor-pointer">
              <div className="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center text-[#ff5722] group-hover:bg-[#ff5722] group-hover:text-white transition-all">
                <Instagram size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-black text-gray-900 italic uppercase leading-none">Instagram</h3>
                <p className="text-gray-400 font-bold text-xs mt-1 uppercase">Siga a gente</p>
              </div>
            </a>
          </div>

          {/* E-MAIL PROFISSIONAL */}
          <div className="relative group">
            <a href={`mailto:${email}`}
               className="w-full flex items-center justify-between p-6 bg-gray-900 rounded-[2rem] border-2 border-transparent hover:border-[#ff5722] transition-all shadow-xl cursor-pointer">
              
              <div className="flex items-center">
                <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center text-white group-hover:bg-[#ff5722] transition-all">
                  <Mail size={28} />
                </div>
                <div className="ml-4 text-left">
                  <h3 className="text-xl font-black text-white italic uppercase tracking-tighter leading-none">E-mail Oficial</h3>
                  <p className="text-gray-400 font-bold text-sm group-hover:text-white transition-colors mt-1">{email}</p>
                </div>
              </div>

              {/* Botão de Copiar Independente */}
              <div 
                onClick={handleCopyEmail}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-[10px] transition-all z-20 cursor-pointer ${
                  copied ? 'bg-green-500 text-white' : 'bg-white/10 text-[#ff5722] hover:bg-white hover:text-gray-900'
                }`}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />} 
                {copied ? 'PRONTO!' : 'COPIAR'}
              </div>
            </a>
          </div>
        </div>

        <div className="mt-16 flex justify-center opacity-20">
            <div className="h-1 w-20 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;