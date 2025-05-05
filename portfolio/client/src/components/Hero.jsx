import { ArrowDown } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fadeIn" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-gray-800">Areeb</span>
            </h1>
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-8">Full Stack Web Developer</h2>
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">I build clean, fast, and beautiful web apps.</p>
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              View My Work
              <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
