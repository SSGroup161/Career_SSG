"use client";

import { useState } from "react";
import { Searchbar } from "./Searchbar";
import { motion, AnimatePresence } from "framer-motion";

type Job = {
    title: string;
    location: string;
    department: string;
    level: "Junior" | "Middle" | "Senior";
    contract: "Freelance" | "Internship" | "Full Time";
    workplace: "Remote" | "Onsite" | "Hybrid";
    deadline: string;
};

export function JobSearch(): JSX.Element {
    const [search, setSearch] = useState<string>("");

    const placeholders: string[] = [
        "Software Engineer",
        "Product Manager",
        "Graphic Designer",
        "Marketing Officer",
        "Admin Marketplace",
        "Creative Director",
    ];

    const jobs: Job[] = [
        {
            title: "Frontend Developer",
            location: "Jakarta",
            department: "Engineering",
            level: "Junior",
            contract: "Full Time",
            brand: "SS Skin",
            deadline: "2024-12-31",
        },
        {
            title: "UI/UX Designer",
            location: "Bandung",
            department: "Design",
            level: "Middle",
            contract: "Internship",
            brand: "SS Skin",
            deadline: "2024-11-15",
        },
        {
            title: "Digital Marketing Specialist",
            location: "Remote",
            department: "Marketing",
            level: "Senior",
            contract: "Freelance",
            brand: "Shellasaukia.co",
            deadline: "2024-10-10",
        },
        {
            title: "Admin Marketplace",
            location: "Jakarta",
            department: "E-commerce",
            level: "Junior",
            contract: "Full Time",
            brand: "SS Your Makeup",
            deadline: "2024-09-01",
        },
        {
            title: "Creative Director",
            location: "Remote",
            department: "Creative",
            level: "Senior",
            contract: "Full Time",
            brand: "SS Group",
            deadline: "2024-12-01",
        },
    ];

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <main className="w-full min-h-screen">
            <section className="relative w-full min-h-[70dvh] bg-[url('/Career-search.jpg')] bg-cover bg-top bg-no-repeat bg-fixed flex items-center justify-center flex-col">
                <div className="absolute inset-0 bg-primary/60"></div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 pt-20 md:pt-32 max-w-3xl pb-10">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-4 text-base md:text-lg max-w-2xl font-poppins drop-shadow-md"
                    >
                        Discover your potential and grow with us.
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl font-semibold font-poppins leading-tight drop-shadow-lg"
                    >
                        Explore Exciting Career Opportunities with Us Today
                    </motion.h1>
                </div>

                <div className="relative z-10 mt-6 w-full max-w-2xl px-6">
                    <Searchbar
                        placeholders={placeholders}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                </div>
            </section>

            <section className="bg-white py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        {search && (
                            <motion.p
                                key="search-result"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="mb-6 text-sm text-neutral-500"
                            >
                                Result looking for '
                                <span className="font-semibold">{search}</span>'
                            </motion.p>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {filteredJobs.length > 0 ? (
                            <motion.ul
                                key="job-list"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid gap-y-4"
                            >
                                {filteredJobs.map((job, idx) => (
                                    <motion.li
                                        key={job.title + idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: idx * 0.05,
                                        }}
                                        className="bg-white hover:bg-neutral-100 transition py-8 px-4 border-b-2 border-gray-200 cursor-pointer font-poppins grid grid-cols-6 items-center"
                                    >
                                        <div className="col-span-2">
                                            <h2 className="text-lg font-semibold text-neutral-800">
                                                {job.title}
                                            </h2>
                                            <h3 className="text-primary font-medium text-sm">
                                                {job.department}
                                            </h3>
                                        </div>

                                        <div>
                                            <h2 className="text-xs text-neutral-400 uppercase tracking-wide">
                                                Brand
                                            </h2>
                                            <h3 className=" font-medium text-neutral-800">
                                                {job.brand}
                                            </h3>
                                        </div>

                                        <div>
                                            <h2 className="text-xs text-neutral-400 uppercase tracking-wide">
                                                Level
                                            </h2>
                                            <h3 className=" font-medium text-neutral-800">
                                                {job.level}
                                            </h3>
                                        </div>

                                        <div>
                                            <h2 className="text-xs text-neutral-400 uppercase tracking-wide">
                                                Contract
                                            </h2>
                                            <h3 className=" font-medium text-neutral-800">
                                                {job.contract}
                                            </h3>
                                        </div>

                                        <div>
                                            <h2 className="text-xs text-neutral-400 uppercase tracking-wide">
                                                Deadline
                                            </h2>
                                            <h3 className=" font-medium text-neutral-800">
                                                {job.deadline}
                                            </h3>
                                        </div>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        ) : (
                            <motion.p
                                key="no-result"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-center text-neutral-400 text-sm mt-12"
                            >
                                Tidak ditemukan pekerjaan yang sesuai.
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </main>
    );
}
