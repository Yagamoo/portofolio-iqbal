import Section from "../components/section";

export default function AboutSection() {
    return (
        <Section title="About">
            <div className="text-sm/6.5 text-gray-600">
                <p>
                    I'm Muh. Iqbal Nur Pamungkas, a Full-stack Developer specializing in the Laravel ecosystem. I am passionate about building comprehensive web applications, from responsive user interfaces to robust and efficient backend architectures.
                </p>
                <p className="mt-5">
                    With Laravel as my core expertise, I am committed to writing clean, maintainable code with a strong focus on performance. I believe that the best technology is one that provides real-world solutions through a seamless and intuitive user experience.
                </p>
            </div>
        </Section>
    );
}