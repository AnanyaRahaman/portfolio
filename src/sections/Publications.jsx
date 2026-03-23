import React from 'react';
import Section from "../components/Section";

export default function Publications() {
  return (
    <Section id="publications" title="Publications">

      <div className="space-y-6 text-gray-300">

        {/* Paper 1 */}
        <div className="bg-gray-800 p-5 rounded-xl">
          <h3 className="text-lg font-semibold text-white">
            Evaluating SQL Understanding in Large Language Models
          </h3>

          <p className="text-sm text-gray-400">EDBT 2025</p>

          <p className="mt-2">
            This research evaluates how large language models understand SQL,
            focusing on tasks such as syntax error detection, query equivalence,
            and query performance prediction across multiple datasets.
          </p>

          <a
            href="https://openproceedings.org/2025/conf/edbt/paper%2D211.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline mt-2 inline-block"
          >
            View Paper →
          </a>
        </div>

        {/* Paper 2 */}
        <div className="bg-gray-800 p-5 rounded-xl">
          <h3 className="text-lg font-semibold text-white">
            IoT Based Smart Drain Monitoring System with Alert Messages
          </h3>

          <p className="text-sm text-gray-400">IHCI 2020</p>

          <p className="mt-2">
            Developed an IoT-based drainage monitoring system using sensors to
            detect water levels and send real-time alerts, helping prevent
            overflow and urban flooding.
          </p>

          <a
            href="https://www.researchgate.net/publication/349066981_An_IOT_Based_Smart_Drain_Monitoring_System_with_Alert_Messages"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline mt-2 inline-block"
          >
            View Paper →
          </a>
        </div>

        {/* Paper 3 */}
        <div className="bg-gray-800 p-5 rounded-xl">
          <h3 className="text-lg font-semibold text-white">
            Design and Implementation of a Safety Device for Emergency Situations
          </h3>

          <p className="text-sm text-gray-400">IHCI 2020</p>

          <p className="mt-2">
            Designed a safety device using Arduino and GSM module that sends
            emergency alerts and location data to predefined contacts during
            critical situations.
          </p>

          <a
            href="https://www.researchgate.net/publication/349065909_Design_and_Implementation_of_a_Safety_Device_for_Emergency_Situations_Using_Arduino_and_GSM_Module"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline mt-2 inline-block"
          >
            View Paper →
          </a>
        </div>

      </div>

    </Section>
  );
}
