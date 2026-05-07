import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BravusLandingPage() {
  return (
    <div className="min-h-screen bg-black text-[#d4c3a1]">
      <Head>
        <title>Bravus Country</title>
      </Head>

      {/* Header / Navbar - Agora fixo no topo da página */}
      <nav className="fixed top-0 w-full z-50 bg-[#2d1b0d]/95 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-white/5">
        {/* Links Esquerda */}
        <div className="hidden md:flex gap-8 text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase">
          <Link href="/login" className="hover:text-white transition-colors">Entrar</Link>
          <Link href="/produtos" className="hover:text-white transition-colors">Produtos</Link>
          <Link href="/destaques" className="hover:text-white transition-colors">Destaque</Link>
        </div>

        {/* Logo Central */}
        <div className="flex flex-col items-center">
          <img 
            src="/logo.png" 
            alt="Bravus Country" 
            className="h-12 md:h-16 object-contain"
          />
        </div>

        {/* Links Direita e Ícones */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex gap-8 text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase">
           <Link href="/categorias" className="text-white border-b border-white/30">Categorias</Link>
            <Link href="/sobre" className="hover:text-white transition-colors">Sobre</Link>
          </div>
          <div className="flex gap-4 border-l border-white/20 pl-4">
            <SearchIcon />
            <UserIcon />
            <CartIcon />
          </div>
        </div>
      </nav>

      {/* Hero Section - Ocupa a altura total da janela (100vh) */}
      <section className="relative h-screen w-full flex items-center justify-end overflow-hidden">
        {/* Imagem de Fundo em Full Screen */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/fundo.png" 
            alt="Country Lifestyle Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay gradiente para melhorar a leitura do texto em qualquer ecrã */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Conteúdo Textual - Alinhado à direita no desktop, centralizado no mobile */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-end text-right">
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] uppercase tracking-tighter mb-6">
              Estilo de Vida <br />
              <span className="text-white">Tradição que</span> <br />
              <span className="bg-white text-black px-3 inline-block mt-2">nunca sai de moda</span>
            </h1>

            <div className="flex flex-col items-end gap-4 mb-8">
              <span className="text-[#d4c3a1] text-3xl">★</span>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-sm font-light">
                Descubra a moda country que combina tradição e estilo. 
                Roupas de qualidade para quem vive a vida do campo com autenticidade.
              </p>
            </div>
            <Link href="/produtos">
  <span className="inline-block bg-[#5c110e] hover:bg-[#801a16] text-white px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-2xl cursor-pointer">
    Ver Produtos
  </span>
</Link>
          </div>
        </div>
      </section>

      {/* Espaço para mais conteúdo abaixo (Scroll natural) */}
      <footer className="bg-black py-10 text-center text-[10px] uppercase tracking-widest text-zinc-600">
        © 2026 Bravus Country Vintage - Qualidade e Tradição
      </footer>
    </div>
  );
}

// Ícones (SVG)
const SearchIcon = () => (
  <svg className="w-5 h-5 cursor-pointer hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);
const UserIcon = () => (
  <svg className="w-5 h-5 cursor-pointer hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);
const CartIcon = () => (
  <svg className="w-5 h-5 cursor-pointer hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);