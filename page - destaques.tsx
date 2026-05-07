import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Simulação dos produtos em destaque baseados na sua imagem
const featuredProducts = [
  {
    id: 1,
    name: "Bota Texana Escamada Preto Masculina",
    price: "270,00",
    image: "/bota-preta.png",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44]
  },
  {
    id: 2,
    name: "Jeans Feminino Cheyenne",
    price: "650,00",
    image: "/cheyenne.png",
    sizes: ["P", "M", "G", "GG"]
  },
  {
    id: 3,
    name: "Chapéu Pralana Arena Felt Cinza",
    price: "650,00",
    image: "/chapeu-cinza.png",
    sizes: [54, 55, 56, 57, 58, 59, 60, 61, 62]
  },
  {
    id: 4,
    name: "M2 Relaxed Stretch Legacy Boot Cut Jean",
    price: "650,00",
    image: "/jeans.png",
    options: ["Standard", "Big & Tall"]
  }
];

export default function HighlightsPage() {
  return (
    <div className="min-h-screen bg-[#8a583c] text-[#2d1b0d] font-sans selection:bg-[#5c110e] selection:text-white">
      <Head>
        <title>Destaques da Semana | Bravus Country</title>
      </Head>

      {/* Header / Navbar Padrão */}
      <nav className="fixed top-0 w-full z-50 bg-[#2d1b0d] px-6 py-4 flex items-center justify-between shadow-2xl">
        <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-[#d4c3a1]">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/produtos" className="hover:text-white transition">Produtos</Link>
          <Link href="/destaques" className="text-white border-b border-white/30">Destaque</Link>
        </div>

        <div className="flex flex-col items-center">
          <img src="/logo.png" alt="Bravus Country" className="h-12 md:h-16 object-contain" />
        </div>

        <div className="flex items-center gap-4 md:gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-[#d4c3a1]">
          <div className="hidden md:flex gap-8">
            <Link href="/categorias" className="hover:text-white transition">Categorias</Link>
            <Link href="/sobre" className="hover:text-white transition">Sobre</Link>
          </div>
          <div className="flex gap-4 border-l border-white/20 pl-4">
            <SearchIcon />
            <UserIcon />
            <CartIcon />
          </div>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto pt-40 pb-20 px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16 text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-widest mb-4 drop-shadow-md">
            Destaques da Semana
          </h1>
          <p className="text-lg opacity-90 font-medium">
            Confira os destaques da semana com diversas promoções.
          </p>
        </div>

        {/* Grade de Produtos de Destaque */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-xl flex flex-col group">
              {/* Imagem do Produto */}
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Informações e Seletores */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-[13px] uppercase leading-tight mb-2 h-10 overflow-hidden">
                  {product.name}
                </h3>
                <p className="text-[#8a583c] font-black text-xl mb-4">
                  R$ {product.price}
                </p>

                {/* Botão Adicionar */}
                <button className="w-full bg-[#5c110e] hover:bg-[#3d0b09] text-white py-3 rounded-lg flex items-center justify-center gap-2 font-bold text-[11px] uppercase tracking-tighter transition-colors mb-4">
                  Adicionar ao Carrinho
                  <CartIconMini />
                </button>

                {/* Seleção de Tamanhos/Opções (Miniatura da Referência) */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="text-[9px] font-bold uppercase text-gray-400 mb-2 tracking-widest">
                    Selecione a opção:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {(product.sizes || product.options)?.map((opt, i) => (
                      <span key={i} className="text-[9px] border border-gray-200 px-2 py-1 rounded hover:border-[#8a583c] cursor-pointer transition">
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-[#2d1b0d] py-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#d4c3a1]/40">
          Bravus Country Vintage - Estilo que não sai de moda
        </p>
      </footer>
    </div>
  );
}

/* --- Ícones --- */
const SearchIcon = () => <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const UserIcon = () => <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const CartIcon = () => <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const CartIconMini = () => <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>;