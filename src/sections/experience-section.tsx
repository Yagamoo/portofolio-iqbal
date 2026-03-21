import Section from "../components/section";

export default function ExperienceSection() {
    const experience = [
        {
            image: "/assets/work/Logo-Digital-Kita.png",
            title: "Freelance Developer",
            company: "Digital Kita",
            location: "Yogyakarta",
            start: "Feb 2025",
            end: "Present",
            description: [
                "Consulted directly with clients to identify requirements and translate them into custom functional features.",
                "Developed various websites for MSMEs and individuals, ranging from landing pages to management systems.",
                "Managed end-to-end deployment, bug fixes, and design revisions based on client feedback."
            ],
        },
        {
            image: "/assets/work/sti.jpg",
            title: "Remote Full Stack Developer",
            company: "PT. Sumeh Teknologi Indonesia",
            location: "Yogyakarta",
            start: "Feb 2025",
            end: "Nov 2025",
            description: [
                "Designed system workflows, drafted technical requirement documents, and engineered database schemas.",
                "Built and maintained web systems following predefined architectural patterns and project specifications.",
                "Responsible for delivering progress reports and implementing system revisions through collaborative feedback loops."
            ],
        },
        {
            image: "/assets/work/sgi.jpg",
            title: "IT Programmer",
            company: "PT. Sport Glove Indonesia",
            location: "Yogyakarta",
            start: "Jul 2025",
            end: "Oct 2025",
            description: [
                "Supported the IT infrastructure team with network troubleshooting and hardware maintenance.",
                "Developed internal applications using AppSheet and integrated them with Google Workspace for business automation.",
                "Collaborated with cross-functional teams to ensure smooth operational workflows and provided regular project updates."
            ],
        },
        {
            image: "/assets/work/aji.png",
            title: "Intern Full Stack Developer",
            company: "PT. Astra Juoku Indonesia",
            location: "Yogyakarta",
            start: "Aug 2024",
            end: "Dec 2024",
            description: [
                "Developed digital solutions to modernize manual business processes within the company.",
                "Improved operational efficiency by digitizing the employee training and development tracking system.",
                "Participated in active discussions with Users, Stakeholders, and team members to align development goals."
            ],
        },
        {
            image: "/assets/work/sims.png",
            title: "Intern Support Team",
            company: "Life Media",
            location: "Yogyakarta",
            start: "2021",
            end: "2021",
            description: [
                "Assisted in network installations and provided technical support for internet connectivity issues.",
                "Performed meticulous Fiber Optic cable troubleshooting and maintenance within a team environment.",
                "Conducted signal strength assessments and troubleshooting for wireless network infrastructure."
            ],
        },
    ];

    return (
        <Section title="Experience">
            <div className="space-y-6">
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border border-gray-200 p-6 rounded-xl">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {experience.title}
                                    </h3>
                                    <div>{experience.company}</div>
                                </div>
                            </div>
                            <div>{experience.start} - {experience.end}</div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
                            {experience.description.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}