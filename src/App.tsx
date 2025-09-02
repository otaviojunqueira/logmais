import { useState } from 'react';
import { Menu, X, Plus, ArrowRight, ChevronDown, Globe, Ship, FileText, Package, Truck, Phone, Mail, MapPin } from 'lucide-react';
import logoWhite from '../assets/LOGOTIPO BRANCA - LOGMAIS COMEX.png';
import logoBlack from '../assets/logo_recortada.png';
import logisticsPort from '../assets/logistics-port.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
             <img
                src={logoWhite}
                alt="Logo Log+Mais"
                className="w-28 md:w-32 mb-1 drop-shadow-2xl"
                style={{ maxWidth: '100%', height: 'auto' }}
                
              />
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
      <section id="inicio" className="pt-20 min-h-screen relative overflow-hidden bg-white">
        {/* Background branco limpo */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Elementos decorativos sutis */}
        <div className="absolute inset-0 opacity-5">
          {/* Formas geométricas sutis */}
          <div className="absolute top-20 right-10 w-20 h-12 bg-[#E5642E]/20 rounded transform rotate-12"></div>
          <div className="absolute top-32 right-20 w-16 h-8 bg-[#E5642E]/15 rounded transform -rotate-6"></div>
          <div className="absolute bottom-20 right-16 w-12 h-16 bg-[#E5642E]/10 rounded-sm"></div>
          <div className="absolute bottom-20 right-32 w-12 h-16 bg-[#E5642E]/15 rounded-sm"></div>
          <div className="absolute bottom-20 right-48 w-12 h-16 bg-[#E5642E]/20 rounded-sm"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-8 md:px-16 h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-20 md:gap-24 items-center w-full">
            {/* Coluna da esquerda - Conteúdo principal */}
            <div className="text-left pl-4 md:pl-8">{/* Adicionando padding lateral */}
              {/* Logo oficial */}
              <img
                src={logoBlack}
                alt="Logo Log+Mais"
                className="w-96 md:w-120 mb-6 drop-shadow-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
                
              />
              
              {/* Slogan principal */}
              <h1 className="text-gray-800 text-3xl md:text-4xl font-bold italic mb-6 leading-tight">
                A empresa que realmente importa para você!
              </h1>
              

              {/* Serviços sutis embaixo da logo */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 justify-start">
                  <span className="text-gray-700 text-sm bg-gray-100 px-3 py-1 rounded-full border border-gray-200 hover:bg-[#E5642E] hover:text-white transition-all duration-300">
                    Importação
                  </span>
                  <span className="text-gray-700 text-sm bg-gray-100 px-3 py-1 rounded-full border border-gray-200 hover:bg-[#E5642E] hover:text-white transition-all duration-300">
                    Exportação
                  </span>
                  <span className="text-gray-700 text-sm bg-gray-100 px-3 py-1 rounded-full border border-gray-200 hover:bg-[#E5642E] hover:text-white transition-all duration-300">
                    Assessoria Aduaneira
                  </span>
                  <span className="text-gray-700 text-sm bg-gray-100 px-3 py-1 rounded-full border border-gray-200 hover:bg-[#E5642E] hover:text-white transition-all duration-300">
                    Agenciamento
                  </span>
                  <span className="text-gray-700 text-sm bg-gray-100 px-3 py-1 rounded-full border border-gray-200 hover:bg-[#E5642E] hover:text-white transition-all duration-300">
                    Transporte
                  </span>
                </div>
              </div>
              
              
              
            </div>
            
            {/* Coluna da direita - Imagem de logística */}
            <div className="hidden md:block pr-4 md:pr-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={logisticsPort}
                  alt="Logística - Porto, Aviões, Navios e Caminhões"
                  className="w-full h-96 object-cover"
                  style={{ objectPosition: 'center' }}
                />
                {/* Overlay sutil para melhor integração */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Tag no canto inferior */}
                <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <p className="text-[#E5642E] text-sm font-bold uppercase tracking-wider">
                    Soluções em Comércio Exterior
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#E5642E] animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>


      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#E5642E]/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#E5642E]/10 transform rotate-45"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-[#E5642E]/30 transform rotate-12"></div>
          
          {/* Lines Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-8 gap-8 h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border-l border-[#E5642E]/20"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E5642E] to-white mb-4">
                SERVIÇOS
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#E5642E] to-transparent mx-auto"></div>
            </div>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
              Soluções completas em comércio exterior com mais de 16 anos de experiência
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Importação */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-[#E5642E] to-[#FF6B35] rounded-2xl p-8 border border-[#E5642E]/20 hover:shadow-2xl hover:shadow-[#E5642E]/30 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-wide">
                  Importação
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Serviços completos de importação com assessoria especializada para todos os tipos de mercadorias.
                </p>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Exportação */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-[#E5642E]/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E5642E]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E5642E] to-[#FF6B35] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Ship className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-wide group-hover:text-[#E5642E] transition-colors duration-300">
                  Exportação
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Facilitamos suas operações de exportação para mercados internacionais com eficiência.
                </p>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-[#E5642E]" />
                </div>
              </div>
            </div>

            {/* Assessoria Aduaneira */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-[#E5642E] to-[#FF6B35] rounded-2xl p-8 border border-[#E5642E]/20 hover:shadow-2xl hover:shadow-[#E5642E]/30 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-wide">
                  Assessoria Aduaneira
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Consultoria especializada em processos aduaneiros e documentação internacional.
                </p>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Agenciamento de Carga */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-[#E5642E]/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E5642E]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E5642E] to-[#FF6B35] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-wide group-hover:text-[#E5642E] transition-colors duration-300">
                  Agenciamento de Carga
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Soluções completas para agenciamento e gestão de cargas internacionais.
                </p>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-[#E5642E]" />
                </div>
              </div>
            </div>

            {/* Transporte Rodoviário */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-[#E5642E] to-[#FF6B35] rounded-2xl p-8 border border-[#E5642E]/20 hover:shadow-2xl hover:shadow-[#E5642E]/30 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-wide">
                  Transporte Rodoviário
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Logística rodoviária eficiente e confiável para suas mercadorias.
                </p>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Consultoria Especializada */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-[#E5642E]/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E5642E]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E5642E] to-[#FF6B35] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-wide group-hover:text-[#E5642E] transition-colors duration-300">
                  Consultoria Especializada
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Orientação estratégica para otimizar seus processos de comércio exterior.
                </p>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-[#E5642E]" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
              <h3 className="text-white text-3xl font-bold mb-6">Precisa dos nossos serviços?</h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos ajudar sua empresa no comércio exterior
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="tel:1234267404" className="group flex items-center space-x-3 bg-[#E5642E] hover:bg-[#FF6B35] px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                  <Phone className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">(12) 3426-7493</span>
                </a>
                <a href="https://wa.me/5512997601090" className="group flex items-center space-x-3 bg-green-600 hover:bg-green-500 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                  <Phone className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">(12) 3426-7494</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 bg-gradient-to-br from-gray-900 via-orange-100 to-orange-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#E5642E]/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#E5642E]/10 transform rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#E5642E]/30 transform rotate-12"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-[#E5642E]/20"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E5642E] to-white mb-4">
                PROJETOS
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#E5642E] to-transparent mx-auto"></div>
            </div>
            <p className="text-white-400 text-lg mt-6 max-w-2xl mx-auto">
              Conheça alguns de nossos principais projetos em comércio exterior
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-[#E5642E]/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E5642E]/20">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#E5642E] to-[#FF6B35] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#E5642E] transition-colors duration-300">
                  Importação de Máquinas e Equipamentos
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Gestão completa da importação de maquinário pesado para indústria em geral.
                </p>
                
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-[#E5642E]/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E5642E]/20">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#E5642E] to-[#FF6B35] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Ship className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#E5642E] transition-colors duration-300">
                  Exportação de Produtos Diversos
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Facilitação da exportação de produtos variados para mercados internacionais.
                </p>
                
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-[#E5642E]/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E5642E]/20">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#E5642E] to-[#FF6B35] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#E5642E] transition-colors duration-300">
                  Consultoria em Comércio Exterior
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Assessoria estratégica para empresas iniciantes no mercado internacional, redução de custos e benefícios fiscais.
                </p>
                
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric Shapes */}
          <div className="absolute top-20 right-10 w-40 h-40 border-2 border-[#E5642E]/10 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#E5642E]/5 transform rotate-45"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-[#E5642E]/20 transform rotate-12"></div>
          
          {/* Dots Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-20 gap-8 h-full">
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-[#E5642E] rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#E5642E] via-gray-800 to-[#E5642E] mb-4">
                SOBRE NÓS
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#E5642E] to-transparent mx-auto"></div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Main Text Block */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E5642E] to-[#FF6B35] rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Desde 2009 garantindo resultados</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Com 16 anos de experiência no mercado de Comércio Exterior, 
                  a LOGMAIS é especializada em soluções completas para importação e exportação.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#E5642E] to-[#FF6B35] rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-white/90">Projetos Realizados</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-white/90">Países Atendidos</div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#E5642E]">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Nossa Missão</h4>
                <p className="text-gray-600 leading-relaxed">
                  Somos a empresa que realmente importa para você, garantindo eficiência 
                  e segurança em todas as operações de comércio internacional. Nossa expertise 
                  abrange desde assessoria aduaneira até transporte rodoviário.
                </p>
              </div>
            </div>

            {/* Right Side - Visual Element */}
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-[#E5642E] to-[#FF6B35] rounded-3xl p-12 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-6 gap-4 h-full">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={i} className="border border-white/20"></div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-8">A empresa que realmente importa para você!</h3>
                  
                  {/* Services List */}
                  <div className="space-y-4">
                    {[
                      { icon: Package, text: "Importação Especializada" },
                      { icon: Ship, text: "Exportação Eficiente" },
                      { icon: FileText, text: "Assessoria Completa" },
                      { icon: Truck, text: "Logística Integrada" }
                    ].map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <service.icon className="w-6 h-6 text-white" />
                        <span className="text-white/90">{service.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                  </div>
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
                <h3 className="text-white text-4xl md:text-5xl font-light leading-tight uppercase tracking-wider">
                  Mais do que logística: Inteligência, Economia e Segurança no Comércio Exterior
                </h3>
                <p className="text-white/90 text-xl mt-6">
                  "Conectamos seu negócio ao mundo com segurança e eficiência"
                </p>
              </div>
            </div>
            
            {/* Right - Abstract Element */}
            <div className="bg-black flex items-center justify-center relative">
              <div className="text-white text-lg max-w-xs leading-relaxed text-center">
                <p className="mb-4">Desde 2009 transformando desafios logísticos em oportunidades de crescimento.</p>
                <p className="text-[#E5642E] font-bold">A empresa que realmente importa para você!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Large Circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#E5642E]/5 rounded-full"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#E5642E]/3 rounded-full"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 120 }).map((_, i) => (
                <div key={i} className="border-b border-[#E5642E]/20"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E5642E] to-white mb-4">
                CONTATO
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#E5642E] to-transparent mx-auto"></div>
            </div>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos potencializar seu negócio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Company Info Card */}
              <div className="bg-gradient-to-br from-[#E5642E] to-[#FF6B35] rounded-3xl p-8 border border-[#E5642E]/20 hover:shadow-2xl hover:shadow-[#E5642E]/30 transition-all duration-500">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-25 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  </div>
                  <div>
                    <img
                      src={logoWhite}
                       alt="Logo Log+Mais"
                      className="w-28 md:w-32 mb-1 drop-shadow-2xl"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    /> 
                  </div>
                </div>
                
                <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <div className="text-white text-xl font-bold mb-2">+16 anos</div>
                  <div className="text-white/90">de experiência no comércio exterior</div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="grid gap-6">
                {/* Email */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#E5642E]/50 transition-all duration-500">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#E5642E] to-[#FF6B35] rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">comercial@logmaiscomex.com.br</p>
                      <p className="text-gray-400 text-sm">Email</p>
                    </div>
                  </div>
                </div>

                {/* Phones */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <a href="tel:1234267404" className="group bg-gradient-to-br from-[#E5642E] to-[#FF6B35] rounded-2xl p-6 hover:shadow-2xl hover:shadow-[#E5642E]/30 transition-all duration-500 transform hover:-translate-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white/90 text-xs font-medium">Telefone</p>
                        <p className="text-white font-bold">(12) 3426-7493</p>
                      </div>
                    </div>
                  </a>

                  <a href="https://wa.me/5512997601090" className="group bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 transform hover:-translate-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white/90 text-xs font-medium">WhatsApp</p>
                        <p className="text-white font-bold">(12) 3426-7494</p>
                      </div>
                    </div>
                  </a>
                </div>

                
              </div>
            </div>

            {/* QR Code & CTA */}
            <div className="space-y-8">
              {/* QR Code */}
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 text-center">
                <h3 className="text-white text-xl font-bold mb-6">Contato Rápido</h3>
                
                <div className="inline-block p-6 bg-white rounded-2xl">
                  <div className="w-32 h-32 bg-black rounded-lg grid grid-cols-8 gap-px p-2">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-black'} rounded-sm`}></div>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mt-4">Escaneie o QR Code para contato direto</p>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#E5642E] to-[#FF6B35] rounded-3xl p-8 text-center">
                <h3 className="text-white text-2xl font-bold mb-4">Pronto para começar?</h3>
                <p className="text-white/90 mb-6">
                  Fale conosco hoje mesmo e descubra como podemos ajudar sua empresa
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:1234267404" className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 font-medium">
                    Ligar Agora
                  </a>
                  <a href="https://wa.me/5512997601090" className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500 transition-all duration-300 font-medium">
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-black text-[#E5642E] mb-2">1000+</div>
                    <div className="text-gray-400 text-sm">Clientes Atendidos</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#E5642E] mb-2">24/7</div>
                    <div className="text-gray-400 text-sm">Suporte</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Codewave */}
      <footer className="bg-black py-6 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
            <div className="flex items-center space-x-2 text-gray-500 text-xs">
              <span>Desenvolvido por</span>
              <div className="flex items-center space-x-2">
                <img 
                  src="/assets/CW.png" 
                  alt="Codewave Logo" 
                  className="w-5 h-5 opacity-80"
                />
                <span className="text-white text-xs font-medium">Codewave</span>
              </div>
            </div>
            <span className="text-gray-600 text-xs">•</span>
            <span className="text-gray-500 text-xs">© 2025 Todos os direitos reservados</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;