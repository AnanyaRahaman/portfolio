import React from "react";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">

      <div className="grid md:grid-cols-2 gap-6">

        {/* Project 1 */}
        <motion.div whileHover={{ scale: 1.03 }}>
          <div className="bg-gray-800 p-6 rounded-xl space-y-3">

            <h3 className="text-xl font-semibold text-white">
              Tutor Connect – AI Driven Tutor Matching Platform
            </h3>

            <p className="text-gray-400 text-sm">
              Developed a full-stack AI-powered platform that connects students with
              tutors based on subject expertise, availability, and preferences.
              Implemented recommendation logic to improve matching accuracy and
              user experience. Designed scalable backend APIs and user authentication
              system. The platform supports real-time filtering and profile management,
              making it efficient for both students and tutors.
            </p>

            <p className="text-sm text-gray-500">
              Tech: React, Node.js, Express, MongoDB, PostgreSQL, Django, Python (ML-Random Forest), Stripe, WebSockets, Docker, LangChain, RAG, and OpenAI APIs.

            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/AnanyaRahaman/tutor-connect-AI-Driven-Tutor-Matching-Platform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub →
              </a>

              <Link to="/project/tutor-connect" className="text-green-400 hover:underline">
                Details →
              </Link>
            </div>

          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div whileHover={{ scale: 1.03 }}>
          <div className="bg-gray-800 p-6 rounded-xl space-y-3">

            <h3 className="text-xl font-semibold text-white">
              SmartCart – AI Intelligent Retail Platform
            </h3>

            <p className="text-gray-400 text-sm">
              Built a scalable microservices-based retail system integrating AI-driven
              product recommendations. Designed independent services for inventory,
              cart, and user management, improving modularity and scalability.
              Implemented caching using Redis to optimize performance and reduce
              response time. The system simulates real-world e-commerce workflows
              with high efficiency and extensibility.
            </p>

            <p className="text-sm text-gray-500">
              Tech: React, Node.js, TypeScript, Python (FastAPI), PostgreSQL, MongoDB, Redis, Apache Kafka, Docker, Kubernetes, RAG, and LangChain-based AI services.

            </p>

            <div className="flex gap-4">
              <a href="https://github.com/AnanyaRahaman/SmartCart-AI-Intelligent-Retail-Microservices-Platform" target="_blank" className="text-blue-400 hover:underline">
                GitHub →
              </a>

              <Link to="/project/smartcart" className="text-green-400 hover:underline">
                Details →
              </Link>
            </div>

          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div whileHover={{ scale: 1.03 }}>
          <div className="bg-gray-800 p-6 rounded-xl space-y-3">

            <h3 className="text-xl font-semibold text-white">
              LLMs for SQL Understanding
            </h3>

            <p className="text-gray-400 text-sm">
              Conducted a research-driven project to evaluate how large language models
              understand SQL queries. Focused on tasks such as syntax error detection,
              query equivalence, and semantic correctness. Built evaluation pipelines
              using real-world datasets like SDSS and Spider. The project highlights
              strengths and limitations of LLMs in structured query understanding.
            </p>

            <p className="text-sm text-gray-500">
              Tech: Python, SQL, OpenAI API, Pandas, Scikit-learn, NumPy, Hugging Face Transformers, Hugging Face Datasets, PyTorch
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/AnanyaRahaman/LLMs_SQL_Understanding" target="_blank" className="text-blue-400 hover:underline">
                GitHub →
              </a>

              <Link to="/project/llm-sql" className="text-green-400 hover:underline">
                Details →
              </Link>
            </div>

          </div>
        </motion.div>

        {/* Project 4 */}
        <motion.div whileHover={{ scale: 1.03 }}>
          <div className="bg-gray-800 p-6 rounded-xl space-y-3">

            <h3 className="text-xl font-semibold text-white">
              Query Performance Prediction
            </h3>

            <p className="text-gray-400 text-sm">
              Developed a machine learning model to predict SQL query execution time
              based on query structure and complexity. Extracted features from queries
              such as joins, nesting levels, and aggregation. Trained and evaluated
              models using real-world datasets to classify queries into performance
              categories. This helps optimize database systems and improve query efficiency.
            </p>

            <p className="text-sm text-gray-500">
              Tech: Python, Scikit-learn, XGBoost, SQL, ML Model, BERT
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/AnanyaRahaman/Query-Performance-Prediction" target="_blank" className="text-blue-400 hover:underline">
                GitHub →
              </a>

              <Link to="/project/query-performance" className="text-green-400 hover:underline">
                Details →
              </Link>
            </div>

          </div>
        </motion.div>

        {/* Project 5 */}
        <motion.div whileHover={{ scale: 1.03 }}>
          <div className="bg-gray-800 p-6 rounded-xl space-y-3">

            <h3 className="text-xl font-semibold text-white">
              Data Pipeline Automation
            </h3>

            <p className="text-gray-400 text-sm">
              Designed and implemented an automated ETL pipeline for large-scale data
              ingestion, transformation, and processing. Used workflow orchestration
              tools to schedule and monitor data jobs. Integrated cloud services to
              ensure scalability and reliability. The pipeline improves efficiency in
              handling structured and semi-structured data for analytics and modeling.
            </p>

            <p className="text-sm text-gray-500">
              Tech: Python, Apache Airflow, PySpark, AWS
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/AnanyaRahaman/Data-Pipeline-Automation" target="_blank" className="text-blue-400 hover:underline">
                GitHub →
              </a>

              <Link to="/project/data-pipeline" className="text-green-400 hover:underline">
                Details →
              </Link>
            </div>

          </div>
        </motion.div>

      </div>

    </Section>
  );
}
