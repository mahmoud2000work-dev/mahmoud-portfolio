    import { motion } from "framer-motion";

    const Contact = () => {
    return (
        <section className="py-32 text-center px-6" id="contact">
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
        >
            Let’s Work Together
        </motion.h2>

        <p className="text-gray-400 mb-8">
            Feel free to reach out for collaborations or opportunities.
        </p>

        <a
            href="mailto:your-email@example.com"
            className="inline-block px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
            Contact Me
        </a>
        </section>
    );
    };

    export default Contact;
