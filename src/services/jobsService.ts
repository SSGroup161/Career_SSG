export interface Job {
    id_title: string;
    title: string;
    department: string;
    brand: string;
    level: string;
    contract: string;
    location: string;
    skills: string[];
    jobDescription: string;
    responsibilities: string[];
    qualifications: string[];
}

export async function getAllJobs(): Promise<Job[]> {
    return [
        {
            id_title: "live-stream-operator",
            title: "Live Stream Operator",
            department: "E-Commerce",
            brand: "SS Skin",
            level: "Middle",
            contract: "Full Time",
            location: "On Site",
            skills: [
                "Live Streaming",
                "Video Production",
                "AV Equipment Setup",
                "Troubleshooting",
                "OBS",
                "Communication",
            ],
            jobDescription: `This is a full-time on-site role for a Live Streaming Operator. Responsible for managing live streaming sessions, coordinating with the creative team, setting up equipment, monitoring live chat, and ensuring high-quality stream delivery.`,
            responsibilities: [
                "Manage live streaming sessions from start to finish",
                "Coordinate with creative team for content planning",
                "Setup and troubleshoot live streaming equipment",
                "Monitor live chat and audience engagement",
                "Conduct post-session analysis and reporting",
            ],
            qualifications: [
                "Experience with Live Streaming, Video Production, and AV Equipment",
                "Technical skills in troubleshooting and equipment maintenance",
                "Excellent communication and coordination skills",
                "Organizational skills and ability to work under pressure",
                "Experience in beauty, fashion, or personal care is a plus",
            ],
        },
        {
            id_title: "host-live-stream",
            title: "Host Live Stream",
            department: "E-Commerce",
            brand: "SS Skin",
            level: "Middle",
            contract: "Full Time",
            location: "On Site",
            skills: [
                "Live Streaming",
                "Sales",
                "Communication",
                "Training",
                "Customer Service",
            ],
            jobDescription: `Full-time role as Live Streaming Host. Responsible for creating engaging live content, interacting with audience, promoting products, and answering customer queries across multiple platforms.`,
            responsibilities: [
                "Host and manage live streaming sessions",
                "Engage with audiences and answer queries in real-time",
                "Promote products and drive sales",
                "Collaborate with marketing for live content strategies",
                "Maintain energy and professionalism during broadcasts",
            ],
            qualifications: [
                "Excellent communication and customer service skills",
                "Experience in sales and product promotion",
                "Comfortable being on camera",
                "Experience in training or education is a plus",
                "Prior experience with live streaming platforms",
            ],
        },
        {
            id_title: "marketing-specialist",
            title: "Marketing Specialist",
            department: "Marketing",
            brand: "SS Skin",
            level: "Senior",
            contract: "Full Time",
            location: "On Site",
            skills: [
                "Marketing",
                "Sales",
                "Market Research",
                "Strategy",
                "E-Commerce",
                "Campaign",
            ],
            jobDescription: `Full-time role for Marketing Specialist. Will handle tasks like market research, sales support, campaign execution, and strategy development.`,
            responsibilities: [
                "Conduct market research and analysis",
                "Support and execute marketing campaigns",
                "Work with sales and creative team",
                "Develop strategies for product and brand growth",
                "Analyze campaign performance and optimize results",
            ],
            qualifications: [
                "Strong communication and analytical skills",
                "Experience in marketing strategy and campaign planning",
                "Knowledge of beauty or cosmetic industry",
                "Experience in e-commerce or marketplace campaign",
                "Proven track record in increasing awareness or sales",
            ],
        },
    ];
}
