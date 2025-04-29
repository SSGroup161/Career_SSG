import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//test

const teamData = [
    {
        id: 1,
        name: "Hany Fandiyah",
        title: "Product Manager",
        description: "Project and Product Management",
        course: "MySkill",
        link_course: "https://myskill.id/",
        image: "/Aboutpage/TeamProduct.png",
        link: "https://www.linkedin.com/in/hany-fandiyah-921122169/",
    },
    {
        id: 2,
        name: "Fanny Fandiyah",
        title: "Human Capital and General Affairs Officer",
        description: "SDM Mulai dari Rekrutmen Hingga Terminasi",
        course: "MySkill",
        link_course: "https://myskill.id/",
        image: "/Aboutpage/TeamHR2.png",
        link: "https://www.linkedin.com/in/fanny-fandiyah-329271129/",
    },
    {
        id: 3,
        name: "Agung Satria Susanto",
        title: "Legal Officer",
        description: "Legal Writing Bagi Praktisi Hukum",
        course: "HukumOnline",
        link_course: "https://www.hukumonline.com/",
        image: "/Aboutpage/TeamLegal.png",
        link: "https://www.linkedin.com/in/agung-satria-susanto-22a136290/",
    },
    {
        id: 4,
        name: "Arif Febriansyah",
        title: "IT Manager",
        description: "MTCNA and MTCRE Certification",
        course: "MikroTik",
        link_course: "https://mikrotik.com/",
        image: "/Aboutpage/TeamIT.png",
        link: "https://www.linkedin.com/in/ariffebri/",
    },
    {
        id: 5,
        name: "Reynaldi Ramadhani",
        title: "Human Capital and Legal Manager",
        description: "HR Leadership, Strategic, and Project Management",
        course: "Udemy",
        link_course: "https://udemy.com",
        image: "/Aboutpage/TeamHR.png",
        link: "https://www.linkedin.com/in/reynaldiramadhani/",
    },
];

export default function TeamSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const changeSlide = (direction) => {
        if (isAnimating) return;
        setIsAnimating(true);

        setCurrentIndex((prev) => {
            let newIndex = prev + direction;
            return newIndex >= 0 && newIndex < teamData.length
                ? newIndex
                : prev;
        });
    };

    return (
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center bg-primary rounded-2xl p-0 pb-8 lg:pb-0 xl:pr-20 w-full max-w-7xl mx-auto gap-14 xl:gap-0 px-8 xl:px-0">
            {/* IMAGE SECTION */}
            <div className="relative w-60 h-96 lg:w-96 lg:h-[500px] xl:ml-10 overflow-y-clip">
                <div className="absolute -bottom-20 w-70 h-70 md:w-96 md:h-96 bg-[#292929] rounded-full left-1/2 transform -translate-x-1/2"></div>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={teamData[currentIndex].image}
                        src={teamData[currentIndex].image}
                        alt={teamData[currentIndex].name}
                        className="absolute w-72 md:w-full bottom-0 object-cover rounded-lg bg-transparent scale-x-[-1]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        onAnimationComplete={() => setIsAnimating(false)}
                    />
                </AnimatePresence>
            </div>

            {/* CONTENT SECTION */}
            <div className="flex-1 xl:ml-8 xl:px-10 2xl:px-20">
                {/* SLIDER CONTAINER */}
                <div className="relative mt-8 flex flex-col items-center">
                    {/* CARD CONTENT */}
                    <motion.div
                        key={teamData[currentIndex].id}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -50, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full flex-1 relative"
                    >
                        <div className="flex flex-col gap-16    text-white">
                            <div className="flex flex-col gap-4">
                                <h2 className="font-poppins text-3xl xl:text-5xl">
                                    {teamData[currentIndex].description}
                                </h2>
                                <a
                                    href={teamData[currentIndex].link_course}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>
                                        - by {teamData[currentIndex].course}
                                    </span>
                                </a>
                            </div>
                            <div className="flex flex-col font-poppins items-start gap-2">
                                <a
                                    href={teamData[currentIndex].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium"
                                >
                                    <img
                                        src="/home/LinkedIn.png"
                                        alt="LinkedIn"
                                        className="w-8 h-8"
                                        loading="lazy"
                                    />
                                </a>
                                <div>
                                    <h2 className="font-semibold">
                                        {teamData[currentIndex].name}
                                    </h2>
                                    <h2 className="">
                                        {teamData[currentIndex].title}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex items-start justify-center lg:justify-end w-full gap-4 mt-4 md:mt-8 ">
                        {/* BUTTON LEFT */}
                        <button
                            onClick={() => changeSlide(-1)}
                            disabled={currentIndex === 0 || isAnimating}
                            className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:scale-110 duration-300 ease-in-out transition-all ${
                                currentIndex === 0
                                    ? "bg-primary cursor-not-allowed"
                                    : "bg-white cursor-pointer"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="33"
                                height="33"
                                viewBox="0 0 33 33"
                                fill="none"
                            >
                                <path
                                    d="M26.0253 16.0416L6.02534 16.0098M6.02534 16.0098L13.5381 8.02171M6.02534 16.0098L13.5126 24.0217"
                                    stroke={
                                        currentIndex === 0 ? "white" : "#707070"
                                    }
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        {/* BUTTON RIGHT */}
                        <button
                            onClick={() => changeSlide(1)}
                            disabled={
                                currentIndex === teamData.length - 1 ||
                                isAnimating
                            }
                            className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:scale-110 duration-300 ease-in-out transition-all ${
                                currentIndex === teamData.length - 1
                                    ? "bg-primary cursor-not-allowed"
                                    : "bg-white cursor-pointer"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="33"
                                height="33"
                                viewBox="0 0 33 33"
                                fill="none"
                            >
                                <path
                                    d="M6.02546 16.0416L26.0254 16.0098M26.0254 16.0098L18.5127 8.02171M26.0254 16.0098L18.5382 24.0217"
                                    stroke={
                                        currentIndex === teamData.length - 1
                                            ? "white"
                                            : "#707070"
                                    }
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
