import React from 'react';
import Section from "../components/Section";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">

      <div className="grid md:grid-cols-2 gap-6">

        <Link to="/project/tutor-connect">
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="bg-gray-800 p-6 rounded">Tutor Connect</div>
          </motion.div>
        </Link>

        <Link to="/project/smartcart">
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="bg-gray-800 p-6 rounded">SmartCart</div>
          </motion.div>
        </Link>

        <Link to="/project/llm-sql">
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="bg-gray-800 p-6 rounded">LLMs SQL</div>
          </motion.div>
        </Link>

      </div>

    </Section>
  );
}
