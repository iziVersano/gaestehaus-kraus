
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Wifi, MapPin, ArrowRight, Star, Users, Dog, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Startseite() {
  return (
    <div className="min-h-screen bg-[#F6F3EE]">
      {/* Hero Section */}
      <section className="hero relative flex flex-col items-center justify-center overflow-hidden bg-transparent">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e3ca6c644715df95305a8d/4f6a4e6de_d427ee6d-f86f-462a-9b14-86d70c5e5335.jpg"
          alt="Gästehaus Kraus"
          className="hero-image w-full h-[90vh] object-cover object-center"
        />

        {/* Hero Text */}
        <div className="hero-text absolute text-center text-white px-6 sm:px-8 max-w-4xl mx-auto w-full bottom-0 left-1/2 -translate-x-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 leading-tight font-serif drop-shadow-md">
            Willkommen im Gästehaus Kraus
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/95 font-serif drop-shadow-sm">
            Ihre gemütliche Unterkunft am Donauradweg
          </p>
        </div>

        <style>
          {`
            /* MOBILE */
            @media (max-width: 1024px) {
              .hero-image {
                object-fit: contain !important;
                height: auto !important;
                transform: scale(1.1);
              }
              .hero-text {
                bottom: 0 !important;
                background: linear-gradient(to top, rgba(0,0,0,0.45), transparent);
                padding: 0.75rem 0.5rem 1.25rem;
                border-radius: 0;
              }
              .hero-text h1 {
                font-size: 1.6rem !important;
              }
              .hero-text p {
                font-size: 1rem !important;
              }
            }

            /* DESKTOP */
            @media (min-width: 1025px) {
              .hero-text {
                bottom: 0 !important; /* Now touches bottom edge of hero */
                background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
                padding: 1rem 1.5rem 2rem;
                border-radius: 0.5rem 0.5rem 0 0;
              }
            }
          `}
        </style>
      </section>

      {/* Zimmer Section */}
      <section
        className="pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 px-4"
        style={{
          background: "linear-gradient(180deg, #F6E9C6 0%, #E3B5A1 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4B1E1A] mb-4 font-serif">
              Unsere Zimmer
            </h2>
            <p className="text-lg sm:text-xl text-[#6B2C24] px-4 font-sans">
              Komfort und Gemütlichkeit für jeden Geschmack
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Doppelzimmer Standard",
                price: "?",
                image:
                  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e3ca6c644715df95305a8d/61d67f3d4_39b0d7c4-b57e-4c3b-9509-6d57cc9d458f.png",
              },
              {
                name: "Doppelzimmer Komfort",
                price: "?",
                image:
                  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e3ca6c644715df95305a8d/090b4a9bb_08f6cdd7-9e94-4e4c-8dda-406db5fba6a6.png",
              },
              {
                name: "Familienzimmer",
                price: "?",
                image:
                  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e3ca6c644715df95305a8d/4701bcb5a_184f3ed5-81e9-45e9-888e-0af83eb2da3a.png",
              },
            ].map((room, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-none rounded-2xl"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80";
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-[#A63A2B] text-white px-4 py-2 rounded-full text-sm sm:text-base font-semibold shadow-lg font-serif">
                    ab {room.price}/Nacht
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#4B1E1A] mb-3 font-serif">
                    {room.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E8B15C] text-[#E8B15C]" />
                    ))}
                  </div>
                  <Link to={createPageUrl("Zimmer")}>
                    <Button className="w-full bg-[#A63A2B] hover:bg-[#8F3226] text-base font-sans">
                      Mehr erfahren
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl("Zimmer")}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#A63A2B] text-[#A63A2B] hover:bg-[#A63A2B] hover:text-white text-base px-8 font-sans"
              >
                Alle Zimmer ansehen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Warum Gästehaus Kraus Section */}
      <section className="pt-0 mt-0 py-12 sm:py-16 md:py-20 px-4 bg-[#FAE7C5] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A63A2B]/20 to-transparent"></div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#4B1E1A] mb-12 sm:mb-14 text-center tracking-tight font-serif">
            Warum Gästehaus Kraus?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
            {[
              { icon: Wifi, title: "Kostenloses WLAN", description: "Schnelles und zuverlässiges Internet in allen Bereichen" },
              { icon: MapPin, title: "Kostenfreier Parkplatz", description: "Sichere Stellplätze direkt vor dem Haus" },
              { icon: Users, title: "Familienfreundlich", description: "Besondere Angebote und Ausstattung für Familien" },
              { icon: Dog, title: "Haustiere willkommen", description: "Ihre vierbeinigen Freunde sind herzlich eingeladen" },
              { icon: Utensils, title: "Gemütliche Atmosphäre", description: "Persönlicher Service in familiärer Umgebung" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="w-11 h-11 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-11 h-11 text-[#A63A2B]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-[#4B1E1A] mb-2 tracking-tight font-serif">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-[#6B2C24] leading-[1.4] max-w-xs font-sans">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
