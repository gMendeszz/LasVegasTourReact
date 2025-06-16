"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      id: 1,
      image: "/images/vegasstripnight.png",
      alt: "Las Vegas Strip à noite",
      title: "The Strip",
    },
    {
      id: 2,
      image: "/images/bellagiofountain.png",
      alt: "Bellagio Fountains",
      title: "Bellagio Fountains",
    },
    {
      id: 3,
      image: "/images/panoramicvegas.png",
      alt: "Las Vegas Panoramic",
      title: "Las Vegas",
    },
    {
      id: 4,
      image: "/images/highrollervegas.png",
      alt: "High Roller Ferris Wheel",
      title: "High Roller",
    },
    {
      id: 5,
      image: "/images/redrockvegas.png",
      alt: "Red Rock Canyon",
      title: "Red Rock Canyon",
    },
    {
      id: 6,
      image: "/images/vegaslights.png",
      alt: "Las Vegas vibrante à noite, repleta de carros e luzes brilhantes.",
      title: "Vegas Lights",
    },
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Galeria de Fotos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma prévia visual das maravilhas que aguardam você em Las Vegas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
              onClick={() => openModal(index)}
            >
              <img
              src={image.image || "/placeholder.svg"}
              alt={image.alt}
               className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
             src={images[selectedImage].image || "/placeholder.svg"}
             alt={images[selectedImage].alt}
             className="max-w-full max-h-full object-contain"
          />

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <h3 className="text-xl font-semibold">{images[selectedImage].title}</h3>
              <p className="text-sm opacity-75">
                {selectedImage + 1} de {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}