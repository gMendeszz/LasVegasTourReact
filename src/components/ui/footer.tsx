import { Instagram, Mail, Github , Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Las Vegas Tour
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Sua porta de entrada para as melhores experiências em Las Vegas. Descubra, explore e viva momentos
              inesquecíveis na cidade do entretenimento.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#attractions" className="hover:text-white transition-colors">
                  Atrações
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tours Guiados
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Reservas de Hotel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ingressos para Shows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Transporte
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
               <a
             href="https://www.instagram.com/mendes7zz/"
             target="_blank"
             rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
             href="https://github.com/gMendeszz"
             target="_blank"
             rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            <a
             href="https://www.linkedin.com/in/guilherme-mendes-0963a52b9/"
             target="_blank"
             rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Las Vegas Tour. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}