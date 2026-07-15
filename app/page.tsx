export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0D0F] text-white">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl text-center">

          <p className="text-[#C6A15B] uppercase tracking-[0.3em] text-sm mb-6">
            BONSAI Investments
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8">
            Strategic Capital
            <br />
            for Exceptional Companies
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Bonsai Investments is a Zürich-based investment advisory firm
            providing strategic capital solutions and investment expertise
            to ambitious companies and investors worldwide.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <button className="bg-[#C6A15B] text-black px-8 py-4 rounded-full font-medium hover:opacity-90 transition">
              Explore Our Approach
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition">
              Contact Us
            </button>

          </div>

        </div>
      </section>


      {/* Introduction Section */}
      <section className="py-24 px-6 bg-[#111417]">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-semibold mb-8">
            Building Long-Term Value Through Strategic Investments
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            We partner with visionary entrepreneurs, companies and investors
            by providing capital, strategic guidance and access to a global
            network of opportunities.
          </p>

        </div>

      </section>


      {/* Focus Section */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            Investment Focus
          </h2>


          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Technology",
              "Healthcare",
              "Energy & Infrastructure",
              "Financial Services",
              "Real Estate",
              "Growth Companies",
            ].map((item) => (

              <div
                key={item}
                className="bg-[#15191D] border border-white/10 rounded-2xl p-8 hover:border-[#C6A15B]/50 transition"
              >
                <h3 className="text-xl font-medium">
                  {item}
                </h3>
              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-24 px-6 bg-[#111417]">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-semibold mb-6">
            Partner With Bonsai Investments
          </h2>

          <p className="text-gray-400 mb-10">
            Discover how we support exceptional companies and investment
            opportunities.
          </p>

          <button className="bg-[#C6A15B] text-black px-10 py-4 rounded-full font-medium">
            Get In Touch
          </button>

        </div>

      </section>


    </main>
  );
}
