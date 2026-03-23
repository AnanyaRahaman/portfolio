import React from 'react';
import { motion } from "framer-motion";

export default function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="max-w-5xl mx-auto py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      {children}
    </motion.section>
  );
}
