
import React from 'react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 group">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300 shadow-lg shadow-black/20">
                {icon}
            </div>
        </div>
        <div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{title}</h3>
            <p className="text-gray-400 leading-relaxed text-justify pr-4">{description}</p>
        </div>
    </div>
);

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      title: "Innovative Solutions",
      description: "We stay ahead of the technology curve to deliver solutions that are not just current but also future-proof, giving you a competitive edge in your industry."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: "Expert Team",
      description: "Our team comprises industry veterans with years of hands-on experience in their respective domains, ensuring top-tier quality and reliable execution."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      title: "Client-Centric Approach",
      description: "Your success is our priority. We work closely with you to understand your unique vision and deliver tailored results that exceed expectations."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "On-Time Delivery",
      description: "We respect deadlines and use agile methodologies to ensure your project is delivered on time, every time, without compromising on quality."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-cyan-500 tracking-widest uppercase mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            A Better Approach to <span className="text-cyan-400">Digital Solutions</span>
          </h3>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 font-light leading-relaxed">
            We combine strategy, technology, and design to build solutions that drive real business value and foster sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {features.map(feature => <Feature key={feature.title} {...feature} />)}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
