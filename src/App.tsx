import React, { useState } from 'react';
import { Menu, X, Plus, ArrowRight, ChevronDown, Globe, Ship, FileText, Package, Truck, Phone, Mail, MapPin } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black z-50">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-white text-2xl font-bold tracking-wider">
              LOG<Plus size={20} className="inline mx-1" />MAIS
            </div>
            <div className="hidden md:block ml-4 text-white/60 text-sm uppercase tracking-widest">
              Soluções em Comércio Exterior
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <a href="#inicio" className="text-white hover:text-[#E5642E] transition-colors duration-300 text-sm uppercase tracking-wider">Início</a>
            <a href="#sobre" className="text-white hover:text-[#E5642E] transition-colors duration-300 text-sm uppercase tracking-wider">Sobre</a>
            <a href="#servicos" className="text-white hover:text-[#E5642E] transition-colors duration-300 text-sm uppercase tracking-wider">Serviços</a>
            <a href="#projetos" className="text-white hover:text-[#E5642E] transition-colors duration-300 text-sm uppercase tracking-wider">Projetos</a>
            <a href="#contato" className="text-white hover:text-[#E5642E] transition-colors duration-300 text-sm uppercase tracking-wider">Contato</a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <nav className="px-6 py-6 space-y-6">
              <a href="#inicio" className="block text-white hover:text-[#E5642E] transition-colors duration-300 text-sm uppercase tracking-wider" onClick={toggleMenu}>Início</a>
              <a href="#sobre" className="block text-white hover:text-[#E5642E] transition-colors duration-300 text-sm uppercase tracking-wider" onClick={toggleMenu}>Sobre</a>
              <a href="#servicos" className="block text-white hover:text-[#E5642E] transition-colors duration-300 text-sm uppercase tracking-wider" onClick={toggleMenu}>Serviços</a>
              <a href="#projetos" className="block text-white hover:text-[#E5642E] transition-colors duration-300 text-sm uppercase tracking-wider" onClick={toggleMenu}>Projetos</a>
              <a href="#contato" className="block text-white hover:text-[#E5642E] transition-colors duration-300 text-sm uppercase tracking-wider" onClick={toggleMenu}>Contato</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 min-h-screen bg-[#E5642E] relative overflow-hidden">
        <div className="container mx-auto px-6 h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <div className="text-left">
              <div className="text-white text-7xl md:text-9xl font-bold mb-4 tracking-tight">
                LOG<Plus size={60} className="inline mx-2" />MAIS
              </div>
              <p className="text-white/90 text-xl md:text-2xl mb-8 uppercase tracking-widest font-light">
                Soluções em Comércio Exterior
              </p>
              <div className="bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 inline-block mb-8">
                <p className="text-white text-lg font-medium">
                  +25 anos no Comércio Exterior
                </p>
              </div>
              <p className="text-white text-2xl md:text-3xl font-bold italic mb-8">
                A empresa que realmente importa para você!
              </p>
            </div>
            
            {/* Logistics Illustration */}
            <div className="hidden md:block relative">
              <div className="w-full h-96 relative bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg overflow-hidden">
                {/* Sky with sunset */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-yellow-200 via-orange-300 to-orange-400"></div>
                
                {/* Clouds */}
                <div className="absolute top-8 right-12 w-20 h-12 bg-white/80 rounded-full"></div>
                <div className="absolute top-6 right-8 w-16 h-10 bg-white/60 rounded-full"></div>
                
                {/* Ship silhouette */}
                <div className="absolute bottom-20 left-8 w-32 h-16">
                  <div className="w-full h-8 bg-black/60 rounded-t-lg"></div>
                  <div className="w-4 h-12 bg-black/60 absolute left-1/2 -top-4 transform -translate-x-1/2"></div>
                </div>
                
                {/* Airplane silhouette */}
                <div className="absolute top-16 left-16 w-16 h-4 bg-black/40 transform rotate-12">
                  <div className="w-4 h-8 bg-black/40 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                
                {/* Containers */}
                <div className="absolute bottom-8 right-12 space-x-2 flex">
                  <div className="w-6 h-8 bg-red-600"></div>
                  <div className="w-6 h-8 bg-blue-600"></div>
                  <div className="w-6 h-8 bg-green-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="min-h-screen bg-black flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-0 min-h-[80vh]">
            {/* Left - Landscape */}
            <div className="bg-gradient-to-br from-blue-200 to-blue-300 relative overflow-hidden">
              {/* Clouds */}
              <div className="absolute top-12 right-16 w-24 h-16 bg-white rounded-full opacity-80"></div>
              <div className="absolute top-8 right-12 w-20 h-12 bg-white rounded-full opacity-60"></div>
              <div className="absolute top-16 left-12 w-28 h-18 bg-white rounded-full opacity-70"></div>
              
              {/* Hills */}
              <div className="absolute bottom-0 left-0 w-full h-3/5">
                <svg viewBox="0 0 400 240" className="w-full h-full">
                  <path d="M0,240 L0,140 Q100,100 200,120 Q300,140 400,110 L400,240 Z" fill="#8FBC8F" />
                  <path d="M0,240 L0,160 Q150,120 300,150 Q350,160 400,140 L400,240 Z" fill="#9ACD32" />
                </svg>
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="bg-[#E5642E] flex items-center justify-center p-12 md:p-16">
              <div className="max-w-md">
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Sobre a<br />LOGMAIS
                </h2>
                
                {/* Decorative Line */}
                <div className="w-16 h-1 bg-white mb-8"></div>
                
                <div className="text-white/90 text-lg leading-relaxed space-y-4">
                  <p>
                    Com mais de 25 anos de experiência no mercado de Comércio Exterior, 
                    a LOGMAIS é especializada em soluções completas para importação e exportação.
                  </p>
                  <p>
                    Nossa expertise abrange desde assessoria aduaneira até transporte rodoviário, 
                    oferecendo um serviço integrado e personalizado para cada cliente.
                  </p>
                  <p>
                    Somos a empresa que realmente importa para você, garantindo eficiência 
                    e segurança em todas as operações de comércio internacional.
                  </p>
                </div>
                
                {/* Arrow Icon */}
                <div className="mt-12">
                  <ArrowRight size={32} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-[#FFF4EF]">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-[#E5642E] text-5xl md:text-6xl font-bold mb-4">Serviços Oferecidos</h2>
            <p className="text-gray-600 text-xl">Confira nossos serviços e acesse nossas redes sociais!</p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {/* Importação */}
            <div className="bg-[#E5642E] p-8 rounded-lg text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <Globe size={48} className="text-white mx-auto" />
              </div>
              <h3 className="text-white text-lg font-bold mb-2">IMPORTAÇÃO</h3>
              <p className="text-white/80 text-sm">Serviços completos de importação com assessoria especializada</p>
            </div>

            {/* Exportação */}
            <div className="bg-black p-8 rounded-lg text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <Ship size={48} className="text-[#E5642E] mx-auto" />
              </div>
              <h3 className="text-white text-lg font-bold mb-2">EXPORTAÇÃO</h3>
              <p className="text-gray-300 text-sm">Facilitamos suas operações de exportação internacional</p>
            </div>

            {/* Assessoria Aduaneira */}
            <div className="bg-[#E5642E] p-8 rounded-lg text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <FileText size={48} className="text-white mx-auto" />
              </div>
              <h3 className="text-white text-lg font-bold mb-2">ASSESSORIA ADUANEIRA</h3>
              <p className="text-white/80 text-sm">Consultoria especializada em processos aduaneiros</p>
            </div>

            {/* Armazenamento de Carga */}
            <div className="bg-black p-8 rounded-lg text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <Package size={48} className="text-[#E5642E] mx-auto" />
              </div>
              <h3 className="text-white text-lg font-bold mb-2">ARMAZENAMENTO DE CARGA</h3>
              <p className="text-gray-300 text-sm">Soluções seguras para armazenamento de mercadorias</p>
            </div>

            {/* Transporte Rodoviário */}
            <div className="bg-[#E5642E] p-8 rounded-lg text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <Truck size={48} className="text-white mx-auto" />
              </div>
              <h3 className="text-white text-lg font-bold mb-2">TRANSPORTE RODOVIÁRIO</h3>
              <p className="text-white/80 text-sm">Logística rodoviária eficiente e confiável</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-black p-8 rounded-lg inline-block">
              <p className="text-white text-xl mb-4">Precisa de nossos serviços?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:1234267404" className="flex items-center space-x-2 text-[#E5642E] hover:text-orange-400 transition-colors">
                  <Phone size={20} />
                  <span>(12) 3426-7404</span>
                </a>
                <a href="https://wa.me/5512997601090" className="flex items-center space-x-2 text-green-500 hover:text-green-400 transition-colors">
                  <Phone size={20} />
                  <span>(12) 99760-1090</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Title and Arrow */}
            <div>
              <h2 className="text-white text-5xl md:text-6xl font-bold mb-16">Projetos</h2>
              
              {/* Large Arrow */}
              <div className="hidden md:block">
                <svg width="300" height="150" viewBox="0 0 300 150" className="text-[#E5642E]">
                  <path d="M20,75 L250,75" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path d="M250,75 L230,55 M250,75 L230,95" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path d="M250,75 Q270,60 280,75 Q270,90 250,75" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </div>
            </div>
            
            {/* Right - Projects List */}
            <div className="space-y-12">
              {/* Project 1 */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <svg width="48" height="48" viewBox="0 0 48 48" className="text-[#E5642E]">
                    <polygon points="24,8 32,16 32,32 16,32 16,16" stroke="currentColor" strokeWidth="2" fill="none" />
                    <polygon points="20,12 28,12 28,20 20,20" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">Importação de Equipamentos Industriais</h3>
                  <p className="text-gray-400">Gestão completa da importação de maquinário pesado para indústria automobilística</p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <svg width="48" height="48" viewBox="0 0 48 48" className="text-[#E5642E]">
                    <polygon points="24,6 36,18 30,24 24,18 18,24 12,18" stroke="currentColor" strokeWidth="2" fill="none" />
                    <polygon points="18,24 30,24 30,36 18,36" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">Exportação de Produtos Agrícolas</h3>
                  <p className="text-gray-400">Facilitação da exportação de commodities para mercados internacionais</p>
                </div>
              </div>

              {/* Project 3 */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <svg width="48" height="48" viewBox="0 0 48 48" className="text-[#E5642E]">
                    <polygon points="24,8 32,20 24,32 16,20" stroke="currentColor" strokeWidth="2" fill="none" />
                    <polygon points="24,16 28,22 24,28 20,22" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">Consultoria em Comércio Exterior</h3>
                  <p className="text-gray-400">Assessoria estratégica para empresas iniciantes no mercado internacional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frase de Impacto */}
      <section className="bg-[#E5642E] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-0 min-h-[60vh]">
            {/* Left - Text */}
            <div className="flex items-center justify-center p-12">
              <div className="max-w-md">
                <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight uppercase tracking-wider">
                  FRASE IMPACTANTE
                </h2>
                <p className="text-white/90 text-xl mt-6">
                  "Conectamos seu negócio ao mundo com segurança e eficiência"
                </p>
              </div>
            </div>
            
            {/* Right - Abstract Element */}
            <div className="bg-black flex items-center justify-center relative">
              <div className="text-white text-lg max-w-xs leading-relaxed text-center">
                <p className="mb-4">Mais de 25 anos transformando desafios logísticos em oportunidades de crescimento.</p>
                <p className="text-[#E5642E] font-bold">A empresa que realmente importa para você!</p>
              </div>
              
              {/* Decorative Arrow */}
              <div className="absolute bottom-12 right-12">
                <svg width="60" height="40" viewBox="0 0 60 40" className="text-white">
                  <path d="M10,20 L45,20 M45,20 L35,10 M45,20 L35,30" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Contact Info */}
            <div className="bg-[#E5642E] p-12 rounded-lg">
              <h2 className="text-white text-3xl font-bold mb-12 uppercase tracking-wider">Nossos Contatos:</h2>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Mail size={24} className="text-white" />
                  <div>
                    <p className="text-white text-lg">contato@logmais.com.br</p>
                    <p className="text-white/80 text-sm">logmaiscomax@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone size={24} className="text-white" />
                  <div>
                    <p className="text-white text-lg">(12) 3426-7404</p>
                    <p className="text-white/80 text-sm">Telefone comercial</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone size={24} className="text-white" />
                  <div>
                    <p className="text-white text-lg">(12) 99760-1090</p>
                    <p className="text-white/80 text-sm">WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Globe size={24} className="text-white" />
                  <div>
                    <p className="text-white text-lg">www.logmaiscomax.com.br</p>
                    <p className="text-white/80 text-sm">Site oficial</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin size={24} className="text-white" />
                  <div>
                    <p className="text-white text-lg">@logmaiscomax</p>
                    <p className="text-white/80 text-sm">Redes sociais</p>
                  </div>
                </div>
              </div>

              {/* QR Code placeholder */}
              <div className="mt-8 p-4 bg-white rounded-lg inline-block">
                <div className="w-24 h-24 bg-black rounded grid grid-cols-8 gap-px p-2">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-black'} rounded-sm`}></div>
                  ))}
                </div>
                <p className="text-black text-xs mt-2 text-center">Escaneie para contato</p>
              </div>
            </div>
            
            {/* Right - Logo and Social */}
            <div className="flex flex-col items-end justify-center space-y-8">
              <div className="text-right">
                <div className="text-white text-4xl font-bold tracking-wider mb-4">
                  LOG<Plus size={32} className="inline mx-2" />MAIS
                </div>
                <p className="text-white/60 text-lg uppercase tracking-widest mb-2">
                  Soluções em Comércio Exterior
                </p>
                <p className="text-[#E5642E] text-xl font-bold">
                  +25 anos no Comércio Exterior
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-[#E5642E] rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="text-white font-bold">f</span>
                </a>
                <a href="#" className="w-12 h-12 bg-[#E5642E] rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="text-white font-bold">@</span>
                </a>
                <a href="#" className="w-12 h-12 bg-[#E5642E] rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="text-white font-bold">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;