import { ArrowRightIcon } from "lucide-react";
import Section from "../components/section";

export default function ProjectsSection() {
    const projects = [
        {
            title: "KrebetKu",
            description: "A comprehensive Booking & Financial Management System for Krebet Tourism Village.",
            image: "/assets/project/krebet.png",
            link: "https://krebetku.com",
        },
        {
            title: "Hiswana App",
            description: "Web-based Membership Information System for Hiswana Migas (Oil & Gas Association).",
            image: "/assets/project/hiswana.png",
            link: "https://hai.hiswanamigas.com",
        },
        {
            title: "People Development Portal",
            description: "An E-Learning platform designed to simplify employee training and digital skill development.",
            image: "/assets/project/portal.png",
            link: "https://www.instagram.com/p/DKCf22_PHdA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
            title: "Prayer Reminder WA Bot",
            description: "An automated WhatsApp notification system that sends real-time prayer schedule reminders based on the user's location/domicile.",
            image: "/assets/project/sholat-reminder.png", 
            link: "https://www.instagram.com/p/DKj8XNTvv5J/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
            title: "Company Profile DigitalKita",
            description: "A professional digital agency company profile showcasing specialized services in IT solutions, software development, and digital transformation with a modern and responsive user interface.",
            image: "/assets/project/sholat-reminder.png", 
            link: "https://compro-digitalkita.vercel.app",
        },
        {
            title: "Company Profile Lumière Clinic",
            description: "A sophisticated digital presence for Lumière Clinic, designed to showcase premium healthcare and aesthetic services with a focus on user trust and professional branding.",
            image: "/assets/project/sholat-reminder.png", 
            link: "https://lumiere-clinic.vercel.app",
        },
    ];

    return (
        <Section title="Projects">
            <div className="flex flex-wrap justify-center items-center gap-4 mr-auto">
                {projects.map((project) => (
                    <div key={project.title} className="hover:-translate-y-0.5 transition duration-300 max-w-75 border border-gray-200 rounded-xl">
                        <img
                            className="rounded-t-xl h-42 object-fit"
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={170}
                        />
                        <div className="p-4">
                            <h3 className="text-base font-medium">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 mt-1">
                                {project.description}
                            </p>
                            <a href={project.link || "#"} 
                                className="group inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-2.5 mt-4 rounded-lg transition-colors"
                                target="_blank"
                            >
                                See more
                                <ArrowRightIcon className="group-hover:translate-x-1 transition-transform ml-2 size-5" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}