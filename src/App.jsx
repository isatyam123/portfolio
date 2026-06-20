import { motion } from "framer-motion";
import { Download, Mail, ExternalLink, ChevronRight } from "lucide-react";
import { Github, Linkedin } from "./components/Icons";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-blue-500/30 selection:text-white">
      {/* Navigation (Optional, keeping it minimal) */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-xl tracking-tight hover:text-blue-500 transition-colors">Satyam.</a>
          <div className="flex gap-4">
            <a href="https://github.com/isatyam123" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-50 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/isatyam123" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-50 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-24 pb-12 space-y-32">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
      </main>

      <Footer />
    </div>
  );
}

export default App;
