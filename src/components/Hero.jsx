import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl"
      >
        <h2 className="text-blue-500 font-medium tracking-wide mb-5">Hi, my name is</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-50 tracking-tight mb-8">
          Satyam Kumar.
        </h1>
        
        <div className="text-lg text-zinc-400 mb-12 max-w-3xl leading-relaxed space-y-5">
          <p>
            I'm an Integrated MS student in Mathematics and Computing at BIT Mesra, Ranchi.
          </p>
          <p>
            Passionate about software engineering and analytical problem-solving, I enjoy building scalable applications and transforming ideas into practical solutions. My interests include Data Structures & Algorithms, Full-Stack Development, Databases, System Design, and Data Analytics.
          </p>
          <p>
            With a strong foundation in mathematics and computer science, I approach problems with both logical rigor and engineering mindset. I have worked on full-stack applications, backend systems, and data-driven projects, gaining experience in designing efficient solutions and working across the software development lifecycle.
          </p>
          <p>
            I am always eager to learn, take on challenging problems, and collaborate on impactful projects. Currently, I am seeking opportunities in Software Development Engineering (SDE), Data Analytics, and related technology roles.
          </p>
        </div>

        <div className="flex items-center gap-6 mt-4">
          <a
            href="mailto:satyamkumar0044@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-zinc-950 font-bold rounded-lg hover:bg-blue-400 hover:-translate-y-1 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Let's Connect
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-zinc-300 font-medium hover:text-blue-400 transition-colors group"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
