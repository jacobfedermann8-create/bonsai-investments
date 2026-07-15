export default function Home() {
  return (
    <main className="bg-[#0B0D0F] text-white">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0B0D0F] to-[#0B0D0F]" />

        <div className="relative z-10 max-w-5xl text-center">

          <p className="text-[#C6A15B] tracking-[0.5em] text-sm uppercase mb-8">
            Zürich · Switzerland
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8">
            Strategic Capital
            <br />
            <span className="text-white">
              for Exceptional Companies
            </span>
          </h1>


          <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
            Bonsai Investments partners with ambitious entrepreneurs,
            companies and investors by providing strategic capital,
            investment advisory and long-term value creation.
          </p>


          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <button className="bg-[#C6A15B] text-black px-10 py-4 rounded-full font-medium hover:scale-105 transition">
              Explore Our Approach
            </button>

            <button className="border border-white/20 px-10 py-4 rounded-full hover:bg-white/10 transition">
              Contact Us
            </button>

          </div>

        </div>

      </section>



      {/* ABOUT PREVIEW */}
      <section className="py-32 px-6 bg-[#111417]">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-[#C6A15B] uppercase tracking-[0.3em] text-sm mb-5">
              About Bonsai
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold mb-8">
              Building partnerships beyond capital.
            </h2>

          </div>


          <div>

            <p className="text-gray-400 text-lg leading-relaxed">
              We believe successful investments are built on strong
              relationships, strategic expertise and a deep understanding
              of the companies we support.
            </p>

          </div>

        </div>

      </section>



      {/* INVESTMENT AREAS */}
      <section className="py-32 px-6">

        <div className="max-w-6xl mx-auto">

          <p className="text-[#C6A15B] uppercase tracking-[0.3em] text-sm text-center mb-5">
            Focus Areas
          </p>


          <h2 className="text-4xl text-center font-semibold mb-16">
            Where we invest
          </h2>


          <div className="grid md:grid-cols-3 gap-8">

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
                className="p-10 rounded-3xl bg-[#15191D] border border-white/10 hover:border-[#C6A15B]/40 transition"
              >

                <h3 className="text-xl font-medium">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* FINAL CTA */}
      <section className="py-32 px-6 bg-[#111417]">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-semibold mb-8">
            Partner with Bonsai Investments
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Connecting capital, expertise and exceptional opportunities.
          </p>


          <button className="bg-[#C6A15B] text-black px-10 py-4 rounded-full font-medium">
            Contact Our Team
          </button>

        </div>

      </section>


    </main>
  );
}
