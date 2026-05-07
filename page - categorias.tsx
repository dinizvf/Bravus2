import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

/* --- 1. ÍCONES (Declarados primeiro para evitar erros de inicialização) --- */
const ShirtIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8l-2-2H5L3 8m18 0l-2 12H5L3 8m18 0l-2-2m2 2h-2m-8 4v4m-4-4v4" /></svg>;
const HatIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14c4 0 7-1 7-3s-3-3-7-3-7 1-7 3 3 3 7 3zM3 13c0 2 4 4 9 4s9-2 9-4" stroke="currentColor" strokeWidth="2"/></svg>;
const BootIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 4h3l2 8h4v3l-6 2-3-1V4z" stroke="currentColor" strokeWidth="2"/></svg>;
const JacketIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 4h14l1 16H4L5 4z" stroke="currentColor" strokeWidth="2"/></svg>;
const StarIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2"/></svg>;

const TruckIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 17a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zM3 9h15l3 3v5h-2M3 9v8h4M3 9L6 6h12l3 3" /></svg>;
const ShieldIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const LockIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
const PhoneIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;

const SearchIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const UserIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const CartIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;

/* --- 2. COMPONENTE PRINCIPAL --- */
export default function CategoriesPage() {
  const categories = [
    { id: 1, name: "Camisas", image: "/cat-camisas.png", icon: <ShirtIcon /> },
    { id: 2, name: "Chapéus", image: "/cat-chapeus.png", icon: <HatIcon /> },
    { id: 3, name: "Botas", image: "/cat-botas.png", icon: <BootIcon /> },
    { id: 4, name: "Jaquetas", image: "/cat-jaquetas.png", icon: <JacketIcon /> },
    { id: 5, name: "Acessórios", image: "/cat-acessorios.png", icon: <StarIcon /> },
  ];

  return (
    <div className="min-h-screen bg-[#fdf2e9] text-[#2d1b0d] font-sans selection:bg-[#5c110e] selection:text-white">
      <Head>
        <title>Categorias | Bravus Country</title>
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

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        <div className="text-center mb-16">
          <h1 className="text-[#5c110e] text-5xl md:text-6xl font-serif font-bold uppercase tracking-tighter mb-4">
            Categorias
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4 text-[#5c110e]">
            <div className="h-[1px] w-12 bg-current opacity-30"></div>
            <span className="text-xl">★</span>
            <div className="h-[1px] w-12 bg-current opacity-30"></div>
          </div>
          <p className="text-[#2d1b0d]/70 text-base font-medium italic">
            Encontre o que você precisa para o seu estilo country
          </p>
        </div>

        {/* Grade de Categorias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {categories.map((cat) => (
            <div key={cat.id} className="group cursor-pointer">
              <div className="relative h-96 w-full overflow-hidden rounded-[2.5rem] shadow-lg border-4 border-white">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                  <div className="bg-[#fdf2e9] p-3 rounded-full mb-4 shadow-md text-[#2d1b0d]">
                    {cat.icon}
                  </div>
                  <h3 className="text-white font-serif text-2xl font-bold uppercase tracking-tighter mb-4">
                    {cat.name}
                  </h3>
                  <Link href={`/produtos?cat=${cat.name.toLowerCase()}`}>
                    <span className="bg-[#fdf2e9] hover:bg-white text-[#2d1b0d] px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all">
                      Ver Produtos
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 px-6 bg-white/60 backdrop-blur-sm rounded-[2.5rem] border border-[#2d1b0d]/5 shadow-sm">
          <div className="flex items-center gap-4 px-4 border-r border-[#2d1b0d]/10 last:border-none">
            <TruckIcon />
            <div className="text-left">
              <h4 className="text-[10px] font-bold uppercase tracking-widest">Frete Grátis</h4>
              <p className="text-[9px] text-[#2d1b0d]/60 uppercase leading-none mt-1">Acima de R$ 199,90</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 border-r border-[#2d1b0d]/10 last:border-none">
            <ShieldIcon />
            <div className="text-left">
              <h4 className="text-[10px] font-bold uppercase tracking-widest">Produtos Originais</h4>
              <p className="text-[9px] text-[#2d1b0d]/60 uppercase leading-none mt-1">Qualidade garantida</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 border-r border-[#2d1b0d]/10 last:border-none">
            <LockIcon />
            <div className="text-left">
              <h4 className="text-[10px] font-bold uppercase tracking-widest">Compra Segura</h4>
              <p className="text-[9px] text-[#2d1b0d]/60 uppercase leading-none mt-1">Seus dados protegidos</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 last:border-none">
            <PhoneIcon />
            <div className="text-left">
              <h4 className="text-[10px] font-bold uppercase tracking-widest">Atendimento</h4>
              <p className="text-[9px] text-[#2d1b0d]/60 uppercase leading-none mt-1">Suporte especializado</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#2d1b0d] py-10 text-center text-[10px] uppercase tracking-widest text-[#d4c3a1]/50">
        © 2024 Bravus Country Vintage
      </footer>
    </div>
  );
}