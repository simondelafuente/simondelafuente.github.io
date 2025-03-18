"use client"

import type React from "react"

import { Github, Mail, Linkedin } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRef, useEffect, useState } from "react"

export default function Portfolio() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  const [activeSection, setActiveSection] = useState("about")

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>, section: string) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
      setActiveSection(section)
    }
  }

  // Observer to detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            setActiveSection(id)
          }
        })
      },
      { threshold: 0.5 },
    )

    const sections = [
      { ref: aboutRef.current, id: "about" },
      { ref: experienceRef.current, id: "experience" },
      { ref: projectsRef.current, id: "projects" },
      { ref: skillsRef.current, id: "skills" },
    ]

    sections.forEach((section) => {
      if (section.ref) observer.observe(section.ref)
    })

    return () => {
      sections.forEach((section) => {
        if (section.ref) observer.unobserve(section.ref)
      })
    }
  }, [])

  return (
    <div className="flex flex-col md:flex-row min-h-screen dark">
      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 opacity-90 -z-10" />

      {/* Left Sidebar - Static */}
      <aside className="w-full md:w-80 bg-black/30 backdrop-blur-sm p-6 md:min-h-screen md:fixed border-r border-white/10">
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary/50">
            <Image src="/placeholder.svg?height=128&width=128" alt="Profile picture" fill className="object-cover" />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-white">Tu Nombre</h1>
            <p className="text-gray-400">Desarrollador Web</p>
          </div>

          <div className="w-full">
            <h2 className="text-lg font-semibold mb-2 text-white">Contacto</h2>
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                className="justify-start gap-2 w-full border-white/20 text-white hover:bg-white/10"
              >
                <Mail size={18} />
                email@ejemplo.com
              </Button>
              <Button
                variant="outline"
                className="justify-start gap-2 w-full border-white/20 text-white hover:bg-white/10"
              >
                <Linkedin size={18} />
                linkedin.com/in/tunombre
              </Button>
              <Button
                variant="outline"
                className="justify-start gap-2 w-full border-white/20 text-white hover:bg-white/10"
              >
                <Github size={18} />
                github.com/tunombre
              </Button>
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-lg font-semibold mb-2 text-white">Ubicación</h2>
            <p className="text-gray-400">Ciudad, País</p>
          </div>
        </div>
      </aside>

      {/* Right Content Area - Scrollable */}
      <main className="flex-1 p-6 md:ml-80 text-white">
        {/* Navigation Buttons */}
        <div className="sticky top-0 z-10 flex justify-center gap-2 py-4 mb-8 bg-black/50 backdrop-blur-sm rounded-lg">
          <Button
            variant={activeSection === "about" ? "default" : "ghost"}
            onClick={() => scrollToSection(aboutRef, "about")}
            className="transition-all"
          >
            Sobre mí
          </Button>
          <Button
            variant={activeSection === "experience" ? "default" : "ghost"}
            onClick={() => scrollToSection(experienceRef, "experience")}
            className="transition-all"
          >
            Experiencia
          </Button>
          <Button
            variant={activeSection === "projects" ? "default" : "ghost"}
            onClick={() => scrollToSection(projectsRef, "projects")}
            className="transition-all"
          >
            Proyectos
          </Button>
          <Button
            variant={activeSection === "skills" ? "default" : "ghost"}
            onClick={() => scrollToSection(skillsRef, "skills")}
            className="transition-all"
          >
            Conocimientos
          </Button>
        </div>

        {/* All sections visible at once */}
        <div className="space-y-24">
          {/* About Me Section */}
          <section id="about" ref={aboutRef} className="space-y-6 min-h-[80vh] flex flex-col justify-center">
            <h2 className="text-3xl font-bold">Sobre mí</h2>
            <div className="space-y-4">
              <p className="text-lg">
                ¡Hola! Soy un desarrollador web apasionado por crear experiencias digitales atractivas y funcionales.
                Con experiencia en desarrollo frontend y backend, me especializo en construir aplicaciones web modernas
                utilizando las últimas tecnologías.
              </p>
              <p className="text-lg">
                Mi enfoque se centra en escribir código limpio, mantenible y escalable. Me encanta resolver problemas
                complejos y aprender continuamente nuevas tecnologías para mejorar mis habilidades.
              </p>
              <p className="text-lg">
                Cuando no estoy programando, disfruto de [tus hobbies e intereses]. Creo firmemente en el equilibrio
                entre la vida laboral y personal, lo que me permite mantener la creatividad y la productividad.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" ref={experienceRef} className="space-y-6 min-h-[80vh] flex flex-col justify-center">
            <h2 className="text-3xl font-bold">Experiencia</h2>
            <div className="space-y-6">
              <Card className="bg-black/30 border-white/10">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Desarrollador Frontend</h3>
                      <p className="text-gray-400">Empresa ABC</p>
                    </div>
                    <p className="text-sm text-gray-400">2021 - Presente</p>
                  </div>
                  <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-300">
                    <li>Desarrollo de interfaces de usuario con React y Next.js</li>
                    <li>Implementación de diseños responsivos utilizando Tailwind CSS</li>
                    <li>Colaboración con equipos de diseño y backend para crear soluciones completas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border-white/10">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Desarrollador Web Junior</h3>
                      <p className="text-gray-400">Empresa XYZ</p>
                    </div>
                    <p className="text-sm text-gray-400">2019 - 2021</p>
                  </div>
                  <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-300">
                    <li>Desarrollo de sitios web utilizando HTML, CSS y JavaScript</li>
                    <li>Mantenimiento y actualización de sitios web existentes</li>
                    <li>Optimización de rendimiento y experiencia de usuario</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" ref={projectsRef} className="space-y-6 min-h-[80vh] flex flex-col justify-center">
            <h2 className="text-3xl font-bold">Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-black/30 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white">Proyecto 1</h3>
                  <p className="text-gray-400 mb-4">React, Node.js, MongoDB</p>
                  <p className="text-gray-300">
                    Una aplicación web completa que permite a los usuarios [descripción del proyecto]. Implementé
                    [características principales] y utilicé [tecnologías relevantes].
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button variant="default" size="sm">
                      Demo
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      Código
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white">Proyecto 2</h3>
                  <p className="text-gray-400 mb-4">Next.js, Tailwind CSS, Supabase</p>
                  <p className="text-gray-300">
                    Una plataforma que permite [descripción del proyecto]. Desarrollé [características principales] y
                    aprendí [lecciones o tecnologías].
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button variant="default" size="sm">
                      Demo
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      Código
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white">Proyecto 3</h3>
                  <p className="text-gray-400 mb-4">React, Firebase, Styled Components</p>
                  <p className="text-gray-300">
                    Una aplicación que [descripción del proyecto]. Implementé [características principales] y superé
                    [desafíos interesantes].
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button variant="default" size="sm">
                      Demo
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" ref={skillsRef} className="space-y-8 min-h-[80vh] flex flex-col justify-center">
            <h2 className="text-3xl font-bold">Conocimientos</h2>

            <div className="space-y-8">
              {/* Frontend Skills */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white inline-flex items-center gap-2">
                  <div className="w-2 h-8 bg-blue-500 rounded mr-2"></div>
                  Frontend
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  <Card className="bg-black/30 border-white/10 hover:border-blue-500/50 transition-all hover:shadow-md hover:shadow-blue-500/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        >
                          <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="3 10 9 10" />
                          <polyline points="15 10 21 10" />
                          <line x1="12" x2="12" y1="10" y2="22" />
                          <path d="M12 2v8" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">HTML5</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 border-white/10 hover:border-blue-500/50 transition-all hover:shadow-md hover:shadow-blue-500/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        >
                          <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <circle cx="12" cy="12" r="7" />
                          <polyline points="8 12 12 16 16 12" />
                          <line x1="12" x2="12" y1="8" y2="16" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">CSS3</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 border-white/10 hover:border-yellow-500/50 transition-all hover:shadow-md hover:shadow-yellow-500/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-yellow-400"
                        >
                          <path d="M12 2v16" />
                          <path d="m9 18 3 4 3-4" />
                          <path d="M5 8h14" />
                          <path d="M5 12h14" />
                          <path d="M5 16h14" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">JavaScript</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-yellow-500 h-full rounded-full" style={{ width: "88%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-md hover:shadow-cyan-500/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-cyan-400"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a4.2 4.2 0 0 0 4 4 4.2 4.2 0 0 1 3 7 4.2 4.2 0 0 0-3 4 4.2 4.2 0 0 1-8 0 4.2 4.2 0 0 0-3-4 4.2 4.2 0 0 1 3-7 4.2 4.2 0 0 0 4-4" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">React</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-cyan-500 h-full rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 border-white/10 hover:border-black/50 transition-all hover:shadow-md hover:shadow-white/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">Next.js</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-white h-full rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 border-white/10 hover:border-sky-500/50 transition-all hover:shadow-md hover:shadow-sky-500/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-sky-400"
                        >
                          <path d="M6 9v12" />
                          <path d="M18 9v12" />
                          <path d="M2 5h20" />
                          <path d="M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4H3V5z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">Tailwind</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-sky-500 h-full rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 border-white/10 hover:border-blue-500/50 transition-all hover:shadow-md hover:shadow-blue-500/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        >
                          <path d="M16.5 9.4 7.5 4.21" />
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          <polyline points="3.29 7 12 12 20.71 7" />
                          <line x1="12" x2="12" y1="22" y2="12" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">TypeScript</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white inline-flex items-center gap-2">
                  <div className="w-2 h-8 bg-green-500 rounded mr-2"></div>
                  Backend
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  <Card className="bg-black/30 border-white/10 hover:border-green-500/50 transition-all hover:shadow-md hover:shadow-green-500/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-400"
                        >
                          <path d="M12 22v-7l-2-2" />
                          <path d="M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z" />
                          <path d="m16 8-3.4 1.9" />
                          <path d="m8 8 3.4 1.9" />
                          <path d="M12 4v4" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">Node.js</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 border-white/10 hover:border-green-500/50 transition-all hover:shadow-md hover:shadow-green-500/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-400"
                        >
                          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">Express.js</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 border-white/10 hover:border-green-500/50 transition-all hover:shadow-md hover:shadow-green-500/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-400"
                        >
                          <ellipse cx="12" cy="5" rx="9" ry="3" />
                          <path d="M3 5v14a9 3 0 0 0 18 0V5" />
                          <path d="M3 12a9 3 0 0 0 18 0" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">MongoDB</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 border-white/10 hover:border-blue-500/50 transition-all hover:shadow-md hover:shadow-blue-500/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        >
                          <path d="M3 11v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8" />
                          <path d="M12 3c-4.97 0-9 4.03-9 9" />
                          <path d="M21 12c0-4.97-4.03-9-9-9" />
                          <path d="M12 8v5" />
                          <path d="m15 8-3 5-3-5" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">PostgreSQL</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 border-white/10 hover:border-purple-500/50 transition-all hover:shadow-md hover:shadow-purple-500/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-400"
                        >
                          <path d="M7 10v12" />
                          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">GraphQL</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-purple-500 h-full rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Tools & Others */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white inline-flex items-center gap-2">
                  <div className="w-2 h-8 bg-orange-500 rounded mr-2"></div>
                  Herramientas
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  <Card className="bg-black/30 border-white/10 hover:border-orange-500/50 transition-all hover:shadow-md hover:shadow-orange-500/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-orange-400"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">Git</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-orange-500 h-full rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 border-white/10 hover:border-blue-500/50 transition-all hover:shadow-md hover:shadow-blue-500/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        >
                          <path d="M16 3h5v5" />
                          <path d="M8 3H3v5" />
                          <path d="M3 16v5h5" />
                          <path d="M16 21h5v-5" />
                          <rect width="5" height="5" x="10" y="10" rx="0.5" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">VS Code</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 border-white/10 hover:border-purple-500/50 transition-all hover:shadow-md hover:shadow-purple-500/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-400"
                        >
                          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                          <path d="M12 16h3.5a3.5 3.5 0 1 1 0 7H12v-7z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">Figma</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-purple-500 h-full rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 border-white/10 hover:border-gray-500/50 transition-all hover:shadow-md hover:shadow-gray-500/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-gray-500/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-400"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">Vercel</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-gray-400 h-full rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 border-white/10 hover:border-red-500/50 transition-all hover:shadow-md hover:shadow-red-500/10">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-3 mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        >
                          <path d="M2 12h10" />
                          <path d="M9 4v16" />
                          <path d="M14.5 4h-2.77a4.5 4.5 0 0 0 0 9h5.77c2.48 0 4.5 2.02 4.5 4.5v0c0 2.48-2.02 4.5-4.5 4.5H7" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">Jest</h4>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-red-500 h-full rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

