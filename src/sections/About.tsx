    import { motion } from "framer-motion";

    const About = () => {
    return (
        <section className="py-32 max-w-4xl mx-auto px-6" id="about">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>

            <p className="text-gray-400 leading-relaxed">
            I am a passionate Frontend Developer specializing in building modern, responsive, and high-performance web applications. I focus on creating clean, intuitive user interfaces and delivering smooth, engaging user experiences.
            I have solid experience in developing scalable and maintainable front-end architectures using React and TypeScript, with strong attention to performance, accessibility, and best practices. 
            I enjoy turning complex ideas into elegant digital solutions and continuously improving my skills by exploring new tools and technologies in the front-end ecosystem.
            </p>
        </motion.div>
        </section>
    );
    };

    export default About;
