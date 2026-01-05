    import { motion } from "framer-motion";

    const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
            
            <div className="absolute -top-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl"></div>

        <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10"
            >
            <h1 className="text-5xl md:text-6xl font-extrabold">
                Mahmoud Al Agha
            </h1>

            <p className="mt-4 text-xl text-gray-400">
                Frontend Developer
            </p>

            <p className="max-w-xl mx-auto mt-6 text-gray-500">
                I build modern, responsive, and high-performance web interfaces
                using React, TypeScript, and modern frontend tools.
            </p>

            <div className="mt-10 flex justify-center gap-4">
            <a
                href="#projects"
                className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
            >
                View Projects
            </a>

            <a
                href="/MahmoudAlAgha_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
            Download CV
            </a>
            </div>
        </motion.div>
        </section>
    );
    };

    export default Hero;
