import Section from "../components/Section";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">

      <div className="space-y-4 text-gray-300">

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-white font-semibold">
            Neural Networks and Deep Learning
          </h3>
          <p>Coursera</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-white font-semibold">
            Improving Deep Neural Networks
          </h3>
          <p>Coursera</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-white font-semibold">
            Structuring Machine Learning Projects
          </h3>
          <p>Coursera</p>
        </div>

      </div>

    </Section>
  );
}