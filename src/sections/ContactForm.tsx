import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        "service_1nzjvgh",   
        "template_tvuqb06",  
        form.current,
        "Xl2QwMkGexOThsPbj"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current?.reset();
        },
        () => {
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <section className="py-32 px-6 max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Contact Me
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 transition rounded-lg px-6 py-3 text-white font-semibold"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && <p className="text-green-400">Message sent successfully!</p>}
        {error && <p className="text-red-500">Something went wrong. Try again.</p>}
      </motion.form>
    </section>
  );
};

export default ContactForm;
