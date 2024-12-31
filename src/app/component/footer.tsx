import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-teal-50 via-purple-50 to-pink-50">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Pharma-AI
            </Link>
            <p className="text-gray-600 text-sm md:text-base">
              Transforming healthcare with AI-driven insights and resources for a smarter, healthier future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Blogs', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'Tutorials', 'FAQ', 'Support'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Newsletter</h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">Stay updated with our latest insights and news.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:bg-white/80 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm md:text-base">
            © {currentYear} Pharma-AI. All rights reserved.
          </p>
        </div>
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-300/20 to-purple-300/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -top-40 right-20 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>
    </footer>
  )
}

