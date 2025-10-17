
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
              "url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Über Uns</h1>
          <p className="text-xl md:text-2xl text-white/90">
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
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80"
                  alt="Haus außen"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=600&q=80"
                  alt="Gemütliche Ecke"
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

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4B1E1A] mb-4">
              Unser Team
            </h2>
            <p className="text-xl text-[#6B2C24]">
              Die Menschen hinter dem Gästehaus Kraus
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Schmidt",
                role: "Inhaberin",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
                description:
                  "Mit Leidenschaft sorgt Maria für das Wohl unserer Gäste.",
              },
              {
                name: "Thomas Schmidt",
                role: "Inhaber",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
                description:
                  "Thomas kümmert sich um die technische Seite und die Radtouren.",
              },
              {
                name: "Anna Müller",
                role: "Service",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
                description:
                  "Anna sorgt für ein herzliches Willkommen und einen perfekten Service.",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center bg-[#FAF7F2]">
                  <h3 className="text-xl font-bold text-[#4B1E1A] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#A63A2B] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-[#6B2C24]">{member.description}</p>
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
