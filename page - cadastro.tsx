import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black text-[#d4c3a1] font-sans selection:bg-[#5c110e]">
      <Head>
        <title>Cadastro | Bravus Country</title>
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

        <div className="flex items-center gap-4 md:gap-8 text-[10px] font-bold tracking-[0.2em] uppercase">
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

      {/* Main Content Area */}
      <main className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12">
        {/* Background Image com Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/background.png" 
            alt="Country Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        {/* Cadastro Card */}
        <div className="relative z-10 w-full max-w-lg mx-4">
          <div className="bg-[#2d1b0d]/90 backdrop-blur-sm p-8 md:p-10 rounded-[3rem] border border-white/10 shadow-2xl text-center">
            
            <h2 className="text-white text-3xl md:text-5xl font-serif font-bold uppercase tracking-widest mb-8">
              Cadastre-se
            </h2>

            <form className="flex flex-col gap-4">
              {/* Campo Email */}
              <input 
                type="email" 
                placeholder="Email"
                className="w-full bg-[#fdf2e9] text-[#2d1b0d] px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5c110e] placeholder:text-[#2d1b0d]/60 font-medium"
              />

              {/* Campo Nome de Usuário */}
              <input 
                type="text" 
                placeholder="Nome Usuário"
                className="w-full bg-[#fdf2e9] text-[#2d1b0d] px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5c110e] placeholder:text-[#2d1b0d]/60 font-medium"
              />

              {/* Campo Senha */}
              <input 
                type="password" 
                placeholder="Senha"
                className="w-full bg-[#fdf2e9] text-[#2d1b0d] px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5c110e] placeholder:text-[#2d1b0d]/60 font-medium"
              />

              {/* Confirmar Senha */}
              <input 
                type="password" 
                placeholder="Confirmar senha"
                className="w-full bg-[#fdf2e9] text-[#2d1b0d] px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5c110e] placeholder:text-[#2d1b0d]/60 font-medium"
              />

              {/* Checkbox Lembrar Disso */}
              <div className="flex items-center gap-2 px-2 mt-2">
                <input 
                  type="checkbox" 
                  id="remember"
                  className="w-4 h-4 rounded border-gray-300 text-[#5c110e] focus:ring-[#5c110e] cursor-pointer"
                />
                <label htmlFor="remember" className="text-[11px] uppercase tracking-wider text-[#d4c3a1] cursor-pointer select-none">
                  Lembrar disso
                </label>
              </div>

              {/* Botão Cadastrar */}
              <Link href="/login" className="w-full mt-4">
                <span className="block w-full bg-[#fdf2e9] hover:bg-white text-[#2d1b0d] py-4 rounded-full font-bold uppercase text-sm tracking-widest transition-all active:scale-95 shadow-md text-center cursor-pointer">
                  Cadastrar
                </span>
              </Link>
            </form>

            <div className="mt-6 text-[11px] uppercase tracking-widest text-[#d4c3a1]/80">
              Já tem uma conta? 
              <Link href="/login" className="ml-2 text-white hover:underline font-bold">
                Entrar
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 w-full text-center text-[10px] uppercase tracking-widest text-zinc-500">
        © 2026 Bravus Country Vintage
      </footer>
    </div>
  );
}

// Ícones (Mesmos componentes das telas anteriores)
const SearchIcon = () => (
  <svg className="w-5 h-5 cursor-pointer hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);
const UserIcon = () => (
  <svg className="w-5 h-5 cursor-pointer hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);
const CartIcon = () => (
  <svg className="w-5 h-5 cursor-pointer hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);