"use client";
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
  };

  // Estilo padrão para todos os inputs para evitar que o mouse "suma"
 const inputStyle = "w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent text-gray-900 placeholder-gray-400 shadow-sm cursor-text transition-shadow duration-200";
  return (
    <div className="bg-[#f0f2f5] pt-16 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header da Página */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Como podemos <span className="text-[#ff5722]">ajudar você?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium mb-6">
            Dúvidas sobre ofertas, parcerias ou suporte? Nossa equipe está pronta para responder.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Lado Esquerdo: Info e WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* WhatsApp Card com Sombra no Topo Direito */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-[15px_-15px_40px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden relative group">
              <div className="absolute -right-4 -top-4 w-40 h-40 bg-green-500/20 rounded-full blur-3xl group-hover:bg-green-500/30 transition-all"></div>
              <div className="relative z-10 text-center md:text-left">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">Resposta Rápida</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Fale pelo WhatsApp</h3>
                
                <a 
                  href="https://wa.me/558193611017" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row items-center justify-center gap-4 bg-[#25D366] text-white p-6 md:p-8 rounded-3xl hover:scale-[1.02] transition-all shadow-xl shadow-green-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.654zm6.749-3.336l.483.287c1.282.759 2.738 1.159 4.223 1.16h.001c5.179 0 9.395-4.216 9.398-9.398.001-2.509-.976-4.868-2.753-6.645s-4.136-2.752-6.645-2.752c-5.18 0-9.397 4.216-9.4 9.398-.001 1.634.423 3.226 1.226 4.637l.313.548-1.048 3.824 3.921-1.027zm11.264-5.342c-.266-.134-1.574-.777-1.817-.865-.243-.088-.42-.132-.597.133-.177.265-.685.865-.84 1.042-.154.177-.309.199-.575.066-.266-.133-1.124-.414-2.141-1.321-.791-.706-1.325-1.577-1.48-1.843-.155-.266-.016-.41.117-.542.12-.12.266-.31.399-.465.133-.155.177-.266.266-.443.088-.177.044-.332-.022-.465-.066-.133-.597-1.439-.817-1.97-.215-.518-.43-.448-.597-.456-.154-.007-.332-.008-.509-.008-.177 0-.464.066-.707.332-.243.265-.928.907-.928 2.21 0 1.303.949 2.563 1.082 2.74.133.177 1.868 2.852 4.524 3.998.632.272 1.125.435 1.509.557.635.201 1.213.173 1.67.104.51-.077 1.574-.643 1.795-1.265.221-.621.221-1.152.155-1.265-.066-.114-.243-.178-.509-.312z"/>
                  </svg>
                  <div className="text-center md:text-left">
                    <span className="block text-2xl font-black">(81) 93611-0177</span>
                    <span className="block text-sm opacity-90 font-medium">Atendimento de Seg a Sex, 09h às 18h</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Advertise Section */}
            <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
              <h3 className="text-2xl font-bold mb-4 relative z-10">Anuncie na Nibuy</h3>
              <p className="text-gray-400 mb-8 leading-relaxed relative z-10">
                Tem uma loja oficial ou uma marca e quer destacar suas ofertas? Vamos conversar sobre como impulsionar suas vendas.
              </p>
              <button 
                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=nibuyoficial@gmail.com', '_blank')}
                className="w-full bg-[#ff5722] text-white py-4 rounded-2xl font-bold hover:bg-[#e64a19] transition-colors relative z-10"
              >
                Seja um Parceiro
              </button>
            </div>
          </div>

          {/* Lado Direito: Formulário com Destaque Branco */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Envie uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 ml-1">Seu Nome</label>
                    <input 
                      type="text" required placeholder="Ex: João Silva"
                      className={inputStyle}
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 ml-1">E-mail</label>
                    <input 
                      type="email" required placeholder="joao@exemplo.com"
                      className={inputStyle}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 ml-1">Assunto</label>
                  <input 
                    type="text" required placeholder="Como podemos ajudar?"
                    className={inputStyle}
                    value={formData.assunto}
                    onChange={(e) => setFormData({...formData, assunto: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 ml-1">Mensagem</label>
                  <textarea 
                    rows={5} required placeholder="Escreva sua mensagem aqui..."
                    className={inputStyle + " resize-none"}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#ff5722] text-white py-5 rounded-2xl font-black text-lg hover:bg-[#e64a19] transition-all transform active:scale-[0.98]"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;