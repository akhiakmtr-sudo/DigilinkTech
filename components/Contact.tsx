
import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for your message!");
  };

  return (
    <section id="contact" className="py-24 bg-slate-800/30 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Contact Information Column */}
          <div className="flex flex-col">
            <h2 className="text-sm font-bold text-cyan-500 tracking-widest uppercase mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Discuss Your Project</h3>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              Have a project in mind? We'd love to hear from you. Reach out to us for a consultation or simply to say hello.
            </p>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 bg-slate-900 p-3.5 rounded-xl border border-slate-700 text-cyan-500 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="ml-6">
                  <a href="tel:+919025619298" className="text-white text-xl font-semibold hover:text-cyan-400 transition-colors">+91 9025619298</a>
                  <p className="text-gray-500 text-sm font-medium tracking-wide uppercase mt-1">Mon-Fri 9am-6pm</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group">
                 <div className="flex-shrink-0 mt-1 bg-slate-900 p-3.5 rounded-xl border border-slate-700 text-cyan-500 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="ml-6">
                  <a href="mailto:info@technovait.com" className="text-white text-xl font-semibold hover:text-cyan-400 transition-colors">info@technovait.com</a>
                  <p className="text-gray-500 text-sm font-medium tracking-wide uppercase mt-1">Online support 24/7</p>
                </div>
              </div>

              {/* Headquarters */}
              <div className="flex items-start group">
                 <div className="flex-shrink-0 mt-1 bg-slate-900 p-3.5 rounded-xl border border-slate-700 text-cyan-500 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div className="ml-6">
                  <h4 className="text-white text-xl font-semibold">Headquarters</h4>
                  <address className="not-italic text-gray-400 mt-2 text-base leading-relaxed">
                    Marimalinagar, Chennai,<br/>
                    Tamilnadu - 603209
                  </address>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
               <h4 className="text-white font-semibold mb-6 flex items-center">
                 Connect With Us <span className="h-px w-12 bg-slate-700 ml-4"></span>
               </h4>
               <div className="flex space-x-4">
                  <a href="#" className="bg-slate-900 p-3.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#1877F2] transition-all duration-300 shadow-lg border border-slate-700 hover:border-[#1877F2] group">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="bg-slate-900 p-3.5 rounded-lg text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-300 shadow-lg border border-slate-700 hover:border-pink-500 group">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>
                    <span className="sr-only">Instagram</span>
                  </a>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 rounded-2xl p-8 md:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
             {/* Decorative blob */}
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
             
             <h3 className="text-2xl font-bold text-white mb-6 relative">Send us a Message</h3>
             <form onSubmit={handleSubmit} className="space-y-5 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                    <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="john@example.com" required className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                  <input type="text" name="subject" id="subject" placeholder="Project Inquiry" required className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us about your project..." required className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3.5 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-cyan-500/20">
                  Send Message
                </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
