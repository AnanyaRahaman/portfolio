import React from 'react';
import Section from "../components/Section";

export default function Publications() {
  return (
    <Section id="publications" title="Publications">

      <div className="space-y-6 text-gray-300">

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-lg font-semibold text-white">
            Evaluating SQL Understanding in Large Language Models
          </h3>
          <p className="text-sm">EDBT 2025</p>
          <p className="mt-2">
            Research on evaluating LLM capabilities in SQL understanding,
            including syntax correctness, query equivalence, and performance prediction.
          </p>
          <a href="#" className="text-blue-400 hover:underline mt-2 inline-block">
            View Paper
          </a>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-lg font-semibold text-white">
            IoT Based Smart Drain Monitoring System with Alert Messages
          </h3>
          <p className="text-sm">IHCI 2020</p>
          <p className="mt-2">
            Developed an IoT-based system for monitoring drainage systems and sending alerts
            using sensors and real-time communication.
          </p>
          <a href="#" className="text-blue-400 hover:underline mt-2 inline-block">
            View Paper
          </a>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-lg font-semibold text-white">
            Design and Implementation of a Safety Device for Emergency Situations
          </h3>
          <p className="text-sm">IHCI 2020</p>
          <p className="mt-2">
            Designed an emergency safety device using Arduino and GSM module to send alerts
            and location information during critical situations.
          </p>
          <a href="#" className="text-blue-400 hover:underline mt-2 inline-block">
            View Paper
          </a>
        </div>

      </div>

    </Section>
  );
}
