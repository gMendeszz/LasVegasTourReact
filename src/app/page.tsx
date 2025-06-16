import Hero from "@/components/ui/hero"
import About from "@/components/ui/about"
import Attractions from "@/components/ui/attractions"
import Gallery from "@/components/ui/gallery"
import Contact from "@/components/ui/contact"
import Footer from "@/components/ui/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Attractions />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}