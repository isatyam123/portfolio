import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Yinolite Solutions",
    role: "Full Stack Development Intern",
    date: "June 2026 – July 2026",
    location: "Remote",
    bullets: [
      "Worked on a client website project for Anany Pahal Foundation",
      "Used React.js to migrate static HTML pages into interactive component-based web applications",
      "Implemented 100% component-based architecture, improving code reusability and maintainability",
      "Integrated the Razorpay APIs to facilitate secure online donations, enhancing operational efficiency and increasing expected fundraising impact by 50%.",
      "Enhanced website performance and security through testing and frontend optimization"
    ]
  },
  {
    company: "Department of Mathematics, BIT Mesra",
    role: "Research Intern",
    date: "Jan 2025 – Apr 2025",
    location: "Ranchi, India",
    bullets: [
      "Investigated the spectral properties and eigenvalue distributions of pentadiagonal doubly stochastic matrices using linear algebra, matrix theory, and numerical analysis for matrix orders n ≤ 6.",
      "Developed a scalable construction framework using convex combinations of permutation matrices varying with n, reducing the combinatorial search space from O(n!) to structured feasible subsets.",
      "Implemented extensive C++/MATLAB simulations to generate and analyze hundreds of thousands of matrices per n, computing full eigenvalue spectra and identifying rare boundary-breaking spectral cases."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">02.</span> Experience
          <div className="h-px bg-zinc-800 flex-1 ml-4 hidden md:block"></div>
        </h2>

        <div className="space-y-12 pl-4 md:pl-0">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative border-l border-zinc-800 pl-8 md:pl-10 before:absolute before:w-3 before:h-3 before:bg-blue-500 before:rounded-full before:-left-[6.5px] before:top-2 before:ring-4 before:ring-zinc-950">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                  <h4 className="text-lg text-blue-400 font-medium">{exp.company}</h4>
                </div>
                <div className="text-zinc-500 text-sm mt-1 md:mt-0 font-mono">
                  {exp.date} | {exp.location}
                </div>
              </div>
              <ul className="space-y-3 text-zinc-400">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 text-blue-500 mt-1.5">▹</span>
                    <span dangerouslySetInnerHTML={{ __html: bullet.replace(/\d+%|O\(n!\)|n ≤ 6|100%|500\+|15\+|30%|25%|60%|40%|3\.7\times|450\+|120/g, match => `<strong class="text-zinc-200">${match}</strong>`).replace(/(C\+\+|MongoDB|Express\.js|React\.js|Node\.js|Socket\.io|Cloudinary|Fuse\.js|MATLAB|React)/g, match => `<strong class="text-blue-100">${match}</strong>`) }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
