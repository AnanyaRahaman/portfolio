import React from 'react';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="text-center py-32 bg-gray-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      <motion.img
        src="/IMG_0945.jpg"
        className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      />

      <h1 className="text-5xl font-bold">Ananya Rahaman</h1>

      <p className="mt-4 text-gray-400">
        Software Engineer | AI/ML | Data Engineer
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <a href="/Ananya_Rahaman_SE.pdf" className="bg-blue-500 px-6 py-2 rounded">
          Resume
        </a>
        <a href="/Do_LLMs_Really_Understand_SQL.pdf" className="border px-6 py-2 rounded">
          Thesis
        </a>
      </div>

    </motion.section>
  );
}
