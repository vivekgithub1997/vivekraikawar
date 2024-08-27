import React from 'react'

const About = () => {
    return (
        <section className="w-full h-auto py-8 md:py-6 lg:py-2 bg-black lg:mt-14 sm:mt-auto">
            <div className="container px-4 md:px-6 mt-10">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">

                        {/* about image */}
                        <div className="h-auto w-full max-w-[30rem] aspect-square rounded-full border-2 border-yellow-500 mt-5 overflow-hidden mx-auto md:block hidden">
                            <img src="/profile.png" alt="Profile Picture" className="object-cover w-full h-full" />
                        </div>

                    </div>

                    {/* Right side */}

                    {/* about items */}
                    <div className="space-y-2">
                        <h1 className="text-zinc-50 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter py-2 justify-center items-center mx-1 my-3">
                            About Me
                        </h1>

                        <div className=" text-zinc-50 rounded-lg shadow-lg p-6 max-w-md mx-auto">

                            <div className="space-y-4">
                                <div className="flex flex-row">
                                    <span className="font-semibold w-1/3">Name:</span>
                                    <span className="w-2/3">Vivek Raikawar</span>
                                </div>
                                <div className="flex flex-row">
                                    <span className="font-semibold w-1/3">DOB:</span>
                                    <span className="w-2/3">July 14, 1997</span>
                                </div>
                                <div className="flex flex-row">
                                    <span className="font-semibold w-1/3">Address:</span>
                                    <span className="w-2/3">Chitrakoot, UP</span>
                                </div>
                                <div className="flex flex-row">
                                    <span className="font-semibold w-1/3">Country:</span>
                                    <span className="w-2/3">India</span>
                                </div>
                                <div className="flex flex-row">
                                    <span className="font-semibold w-1/3">Email:</span>
                                    <span className="w-2/3">vivekckt1997@gmail.com</span>
                                </div>
                                <div className="flex flex-row">
                                    <span className="font-semibold w-1/3">Phone:</span>
                                    <span className="w-2/3">+91 6394075862</span>
                                </div>
                                <div className="flex flex-row">
                                    <span className="flex space-x-4 mt-1 sm:mt-0">

                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zM7 19h-3v-10h3v10zM5.5 7.5c-.96 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zM20 19h-3v-5.6c0-1.34-.47-2.26-1.64-2.26-.89 0-1.42.6-1.65 1.18-.08.18-.1.43-.1.68v6h-3s.04-9.74 0-10.75h3v1.52c.4-.61 1.11-1.48 2.71-1.48 1.97 0 3.44 1.29 3.44 4.06v6.65z"
                                            />
                                        </svg>

                                    </span>
                                    <a className="w-2/3 ml-28 text-zinc-50 hover:text-yellow-500"
                                        href="https://www.linkedin.com/in/vivek-raikawar-ckt/" target="_blank"
                                        rel="noopener noreferrer"
                                    >View Linked Profile</a>

                                </div>
                                <div className="flex flex-row">
                                    <span className="flex space-x-4 mt-1 sm:mt-0">

                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.23-.01-.84-.01-1.65-2.79.61-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.73 1.03A9.51 9.51 0 0112 6.8a9.48 9.48 0 012.48.34c1.9-1.3 2.73-1.03 2.73-1.03.54 1.37.2 2.39.1 2.64.63.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.67.92.67 1.85 0 1.33-.01 2.4-.01 2.73 0 .26.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"
                                                clipRule="evenodd"
                                            />
                                        </svg>

                                    </span>
                                    <a className="w-2/3 ml-28 text-zinc-50 hover:text-yellow-500"
                                        href="https://github.com/vivekgithub1997" target="_blank"
                                        rel="noopener noreferrer"
                                    >View GitHub Projects</a>

                                </div>


                            </div>

                            <span className="flex flex-row mt-10 font-semibold md:text-2xl text-yellow-300 ml-10">39 &nbsp;<span className="md:text-2xl text-zinc-50">GitHub Projects</span></span>


                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About