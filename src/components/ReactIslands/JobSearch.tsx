"use client";

import { useState, type ReactElement } from "react";
import { Searchbar } from "./Searchbar";
import { motion, AnimatePresence } from "framer-motion";

type Job = {
    title: string;
    location: string;
    department: string;
    level: "Junior" | "Middle" | "Senior";
    contract: "Freelance" | "Internship" | "Full Time";
    brand: string;
    deadline: string;
};

function toSlug(title: string): string {
    return title.toLowerCase().replace(/\s+/g, "-");
}

export function JobSearch(): ReactElement {
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
            department: "IT",
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
            <section className="relative w-full min-h-[60dvh] lg:min-h-[70dvh] bg-[url('/Career-search.jpg')] bg-cover bg-top bg-no-repeat bg-fixed flex items-center justify-center flex-col">
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

                <div className="relative z-10 xl:mt-6 w-full max-w-2xl px-6">
                    <Searchbar
                        placeholders={placeholders}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                </div>
            </section>

            <section className="bg-white py-10 md:py-20 px-6">
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
                                className="grid"
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
                                        className="bg-white hover:bg-neutral-100 transition py-10 px-4 border-b-2 gap-4 md:gap- border-gray-200 cursor-pointer font-poppins flex items-start justify-startmd:justify-between md:items-center flex-col md:flex-row"
                                    >
                                        <div className="min-w-72 max-w-80">
                                            <h2 className="text-lg font-semibold text-neutral-800">
                                                {job.title}
                                            </h2>
                                            <h3 className="text-primary font-medium text-sm">
                                                {job.department}
                                            </h3>
                                        </div>

                                        <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-4">
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
            <section className="w-full pb-20 px-10">
                <div className="container m-auto">
                    <div className="bg-[url('/Banner.png')] bg-cover bg-center md:bg-top bg-no-repeat max-w-5xl h-72 m-auto rounded-2xl overflow-clip">
                        <div className="w-full h-full bg-primary/60 inset-0 flex items-center justify-between p-8 flex-col md:flex-row">
                            <h2 className="text-white font-poppins text-4xl font-medium">
                                See our Stories @SSGroup
                            </h2>
                            <div className="relative group">
                                <a href="/inside-ssgroup">
                                    <button className="relative inline-block p-px font-semibold leading-6 text-white bg-primary shadow-2xl cursor-pointer rounded-lg lg:rounded-2xl shadow-primary transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-amber-400">
                                        <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-amber-300 to-amber-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                                        <span className="relative z-10 block px-6 py-3 rounded-2xl bg-primary">
                                            <div className="relative z-10 flex items-center space-x-3">
                                                <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-white text-xs xl:text-sm 2xl:text-base">
                                                    #InsideSSGroup
                                                </span>
                                            </div>
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
