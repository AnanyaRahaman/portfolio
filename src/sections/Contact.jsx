import Section from "../components/Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">

      <div className="space-y-4 text-gray-300">

        {/* Email */}
        <p>
          📧 Email:{" "}
          <a
            href="mailto:your-email@example.com"
            className="text-blue-400 hover:underline"
          >
            arahaman@uwo.ca
          </a>
        </p>

        {/* GitHub */}
        <p>
          💻 GitHub:{" "}
          <a
            href="https://github.com/AnanyaRahaman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            github.com/yourusername
          </a>
        </p>

        {/* LinkedIn */}
        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/ananya-rahaman-096510198/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            linkedin.com/in/yourprofile
          </a>
        </p>

      </div>

    </Section>
  );
}