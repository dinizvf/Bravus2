import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Simulação de dados dos produtos
const products = [
  { id: 1, name: "Camisa Country", price: "159,90", image: "/camisa.png" },
  { id: 2, name: "Chapéu Cowboy", price: "249,90", image: "/chapeu.png" },
  { id: 3, name: "Bota Country Couro", price: "449,90", image: "/bota.png" },
  { id: 4, name: "Jaqueta Jeans Country", price: "289,90", image: "/jaqueta.png" },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#fdf2e9] text-[#2d1b0d] font-sans selection:bg-[#5c110e] selection:text-white">
      <Head>
        <title>Nossos Produtos | Bravus Country</title>
      </Head>

     {/* Header / Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#2d1b0d]/95 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-white/5">
        {/* Links Esquerda */}
        <div className="hidden md:flex gap-8 text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase">
          <Link href="/login" className="hover:text-white transition-colors">Entrar</Link>
          <Link href="/produtos" className="hover:text-white transition-colors">Produtos</Link>
          <Link href="/destaques" className="hover:text-white transition-colors">Destaque</Link> 
        </div>

        <div className="flex flex-col items-center">
          <img src="/logo.png" alt="Bravus Country" className="h-12 md:h-16 object-contain" />
        </div>

        <div className="flex items-center gap-4 md:gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-[#d4c3a1]">
          <div className="hidden md:flex gap-8">
           <Link href="/categorias" className="hover:text-white transition-colors">Categorias</Link>
            <Link href="/sobre" className="hover:text-white transition-colors">Sobre</Link>
          </div>
          <div className="flex gap-4 border-l border-white/20 pl-4">
            <SearchIcon />
            <UserIcon />
            <CartIcon />
          </div>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        
        {/* Título da Seção */}
        <div className="text-center mb-12">
          <h1 className="text-[#5c110e] text-4xl md:text-5xl lg:text-6xl font-serif font-bold uppercase tracking-tighter mb-2">
            Nossos Produtos
          </h1>
          <p className="text-[#2d1b0d]/70 text-sm md:text-base font-medium">
            Confira nossa coleção completa de moda country
          </p>
        </div>

        {/* Grade de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-[2rem] p-4 shadow-sm border border-[#2d1b0d]/5 flex flex-col group transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Espaço da Imagem */}
              <div className="aspect-square w-full bg-[#f3f3f3] rounded-[1.5rem] overflow-hidden mb-4 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Detalhes */}
              <div className="px-2 flex-grow">
                <h3 className="font-bold text-lg leading-tight mb-1">{product.name}</h3>
                <p className="text-[#a67c52] font-bold text-sm mb-4 uppercase">
                  R$ {product.price}
                </p>
              </div>

              {/* Botão Adicionar */}
              <button className="w-full bg-[#2d1b0d] hover:bg-[#5c110e] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors active:scale-95">
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-[#2d1b0d] py-10 text-center text-[10px] uppercase tracking-widest text-[#d4c3a1]/50">
        © 2026 Bravus Country Vintage - Estilo e Tradição
      </footer>
    </div>
  );
}

// Ícones
const SearchIcon = () => (
  <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);
const UserIcon = () => (
  <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);
const CartIcon = () => (
  <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);