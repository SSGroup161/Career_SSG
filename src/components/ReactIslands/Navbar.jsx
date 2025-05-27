import React, { useEffect, useState, useRef } from "react";
import { Drawer } from "antd";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCouture, setIsCouture] = useState(false);
    const [showCatalogDropdown, setShowCatalogDropdown] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [currentPath, setCurrentPath] = useState("");
    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    useEffect(() => {
        setCurrentPath(window.location.pathname);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsBrandOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const showCouture = () => {
        setIsCouture(true);
    };
    const onCoutureClose = () => {
        setIsCouture(false);
    };

    return (
        <>
            <Drawer
                title="Menu"
                width={320}
                closable
                placement="right"
                onClose={onCoutureClose}
                open={isCouture}
                className="z-[9999]"
            >
                <div className="w-full h-full flex flex-col items-center justify-between">
                    <div className="w-full flex flex-col">
                        <a
                            href="https://ssgroup.id"
                            className={`font-poppins text-lg cursor-pointer py-2 transition duration-300 ease-in-out`}
                        >
                            <h2 className="text-black hover:text-primary">
                                Home
                            </h2>
                        </a>
                        <a
                            href="https://ssgroup.id/about"
                            className={`font-poppins text-lg cursor-pointer py-2 transition duration-300 ease-in-out`}
                        >
                            <h2 className="text-black hover:text-primary">
                                About
                            </h2>
                        </a>
                        <a
                            href="https://ssgroup.id/news"
                            className={`font-poppins text-lg cursor-pointer py-2 transition duration-300 ease-in-out`}
                        >
                            <h2 className="text-black hover:text-primary">
                                News
                            </h2>
                        </a>
                        <a
                            href="/"
                            className={`font-poppins text-lg cursor-pointer py-2 transition duration-300 ease-in-out ${
                                currentPath === "/"
                                    ? "text-primary font-semibold"
                                    : ""
                            }`}
                        >
                            <h2 className="text-black hover:text-primary">
                                Career
                            </h2>
                        </a>
                        {/* Catalog Section */}
                        <div
                            onMouseEnter={() => setShowSubmenu(true)}
                            onMouseLeave={() => setShowSubmenu(false)}
                        >
                            <h2
                                className={`font-poppins text-lg cursor-pointer py-2 transition duration-300 ease-in-out`}
                            >
                                Brand
                            </h2>
                            <div
                                className={`ms-4 flex flex-col gap-1 overflow-hidden transition-all duration-500 ${
                                    showSubmenu
                                        ? "max-h-32 opacity-100 translate-y-0"
                                        : "max-h-0 opacity-0 -translate-y-4"
                                }`}
                            >
                                <a
                                    href="https://ssgroup.id/brand/ss-skin"
                                    className="py-1 font-poppins cursor-pointer"
                                >
                                    <h2 className="text-black hover:text-primary transition-all duration-300 ease-in-out">
                                        SS Skin
                                    </h2>
                                </a>
                                <a
                                    href="https://ssgroup.id/brand/ss-your-makeup"
                                    className="py-1 font-poppins cursor-pointer"
                                >
                                    <h2 className="text-black hover:text-primary transition-all duration-300 ease-in-out">
                                        SS Your Makeup
                                    </h2>
                                </a>
                                <a
                                    href="https://ssgroup.id/brand/shellasaukia-co"
                                    className="py-1 font-poppins cursor-pointer"
                                >
                                    <h2 className="text-black hover:text-primary transition-all duration-300 ease-in-out">
                                        Shellasaukia.co
                                    </h2>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col  items-center justify-center">
                        <img
                            src="/SSGLandscape.svg"
                            alt="SSGroup"
                            loading="lazy"
                            className="w-50"
                        />
                        <p className="text-center font-poppins text-xs mt-1">
                            © Copyright 2025 PT Abil Mannaf Perkasa, All Rights
                            Reserved
                        </p>
                    </div>
                </div>
            </Drawer>
            <section className="fixed top-0 w-full z-50">
                <div className="w-full h-10 bg-primary md:flex items-center hidden md:px-10 lg:px-28">
                    <div className="container m-auto flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-white text-xs">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                >
                                    <path
                                        d="M14.625 11.1743L17.267 12.7503C17.5329 12.9095 17.743 13.1472 17.8683 13.4307C17.9937 13.7141 18.0281 14.0295 17.967 14.3333C17.8483 14.9413 17.606 15.5184 17.2552 16.029C16.9044 16.5396 16.4525 16.9727 15.9276 17.3015C15.4026 17.6304 14.8157 17.848 14.2033 17.9408C13.5908 18.0337 12.9658 17.9998 12.367 17.8413C9.44783 17.0411 6.78723 15.4949 4.64676 13.3548C2.50629 11.2147 0.959669 8.55433 0.158969 5.63533C0.000483319 5.03656 -0.0334137 4.41162 0.0593763 3.79922C0.152166 3.18682 0.369668 2.59998 0.698417 2.07503C1.02717 1.55008 1.46017 1.0982 1.97061 0.74735C2.48106 0.396503 3.05808 0.154162 3.66597 0.0353293H3.68197C3.98716 -0.0260738 4.30389 0.00899631 4.58825 0.135678C4.87261 0.262359 5.11051 0.474374 5.26897 0.742329L6.83297 3.38233C7.09824 3.83427 7.18045 4.37061 7.06274 4.88125C6.94503 5.3919 6.63632 5.83812 6.19997 6.12833L4.54297 7.23333C5.71588 10.0434 7.94671 12.2796 10.754 13.4593L11.869 11.7943C12.1615 11.3577 12.6105 11.05 13.1233 10.9346C13.6361 10.8192 14.1736 10.905 14.625 11.1743Z"
                                        fill="white"
                                    />
                                </svg>
                                <a
                                    href="https://wa.me/6285121045083
"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    +6285121045083
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-white text-xs">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M18 5.00022H5.99998C5.59247 4.94208 5.17703 4.9796 4.78653 5.1098C4.39604 5.24 4.04121 5.45932 3.75014 5.75039C3.45907 6.04145 3.23976 6.39628 3.10955 6.78678C2.97935 7.17727 2.94184 7.59272 2.99998 8.00022V17.0002C2.94184 17.4077 2.97935 17.8232 3.10955 18.2137C3.23976 18.6042 3.45907 18.959 3.75014 19.2501C4.04121 19.5411 4.39604 19.7604 4.78653 19.8906C5.17703 20.0208 5.59247 20.0584 5.99998 20.0002H18C18.4075 20.0584 18.8229 20.0208 19.2134 19.8906C19.6039 19.7604 19.9587 19.5411 20.2498 19.2501C20.5409 18.959 20.7602 18.6042 20.8904 18.2137C21.0206 17.8232 21.0581 17.4077 21 17.0002V8.00022C21.0581 7.59272 21.0206 7.17727 20.8904 6.78678C20.7602 6.39628 20.5409 6.04145 20.2498 5.75039C19.9587 5.45932 19.6039 5.24 19.2134 5.1098C18.8229 4.9796 18.4075 4.94208 18 5.00022ZM17.941 9.60622L13.029 13.1792C12.73 13.3969 12.3698 13.5142 12 13.5142C11.6302 13.5142 11.2699 13.3969 10.971 13.1792L6.05898 9.60622C5.9794 9.54831 5.912 9.47529 5.86064 9.39133C5.80928 9.30737 5.77496 9.21412 5.75964 9.11689C5.74431 9.01967 5.74829 8.92038 5.77134 8.8247C5.79439 8.72901 5.83606 8.6388 5.89398 8.55922C5.95189 8.47964 6.02491 8.41225 6.10887 8.36088C6.19283 8.30952 6.28608 8.2752 6.3833 8.25988C6.48053 8.24456 6.57982 8.24854 6.6755 8.27159C6.77119 8.29464 6.8614 8.33631 6.94098 8.39422L11.854 11.9662C11.8964 11.9971 11.9475 12.0138 12 12.0138C12.0524 12.0138 12.1036 11.9971 12.146 11.9662L17.059 8.39422C17.2197 8.27726 17.4203 8.22894 17.6166 8.25988C17.813 8.29082 17.989 8.3985 18.106 8.55922C18.2229 8.71994 18.2713 8.92054 18.2403 9.11689C18.2094 9.31324 18.1017 9.48926 17.941 9.60622Z"
                                        fill="white"
                                    />
                                </svg>
                                <a
                                    href="mailto:info@ssgroup.id"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    info@ssgroup.id
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-white text-xs">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M12 2.5C9.74647 2.50265 7.586 3.39903 5.99252 4.99252C4.39903 6.586 3.50265 8.74647 3.5 11C3.5 15.983 8.129 19.041 11.192 21.064L11.723 21.416C11.8051 21.4706 11.9014 21.4997 12 21.4997C12.0986 21.4997 12.1949 21.4706 12.277 21.416L12.808 21.064C15.871 19.041 20.5 15.983 20.5 11C20.4974 8.74647 19.601 6.586 18.0075 4.99252C16.414 3.39903 14.2535 2.50265 12 2.5ZM12 13.5C11.5055 13.5 11.0222 13.3534 10.6111 13.0787C10.2 12.804 9.87952 12.4135 9.6903 11.9567C9.50108 11.4999 9.45157 10.9972 9.54804 10.5123C9.6445 10.0273 9.8826 9.58186 10.2322 9.23223C10.5819 8.8826 11.0273 8.6445 11.5123 8.54804C11.9972 8.45157 12.4999 8.50108 12.9567 8.6903C13.4135 8.87952 13.804 9.19995 14.0787 9.61107C14.3534 10.0222 14.5 10.5055 14.5 11C14.5 11.663 14.2366 12.2989 13.7678 12.7678C13.2989 13.2366 12.663 13.5 12 13.5Z"
                                        fill="white"
                                    />
                                </svg>
                                <a
                                    href="https://maps.app.goo.gl/PrVHw53dGWDquwyU8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Jl. K.H. Wahid Hasyim 161, Jakarta Pusat
                                    10240.
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://www.linkedin.com/company/ssgroup1/posts/?feedView=all"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="SS Group LinkedIn"
                            >
                                <div className="p-1 bg-white rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.429 8.969H13.143V10.819C13.678 9.755 15.05 8.799 17.111 8.799C21.062 8.799 22 10.917 22 14.803V22H18V15.688C18 13.475 17.465 12.227 16.103 12.227C14.214 12.227 13.429 13.572 13.429 15.687V22H9.429V8.969ZM2.57 21.83H6.57V8.799H2.57V21.83ZM7.143 4.55C7.14315 4.88528 7.07666 5.21724 6.94739 5.52659C6.81812 5.83594 6.62865 6.11651 6.39 6.352C6.15064 6.59012 5.86671 6.77874 5.55442 6.90708C5.24214 7.03543 4.90763 7.10098 4.57 7.1C3.8896 7.09847 3.23691 6.83029 2.752 6.353C2.5143 6.11665 2.32553 5.83575 2.1965 5.52637C2.06746 5.21699 2.00069 4.88521 2 4.55C2 3.873 2.27 3.225 2.753 2.747C3.2367 2.26788 3.89018 1.99938 4.571 2C5.253 2 5.907 2.269 6.39 2.747C6.873 3.225 7.143 3.873 7.143 4.55Z"
                                            fill="#D2AC47"
                                        />
                                    </svg>
                                </div>
                            </a>
                            <a
                                href="https://www.instagram.com/ssgroupindonesia/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="SS Group Instagram"
                            >
                                <div className="p-1 bg-white rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M12 8.75C11.138 8.75 10.3114 9.09241 9.7019 9.7019C9.09241 10.3114 8.75 11.138 8.75 12C8.75 12.862 9.09241 13.6886 9.7019 14.2981C10.3114 14.9076 11.138 15.25 12 15.25C12.862 15.25 13.6886 14.9076 14.2981 14.2981C14.9076 13.6886 15.25 12.862 15.25 12C15.25 11.138 14.9076 10.3114 14.2981 9.7019C13.6886 9.09241 12.862 8.75 12 8.75Z"
                                            fill="#D2AC47"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.77 3.08177C10.246 2.6967 13.754 2.6967 17.23 3.08177C19.129 3.29377 20.66 4.78877 20.883 6.69477C21.2949 10.2194 21.2949 13.7801 20.883 17.3048C20.66 19.2108 19.129 20.7058 17.231 20.9188C13.7546 21.3039 10.2464 21.3039 6.77 20.9188C4.871 20.7058 3.34 19.2108 3.117 17.3058C2.70498 13.7808 2.70498 10.2198 3.117 6.69477C3.34 4.78877 4.871 3.29377 6.77 3.08177ZM17 5.99977C16.7348 5.99977 16.4804 6.10513 16.2929 6.29267C16.1054 6.4802 16 6.73456 16 6.99977C16 7.26499 16.1054 7.51934 16.2929 7.70688C16.4804 7.89442 16.7348 7.99977 17 7.99977C17.2652 7.99977 17.5196 7.89442 17.7071 7.70688C17.8946 7.51934 18 7.26499 18 6.99977C18 6.73456 17.8946 6.4802 17.7071 6.29267C17.5196 6.10513 17.2652 5.99977 17 5.99977ZM7.25 11.9998C7.25 10.74 7.75044 9.53181 8.64124 8.64102C9.53204 7.75022 10.7402 7.24977 12 7.24977C13.2598 7.24977 14.468 7.75022 15.3588 8.64102C16.2496 9.53181 16.75 10.74 16.75 11.9998C16.75 13.2596 16.2496 14.4677 15.3588 15.3585C14.468 16.2493 13.2598 16.7498 12 16.7498C10.7402 16.7498 9.53204 16.2493 8.64124 15.3585C7.75044 14.4677 7.25 13.2596 7.25 11.9998Z"
                                            fill="#D2AC47"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className={`md:px-20 lg:px-28 m-auto w-full h-20 flex items-center justify-between p-10 transition-all  duration-500 ease-in-out ${
                        isScrolled
                            ? "bg-opacity-100 shadow-md bg-white"
                            : "bg-opacity-0"
                    } `}
                >
                    <a href="https://ssgroup.id">
                        <img
                            src="/SSGLandscape.svg"
                            alt="SS Group"
                            loading="eager"
                            className="w-32 cursor-pointer"
                        />
                    </a>
                    <ul className="gap-8 font-poppins hidden md:flex">
                        <li>
                            <a
                                href="https://ssgroup.id"
                                className={`cursor-pointer transition duration-300 ease-in-out text-black hover:text-primary `}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://ssgroup.id/about"
                                className={`cursor-pointer transition duration-300 ease-in-out text-black hover:text-primary`}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://ssgroup.id/news"
                                className={`cursor-pointer transition duration-300 ease-in-out text-black hover:text-primary`}
                            >
                                News
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className={`cursor-pointer transition duration-300 ease-in-out text-black hover:text-primary  ${
                                    currentPath.startsWith("/")
                                        ? "text-primary font-semibold"
                                        : ""
                                }`}
                            >
                                Career
                            </a>
                        </li>
                        <li className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsBrandOpen((prev) => !prev)}
                                className="flex items-center gap-2 cursor-pointer transition duration-300 ease-in-out text-black hover:text-primary focus:outline-none"
                            >
                                <span className={`$`}>Brand</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className={`transition-transform duration-300 ${
                                        isBrandOpen ? "rotate-180" : "rotate-0"
                                    }`}
                                >
                                    <path
                                        d="M14.1668 8.33333L10.0002 12.5L5.8335 8.33333"
                                        stroke="#292929"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            <ul
                                className={`absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-40 overflow-hidden transition-all duration-300 origin-top ${
                                    isBrandOpen
                                        ? "opacity-100 scale-y-100 visible"
                                        : "opacity-0 scale-y-0 invisible"
                                }`}
                            >
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    <a
                                        href="https://ssgroup.id/brand/ss-skin"
                                        className="block w-full h-full"
                                        aria-label="Go to SS Skin brand page"
                                    >
                                        SS Skin
                                    </a>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    <a
                                        href="https://ssgroup.id/brand/ss-your-makeup"
                                        className="block w-full h-full"
                                        aria-label="Go to SS Your Makeup brand page"
                                    >
                                        SS Your Makeup
                                    </a>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    <a
                                        href="https://ssgroup.id/brand/shellasaukia-co"
                                        className="block w-full h-full"
                                        aria-label="Go to Shella Saukia brand page"
                                    >
                                        ShellaSaukia.co
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <img
                        src="/SSGLandscape.svg"
                        alt="SS Group"
                        loading="eager"
                        className="w-32 opacity-0 hidden lg:block"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="md:hidden cursor-pointer"
                        onClick={showCouture}
                    >
                        <path
                            d="M3 6H21M3 12H21M3 18H21"
                            stroke="#C5A76A"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </section>
        </>
    );
};

export default Navbar;
