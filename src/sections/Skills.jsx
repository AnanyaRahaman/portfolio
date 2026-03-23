import React from 'react';
import Section from "../components/Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">

      <div className="space-y-6 text-gray-300">

        <div>
          <h3 className="text-xl font-semibold text-white">Programming</h3>
          <p>Python, R, SQL, Java, C++, JavaScript, Bash, MATLAB</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Frontend</h3>
          <p>React.js, Next.js, Vue.js, Redux, TailwindCSS, HTML, CSS</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Backend</h3>
          <p>Node.js, Express.js, Spring Boot, REST APIs, Microservices</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Databases</h3>
          <p>MySQL, PostgreSQL, MongoDB, Redis, NoSQL</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">AI / Machine Learning</h3>
          <p>
            LLMs, NLP, Deep Learning, Computer Vision, TensorFlow, PyTorch,
            Scikit-learn, Hugging Face, LangChain, RAG
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Data Engineering</h3>
          <p>
            ETL Pipelines, Apache Airflow, PySpark, Data Warehousing, BigQuery
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Cloud & DevOps</h3>
          <p>
            AWS (S3, EC2, Lambda), GCP, Azure, Docker, Kubernetes, CI/CD,
            GitHub Actions, Jenkins
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Tools & Others</h3>
          <p>
            Git, GitHub, GitLab, Jira, Agile/Scrum, Debugging, Testing (Jest, PyTest)
          </p>
        </div>

      </div>

    </Section>
  );
}
