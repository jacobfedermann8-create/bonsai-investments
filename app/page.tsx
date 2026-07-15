export default function Home() {
  return (
    <main className="bg-[#0B0D0F] text-white">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F6B4F]/20 via-transparent to-[#C6A15B]/10" />

        <div className="absolute inset-0 bg-[#0B0D0F]/70" />


        <div className="relative z-10 max-w-5xl text-center">

          <p className="text-[#C6A15B] uppercase tracking-[0.5em] text-sm mb-8">
            Zürich · Switzerland
          </p>


          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8">
            Strategic Investments.
            <br />
            Long-Term Partnerships.
            <br />
            Sustainable Growth.
          </h1>


          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed mb-12">
            Bonsai Investments is a Zürich-based investment advisory firm
            focused on identifying exceptional opportunities and supporting
            companies through strategic capital and expertise.
          </p>


          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <button className="bg-[#C6A15B] text-black px-10 py-4 rounded-full font-medium hover:scale-105 transition">
              Discover Our Approach
            </button>


            <button className="border border-white/20 px-10 py-4 rounded-full hover:bg-white/10 transition">
              Contact Our Team
            </button>

          </div>


        </div>

      </section>



      {/* ABOUT SECTION */}
      <section className="py-32 px-6 bg-[#111417]">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <div>

            <p className="text-[#C6A15B] uppercase tracking-[0.3em] text-sm mb-6">
              About Us
            </p>


            <h2 className="text-4xl md:text-5xl font-semibold">
              Building value beyond capital.
            </h2>

          </div>


          <div>

            <p className="text-gray-400 text-lg leading-relaxed">
              We partner with entrepreneurs, companies and investors
              by combining strategic expertise, capital solutions and
              long-term relationships.
            </p>

          </div>


        </div>

      </section>



      {/* INVESTMENT FOCUS */}
      <section className="py-32 px-6">

        <div className="max-w-6xl mx-auto">


          <p className="text-[#C6A15B] uppercase tracking-[0.3em] text-sm text-center mb-6">
            Investment Focus
          </p>


          <h2 className="text-4xl text-center font-semibold mb-16">
            Areas of expertise
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
                className="bg-[#15191D] border border-white/10 rounded-3xl p-10 hover:border-[#C6A15B]/50 transition"
              >

                <h3 className="text-xl font-medium">
                  {item}
                </h3>


              </div>

            ))}


          </div>


        </div>

      </section>




      {/* FINAL SECTION */}

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
