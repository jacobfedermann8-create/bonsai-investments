export default function Home() {
  return (
    <main className="bg-[#090A0A] text-white">


      {/* HERO */}

      <section
        className="relative min-h-screen flex items-end justify-center pb-32 px-6"
      >

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />


        <div className="relative z-10 max-w-5xl text-center">


          <p className="uppercase tracking-[0.5em] text-sm text-[#C6A15B] mb-8">
            Bonsai Investments
          </p>


          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">

            Strategic Capital
            <br />
            for Exceptional Opportunities

          </h1>


          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">

            A Zürich-based investment advisory firm
            supporting entrepreneurs, companies and investors
            through strategic partnerships and long-term value creation.

          </p>


          <button className="bg-[#C6A15B] text-black px-10 py-4 rounded-full">
            Discover Our Approach
          </button>


        </div>


      </section>





      {/* INTRODUCTION */}


      <section className="py-40 px-6">


        <div className="max-w-4xl mx-auto text-center">


          <p className="text-[#C6A15B] uppercase tracking-[0.5em] text-sm mb-10">
            Our Philosophy
          </p>


          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-12">

            Building lasting value through
            expertise, discipline and trust.

          </h2>


          <p className="text-gray-400 text-lg leading-relaxed">

            Bonsai Investments combines strategic insight,
            investment expertise and a long-term perspective
            to identify and support exceptional opportunities.

          </p>


        </div>


      </section>





      {/* EXPERTISE */}


      <section className="py-40 px-6 bg-[#101112]">


        <div className="max-w-6xl mx-auto">


          <div className="text-center mb-24">

            <p className="text-[#C6A15B] uppercase tracking-[0.5em] text-sm mb-8">
              Expertise
            </p>


            <h2 className="text-5xl font-light">
              Our Investment Focus
            </h2>

          </div>



          <div className="space-y-16">


            <div className="grid md:grid-cols-2 gap-10 border-b border-white/10 pb-12">

              <h3 className="text-3xl font-light">
                01 — Private Investments
              </h3>


              <p className="text-gray-400 leading-relaxed">
                Identifying carefully selected opportunities
                with strong potential and sustainable growth
                perspectives.
              </p>

            </div>




            <div className="grid md:grid-cols-2 gap-10 border-b border-white/10 pb-12">

              <h3 className="text-3xl font-light">
                02 — Venture Capital
              </h3>


              <p className="text-gray-400 leading-relaxed">
                Supporting innovative companies and visionary
                founders developing tomorrow’s solutions.
              </p>

            </div>




            <div className="grid md:grid-cols-2 gap-10 border-b border-white/10 pb-12">

              <h3 className="text-3xl font-light">
                03 — Strategic Advisory
              </h3>


              <p className="text-gray-400 leading-relaxed">
                Providing strategic guidance to investors
                and companies seeking growth opportunities.
              </p>

            </div>




            <div className="grid md:grid-cols-2 gap-10">

              <h3 className="text-3xl font-light">
                04 — Growth Partnerships
              </h3>


              <p className="text-gray-400 leading-relaxed">
                Creating connections between capital,
                expertise and exceptional businesses.
              </p>

            </div>


          </div>


        </div>


      </section>





      {/* APPROACH */}


      <section className="py-40 px-6">


        <div className="max-w-6xl mx-auto text-center">


          <p className="text-[#C6A15B] uppercase tracking-[0.5em] text-sm mb-8">
            Our Approach
          </p>


          <h2 className="text-5xl font-light mb-20">
            A disciplined investment process
          </h2>



          <div className="grid md:grid-cols-4 gap-10">


            {[
              "Identify",
              "Analyze",
              "Partner",
              "Create Value"
            ].map((item,index)=>(

              <div key={item}>

                <p className="text-[#C6A15B] mb-5">
                  0{index+1}
                </p>


                <h3 className="text-2xl font-light">
                  {item}
                </h3>

              </div>

            ))}


          </div>


        </div>


      </section>





      {/* CONTACT */}


      <section className="py-32 bg-[#101112] text-center px-6">


        <h2 className="text-5xl font-light mb-10">
          Partner with Bonsai Investments
        </h2>


        <p className="text-gray-400 max-w-2xl mx-auto mb-12">

          We welcome discussions with entrepreneurs,
          companies and investors looking for strategic
          partnerships.

        </p>


        <button className="bg-[#C6A15B] text-black px-10 py-4 rounded-full">
          Contact Us
        </button>


      </section>





      {/* FOOTER */}


      <footer className="py-16 px-6 border-t border-white/10">


        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">


          <div>

            <h3 className="text-xl mb-4">
              Bonsai Investment Advisory GmbH
            </h3>


            <p className="text-gray-400">
              Landoltstrasse 1
              <br />
              8006 Zürich
              <br />
              Switzerland
            </p>

          </div>



          <div className="text-gray-400">

            © 2026 Bonsai Investments
            <br />
            All rights reserved.

          </div>


        </div>


      </footer>



    </main>
  );
}
