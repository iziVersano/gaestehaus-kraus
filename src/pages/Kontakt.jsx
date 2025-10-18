
import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "2",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Log the form data to console for local development
      console.log("Buchungsanfrage eingereicht:", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        checkin: formData.checkin,
        checkout: formData.checkout,
        guests: formData.guests,
        message: formData.message,
      });

      // Simulate a successful submission
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkin: "",
        checkout: "",
        guests: "2",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Fehler beim Verarbeiten:", error);
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#F6F3EE]">
      {/* Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Kontakt</h1>
          <p className="text-xl md:text-2xl text-white/90 font-serif">
            Wir freuen uns auf Ihre Anfrage
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-[#4B1E1A] mb-8 font-serif">
                Kontaktieren Sie uns
              </h2>
              <p className="text-lg text-[#6B2C24] mb-8 font-sans">
                Haben Sie Fragen oder möchten Sie ein Zimmer buchen? Wir sind
                gerne für Sie da und beantworten alle Ihre Fragen.
              </p>

              <div className="space-y-6">
                {/* WhatsApp */}
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-[#25D366]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#4B1E1A] mb-1 font-serif">
                          WhatsApp
                        </h3>
                        <a
                          href="https://wa.me/4917652832895?text=Hallo,%20ich%20interessiere%20mich%20für%20eine%20Buchung%20im%20Gästehaus%20Kraus."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#25D366] hover:underline font-sans"
                        >
                          +49 176 52832895
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#E8B15C]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#A63A2B]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#4B1E1A] mb-1 font-serif">
                          Telefon
                        </h3>
                        <a
                          href="tel:+4917652832895"
                          className="text-[#A63A2B] hover:underline font-sans"
                        >
                          +49 176 52832895
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#E8B15C]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#A63A2B]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#4B1E1A] mb-1 font-serif">
                          E-Mail
                        </h3>
                        <a
                          href="mailto:info@gaestehaus-kraus.de"
                          className="text-[#A63A2B] hover:underline font-sans"
                        >
                          info@gaestehaus-kraus.de
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Address */}
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#E8B15C]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#A63A2B]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#4B1E1A] mb-1 font-serif">
                          Adresse
                        </h3>
                        <p className="text-[#6B2C24] font-sans">
                          Schloßstraße 18
                          <br />
                          Blindheim
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Opening Hours */}
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#E8B15C]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-[#A63A2B]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#4B1E1A] mb-1 font-serif">
                          Erreichbarkeit
                        </h3>
                        <p className="text-[#6B2C24] font-sans">
                          Täglich: 8:00 - 20:00 Uhr
                          <br />
                          Check-in: 15:00 - 20:00 Uhr
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#4B1E1A] mb-6 font-serif">
                    Buchungsanfrage
                  </h3>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-[#E8B15C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-[#A63A2B]" />
                      </div>
                      <h4 className="text-2xl font-bold text-[#4B1E1A] mb-2 font-serif">
                        Vielen Dank!
                      </h4>
                      <p className="text-[#6B2C24] font-sans">
                        Ihre Anfrage wurde erfolgreich versendet. Wir melden
                        uns schnellstmöglich bei Ihnen.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="font-sans">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1 font-sans"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email" className="font-sans">E-Mail *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 font-sans"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="font-sans">Telefon</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 font-sans"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="checkin" className="font-sans">Anreise *</Label>
                          <Input
                            id="checkin"
                            name="checkin"
                            type="date"
                            value={formData.checkin}
                            onChange={handleChange}
                            required
                            className="mt-1 font-sans"
                          />
                        </div>
                        <div>
                          <Label htmlFor="checkout" className="font-sans">Abreise *</Label>
                          <Input
                            id="checkout"
                            name="checkout"
                            type="date"
                            value={formData.checkout}
                            onChange={handleChange}
                            required
                            className="mt-1 font-sans"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="guests" className="font-sans">Anzahl Gäste</Label>
                        <Input
                          id="guests"
                          name="guests"
                          type="number"
                          min="1"
                          max="10"
                          value={formData.guests}
                          onChange={handleChange}
                          className="mt-1 font-sans"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="font-sans">Ihre Nachricht</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="mt-1 font-sans"
                          placeholder="Haben Sie besondere Wünsche oder Fragen?"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#A63A2B] hover:bg-[#8F3226] text-lg py-6 font-sans"
                      >
                        {isSubmitting ? (
                          "Wird gesendet..."
                        ) : (
                          <>
                            Anfrage senden
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
