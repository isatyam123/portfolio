import { Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 text-sm">
          Designed and built by Satyam Kumar.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/isatyam123" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-500 transition-colors">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/isatyam123" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-500 transition-colors">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:satyamkumar0044@gmail.com" className="text-zinc-500 hover:text-blue-500 transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
