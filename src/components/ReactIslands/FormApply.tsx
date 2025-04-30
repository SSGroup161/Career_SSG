import React, { useState } from "react";
import { scanCV } from "../../utils/scanCV";
import { Spin } from "antd";
import {
    LoadingOutlined,
    CheckCircleOutlined,
    CloseCircleOutlined,
} from "@ant-design/icons";

export default function FormApply() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        domicile: "",
        cv: null as File | null,
        cvLabel: "Attach your CV",
        employee_status: "",
        lastsalary: "",
        exsalary: "",
        linkedin: "",
        portfolio: "",
        portfoliofile: null as File | null,
        portfoliofileName: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        cv: "",
    });

    const [scanning, setScanning] = useState<
        "idle" | "loading" | "success" | "failed"
    >("idle");

    const validate = () => {
        const newErrors = { name: "", email: "", phone: "", cv: "" };

        if (!form.name || form.name.length < 3)
            newErrors.name = "Name must be at least 3 characters.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email))
            newErrors.email = "Invalid email format.";

        if (!form.cv) newErrors.cv = "CV is required.";
        else {
            if (form.cv.size > 10 * 1024 * 1024)
                newErrors.cv = "CV file size must be less than 10MB.";
            if (form.cv.type !== "application/pdf")
                newErrors.cv = "Only PDF files are allowed.";
        }

        setErrors(newErrors);
        return Object.values(newErrors).every((err) => err === "");
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = async (
        e: React.ChangeEvent<HTMLInputElement>,
        type: "cv" | "portfolio"
    ) => {
        const file = e.target.files?.[0] || null;

        if (type === "cv") {
            setForm((prev) => ({
                ...prev,
                cv: file,
                cvLabel: file ? file.name : "Attach your CV",
            }));

            if (file && typeof window !== "undefined") {
                setScanning("loading");
                try {
                    const result = await scanCV(file);
                    setForm((prev) => ({
                        ...prev,
                        name: result.name || prev.name,
                        email: result.email || prev.email,
                        phone: result.phone || prev.phone,
                        domicile: result.domicile || prev.domicile,
                    }));
                    setScanning("success");
                } catch (err) {
                    console.error("CV scan failed:", err);
                    setScanning("failed");
                }
            }
        } else {
            setForm((prev) => ({
                ...prev,
                portfoliofile: file,
                portfoliofileName: file ? file.name : "",
            }));
        }
    };

    const formatCurrency = (value: string) => {
        try {
            const numeric = value.replace(/[^\d]/g, "");
            return numeric
                ? `Rp. ${parseInt(numeric).toLocaleString("id-ID")}`
                : "";
        } catch {
            return "";
        }
    };

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const formatted = formatCurrency(value);
        setForm((prev) => ({ ...prev, [name]: formatted }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form is valid:", form);
        }
    };

    const renderScanStatus = () => {
        if (scanning === "loading") {
            return (
                <Spin indicator={<LoadingOutlined spin />} className="ml-2" />
            );
        } else if (scanning === "success") {
            return (
                <span className="ml-2 text-green-600 flex items-center">
                    <CheckCircleOutlined className="mr-1" /> Scanning Success
                </span>
            );
        } else if (scanning === "failed") {
            return (
                <span className="ml-2 text-red-500 flex items-center">
                    <CloseCircleOutlined className="mr-1" /> Scanning Failed
                </span>
            );
        }
        return null;
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-4 bg-white"
        >
            <div>
                <div className="flex items-center flex-wrap">
                    <label className="mr-2 font-poppins text-sm">
                        {form.cvLabel}
                    </label>
                    <button className="container-btn-file font-poppins text-xs cursor-pointer">
                        <svg
                            height="30"
                            viewBox="0 0 512 512"
                            width="30"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="Layer_2" data-name="Layer 2">
                                <g
                                    id="Portable_Document_Format_File"
                                    data-name="Portable Document Format File"
                                >
                                    <path
                                        d="m457 512h-402a55.06 55.06 0 0 1 -55-55v-402a55.06 55.06 0 0 1 55-55h402a55.06 55.06 0 0 1 55 55v402a55.06 55.06 0 0 1 -55 55z"
                                        fill="#f4433600"
                                    />
                                    <g fill="#fff">
                                        <path d="m209.58 252.58h-6.48v6.68 6.69h6.44a6.68 6.68 0 1 0 0-13.35z" />
                                        <path d="m260.69 252.58h-6.69v17 17.12l6.93-.07c8.44-.15 12.22-8.64 12.22-17 .04-3.96-.87-17.05-12.46-17.05z" />
                                        <path d="m378.51 145.22-58-58.2a20.74 20.74 0 0 0 -14.51-6.02h-148a20.58 20.58 0 0 0 -20.56 20.56v308.88a20.59 20.59 0 0 0 20.56 20.56h206a20.59 20.59 0 0 0 20.56-20.56v-250.69a20.69 20.69 0 0 0 -6.05-14.53zm-168.93 134.38h-6.5v14a6.84 6.84 0 0 1 -13.67 0v-47.85c0-.09 0-.17 0-.26s0-.28 0-.42 0-.29.06-.43v-.23c0-.17.08-.34.13-.51a.74.74 0 0 1 0-.14 5.34 5.34 0 0 1 .18-.52.42.42 0 0 0 0-.1c.07-.17.15-.33.23-.49l.06-.12c.08-.15.16-.29.25-.43l.09-.15.28-.38.12-.16q.16-.19.36-.39a.81.81 0 0 1 .09-.1 5.35 5.35 0 0 1 .5-.45l.06-.05c.16-.13.31-.24.47-.35h.08a5.09 5.09 0 0 1 .5-.3 5.94 5.94 0 0 1 .57-.27 5 5 0 0 1 .61-.22l.62-.16h.13l.53-.08q.34 0 .69 0h13.33a20.35 20.35 0 1 1 0 40.69zm51.62 20.75c-3.86.06-13.54.1-13.95.1a6.8 6.8 0 0 1 -6.81-6.35 6.56 6.56 0 0 1 -.12-1.26v-47a6.83 6.83 0 0 1 6.83-6.85h13.56c15.65 0 26.17 12.37 26.17 30.77-.02 17.43-10.81 30.33-25.68 30.59zm63-38a6.84 6.84 0 1 1 0 13.67h-11v17.56a6.84 6.84 0 0 1 -13.68 0v-47.83a6.84 6.84 0 0 1 6.84-6.84h19.4a6.84 6.84 0 1 1 0 13.67h-12.57v9.81z" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        {form.cvLabel === "Attach your CV"
                            ? "Upload CV"
                            : "Change CV"}
                        <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileChange(e, "cv")}
                            className="file w-32 h-12 bg-slate-200 rounded-2xl "
                        />
                    </button>
                    {renderScanStatus()}
                </div>
                <p
                    className={`text-sm text-red-500 mt-1 font-poppins transition duration-200 ease-in-out ${
                        errors.cv ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {errors.cv}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                    Accepted: PDF only, max size 10MB
                </p>
            </div>

            <div className="mt-8 flex flex-col gap-2">
                <h2 className="font-poppins text-xl font-medium mb-4">
                    Personal Informations
                </h2>
                <div>
                    <label htmlFor="name" className="text-sm font-poppins">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full border-[1px] border-[#cacaca] p-2 rounded-lg mt-2 text-sm focus:border-primary outline-none border- transition duration-200 ease-in-out"
                        value={form.name}
                        onChange={handleChange}
                    />
                    <p
                        className={`text-sm text-red-500 mt-1 font-poppins transition duration-200 ease-in-out ${
                            errors.name ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        {errors.name}
                    </p>
                </div>

                <div>
                    <label htmlFor="email" className="text-sm font-poppins">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full border-[1px] border-[#cacaca] p-2 rounded-lg mt-2 text-sm focus:border-primary outline-none border- transition duration-200 ease-in-out"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <p
                        className={`text-sm text-red-500 mt-1 font-poppins transition duration-200 ease-in-out ${
                            errors.email ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        {errors.email}
                    </p>
                </div>

                <div>
                    <label htmlFor="phone" className="text-sm font-poppins">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="e.g. 81234567890"
                        className="w-full border-[1px] border-[#cacaca] p-2 rounded-lg mt-2 text-sm"
                        value={form.phone}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="domicile" className="text-sm font-poppins">
                        Domicile
                    </label>
                    <input
                        type="text"
                        name="domicile"
                        placeholder="Your Domicile"
                        className="w-full border-[1px] border-[#cacaca] p-2 rounded-lg mt-2 text-sm focus:border-primary outline-none border- transition duration-200 ease-in-out"
                        value={form.domicile}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="mt-8 flex flex-col gap-2">
                <h2 className="font-poppins text-xl font-medium mb-4">
                    Employee Informations
                </h2>
                <div className="flex flex-col gap-4 mt-2">
                    <label className="text-sm font-poppins">
                        Employee Status
                    </label>
                    <div className="flex gap-2">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="employee_status"
                                value="active"
                                checked={form.employee_status === "active"}
                                onChange={handleChange}
                                required
                            />{" "}
                            Active
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="employee_status"
                                value="non-active"
                                checked={form.employee_status === "non-active"}
                                onChange={handleChange}
                                required
                            />{" "}
                            Non-active
                        </label>
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="lastsalary"
                        className="text-sm font-poppins"
                    >
                        Current/Last Salary
                    </label>
                    <input
                        type="text"
                        name="lastsalary"
                        placeholder="In IDR"
                        value={form.lastsalary}
                        onChange={handleCurrencyChange}
                        className="w-full border-[1px] border-[#cacaca] p-2 rounded-lg mt-2 text-sm"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="exsalary" className="text-sm font-poppins">
                        Expected Salary
                    </label>
                    <input
                        type="text"
                        name="exsalary"
                        placeholder="In IDR"
                        value={form.exsalary}
                        onChange={handleCurrencyChange}
                        className="w-full border-[1px] border-[#cacaca] p-2 rounded-lg mt-2 text-sm"
                        required
                    />
                </div>
            </div>

            <div className="mt-8 flex flex-col gap-2">
                <h2 className="font-poppins text-xl font-medium mb-4">
                    Additional Informations
                </h2>
                <div>
                    <label htmlFor="linkedin" className="text-sm font-poppins">
                        LinkedIn Profile
                    </label>
                    <input
                        type="text"
                        name="linkedin"
                        placeholder="linkedin.com/in/username"
                        className="w-full border-[1px] border-[#cacaca] p-2 rounded-lg mt-2 text-sm focus:border-primary outline-none border- transition duration-200 ease-in-out"
                        value={form.linkedin}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="portfolio" className="text-sm font-poppins">
                        Link Portfolio (Opsional)
                    </label>
                    <input
                        type="text"
                        name="portfolio"
                        placeholder="Portfolio Link or Personal Website"
                        className="w-full border-[1px] border-[#cacaca] p-2 rounded-lg mt-2 text-sm focus:border-primary outline-none border- transition duration-200 ease-in-out"
                        value={form.portfolio}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label
                        htmlFor="portfoliofile"
                        className="text-sm font-poppins"
                    >
                        Upload Portfolio (Opsional)
                    </label>
                    <input
                        type="file"
                        name="portfoliofile"
                        placeholder="Portfolio Link or Personal Website"
                        className="w-full border-[1px] border-[#cacaca] p-2 rounded-lg mt-2 text-sm focus:border-primary outline-none border- transition duration-200 ease-in-out"
                        onChange={(e) => handleFileChange(e, "portfolio")}
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-[#C8991B] transition cursor-pointer"
            >
                Apply
            </button>
        </form>
    );
}
