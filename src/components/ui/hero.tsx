"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d')] bg-cover bg-center opacity-30" />
      
      <div
        className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-red-300 bg-clip-text text-transparent">
          Las Vegas Tour
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Descubra a cidade que nunca dorme e viva experiências inesquecíveis no coração do entretenimento mundial
        </p>
        <Button
          onClick={scrollToAbout}
          size="lg"
          className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Explore Agora
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  )
}