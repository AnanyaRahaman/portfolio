import React from 'react';
import { useParams } from "react-router-dom";
import Section from "../components/Section";

const projectData = {
  "tutor-connect": {
    title: "Tutor Connect – AI Driven Tutor Matching Platform",
    description:
      "An intelligent platform that matches students with suitable tutors using AI-based recommendation techniques.",
    features: [
      "AI-based tutor recommendation system",
      "User authentication and profile management",
      "Search and filter tutors by subjects and availability",
      "Real-time matching logic",
      "Scalable microservices architecture"
    ],
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python (ML model)",
      "REST APIs"
    ],
    details:
      "Built a full-stack application integrating machine learning for personalized tutor recommendations. Designed backend APIs and implemented scalable architecture to handle multiple users."
  },

  "smartcart": {
    title: "SmartCart – AI Intelligent Retail Microservices Platform",
    description:
      "A microservices-based retail system integrating AI for smart recommendations and optimized shopping experience.",
    features: [
      "Product recommendation engine",
      "Microservices architecture",
      "Shopping cart and checkout system",
      "Inventory management",
      "API gateway integration"
    ],
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "Docker",
      "MongoDB",
      "Redis"
    ],
    details:
      "Designed and implemented a distributed system using microservices. Integrated AI-driven recommendation engine and optimized performance using caching mechanisms."
  },

  "llm-sql": {
    title: "LLMs for SQL Understanding",
    description:
      "Research project analyzing how large language models understand SQL queries.",
    features: [
      "Syntax error detection",
      "Query equivalence evaluation",
      "SQL complexity analysis",
      "Benchmarking LLM performance",
      "Dataset analysis (SDSS, Spider)"
    ],
    tech: [
      "Python",
      "SQL",
      "OpenAI API",
      "Pandas",
      "Machine Learning"
    ],
    details:
      "Conducted research on evaluating LLM capabilities in SQL understanding. Implemented experiments to analyze query correctness, performance prediction, and semantic equivalence."
  },

  "query-performance": {
    title: "Query Performance Prediction",
    description:
      "Machine learning model to predict execution time of SQL queries.",
    features: [
      "Feature extraction from SQL queries",
      "Performance prediction model",
      "Handling complex joins and nested queries",
      "Model evaluation and optimization"
    ],
    tech: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "SQL",
      "Pandas"
    ],
    details:
      "Built ML models to predict query execution time based on query structure. Focused on improving database efficiency using predictive analytics."
  },

  "data-pipeline": {
    title: "Data Pipeline Automation",
    description:
      "Automated ETL pipeline for large-scale data processing and transformation.",
    features: [
      "ETL pipeline design",
      "Data extraction and transformation",
      "Workflow scheduling",
      "Scalable processing",
      "Cloud integration"
    ],
    tech: [
      "Python",
      "Apache Airflow",
      "PySpark",
      "AWS",
      "SQL"
    ],
    details:
      "Developed a scalable data pipeline to automate data workflows. Integrated cloud services and optimized performance for handling large datasets."
  }
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <p className="text-white p-10">Project not found</p>;

  return (
    <Section id="project-details" title={project.title}>

      <p className="text-gray-300 mb-4">{project.description}</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul className="list-disc ml-6 text-gray-400">
        {project.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <ul className="list-disc ml-6 text-gray-400">
        {project.tech.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Details</h3>
      <p className="text-gray-400">{project.details}</p>

    </Section>
  );
}
