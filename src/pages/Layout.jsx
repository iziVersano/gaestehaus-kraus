

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Home, Bed, Users, Image, MapPin, Mail, Phone } from "lucide-react"; // MessageCircle removed

const navigationItems = [
  { title: "Startseite", url: createPageUrl("Startseite"), icon: Home },
  { title: "Zimmer", url: createPageUrl("Zimmer"), icon: Bed },
  // { title: "Über Uns", url: createPageUrl("UeberUns"), icon: Users },
  { title: "Lage", url: createPageUrl("Lage"), icon: MapPin },
  { title: "Kontakt", url: createPageUrl("Kontakt"), icon: Mail },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const WhatsAppIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
      `}} />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-[#F6F3EE]"
        }`}
        style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link
              to={createPageUrl("Startseite")}
              className="flex items-center gap-2 sm:gap-3 group relative z-[1000]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E8B15C] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Home className="w-5 h-5 sm:w-6 sm:h-6 text-[#A63A2B]" strokeWidth={2} />
              </div>
              <div>
                <h1 className="text-base sm:text-lg md:text-xl font-bold text-[#4B1E1A] font-serif">
                  Gästehaus Kraus
                </h1>
                <p className="text-[10px] sm:text-xs text-[#6B2C24] hidden sm:block font-sans">Ihr Zuhause an der Donau</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-sans ${
                    location.pathname === item.url
                      ? "bg-[#A63A2B] text-white shadow-md"
                      : "text-[#4B1E1A] hover:bg-[#A63A2B]/10 hover:text-[#6B2C24]"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
              
              {/* WhatsApp Button - Desktop */}
              <a
                href="https://wa.me/4917652832895?text=Hallo,%20ich%20interessiere%20mich%20für%20eine%20Buchung%20im%20Gästehaus%20Kraus."
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 p-2 rounded-lg bg-[#25D366] hover:bg-[#1faa52] transition-all shadow-md hover:shadow-lg"
                aria-label="WhatsApp kontaktieren"
              >
                <WhatsAppIcon />
              </a>
            </div>

            {/* Mobile Right Side: WhatsApp + Menu Button */}
            <div className="md:hidden flex items-center gap-2 relative z-[1000]">
              {/* WhatsApp Button - Mobile */}
              <a
                href="https://wa.me/4917652832895?text=Hallo,%20ich%20interessiere%20mich%20für%20eine%20Buchung%20im%20Gästehaus%20Kraus."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#25D366] hover:bg-[#1faa52] active:scale-95 transition-all shadow-md touch-manipulation"
                aria-label="WhatsApp kontaktieren"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <WhatsAppIcon />
              </a>

              {/* Mobile Menu Button */}
              <button
                className="p-2 rounded-lg hover:bg-[#A63A2B]/10 touch-manipulation active:scale-95 transition-transform"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`w-full h-0.5 bg-[#4B1E1A] rounded-full transition-all duration-300 ${
                      mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-[#4B1E1A] rounded-full transition-all duration-300 ${
                      mobileMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-[#4B1E1A] rounded-full transition-all duration-300 ${
                      mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden fixed top-16 sm:top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl z-[998] transition-all duration-300 ${
            mobileMenuOpen 
              ? "opacity-100 translate-y-0 pointer-events-auto" 
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
          style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
        >
          <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-6rem)] overflow-y-auto">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all active:scale-98 font-sans ${
                  location.pathname === item.url
                    ? "bg-[#A63A2B] text-white shadow-md"
                    : "text-[#4B1E1A] hover:bg-[#A63A2B]/10 hover:text-[#6B2C24] active:bg-[#A63A2B]/20"
                }`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/20 z-[997]"
            onClick={() => setMobileMenuOpen(false)}
            style={{ top: mobileMenuOpen ? '0' : '100vh' }}
          />
        )}
      </nav>

      {/* Page Content */}
      <main className="pt-16 sm:pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-[#4B1E1A] text-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 relative">
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-5 text-[#E8B15C] font-serif">Kontakt</h3>
              <div className="space-y-3 text-sm text-white/80 font-sans">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:+491234567890" className="hover:text-[#E8B15C] transition-colors">
                    +49 (0) 1234 567890
                  </a>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:info@gaestehaus-kraus.de" className="hover:text-[#E8B15C] transition-colors break-all">
                    info@gaestehaus-kraus.de
                  </a>
                </div>
                <div className="flex items-start gap-3 justify-center md:justify-start">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Hauptstraße 12, 89434 Blindheim</span>
                </div>
              </div>
            </div>

            {/* Vertical Divider - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2" style={{ height: 'calc(100% - 6rem)' }}></div>

            {/* Quick Links */}
            <div className="text-center md:text-left relative">
              <h3 className="text-lg font-semibold mb-5 text-[#E8B15C] font-serif">Schnelllinks</h3>
              <div className="space-y-3">
                {navigationItems.filter(item => item.title !== "Über Uns").map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className="block text-sm text-white/80 hover:text-[#E8B15C] transition-colors font-sans"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm font-sans">
            <p>© 2024 Gästehaus Kraus. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

