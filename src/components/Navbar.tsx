import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg tracking-wide">
          Mahmoud<span className="text-purple-500">.</span>
        </h1>

        <ul className="flex gap-6 text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
