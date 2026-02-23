import Section from "../components/section";

export default function EducationSection() {
    const education = [
        {
            image: "/assets/amikom.png",
            degree: "Associate Degree in Information Management",
            institution: "Universitas Amikom Yogyakarta",
            start: "Sep 2022",
            end: "Jul 2025",
            description: "Engaged in hands-on practical experience through laboratory work and real-world projects, focusing on developing systematic problem-solving skills in information systems."
        },
        {
            image: "/assets/smk.jpg", 
            degree: "Computer and Network Engineering",
            institution: "SMK Negeri 2 Yogyakarta",
            start: "Jul 2019",
            end: "Jun 2022",
            description: "Gained a solid foundation in networking infrastructure, hardware troubleshooting, and technical logic through specialized vocational training."
        }
    ];

    return (
        <Section title="Education">
            <div className="space-y-6">
                {education.map((edu, index) => (
                    <div key={index} className="w-full border border-gray-200 p-6 rounded-xl">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <img
                                        src={edu.image}
                                        alt={edu.institution}
                                        width={25}
                                        height={25}
                                        className="size-5.5"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {edu.degree}
                                    </h3>
                                    <div>{edu.institution}</div>
                                </div>
                            </div>
                            <div>{edu.start} - {edu.end}</div>
                        </div>
                        <p className="mt-6 text-gray-500">
                            {edu.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}