    import { motion } from "framer-motion";
    import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaBootstrap,
    FaGitAlt,
    } from "react-icons/fa";
    import { SiTypescript, SiTailwindcss } from "react-icons/si";

    const skills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaGitAlt />, name: "Git & GitHub" },
    ];

    const Skills = () => {
    return (
        <section className="py-32 max-w-6xl mx-auto px-6" id="skills">
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
        >
            Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
            <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center gap-3 backdrop-blur hover:border-purple-500/40"
            >
                <div className="text-3xl text-purple-400">
                {skill.icon}
                </div>
                <p className="text-sm text-gray-300">{skill.name}</p>
            </motion.div>
            ))}
        </div>
        </section>
    );
    };

    export default Skills;
