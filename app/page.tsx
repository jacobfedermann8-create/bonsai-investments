export default function Home() {
  return (
    <main className="bg-[#080909] text-white">


      {/* HERO */}

      <section
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      >

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
          }}
        />


        <div className="absolute inset-0 bg-black/70" />


        <div className="relative z-10 text-center max-w-5xl pt-20">


          <p className="text-[#C6A15B] tracking-[0.6em] uppercase text-sm mb-10">
            Zürich · Switzerland
          </p>


          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">

            Strategic Capital.
            <br />

            Exceptional Opportunities.
            <br />

            Long-Term Value Creation.

          </h1>


          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed mb-12">

            Bonsai Investments is a Zürich-based investment advisory firm
            focused on identifying exceptional opportunities and building
            long-term partnerships with ambitious companies and investors.

          </p>



          <div className="flex justify-center gap-6 flex-col sm:flex-row">


            <button
              className="bg-[#C6A15B] text-black px-10 py-4 rounded-full text-sm tracking-wide"
            >
              Discover Our Approach
            </button>



            <button
              className="border border-white/30 px-10 py-4 rounded-full text-sm hover:bg-white/10 transition"
            >
              Contact Us
            </button>


          </div>


        </div>


      </section>





      {/* PHILOSOPHY */}


      <section className="py-40 px-6">


        <div className="max-w-5xl mx-auto text-center">


          <p className="text-[#C6A15B] tracking-[0.5em] uppercase text-sm mb-10">
            Our Philosophy
          </p>



          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-12">

            Building lasting value through
            <br />
            strategic partnerships.

          </h2>



          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">

            We believe successful investments are built on trust,
            discipline and a deep understanding of the companies and
            markets we support.

          </p>


        </div>


      </section>





      {/* APPROACH */}


      <section className="py-40 px-6 bg-[#101214]">


        <div className="max-w-6xl mx-auto">


          <div className="text-center mb-24">


            <p className="text-[#C6A15B] tracking-[0.5em] uppercase text-sm mb-8">
              Our Approach
            </p>


            <h2 className="text-4xl md:text-5xl font-light">
              A disciplined investment process
            </h2>


          </div>




          <div className="grid md:grid-cols-4 gap-12">


            {[
              {
                number:"01",
                title:"Identify",
                text:"Selecting exceptional opportunities through market analysis."
              },
              {
                number:"02",
                title:"Evaluate",
                text:"Assessing potential, risks and long-term perspectives."
              },
              {
                number:"03",
                title:"Partner",
                text:"Working alongside entrepreneurs and stakeholders."
              },
              {
                number:"04",
                title:"Create Value",
                text:"Building sustainable growth and lasting impact."
              }
            ].map((item)=>(


              <div key={item.number}>

                <p className="text-[#C6A15B] text-sm mb-6">
                  {item.number}
                </p>


                <h3 className="text-2xl mb-5 font-light">
                  {item.title}
                </h3>


                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.text}
                </p>


              </div>


            ))}


          </div>


        </div>


      </section>






      {/* EXPERTISE */}


      <section className="py-40 px-6">


        <div className="max-w-6xl mx-auto">


          <div className="text-center mb-20">


            <p className="text-[#C6A15B] tracking-[0.5em] uppercase text-sm mb-8">
              Expertise
            </p>


            <h2 className="text-5xl font-light">
              Areas of Focus
            </h2>


          </div>




          <div className="grid md:grid-cols-3 gap-8">


            {[
              "Private Investments",
              "Technology & Innovation",
              "Real Estate",
              "Healthcare",
              "Infrastructure",
              "Growth Companies"
            ].map((item)=>(


              <div
                key={item}
                className="border border-white/10 p-10 hover:border-[#C6A15B]/50 transition"
              >

                <h3 className="text-xl font-light">
                  {item}
                </h3>


              </div>


            ))}


          </div>


        </div>


      </section>






      {/* CONTACT CTA */}


      <section className="py-40 px-6 bg-[#101214] text-center">


        <h2 className="text-4xl md:text-6xl font-light mb-10">

          Partner with Bonsai Investments

        </h2>



        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">

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
