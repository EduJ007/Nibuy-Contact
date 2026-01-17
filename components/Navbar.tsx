import React from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  return (
    // Removi o padding exagerado e mantive a borda sutil
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* h-16 é a altura padrão perfeita para navbars modernas */}
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO E NOME - h-10 evita que a imagem fique gigante */}
          <a href="https://nibuy-home-page.vercel.app/"
          className="flex items-center gap-2 cursor-pointer transition-opacity active:opacity-80" >
            <img 
              src="/logovermelha.png" 
              alt="Nibuy Logo" 
              className="h-14 w-auto object-contain" 
            />
            <span className="text-2xl font-black text-[#ff5722] tracking-tight">
              𝙉𝙞𝙗𝙪𝙮
            </span>
          </a>

          {/* MENU CENTRAL - Ajustado para ser discreto */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.location.reload();
              }}
              className="bg-[#ff5722] text-white px-4 py-2 rounded-xl font-black text-[11px] uppercase shadow-md transition-all duration-300 hover:brightness-110 active:scale-95"
            >
              Contato    
            </a>

            <a 
              href="https://sobre-nibuy.vercel.app/" 
              className="text-gray-600 hover:text-black opacity-80 transition-all text-[11px] font-black uppercase tracking-widest"
            >
              Sobre Nós
            </a>

            <a 
              href="https://nibuy-central-ajuda.vercel.app/" 
              className="text-gray-600 hover:text-black opacity-80 transition-all text-[11px] font-black uppercase tracking-widest"
            >
              Central de Ajuda
            </a>
          </div>

          {/* BOTÃO DE AÇÃO - Tamanho padrão h-16 alinhado */}
          <a href="https://nibuy-produtos.vercel.app/" className="bg-[#ff5722] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#e64a19] transition-all shadow-md shadow-orange-100">
            Ver Ofertas
          </a> 

        </div>
      </div>
    </nav>
  );
};

export default Navbar;