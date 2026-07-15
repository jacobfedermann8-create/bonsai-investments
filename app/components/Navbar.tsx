import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0D0F]/90 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">


        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="Bonsai Investments"
            className="w-[190px]"
          />
        </Link>



        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-12 text-sm text-gray-300">

          <Link 
            href="/" 
            className="hover:text-[#C6A15B] transition"
          >
            Home
          </Link>


          <Link 
            href="/about" 
            className="hover:text-[#C6A15B] transition"
          >
            About Us
          </Link>


          <Link 
            href="/strategy" 
            className="hover:text-[#C6A15B] transition"
          >
            Investment Strategy
          </Link>


          <Link 
            href="/services" 
            className="hover:text-[#C6A15B] transition"
          >
            Services
          </Link>


          <Link 
            href="/team" 
            className="hover:text-[#C6A15B] transition"
          >
            Team
          </Link>


        </div>



        {/* Right side */}

        <div className="flex items-center gap-6">

          <Link
            href="/contact"
            className="hidden md:block bg-[#C6A15B] text-black px-7 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Contact
          </Link>


          <button className="text-sm text-gray-300 hover:text-white">
            EN | FR
          </button>


        </div>


      </div>

    </nav>
  );
}
