"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock } from 'lucide-react'

export default function Attractions() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const attractions = [
    {
      id: 1,
      name: "Bellagio Fountains",
      category: "shows",
      image: "http://1.bp.blogspot.com/-Sm5MOxACDxY/U2dYTLalu-I/AAAAAAAAeO8/KU2JzDg9vfo/s1600/Bellagio-RS.jpg",
      rating: 4.8,
      description: "Espetáculo aquático mundialmente famoso com música e luzes",
      location: "Bellagio Hotel",
      duration: "15 min",
    },
    {
      id: 2,
      name: "High Roller",
      category: "attractions",
      image: "/images/highroller.png",
      rating: 4.6,
      description: "A maior roda gigante do mundo com vistas panorâmicas",
      location: "The LINQ",
      duration: "30 min",
    },
    {
      id: 3,
      name: "Fremont Street",
      category: "entertainment",
      image: "/images/freemontvegas.png",
      rating: 4.5,
      description: "Rua histórica com teto LED e entretenimento ao vivo",
      location: "Downtown Las Vegas",
      duration: "2-3 horas",
    },
    {
      id: 4,
      name: "Cirque du Soleil",
      category: "shows",
      image: "/images/cirquevegas.png",
      rating: 4.9,
      description: "Shows acrobáticos de classe mundial",
      location: "Vários hotéis",
      duration: "90 min",
    },
    {
      id: 5,
      name: "Red Rock Canyon",
      category: "nature",
      image: "/images/redrrockvegas.png",
      rating: 4.7,
      description: "Paisagens naturais deslumbrantes a poucos minutos da cidade",
      location: "17 milhas oeste",
      duration: "Dia inteiro",
    },
    {
      id: 6,
      name: "The Strip",
      category: "attractions",
      image: "/images/vegasstrip.png",
      rating: 4.8,
      description: "A famosa avenida com os maiores cassinos e hotéis",
      location: "Las Vegas Boulevard",
      duration: "Ilimitado",
    },
  ]

  const categories = [
    { id: "all", name: "Todas" },
    { id: "shows", name: "Shows" },
    { id: "attractions", name: "Atrações" },
    { id: "entertainment", name: "Entretenimento" },
    { id: "nature", name: "Natureza" },
  ]

  const filteredAttractions =
    selectedCategory === "all"
      ? attractions
      : attractions.filter((attraction) => attraction.category === selectedCategory)

  return (
    <section id="attractions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Principais Atrações</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descubra os pontos turísticos mais icônicos e experiências imperdíveis de Las Vegas
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                    : "hover:bg-gray-100"
                } transition-all duration-300`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAttractions.map((attraction) => (
            <Card
              key={attraction.id}
              className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{attraction.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{attraction.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{attraction.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{attraction.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{attraction.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}