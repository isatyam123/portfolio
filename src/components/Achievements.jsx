import { motion } from "framer-motion";
import { Trophy, Code2, GraduationCap, Users, Heart } from "lucide-react";

const stats = [
  {
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    value: "500+",
    label: "DSA problems solved across platforms"
  },
  {
    icon: <Trophy className="w-6 h-6 text-blue-500" />,
    value: "1831",
    label: "LeetCode Rating (Top 6.83%)"
  },
  {
    icon: <Trophy className="w-6 h-6 text-blue-500" />,
    value: "1286",
    label: "Pupil status on Codeforces"
  }
];

const achievements = [
  "Received the GP Birla Scholarship for academic excellence, covering 50% (MO-2024) and 100% (SP-2025) tuition fees.",
  "Achieved 3rd position among 250+ participants in IEEE Code Joust, a pair programming competition organized by the IEEE Coding Club, BIT Mesra.",
  "Secured 5th rank among 150+ participants in the ACM CQM Coding Contest organized by ACM BIT Mesra.",
  "Achieved a record-high blood donation turnout of 450+ units (3.7× increase from 120) at an NSS BIT Mesra blood donation camp through strategic awareness programs and volunteer coordination."
];

const leadership = [
  { role: "Senior Executive Member", org: "IEEE, BIT Mesra", date: "May 2025 – Present" },
  { role: "Vice President, Finance and Sponsorship", org: "Society for Data Science, BIT Mesra", date: "May 2025 – Present" },
  { role: "Management Team Lead", org: "Google Developer Groups (GDG) on campus, BIT Mesra", date: "May 2025 – Present" },
  { role: "Executive Body Member", org: "National Service Scheme, BIT Mesra", date: "February 2023 – May 2024" }
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">04.</span> Achievements & Leadership
          <div className="h-px bg-zinc-800 flex-1 ml-4 hidden md:block"></div>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={item} className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl text-center flex flex-col items-center justify-center gap-2">
              <div className="p-3 bg-zinc-950 rounded-full border border-zinc-800/80 mb-2">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-zinc-100">{stat.value}</div>
              <div className="text-xs text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Awards */}
          <motion.div variants={item}>
            <h3 className="text-xl font-semibold text-zinc-200 mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              Awards & Honors
            </h3>
            <ul className="space-y-4">
              {achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start text-sm text-zinc-400">
                  <span className="mr-3 text-blue-500 mt-0.5">▹</span>
                  <span dangerouslySetInnerHTML={{ __html: ach.replace(/\d+%|250\+|150\+|3rd|5th|50%|100%|450\+|3\.7×|120/g, match => `<strong class="text-zinc-200">${match}</strong>`) }} />
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Leadership */}
          <motion.div variants={item}>
             <h3 className="text-xl font-semibold text-zinc-200 mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              Leadership
            </h3>
            <div className="space-y-5">
              {leadership.map((pos, idx) => (
                <div key={idx} className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                    <h4 className="font-semibold text-zinc-200">{pos.role}</h4>
                    <span className="text-xs font-mono text-blue-400 whitespace-nowrap mt-1 sm:mt-0">{pos.date}</span>
                  </div>
                  <p className="text-sm text-zinc-400">{pos.org}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
