
import React from 'react';

const Footer: React.FC = () => {
    const quickLinks = ['Home', 'About', 'Services', 'Contact'];
    
    const socialIcons = [
        { name: 'Facebook', href: '#', icon: <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg> },
        { name: 'Twitter', href: '#', icon: <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg> },
        { name: 'Instagram', href: '#', icon: <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg> },
        { name: 'LinkedIn', href: '#', icon: <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24"><path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2" stroke="none"></circle></svg> }
    ];

    return (
        <footer className="bg-slate-950 text-gray-400 border-t border-slate-900 font-sans">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
                    {/* Brand Section - Spans 2 columns on lg screens for better text flow */}
                    <div className="flex flex-col lg:col-span-2 lg:pr-12">
                        <a href="#" className="text-2xl font-bold text-white tracking-wider mb-6 inline-block">
                            DIGILINK TECHNOLOGIES<span className="text-cyan-400">.</span>
                        </a>
                        <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-md">
                            Architecting the future of digital solutions for modern businesses. We build the technology that powers your growth with precision and innovation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col">
                        <h2 className="text-white font-bold tracking-widest text-sm uppercase mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-0.5 after:bg-cyan-500">Quick Links</h2>
                        <nav className="flex flex-col space-y-3">
                            {quickLinks.map(link => (
                                <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-2 -ml-3.5 transform translate-x-3.5"></span>
                                    {link}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            
            <div className="bg-slate-950 border-t border-slate-900 py-8">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">
                        © 2024 Digilink Technologies — All Rights Reserved
                    </p>
                    <div className="flex space-x-6">
                        {socialIcons.map(social => (
                            <a key={social.name} href={social.href} className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
                                {social.icon}
                                <span className="sr-only">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
