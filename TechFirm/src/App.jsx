import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQBot from './components/FAQBot';

function App() {
  return (
    <div className="bg-[#050510] min-h-screen text-white font-sans-custom selection:bg-violet-500/30 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <About />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FAQBot />

      {/* Fixed global glow orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-900/10 blur-[200px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-pink-900/10 blur-[200px] opacity-60" />
      </div>
    </div>
  );
}

export default App;
