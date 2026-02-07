import React from 'react';

const Footer: React.FC = () => {
  return (
    // Fundo escuro conforme solicitado
    <footer className="bg-gray-900 text-white pt-16 pb-8 select-none outline-none">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* LOGO E DESCRIÇÃO */}
        <div className="col-span-1 md:col-span-2">
          <a href="https://nibuy-home-page.vercel.app/" className="text-3xl font-black text-[#ff5722]">
            𝙉𝙞𝙗𝙪𝙮
          </a>
          {/* Ajustado para text-gray-400 para melhor leitura no fundo escuro */}
          <p className="mt-4 text-gray-400 max-w-sm leading-relaxed">
            Sua vitrine inteligente de ofertas. Encontramos os melhores preços e você finaliza a compra com total segurança nas maiores lojas do Brasil.
          </p>
          
          {/* REDES SOCIAIS - Círculos adaptados para fundo escuro */}
          <div className="flex gap-3 mt-6">
            <a 
              href="https://instagram.com/nibuyoficial" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#ff5722] transition-all border border-white/10"
              title="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a 
              href="https://wa.me/558193611017" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#25D366] transition-all border border-white/10"
              title="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nibuyoficial@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-all border border-white/10"
              title="E-mail"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>

        {/* NAVEGAÇÃO - Cores ajustadas para visibilidade */}
        <div>
          <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Navegação</h4>
          <ul className="space-y-4 text-gray-400 text-sm font-medium">
            <li><a href="https://nibuy-home-page.vercel.app/" className="hover:text-[#ff5722] transition-colors">Início</a></li>
            <li><a href="https://nibuy-about-us.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5722] transition-colors">Sobre Nós</a></li>
            <li><a href="https://nibuy-help-center.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5722] transition-colors">Central de Ajuda</a></li>
          </ul>
        </div>

        {/* CONTATO RÁPIDO */}
        <div>
          <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Suporte</h4>
          <div className="space-y-4">
            <p className="text-sm text-gray-400 font-medium">Segunda a Sexta<br/><span className="text-white">09h às 18h</span></p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nibuyoficial@gmail.com" target="_blank" rel="noopener noreferrer">
              <p className="text-sm text-[#ff5722] font-bold underline hover:text-orange-400 transition-colors">nibuyoficial@gmail.com</p>
            </a>
          </div>
        </div>

      </div>

      {/* LINHA DE BAIXO - Bordas sutis para fundo escuro */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[11px] font-medium uppercase tracking-wider">
          <p>© 2026 NIBUY OFERTAS. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-6">
            <span className="opacity-50">Transparência</span>
            <span className="opacity-50">Segurança</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;