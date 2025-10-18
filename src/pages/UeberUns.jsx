
import React from "react";
import { Heart, Home, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-[#F6F3EE]">
      {/* Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e3ca6c644715df95305a8d/4f6a4e6de_d427ee6d-f86f-462a-9b14-86d70c5e5335.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Über Uns</h1>
          <p className="text-xl md:text-2xl text-white/90 font-serif">
            Unsere Geschichte und unsere Werte
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4B1E1A] mb-6">
              Willkommen in unserem Gästehaus
            </h2>
            <div className="w-24 h-1 bg-[#A63A2B] mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#6B2C24] space-y-6">
            <p className="text-xl leading-relaxed">
              Unser familiengeführtes Gästehaus liegt im malerischen Blindheim,
              einem charmanten Ort im Herzen Bayerns. Seit über 30 Jahren
              empfangen wir Gäste aus aller Welt und bieten ihnen ein Zuhause
              fernab von Zuhause.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div>
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e3ca6c644715df95305a8d/5cfc70424_door.jpg"
                  alt="Eingang Gästehaus"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div>
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e3ca6c644715df95305a8d/a56d3b017_window.jpg"
                  alt="Fenster mit roten Läden"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              Was uns besonders macht, ist die Kombination aus familiärer
              Atmosphäre und der wunderschönen Lage direkt am Donauradweg. Ob
              Sie eine Radtour planen, die Region erkunden möchten oder einfach
              nur die Ruhe der Natur genießen wollen – bei uns sind Sie genau
              richtig.
            </p>

            <p className="text-lg leading-relaxed">
              Wir legen großen Wert auf persönlichen Service und die Zufriedenheit
              unserer Gäste. Jedes unserer Zimmer ist mit Liebe zum Detail
              eingerichtet und bietet Ihnen den Komfort, den Sie für einen
              erholsamen Aufenthalt benötigen.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-[#FAE7C5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4B1E1A] mb-4">
              Unsere Werte
            </h2>
            <p className="text-xl text-[#6B2C24]">
              Was uns antreibt und ausmacht
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Herzlichkeit",
                description:
                  "Wir empfangen jeden Gast wie einen guten Freund und sorgen für eine familiäre Atmosphäre.",
                color: "from-[#A63A2B] to-[#8F3226]",
              },
              {
                icon: Home,
                title: "Gemütlichkeit",
                description:
                  "Unsere Räume sind liebevoll gestaltet, damit Sie sich wie zu Hause fühlen.",
                color: "from-[#E8B15C] to-[#d9a04d]",
              },
              {
                icon: Users,
                title: "Regionalität",
                description:
                  "Wir arbeiten mit lokalen Partnern zusammen und fördern die Region.",
                color: "from-[#A63A2B] to-[#8F3226]",
              },
              {
                icon: Award,
                title: "Qualität",
                description:
                  "Höchste Standards bei Sauberkeit, Service und Ausstattung sind uns wichtig.",
                color: "from-[#E8B15C] to-[#d9a04d]",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4B1E1A] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#6B2C24]">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section className="py-20 px-4 bg-[#FAE7C5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#4B1E1A] mb-6">
            Blindheim - Unser Zuhause
          </h2>
          <p className="text-xl text-[#6B2C24] leading-relaxed mb-8">
            Blindheim ist ein idyllischer Ort mit etwa 1.700 Einwohnern im
            Landkreis Dillingen an der Donau. Die Gemeinde besticht durch ihre
            ländliche Ruhe und die Nähe zur Natur. Der beliebte Donauradweg
            führt direkt durch den Ort und macht Blindheim zum perfekten
            Ausgangspunkt für Radtouren entlang der Donau.
          </p>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1503891617560-5b8c2e28cbf6?w=1200&q=80"
              alt="Blindheim Landschaft"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
