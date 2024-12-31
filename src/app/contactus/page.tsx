'use client'

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-16 p-8 mx-auto max-w-6xl font-[sans-serif]">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 mt-4 text-sm sm:text-base">
                        We value your thoughts and stories. Reach out to share your ideas!
                    </p>
                    <div className="mt-12">
                        <h2 className="text-gray-700 text-lg font-semibold">Email</h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div className="bg-gradient-to-r from-teal-400 to-purple-500 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        fill="white"
                                        viewBox="0 0 479.058 479.058"
                                    >
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                        />
                                    </svg>
                                </div>
                                <a href="mailto:info@example.com" className="text-gray-600 hover:text-purple-500 transition-colors text-sm ml-4">
                                    <small className="block">Mail</small>
                                    <strong>info@example.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-gray-700 text-lg font-semibold">Socials</h2>
                        <ul className="flex mt-4 space-x-4">
                            {['facebook', 'linkedin', 'instagram'].map((social) => (
                                <li key={social} className="bg-gradient-to-r from-teal-400 to-purple-500 h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity">
                                    <a href={`https://www.${social}.com/`} className="text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20px"
                                            height="20px"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            {social === 'facebook' && (
                                                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                                            )}
                                            {social === 'linkedin' && (
                                                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                                            )}
                                            {social === 'instagram' && (
                                                <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C9.239 7 7 9.239 7 12C7 14.761 9.239 17 12 17C14.761 17 17 14.761 17 12C17 9.239 14.761 7 12 7ZM18.5 6.75C18.5 6.33579 18.1642 6 17.75 6C17.3358 6 17 6.33579 17 6.75C17 7.16421 17.3358 7.5 17.75 7.5C18.1642 7.5 18.5 7.16421 18.5 6.75ZM12 9C13.657 9 15 10.343 15 12C15 13.657 13.657 15 12 15C10.343 15 9 13.657 9 12C9 10.343 10.343 9 12 9Z" />
                                            )}
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <form className="space-y-4 sm:space-y-6">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full rounded-md py-3 px-4 bg-white border border-gray-200 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-md py-3 px-4 bg-white border border-gray-200 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full rounded-md py-3 px-4 bg-white border border-gray-200 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                    />
                    <textarea
                        placeholder="Message"
                        rows={6}
                        className="w-full rounded-md px-4 bg-white border border-gray-200 text-gray-700 text-sm pt-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                    />
                    <button
                        type="button"
                        className="w-full py-3 px-4 text-sm font-medium text-white bg-gradient-to-r from-teal-400 to-purple-500 rounded-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

