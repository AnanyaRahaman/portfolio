
import React from "react";
import Section from "../components/Section";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="space-y-4 text-gray-300">
        <p>
          I am a Computer Science graduate with a Bachelor’s degree in Computer
          Science and Engineering from BRAC University, Dhaka, Bangladesh, and a
          research-based Master’s degree in Computer Science from the University
          of Western Ontario, London, Ontario, Canada.
        </p>

        <p>
          My academic and professional work focuses on Machine Learning, Artificial
          Intelligence, Large Language Models, and SQL understanding. My research
          explores how large language models understand SQL, including syntax error
          detection, query equivalence, and query performance prediction.
        </p>

        <p>
          I have worked as a Lecturer at Primeasia University, a Graduate Research
          Assistant and Teaching Assistant at the University of Western Ontario,
          and a Software Engineer at Therap. These experiences helped me build a
          strong foundation in software engineering, full-stack development,
          research, teaching, and AI-driven problem solving.
        </p>
        
      </div>
    </Section>
  );
}
