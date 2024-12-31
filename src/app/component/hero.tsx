export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-purple-50 to-pink-50" />

            {/* Animated shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-300/30 to-purple-300/30 rounded-full blur-3xl animate-blob" />
                <div className="absolute top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-gradient-to-br from-pink-300/30 to-teal-300/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                    <p className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/20 text-gray-600 mb-4 animate-fade-in">
                        Our blog
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                        Innovating Pharmacy with AI
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-300">
                        Explore insights at the intersection of pharmacy and AI, featuring the latest trends, expert interviews, and transformative technologies shaping healthcare&apos;s future.
                    </p>

                    <div className="max-w-xl mx-auto animate-fade-in animation-delay-600">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full px-6 py-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:bg-white/80 transition-all duration-300"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                <svg
                                    className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    className="w-full h-auto"
                    viewBox="0 0 1440 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 74L60 68.2C120 62.3 240 50.7 360 45.7C480 40.7 600 42.3 720 47.8C840 53.3 960 62.7 1080 65.2C1200 67.7 1320 63.3 1380 61.2L1440 59V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V74Z"
                        className="fill-white"
                    />
                </svg>
            </div>
        </section>
    );
}
