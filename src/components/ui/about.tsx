"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Users } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: MapPin,
      title: "Localização Privilegiada",
      description: "No coração do deserto de Nevada, Las Vegas é um oásis de entretenimento",
    },
    {
      icon: Clock,
      title: "24/7 Entretenimento",
      description: "A cidade que nunca dorme oferece diversão a qualquer hora do dia",
    },
    {
      icon: Users,
      title: "Para Todos os Gostos",
      description: "Desde cassinos até shows mundiais, há algo para cada visitante",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Sobre Las Vegas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Las Vegas é muito mais que cassinos e shows. É uma experiência única que combina luxo, entretenimento e
            aventura em um só lugar, criando memórias que duram para sempre.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}