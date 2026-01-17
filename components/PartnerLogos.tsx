
import React from 'react';

const partners = [
  { name: 'Amazon', color: 'text-blue-900' },
  { name: 'Shopee', color: 'text-orange-600' },
  { name: 'Magalu', color: 'text-blue-500' },
  { name: 'Mercado Livre', color: 'text-yellow-500' },
];

const PartnerLogos: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Curadoria das Melhores Lojas</p>
        <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
          {partners.map((partner) => (
            <span key={partner.name} className={`text-2xl md:text-3xl font-bold ${partner.color} select-none`}>
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
