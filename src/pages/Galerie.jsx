
import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e3ca6c644715df95305a8d/61d67f3d4_39b0d7c4-b57e-4c3b-9509-6d57cc9d458f.png",
    title: "Doppelzimmer Standard", // Changed from "Doppelzimmer"
    category: "Zimmer",
  },
  {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    title: "Außenansicht",
    category: "Gebäude",
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e3ca6c644715df95305a8d/090b4a9bb_08f6cdd7-9e94-4e4c-8dda-406db5fba6a6.png", // Updated URL
    title: "Doppelzimmer Komfort", // Title updated from "Komfortzimmer" to match outline
    category: "Zimmer",
  },
  {
    url: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80",
    title: "Frühstücksbuffet",
    category: "Kulinarik",
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e3ca6c644715df95305a8d/4701bcb5a_184f3ed5-81e9-45e9-888e-0af83eb2da3a.png",
    title: "Familienzimmer",
    category: "Zimmer",
  },
  {
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    title: "Garten",
    category: "Außenbereich",
  },
  {
    url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
    title: "Frühstückstisch",
    category: "Kulinarik",
  },
  {
    url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80",
    title: "Gemütliche Ecke",
    category: "Gebäude",
  },
  // {
  //   url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  //   title: "Einzelzimmer",
  //   category: "Zimmer",
  // },
  {
    url: "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=800&q=80",
    title: "Donauradweg",
    category: "Umgebung",
  },
  {
    url: "https://images.unsplash.com/photo-1503891617560-5b8c2e28cbf6?w=800&q=80",
    title: "Landschaft",
    category: "Umgebung",
  },
  {
    url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    title: "Badezimmer",
    category: "Zimmer",
  },
];

export default function Galerie() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("Alle");

  const categories = [
    "Alle",
    ...new Set(images.map((img) => img.category)),
  ];

  const filteredImages =
    filter === "Alle"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen bg-[#F6F3EE]">
      {/* Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Galerie</h1>
          <p className="text-xl md:text-2xl text-white/90 font-serif">
            Entdecken Sie unser Gästehaus
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-4 bg-white border-b border-[#E8B15C]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all font-sans ${
                  filter === category
                    ? "bg-[#A63A2B] text-white shadow-md"
                    : "bg-[#FAE7C5] text-[#4B1E1A] hover:bg-[#E8B15C]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.url}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4B1E1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-semibold text-lg font-serif">{image.title}</h3>
                      <p className="text-sm text-white/80 font-sans">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="text-2xl font-bold mb-2 font-serif">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80 font-sans">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
