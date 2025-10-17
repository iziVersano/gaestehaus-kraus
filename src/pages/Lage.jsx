
import React from "react";
import { MapPin, Car, Train, Plane, Bike, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Lage() {
  return (
    <div className="min-h-screen bg-[#F6F3EE]">
      {/* Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Lage</h1>
          <p className="text-xl md:text-2xl text-white/90">
            So finden Sie zu uns
          </p>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-[#A63A2B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#4B1E1A] mb-4">
              Gästehaus Blindheim
            </h2>
            <p className="text-xl text-[#6B2C24]">
              Hauptstraße 12
              <br />
              89434 Blindheim
              <br />
              Deutschland
            </p>
          </div>

          {/* Map */}
          <Card className="overflow-hidden border-none shadow-2xl">
            <div className="relative h-96 bg-[#f5f5f4]">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=10.6,48.6,10.7,48.7&layer=mapnik&marker=48.65,10.65"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                title="Karte von Blindheim"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Transportation Options */}
      <section className="py-20 px-4 bg-[#FAE7C5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4B1E1A] mb-4">
              Anreise
            </h2>
            <p className="text-xl text-[#6B2C24]">
              Verschiedene Wege führen zu uns
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* By Car */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8B15C]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-[#A63A2B]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#4B1E1A] mb-3">
                      Mit dem Auto
                    </h3>
                    <div className="space-y-2 text-[#6B2C24]">
                      <p>
                        <strong>Von München:</strong> A8 Richtung Stuttgart,
                        dann A99 und B2 (ca. 100 km)
                      </p>
                      <p>
                        <strong>Von Stuttgart:</strong> A8 Richtung München,
                        Ausfahrt Günzburg (ca. 90 km)
                      </p>
                      <p>
                        <strong>Von Augsburg:</strong> B2 Richtung Donauwörth
                        (ca. 45 km)
                      </p>
                      <p className="mt-4">
                        <strong>Parken:</strong> Kostenfreie Parkplätze direkt
                        am Haus
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* By Train */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8B15C]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Train className="w-6 h-6 text-[#A63A2B]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#4B1E1A] mb-3">
                      Mit der Bahn
                    </h3>
                    <div className="space-y-2 text-[#6B2C24]">
                      <p>
                        <strong>Nächster Bahnhof:</strong> Dillingen an der
                        Donau (8 km)
                      </p>
                      <p>
                        Regelmäßige Verbindungen von München, Stuttgart und
                        Augsburg
                      </p>
                      <p className="mt-4">
                        <strong>Transfer:</strong> Gerne holen wir Sie vom
                        Bahnhof ab (nach Absprache)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* By Plane */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8B15C]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Plane className="w-6 h-6 text-[#A63A2B]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#4B1E1A] mb-3">
                      Mit dem Flugzeug
                    </h3>
                    <div className="space-y-2 text-[#6B2C24]">
                      <p>
                        <strong>Flughafen München:</strong> ca. 120 km (1,5
                        Stunden)
                      </p>
                      <p>
                        <strong>Flughafen Stuttgart:</strong> ca. 130 km (1,5
                        Stunden)
                      </p>
                      <p className="mt-4">
                        Mietwagen am Flughafen verfügbar, oder Anreise mit Bahn
                        und Transfer
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* By Bike */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8B15C]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bike className="w-6 h-6 text-[#A63A2B]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#4B1E1A] mb-3">
                      Mit dem Fahrrad
                    </h3>
                    <div className="space-y-2 text-[#6B2C24]">
                      <p>
                        Wir liegen direkt am beliebten{" "}
                        <strong>Donauradweg</strong>
                      </p>
                      <p>Sichere Fahrradgarage vorhanden</p>
                      <p>Lademöglichkeit für E-Bikes</p>
                      <p className="mt-4">
                        Perfekter Ausgangspunkt für Tagestouren entlang der
                        Donau
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Points of Interest */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4B1E1A] mb-4">
              In der Umgebung
            </h2>
            <p className="text-xl text-[#6B2C24]">
              Sehenswürdigkeiten und Aktivitäten
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Donauradweg",
                distance: "0 km",
                description: "Direkt vor unserer Haustür",
              },
              {
                name: "Dillingen",
                distance: "8 km",
                description: "Historische Altstadt",
              },
              {
                name: "Donauwörth",
                distance: "15 km",
                description: "Romantische Stadt an der Donau",
              },
              {
                name: "Augsburg",
                distance: "45 km",
                description: "Kulturstadt mit Geschichte",
              },
              {
                name: "Ulm",
                distance: "60 km",
                description: "Münster und Altstadt",
              },
              {
                name: "Legoland",
                distance: "40 km",
                description: "Freizeitpark für Familien",
              },
            ].map((poi, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Navigation className="w-5 h-5 text-[#A63A2B]" />
                    <span className="font-semibold text-[#A63A2B]">
                      {poi.distance}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#4B1E1A] mb-2">
                    {poi.name}
                  </h3>
                  <p className="text-[#6B2C24]">{poi.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
