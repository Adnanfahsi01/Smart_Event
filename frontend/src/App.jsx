import React, { useState } from 'react';
import { Search, MapPin, Calendar, Heart, Share2, Globe, Moon, ChevronRight, LayoutGrid, Music, Trophy, Briefcase, Palette, Send, Menu } from 'lucide-react';

export default function App() {
  const [events, setEvents] = useState({ trending: [], upcoming: [] });

  return (
    <div className="min-h-screen bg-darkBg text-white font-sans selection:bg-purple-500/30">
      
      {/* NAVBAR RESPONSIVE */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/5 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-purple-400">SmartEvent</span>.ma
          </div>
          <div className="hidden md:flex gap-8 text-base text-gray-300">
            <a href="#" className="text-white border-b-2 border-purple-500 pb-1">Accueil</a>
            <a href="#" className="hover:text-white transition">Explorer</a>
            <a href="#" className="hover:text-white transition">Catégories</a>
          </div>
        </div>
        
        {/* Boutons Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Globe className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          <Moon className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          <button className="text-base font-medium hover:text-purple-400 transition">Se connecter</button>
          <button className="bg-gradient-to-r from-purple-400 to-yellow-200 text-darkBg px-6 py-2.5 rounded-full text-base font-bold hover:opacity-90 transition">
            S'inscrire
          </button>
        </div>

        {/* Menu Hamburger Mobile */}
        <div className="md:hidden flex items-center">
          <Menu className="w-7 h-7 text-white cursor-pointer" />
        </div>
      </nav>

      {/* HERO SECTION AVEC LUEURS NÉON */}
      <header className="relative px-6 pt-32 pb-40 text-center flex flex-col items-center">
        
        {/* 1. Halo lumineux radial de background (Lueur Néon diffuse) */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_#2d1163_0%,_#0f0a1c_70%)] opacity-80"></div>
        
        <span className="bg-white/5 border border-white/10 px-5 py-2 rounded-full text-sm font-semibold tracking-wider text-purple-300 mb-8 uppercase relative">
          Le Concierge Numérique
          {/* Petite lueur derrière le label */}
          <div className="absolute inset-0 blur-xl bg-purple-900/40 -z-10 rounded-full"></div>
        </span>
        
        {/* 2. Titre avec Lueur Néon (text-shadow + lueur derrière) */}
        <div className="relative max-w-6xl mb-16">
          {/* Grande lueur diffuse derrière le titre */}
          <div className="absolute inset-0 blur-3xl bg-purple-950/50 -z-10 rounded-full scale-125"></div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
            Découvrez les meilleurs <br />
            {/* Le mot "événements" a déjà son propre dégradé */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-200 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              événements
            </span>{' '}
            au Maroc
          </h1>
        </div>

        {/* SEARCH BAR RESPONSIVE */}
        <div className="bg-cardBg/80 backdrop-blur-xl border border-white/10 p-3 rounded-3xl md:rounded-full flex flex-col md:flex-row items-center gap-3 md:gap-4 max-w-6xl w-full shadow-2xl relative">
          {/* Lueur subtile derrière la barre de recherche */}
          <div className="absolute inset-0 blur-2xl bg-darkBg/50 -z-10 rounded-full"></div>
          
          <div className="flex items-center gap-4 px-6 py-4 w-full md:flex-1 md:border-r border-white/10 border-b md:border-b-0">
            <MapPin className="w-6 h-6 text-gray-400 shrink-0" />
            <input type="text" placeholder="Ville (Casablanca...)" className="bg-transparent border-none outline-none text-base w-full text-white placeholder-gray-400" />
          </div>
          <div className="flex items-center gap-4 px-6 py-4 w-full md:flex-1 md:border-r border-white/10 border-b md:border-b-0">
            <LayoutGrid className="w-6 h-6 text-gray-400 shrink-0" />
            <select className="bg-transparent border-none outline-none text-base w-full text-gray-400 appearance-none">
              <option>Catégorie</option>
            </select>
          </div>
          <div className="flex items-center gap-4 px-6 py-4 w-full md:flex-1 mb-2 md:mb-0">
            <Calendar className="w-6 h-6 text-gray-400 shrink-0" />
            <input type="text" placeholder="Date" className="bg-transparent border-none outline-none text-base w-full text-white placeholder-gray-400" />
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-yellow-200 text-darkBg px-10 py-4 w-full md:w-auto rounded-2xl md:rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition">
            <Search className="w-5 h-5" /> Rechercher
          </button>
        </div>
      </header>

      {/* PARCOURIR PAR UNIVERS (LARGEUR max-w-[1400px]) */}
      <section className="px-6 py-16 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Parcourir par univers</h2>
            <p className="text-gray-400 text-base max-w-xl">Plongez dans les expériences qui vous passionnent, des festivals vibrants aux conférences de pointe.</p>
          </div>
          <a href="#" className="text-purple-400 text-base font-medium flex items-center gap-1 hover:underline">
            Toutes les catégories <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Musique', count: '240+', icon: Music, img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=600' },
            { title: 'Sport', count: '85+', icon: Trophy, img: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600' },
            { title: 'Business', count: '112+', icon: Briefcase, img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600' },
            { title: 'Art & Culture', count: '64+', icon: Palette, img: 'https://images.unsplash.com/photo-1518998053401-878c735c0754?auto=format&fit=crop&q=80&w=600' },
          ].map((cat, i) => (
            <div key={i} className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer border border-white/5 shadow-inner">
              <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/10">
                  <cat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-1">{cat.title}</h3>
                <p className="text-gray-400 text-sm">{cat.count} Événements</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EVENEMENTS TENDANCE (LARGEUR max-w-[1400px]) */}
      <section className="px-6 py-20 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-1 bg-purple-500 rounded-full drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]"></div>
          <h2 className="text-3xl md:text-4xl font-bold">Événements Tendance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { date: '12 JUIN', type: 'CONCERT', title: "L'Boulevard Festival 2024 - Edition Spéciale", loc: 'Casablanca, R.U.C', price: 'À partir de 150 DH', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600' },
            { date: '20 JUIN', type: 'SPORT', title: "Trophée Hassan II de Golf - Pro-Am", loc: 'Rabat, Dar Es Salam', price: 'Entrée Libre', img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=600' },
            { date: '05 JUIL.', type: 'BUSINESS', title: "Morocco Tech Expo - Futurs du Digital", loc: 'Marrakech, Palais des Congrès', price: 'À partir de 450 DH', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600' },
            { date: '14 JUIL.', type: 'ART & GALA', title: "Soirée Blanche - Charity Art Auction", loc: 'Tanger, Villa de France', price: 'Sur Invitation', img: 'https://images.unsplash.com/photo-1519671482749-fd09be7cce10?auto=format&fit=crop&q=80&w=600' },
          ].map((event, i) => (
            <div key={i} className="bg-cardBg rounded-3xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition group shadow-2xl relative">
              <div className="relative h-56">
                <img src={event.img} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-darkBg/80 backdrop-blur-sm text-sm font-bold px-4 py-1.5 rounded-full border border-white/10">
                  {event.date}
                </div>
                <button className="absolute top-4 right-4 p-2.5 rounded-full bg-darkBg/50 hover:bg-purple-500/50 backdrop-blur-sm transition border border-white/10">
                  <Heart className="w-5 h-5" />
                </button>
                <div className="absolute -bottom-5 right-5 w-12 h-12 bg-purple-400 rounded-xl flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition shadow-lg shadow-purple-500/20">
                  <div className="w-5 h-5 border-2 border-darkBg"></div>
                </div>
              </div>
              <div className="p-6 pt-8 relative">
                <div className="absolute inset-0 blur-3xl bg-purple-950/20 -z-10 rounded-full scale-110"></div>
                <span className="text-xs font-bold tracking-widest text-purple-400 uppercase drop-shadow-[0_0_3px_rgba(168,85,247,0.3)]">{event.type}</span>
                <h3 className="font-bold text-xl mt-2 mb-4 leading-tight">{event.title}</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                  <MapPin className="w-4 h-4" /> {event.loc}
                </div>
                <div className="flex items-center justify-between border-t border-white/5 pt-5">
                  <span className="text-base font-semibold">{event.price}</span>
                  <a href="#" className="text-sm text-purple-400 font-medium hover:underline">Détails</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCHAINS GRANDS RENDEZ-VOUS (LARGEUR max-w-[1400px]) */}
      <section className="px-6 py-20 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/3 w-full">
          <span className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-3 block drop-shadow-[0_0_3px_rgba(168,85,247,0.3)]">NE MANQUEZ RIEN</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Prochains grands rendez-vous</h2>
          <p className="text-gray-400 text-base mb-10 leading-relaxed max-w-xl">
            Nous avons sélectionné pour vous les événements les plus attendus de la saison. Réservez vos places avant qu'il ne soit tard.
          </p>

          <div className="space-y-5 mb-10">
            <div className="bg-cardBg border border-white/5 p-5 rounded-2xl flex items-center gap-6 hover:border-purple-500/30 transition cursor-pointer relative">
              <div className="text-center min-w-[60px]">
                <div className="text-3xl font-black">28</div>
                <div className="text-xs uppercase text-purple-400 font-bold drop-shadow-[0_0_3px_rgba(168,85,247,0.3)]">AOUT</div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Festival Gnaoua d'Essaouira</h4>
                <p className="text-sm text-gray-400">L'expérience mystique incontournable</p>
              </div>
              {/* Lueur subtile derrière la carte */}
              <div className="absolute inset-0 blur-xl bg-purple-950/20 -z-10 rounded-2xl"></div>
            </div>
            <div className="bg-cardBg border border-white/5 p-5 rounded-2xl flex items-center gap-6 hover:border-purple-500/30 transition cursor-pointer relative">
              <div className="text-center min-w-[60px]">
                <div className="text-3xl font-black">15</div>
                <div className="text-xs uppercase text-purple-400 font-bold drop-shadow-[0_0_3px_rgba(168,85,247,0.3)]">SEPT</div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Marathon de Casablanca</h4>
                <p className="text-sm text-gray-400">Relevez le défi urbain</p>
              </div>
              {/* Lueur subtile derrière la carte */}
              <div className="absolute inset-0 blur-xl bg-purple-950/20 -z-10 rounded-2xl"></div>
            </div>
          </div>

          <button className="border border-white/20 px-8 py-3 rounded-full text-base font-medium hover:bg-white/5 transition relative">
            Voir tout le calendrier
            <div className="absolute inset-0 blur-lg bg-purple-950/10 -z-10 rounded-full"></div>
          </button>
        </div>

        {/* Collage Images */}
        <div className="lg:w-2/3 w-full grid grid-cols-2 gap-6 h-[600px] relative">
          {/* Lueur diffuse derrière le collage d'images */}
          <div className="absolute inset-0 blur-3xl bg-purple-950/30 -z-10 rounded-full scale-110"></div>
          
          <div className="rounded-3xl overflow-hidden h-full border border-white/10 shadow-xl">
            <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Drummer" />
          </div>
          <div className="grid grid-rows-2 gap-6 h-full">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-xl">
              <img src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Classical" />
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-xl">
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Crowd" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#0a0710] pt-20 pb-10 mt-16 relative">
        {/* Lueur de background subtile pour le footer */}
        <div className="absolute inset-x-0 bottom-0 top-1/2 blur-3xl bg-purple-950/20 -z-10 rounded-full"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16 relative">
          
          <div>
            <div className="text-2xl font-bold tracking-tight mb-6">
              <span className="text-purple-400 drop-shadow-[0_0_5px_rgba(168,85,247,0.4)]">SmartEvent</span>.ma
            </div>
            <p className="text-gray-400 text-base mb-8 leading-relaxed max-w-sm">
              Le premier service de conciergerie numérique pour vos événements au Maroc. Qualité, sécurité et prestige.
            </p>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500/20 transition border border-white/10 shadow-inner relative group">
                <Share2 className="w-5 h-5 text-gray-300" />
                <div className="absolute inset-0 blur-lg bg-purple-950/20 rounded-full opacity-0 group-hover:opacity-100 transition"></div>
              </button>
              <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500/20 transition border border-white/10 shadow-inner relative group">
                <Globe className="w-5 h-5 text-gray-300" />
                <div className="absolute inset-0 blur-lg bg-purple-950/20 rounded-full opacity-0 group-hover:opacity-100 transition"></div>
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 relative">
              Explorer
              <div className="absolute inset-0 blur-lg bg-white/5 -z-10"></div>
            </h4>
            <ul className="space-y-4 text-base text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition hover:drop-shadow-[0_0_3px_rgba(168,85,247,0.3)]">Tous les événements</a></li>
              <li><a href="#" className="hover:text-purple-400 transition hover:drop-shadow-[0_0_3px_rgba(168,85,247,0.3)]">Top Villes</a></li>
              <li><a href="#" className="hover:text-purple-400 transition hover:drop-shadow-[0_0_3px_rgba(168,85,247,0.3)]">Organisateurs VIP</a></li>
              <li><a href="#" className="hover:text-purple-400 transition hover:drop-shadow-[0_0_3px_rgba(168,85,247,0.3)]">Billetterie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 relative">
              Support & Légal
              <div className="absolute inset-0 blur-lg bg-white/5 -z-10"></div>
            </h4>
            <ul className="space-y-4 text-base text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition hover:drop-shadow-[0_0_3px_rgba(168,85,247,0.3)]">Aide & Support</a></li>
              <li><a href="#" className="hover:text-purple-400 transition hover:drop-shadow-[0_0_3px_rgba(168,85,247,0.3)]">Conditions de Vente</a></li>
              <li><a href="#" className="hover:text-purple-400 transition hover:drop-shadow-[0_0_3px_rgba(168,85,247,0.3)]">Confidentialité</a></li>
              <li><a href="#" className="hover:text-purple-400 transition hover:drop-shadow-[0_0_3px_rgba(168,85,247,0.3)]">Contactez-nous</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 relative">
              Newsletter Premium
              <div className="absolute inset-0 blur-lg bg-white/5 -z-10"></div>
            </h4>
            <p className="text-gray-400 text-base mb-6 max-w-sm leading-relaxed">Recevez les invitations exclusives en avant-première.</p>
            <div className="flex bg-cardBg border border-white/10 rounded-xl overflow-hidden relative group">
              <input type="email" placeholder="Votre email" className="bg-transparent px-5 py-4 w-full text-base outline-none text-white placeholder-gray-500" />
              <button className="bg-white/5 px-6 flex items-center justify-center hover:bg-purple-500/20 transition group relative">
                <Send className="w-5 h-5 text-purple-400 transition drop-shadow-[0_0_3px_rgba(168,85,247,0.3)]" />
                <div className="absolute inset-0 blur-lg bg-purple-950/20 rounded-full opacity-0 group-hover:opacity-100 transition"></div>
              </button>
              {/* Lueur subtile derrière la newsletter */}
              <div className="absolute inset-0 blur-xl bg-purple-950/10 -z-10 rounded-xl"></div>
            </div>
          </div>

        </div>

        <div className="max-w-[1400px] mx-auto px-6 pt-10 border-t border-white/5 text-center text-sm text-gray-500 relative">
          © 2024 SmartEvent.ma. Le Concierge Numérique des événements au Maroc.
          <div className="absolute inset-x-0 bottom-0 h-px blur-lg bg-white/10 -z-10 rounded-full"></div>
        </div>
      </footer>

    </div>
  );
}