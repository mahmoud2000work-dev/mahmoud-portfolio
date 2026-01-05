    import { motion } from "framer-motion";
    import { projects } from "../data/projects";
    import { FaGithub } from "react-icons/fa";

    const Projects = () => {
        console.log(projects);

    return (
        <section id="projects" className="py-32 max-w-6xl mx-auto px-6">
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
        >
            Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
            <motion.div
                key={i}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/40"
            >
                <div>
                <h3 className="font-semibold text-lg mb-2">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm">
                    {project.description}
                </p>
                </div>

                <a
                href={project.github}
                target="_blank"
                className="mt-6 inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300"
                >
                <FaGithub /> View on GitHub
                </a>
            </motion.div>
            ))}
        </div>
        </section>
    );
    };

    export default Projects;
