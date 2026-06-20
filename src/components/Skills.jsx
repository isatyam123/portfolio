import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "JavaScript", "SQL"]
  },
  {
    category: "Web Technologies",
    items: ["HTML", "CSS", "Bootstrap", "Tailwind", "React.js", "EJS", "Node.js", "Express.js", "RESTful APIs", "MVC"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"]
  },
  {
    category: "DevOps/Tools",
    items: ["Docker", "Kubernetes", "Git", "GitHub", "CI/CD", "VS Code", "Postman", "MATLAB"]
  },
  {
    category: "CS Fundamentals",
    items: ["Data Structures and Algorithms", "OOP", "Operating Systems", "DBMS", "Computer Networks", "Machine Learning"]
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
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">01.</span> Technical Skills
          <div className="h-px bg-zinc-800 flex-1 ml-4 hidden md:block"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup) => (
            <motion.div key={skillGroup.category} variants={item} className="p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-xl hover:border-zinc-700 transition-colors">
              <h3 className="text-lg font-semibold text-zinc-200 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-zinc-800/50 text-blue-400/90 text-sm font-medium rounded-full border border-blue-900/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
