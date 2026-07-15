export default function Home() {
  return (
    <main className="bg-[#0B0D0F] text-white">

      {/* HERO */}

      <section className="min-h-screen flex items-center px-8 md:px-20 relative">

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0F] via-[#0B0D0F]/90 to-transparent" />


        <div className="relative z-10 max-w-4xl pt-20">


          <p className="text-[#C6A15B] uppercase tracking-[0.5em] text-sm mb-8">
            Zürich · Switzerland
          </p>


          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">
            Strategic Capital.
            <br />
            Exceptional Opportunities.
            <br />
            Long-Term Value Creation.
          </h1>


          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
            Bonsai Investments is a Zürich-based investment advisory firm
            dedicated to identifying exceptional opportunities and supporting
            ambitious companies through strategic capital, expertise and
            long-term partnerships.
          </p>



          <div className="flex gap-5">

            <button className="bg-[#C6A15B] text-black px-8 py-4 rounded-full">
              Discover Our Approach
            </button>


            <button className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition">
              Contact Us
            </button>

          </div>


        </div>


      </section>



      {/* WHO WE ARE */}


      <section className="py-32 px-8 md:px-20 bg-[#111417]">


        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">


          <div>

            <p className="text-[#C6A15B] uppercase tracking-[0.4em] text-sm mb-6">
              Who We Are
            </p>


            <h2 className="text-4xl md:text-5xl font-light">
              Building value beyond capital.
            </h2>


          </div>



          <div className="text-gray-400 text-lg leading-relaxed">


            <p className="mb-6">
              At Bonsai Investments, we believe that sustainable value is
              created through strong relationships, disciplined analysis and
              a long-term vision.
            </p>


            <p>
              We partner with entrepreneurs, investors and organizations
              seeking strategic opportunities and meaningful growth.
            </p>


          </div>


        </div>


      </section>




      {/* EXPERTISE */}


      <section className="py-32 px-8 md:px-20">


        <div className="max-w-6xl mx-auto">


          <p className="text-[#C6A15B] uppercase tracking-[0.4em] text-sm mb-6 text-center">
            Our Expertise
          </p>


          <h2 className="text-4xl text-center font-light mb-20">
            Investment solutions built for growth
          </h2>



          <div className="grid md:grid-cols-2 gap-8">


            {[
              {
                title: "Investment Advisory",
                text: "Strategic guidance and investment solutions designed to support companies and investors."
              },
              {
                title: "Venture Capital",
                text: "Identifying innovative companies with strong potential and supporting their development."
              },
              {
                title: "Private Investments",
                text: "Accessing carefully selected opportunities focused on sustainable growth."
              },
              {
                title: "Strategic Partnerships",
                text: "Connecting businesses, investors and expertise to create meaningful opportunities."
              }
            ].map((service) => (

              <div
                key={service.title}
                className="bg-[#15191D] p-10 rounded-2xl border border-white/10"
              >

                <h3 className="text-2xl mb-5">
                  {service.title}
                </h3>


                <p className="text-gray-400 leading-relaxed">
                  {service.text}
                </p>


              </div>

            ))}


          </div>


        </div>


      </section>




      {/* FINAL CTA */}


      <section className="py-32 px-8 bg-[#111417] text-center">


        <h2 className="text-4xl md:text-5xl font-light mb-8">
          Partner with Bonsai Investments
        </h2>


        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Connecting capital, expertise and exceptional opportunities
          through strategic partnerships.
        </p>


        <button className="bg-[#C6A15B] text-black px-10 py-4 rounded-full">
          Contact Our Team
        </button>


      </section>



    </main>
  );
}
