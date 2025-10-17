import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Users, Wifi, Tv, Bath, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const rooms = [
  {
    name: "Doppelzimmer Standard",
    price: "?",
    size: "20m²",
    guests: "2 Personen",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e3ca6c644715df95305a8d/61d67f3d4_39b0d7c4-b57e-4c3b-9509-6d57cc9d458f.png",
    description: "Unser gemütliches Standard-Doppelzimmer bietet alles, was Sie für einen erholsamen Aufenthalt benötigen. Mit bequemen Betten und modernem Bad.",
    amenities: ["Doppelbett oder 2 Einzelbetten", "Eigenes Bad mit Dusche", "Kostenloses WLAN", "Flachbild-TV", "Schreibtisch", "Garderobe"],
  },
  {
    name: "Doppelzimmer Komfort",
    price: "?",
    size: "25m²",
    guests: "2 Personen",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e3ca6c644715df95305a8d/090b4a9bb_08f6cdd7-9e94-4e4c-8dda-406db5fba6a6.png",
    description: "Mehr Platz und Komfort in unserem Komfort-Doppelzimmer. Mit Sitzecke und Blick auf den Garten.",
    amenities: ["Komfortables Doppelbett", "Großzügiges Bad mit Badewanne", "Kostenloses WLAN", "Smart-TV", "Sitzecke", "Balkon mit Gartenblick", "Minibar", "Safe"],
    popular: true,
  },
  {
    name: "Familienzimmer",
    price: "?",
    size: "35m²",
    guests: "4 Personen",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e3ca6c644715df95305a8d/4701bcb5a_184f3ed5-81e9-45e9-888e-0af83eb2da3a.png",
    description: "Perfekt für Familien: Geräumiges Zimmer mit separatem Schlafbereich für Kinder und viel Platz zum Entspannen.",
    amenities: ["Doppelbett + 2 Einzelbetten", "Großes Bad mit Dusche", "Kostenloses WLAN", "2 Flachbild-TVs", "Sitzecke", "Kinderspielecke", "Kühlschrank", "Extra Stauraum"],
  },
];

export default function Zimmer() {
  return (
    <div className="min-h-screen bg-[#F6F3EE]">
      {/* Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1920&q=80)" }}>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Unsere Zimmer</h1>
          <p className="text-xl md:text-2xl text-white/90 font-serif">Finden Sie Ihr perfektes Zimmer</p>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={`relative bg-[#F6F3EE] flex items-center justify-center ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <img src={room.image} alt={room.name} className="w-full h-auto object-contain" style={{ maxHeight: '600px' }} onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"; }} />
                    {room.popular && (
                      <Badge className="absolute top-4 right-4 bg-[#E8B15C] text-[#4B1E1A] border-none px-4 py-2 text-sm font-semibold shadow-lg font-serif">Beliebt</Badge>
                    )}
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center bg-[#FAF7F2]">
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-3xl font-bold text-[#4B1E1A] font-serif">{room.name}</h2>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-[#A63A2B] font-serif">{room.price}</div>
                        <div className="text-sm text-[#6B2C24] font-sans">pro Nacht</div>
                      </div>
                    </div>

                    <div className="flex gap-6 mb-6 text-[#6B2C24] font-sans">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        <span>{room.guests}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="w-5 h-5" />
                        <span>{room.size}</span>
                      </div>
                    </div>

                    <p className="text-[#4B1E1A] mb-6 leading-relaxed font-sans">{room.description}</p>

                    <div className="mb-6">
                      <h3 className="font-semibold text-[#4B1E1A] mb-3 font-serif">Ausstattung:</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {room.amenities.map((amenity, i) => (
                          <div key={i} className="flex items-center gap-2 text-[#6B2C24] font-sans">
                            <Check className="w-4 h-4 text-[#A63A2B] flex-shrink-0" />
                            <span className="text-sm">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link to={createPageUrl("Kontakt")}>
                      <Button className="w-full bg-[#A63A2B] hover:bg-[#8F3226] text-lg py-6 font-sans">
                        Jetzt buchen
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Included Section */}
      <section className="py-20 px-4 bg-[#FAE7C5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4B1E1A] mb-4 font-serif">Im Preis inbegriffen</h2>
            <p className="text-xl text-[#6B2C24] font-sans">Diese Leistungen sind in jedem Zimmer inklusive</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Wifi, title: "WLAN", description: "Kostenloses Internet" },
              { icon: Tv, title: "TV", description: "Flachbild-Fernseher" },
              { icon: Users, title: "Service", description: "Freundlicher Gästeservice" },
            ].map((item, index) => (
              <Card key={index} className="text-center border-none shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#E8B15C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-[#A63A2B]" />
                  </div>
                  <h3 className="font-semibold text-[#4B1E1A] mb-2 font-serif">{item.title}</h3>
                  <p className="text-sm text-[#6B2C24] font-sans">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#4B1E1A] mb-6 font-serif">Buchungsinformationen</h3>
              <div className="space-y-4 text-[#6B2C24] font-sans">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#A63A2B] flex-shrink-0 mt-0.5" />
                  <p><strong>Check-in:</strong> 15:00 - 20:00 Uhr</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#A63A2B] flex-shrink-0 mt-0.5" />
                  <p><strong>Check-out:</strong> bis 11:00 Uhr</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#A63A2B] flex-shrink-0 mt-0.5" />
                  <p><strong>Stornierung:</strong> Kostenlose Stornierung bis 2 Tage vor Anreise</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#A63A2B] flex-shrink-0 mt-0.5" />
                  <p><strong>Zahlung:</strong> Bar oder EC-Karte vor Ort</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}