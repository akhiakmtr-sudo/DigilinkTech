import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative mb-12 lg:mb-0 group">
            <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
            <img 
              src="https://res.cloudinary.com/dufnwlqeq/image/upload/v1765511108/PinDown.io__SEORANKERSNUMBER1_1765510937_tq8bpw.jpg" 
              alt="Our Team" 
              className="relative rounded-xl shadow-2xl shadow-cyan-900/40 w-full object-cover transform transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
              About <span className="text-cyan-400">Digilink Technologies</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify font-light">
              <p>
                Digilink Technologies was founded on the principle of leveraging technology to solve complex business challenges. We are a team of passionate developers, designers, and strategists dedicated to delivering high-quality digital products and IT services.
              </p>
              <p>
                Our mission is to empower businesses by providing innovative and scalable solutions. We believe in building long-term partnerships with our clients, understanding their unique needs, and helping them navigate the ever-changing digital world to achieve sustainable growth.
              </p>
            </div>

            <div className="mt-12 text-center">
              <a 
                href="#contact" 
                className="inline-block text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 tracking-wide"
              >
                Let's build the future together <span className="text-cyan-400 inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;