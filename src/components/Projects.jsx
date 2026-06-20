import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { Github } from "./Icons";

const projects = [
  {
    title: "Wanderlust",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "JavaScript", "Bootstrap", "Cloudinary", "Mapbox"],
    links: { live: "#", github: "#" },
    bullets: [
      "Engineered a full-stack MVC accommodation platform with 15+ RESTful APIs, successfully handling comprehensive CRUD operations and data relationships for a database of 500+ listings.",
      "Architected scalable MongoDB schemas to optimize query performance by 30% and implemented secure Express.js authentication workflows.",
      "Integrated Mapbox API for location visualization and responsive EJS/Bootstrap UIs, driving a 25% improvement in user engagement."
    ]
  },
  {
    title: "HostelCare",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "Cloudinary", "Tailwind CSS"],
    links: { live: "#", github: "#" },
    bullets: [
      "Developed a full-stack MERN application with secure Node.js/Express RESTful APIs to facilitate seamless, role-based hostel issue reporting.",
      "Implemented real-time bidirectional chat using Socket.io, reducing communication latency by 60% compared to traditional HTTP polling.",
      "Integrated Cloudinary for cloud image storage and Fuse.js for fuzzy search, boosting overall data retrieval speeds by 40%."
    ]
  },
  {
    title: "Deep Packet Inspection (DPI) Engine",
    tech: ["C++", "Multithreading", "System Design", "TCP/IP"],
    links: { github: "#" },
    bullets: [
      "Engineered a modular Deep Packet Inspection (DPI) engine in C++ for processing and analyzing network traffic from PCAP files.",
      "Implemented protocol parsers for Ethernet, IPv4, TCP, UDP, TLS, and DNS, enabling packet-level inspection, metadata extraction, and application-layer analysis.",
      "Developed a multithreaded packet-processing pipeline using thread-safe queues and load-balancing mechanisms to improve throughput, concurrency, and scalability.",
      "Designed reusable components for connection tracking, traffic classification, rule-based filtering, and HTTPS SNI extraction using object-oriented design principles."
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">03.</span> Projects
          <div className="h-px bg-zinc-800 flex-1 ml-4 hidden md:block"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <Folder className="w-10 h-10 text-blue-500 stroke-1" />
                  <div className="flex gap-3 text-zinc-400">
                    {project.links.github && (
                      <a href={project.links.github} className="hover:text-blue-400 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} className="hover:text-blue-400 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <ul className="text-sm text-zinc-400 space-y-2 mb-6">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="leading-relaxed">
                       <span dangerouslySetInnerHTML={{ __html: bullet.replace(/\d+%|15\+|500\+|30%|25%|60%|40%/g, match => `<strong class="text-zinc-200">${match}</strong>`).replace(/(C\+\+|MongoDB|Express\.js|React\.js|Node\.js|Socket\.io|Cloudinary|Fuse\.js|MATLAB|React|MVC|RESTful APIs|Mapbox|Tailwind CSS|TCP\/IP|Multithreading)/g, match => `<strong class="text-blue-100">${match}</strong>`) }} />
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-mono text-zinc-500 mt-auto">
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
