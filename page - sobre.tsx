import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdf2e9] text-[#2d1b0d] font-sans selection:bg-[#5c110e] selection:text-white">
      <Head>
        <title>Sobre Nós | Bravus Country</title>
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
        
        {/* Título Centralizado */}
        <div className="text-center mb-16">
          <h1 className="text-[#5c110e] text-5xl md:text-6xl font-serif font-bold uppercase tracking-tighter">
            Sobre Nós
          </h1>
          <div className="h-[2px] w-20 bg-[#5c110e] mx-auto mt-4 opacity-30"></div>
        </div>

        {/* Seção Superior: Texto e Imagem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed font-medium text-justify md:text-left">
              Na Bravus Country, acreditamos que o estilo de vida sertanejo é muito mais do que apenas uma escolha de vestuário; é uma herança de força, liberdade e respeito pelas raízes. Nascemos da paixão pela vida no campo e pelo desejo de trazer para o dia a dia a autenticidade das tradições que nunca saem de moda.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/sobre.png" 
                alt="Lifestyle Country" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Detalhe decorativo */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-[#5c110e] rounded-full -z-10 opacity-10"></div>
          </div>
        </div>

        {/* Seção Inferior: Missão e Diferenciais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Coluna Nossa Missão */}
          <div className="space-y-6">
            <h2 className="text-[#5c110e] text-3xl md:text-4xl font-serif font-bold uppercase tracking-tight">
              Nossa Missão
            </h2>
            <p className="text-base leading-relaxed font-medium">
              A nossa missão é vestir homens e mulheres que carregam o orgulho do campo no peito. Queremos proporcionar produtos que unam a resistência necessária para a lida com o conforto e a elegância exigidos nos melhores momentos de lazer. Cada peça da nossa coleção é selecionada para garantir que a tradição country continue viva e relevante em qualquer cenário.
            </p>
          </div>

          {/* Coluna Diferenciais */}
          <div className="space-y-8">
            <h2 className="text-[#5c110e] text-2xl md:text-3xl font-serif font-bold uppercase tracking-tight">
              Porque escolher a Bravus Country?
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-[#5c110e] text-xl">★</span>
                <div>
                  <h3 className="font-bold uppercase text-sm tracking-widest">Autenticidade</h3>
                  <p className="text-sm opacity-80 italic">Valorizamos o estilo rústico e verdadeiro.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-[#5c110e] text-xl">★</span>
                <div>
                  <h3 className="font-bold uppercase text-sm tracking-widest">Durabilidade</h3>
                  <p className="text-sm opacity-80 italic">Roupas e acessórios feitos para durar, assim como as tradições.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-[#5c110e] text-xl">★</span>
                <div>
                  <h3 className="font-bold uppercase text-sm tracking-widest">Conexão</h3>
                  <p className="text-sm opacity-80 italic">Somos feitos por quem ama a terra para quem vive dela (ou traz o seu espírito para a cidade).</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Rodapé Padrão */}
      <footer className="bg-[#2d1b0d] py-12 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#d4c3a1]/50">
          © 2024 Bravus Country Vintage - Qualidade e Tradição
        </p>
      </footer>
    </div>
  );
}

/* --- Ícones SVG Reutilizados --- */
const SearchIcon = () => (
  <svg className="w-5 h-5 cursor-pointer hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);
const UserIcon = () => (
  <svg className="w-5 h-5 cursor-pointer hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);
const CartIcon = () => (
  <svg className="w-5 h-5 cursor-pointer hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);