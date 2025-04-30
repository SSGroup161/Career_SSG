import React from "react";
import { toast, Toaster } from "sonner";

interface ShareJobsProps {
    title: string;
}

export default function ShareJobs({ title }: ShareJobsProps) {
    const handleCopy = () => {
        const url = `https://career.ssgroup.id/${title}`;
        navigator.clipboard.writeText(url).then(() => {
            toast.success("Link copied successfully!");
        });
    };

    return (
        <div className="relative group inline-block">
            <Toaster richColors position="top-center" />
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/70 px-3 py-1 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 cursor-pointer">
                Share Job
            </div>

            {/* Button */}
            <button
                type="button"
                onClick={handleCopy}
                className="border border-[#707070] rounded-full p-2 group cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="group-hover:scale-110 transition-all duration-300 ease-in-out"
                >
                    <path
                        d="M7.05039 11.2929L4.93039 13.4139C4.18023 14.1641 3.75879 15.1815 3.75879 16.2424C3.75879 17.3033 4.18023 18.3208 4.93039 19.0709C5.68056 19.8211 6.698 20.2425 7.75889 20.2425C8.81979 20.2425 9.83723 19.8211 10.5874 19.0709L13.4154 16.2429C13.7868 15.8715 14.0815 15.4305 14.2825 14.9452C14.4836 14.4599 14.587 13.9397 14.587 13.4144C14.587 12.8891 14.4836 12.369 14.2825 11.8837C14.0815 11.3983 13.7868 10.9574 13.4154 10.5859L12.3554 11.6459C12.5876 11.8781 12.7718 12.1537 12.8975 12.4571C13.0232 12.7604 13.0879 13.0856 13.0879 13.4139C13.0879 13.7423 13.0232 14.0674 12.8975 14.3708C12.7718 14.6742 12.5876 14.9498 12.3554 15.1819L9.52539 18.0099C9.05389 18.4653 8.42238 18.7173 7.76689 18.7116C7.1114 18.7059 6.48437 18.443 6.02085 17.9795C5.55733 17.516 5.2944 16.8889 5.28871 16.2334C5.28301 15.5779 5.535 14.9464 5.99039 14.4749L8.11039 12.3539L7.05039 11.2929Z"
                        fill="#707070"
                    />
                    <path
                        d="M15.8887 11.6464L18.0097 9.52642C18.4752 9.05694 18.7358 8.42218 18.7345 7.76103C18.7331 7.09989 18.4699 6.4662 18.0025 5.99864C17.5351 5.53107 16.9014 5.2677 16.2403 5.26616C15.5791 5.26462 14.9443 5.52503 14.4747 5.99042L11.6457 8.81842C11.4135 9.05057 11.2293 9.3262 11.1036 9.62955C10.9779 9.93291 10.9132 10.2581 10.9132 10.5864C10.9132 10.9148 10.9779 11.2399 11.1036 11.5433C11.2293 11.8466 11.4135 12.1223 11.6457 12.3544L10.5857 13.4144C10.2143 13.043 9.9196 12.602 9.71856 12.1167C9.51753 11.6314 9.41406 11.1112 9.41406 10.5859C9.41406 10.0606 9.51753 9.54045 9.71856 9.05513C9.9196 8.56982 10.2143 8.12885 10.5857 7.75742L13.4137 4.92942C14.1639 4.17925 15.1813 3.75781 16.2422 3.75781C17.3031 3.75781 18.3205 4.17925 19.0707 4.92942C19.8209 5.67958 20.2423 6.69702 20.2423 7.75792C20.2423 8.81881 19.8209 9.83625 19.0707 10.5864L16.9497 12.7074L15.8887 11.6464Z"
                        fill="#707070"
                    />
                </svg>
            </button>
        </div>
    );
}
