import React from 'react';

const Footer: React.FC = () => {
  return (
    // Fundo branco puro e borda superior sutil para separar do corpo cinza
    <footer className="bg-white text-gray-900 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* LOGO E DESCRIÇÃO */}
        <div className="col-span-1 md:col-span-2">
          <a href="/" className="text-3xl font-black text-[#ff5722]">
            𝙉𝙞𝙗𝙪𝙮
          </a>
          <p className="mt-4 text-gray-500 max-w-sm leading-relaxed">
            Sua vitrine inteligente de ofertas. Encontramos os melhores preços e você finaliza a compra com total segurança nas maiores lojas do Brasil.
          </p>
          
          {/* REDES SOCIAIS EM CÍRCULOS */}
          <div className="flex gap-3 mt-6">
            <a 
              href="https://instagram.com/nibuyoficial" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#ff5722] hover:text-white transition-all shadow-sm border border-gray-100"
              title="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a 
              href="https://wa.me/558193611017" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#25D366] hover:text-white transition-all shadow-sm border border-gray-100"
              title="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nibuyoficial@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition-all shadow-sm border border-gray-100"
              title="E-mail"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>

        {/* NAVEGAÇÃO ENTRE SITES */}
        <div>
          <h4 className="font-bold mb-6 text-gray-900 uppercase text-xs tracking-widest">Navegação</h4>
          <ul className="space-y-4 text-gray-500 text-sm font-medium">
            <li><a href="https://nibuy-home-page.vercel.app/" className="hover:text-[#ff5722] transition-colors">Início</a></li>
            <li><a href="https://nibuy-about-us.vercel.app/" target="_blank" className="hover:text-[#ff5722] transition-colors">Sobre Nós</a></li>
            <li><a href="https://nibuy-help-center.vercel.app/" target="_blank" className="hover:text-[#ff5722] transition-colors">Central de Ajuda</a></li>
          </ul>
        </div>

        {/* CONTATO RÁPIDO */}
        <div>
          <h4 className="font-bold mb-6 text-gray-900 uppercase text-xs tracking-widest">Suporte</h4>
          <div className="space-y-4">
            <p className="text-sm text-gray-500 font-medium">Segunda a Sexta<br/><span className="text-gray-900">09h às 18h</span></p>
           <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nibuyoficial@gmail.com"
           target="_blank"
          rel="noopener noreferrer">
           <p className="text-sm text-[#ff5722] font-bold underline">nibuyoficial@gmail.com</p>
           </a>
          </div>
        </div>

      </div>

      {/* LINHA DE BAIXO AJUSTADA */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-[11px] font-medium uppercase tracking-wider">
          <p>© 2024 NIBUY OFERTAS. TODOS OS DIREITOS RESERVADOS.</p>
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