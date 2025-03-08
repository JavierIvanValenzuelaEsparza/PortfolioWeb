import Image from "next/image"
import { Github, Linkedin, Mail, Phone, Download, Moon, Sun, Code } from "lucide-react"
import ExperienceItem from "@/components/experience-item"
import ThemeToggle from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SkillsSection from "@/components/skill-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-4">
              <a
                href="#about"
                className="hidden md:block hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Sobre mí
              </a>
              <a
                href="#skills"
                className="hidden md:block hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Habilidades
              </a>
              <a
                href="#experience"
                className="hidden md:block hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Experiencia
              </a>
              <a
                href="#education"
                className="hidden md:block hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Educación
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hola, soy <span className="text-purple-600 dark:text-purple-400">Javier Ivan</span>
              <span className="animate-pulse"> 👋</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">Desarrollador Web</h2>
            <p className="text-lg mb-8">
              Especialista en Sistemas WMS y Sistemas de Ventas con experiencia en React, Angular y Node.js.
            </p>
            <div className="flex flex-wrap gap-4">
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-4 border-purple-600 dark:border-purple-400 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/timito.jpg-j4tXvqn3If4apX4re6i5iA1tTgDwkC.jpeg"
                  alt="Javier Ivan Valenzuela Esparza"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mb-40">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">Sobre mí</h2>
            <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow ml-4"></div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <p className="text-lg mb-6">
                  Desarrollador web con experiencia en Sistemas WMS y Sistemas de Ventas. Me especializo en crear
                  soluciones eficientes y escalables utilizando tecnologías modernas. Mi enfoque se centra en la calidad
                  del código y la optimización de procesos para garantizar el mejor rendimiento.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-purple-600 dark:text-purple-400" />
                    <a href="tel:6646141705" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      664-614-1705
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-purple-600 dark:text-purple-400" />
                    <a href="mailto:javiervalenzuela041219@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors truncate">
                      javiervalenzuela041219@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex flex-col justify-center">
                <Tabs defaultValue="dark" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="light" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Sun className="h-4 w-4" /> Claro
                    </TabsTrigger>
                    <TabsTrigger value="dark" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Moon className="h-4 w-4" /> Oscuro
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="light" className="mt-0">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center">
                      <iframe src="/assets/cv-light.pdf" className="w-full h-30 rounded-md mb-4" />
                      <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-950" asChild>
                        <a href="/assets/cv-light.pdf" download>
                          <Download className="mr-2 h-4 w-4" /> Descargar CV Claro
                        </a>
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="dark" className="mt-0">
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col items-center">
                      <iframe src="/assets/cv-dark.pdf" className="w-full h-30 rounded-md mb-4" />
                      <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-950" asChild>
                        <a href="/assets/cv-dark.pdf" download>
                          <Download className="mr-2 h-4 w-4" /> Descargar CV Oscuro
                        </a>
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection />

        <section className="mb-20">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-1">
              <CardContent className="bg-white dark:bg-gray-800 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Actualmente trabajando en</h2>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-300 dark:border-green-700"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Activo
                  </Badge>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold mb-2">G-GLOBAL LOGISTICS INC.</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Actualmente trabajo en G Global, donde implemento nuevas funcionalidades y corrijo errores en el
                      sistema WMS. Desarrollo múltiples mejoras y optimizaciones utilizando React y Moleculer.js en una
                      arquitectura de microservicios.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">React</Badge>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        Moleculer.js
                      </Badge>
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                        MongoDB
                      </Badge>
                      <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                        Microservicios
                      </Badge>
                    </div>
                  </div>
                  <div className="md:w-1/3 flex justify-center items-center">
                    <div className="w-32 h-32 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <Code className="w-16 h-16 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">Experiencia Laboral</h2>
            <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow ml-4"></div>
          </div>
          <div className="space-y-8">
            <ExperienceItem
              company="G-GLOBAL LOGISTICS INC."
              position="Desarollador de Software Jr"
              period="AGO 2024 - Actual"
              description="Actualmente trabajo en G Global, donde implementé nuevas funcionalidades y corregí errores en el sistema WMS. Desarrollé múltiples mejoras y optimizaciones utilizando React y Moleculer.js en una arquitectura de microservicios con MongoDB, siguiendo metodologías ágiles basadas en historias de usuario por sprint."
              tags={["React", "Moleculer.js", "MongoDB", "Microservicios", "Agile"]}
            />

            <ExperienceItem
              company="JL CONCRETOS"
              position="Desarrollador Jr"
              period="ABR 2024 – AGO 2024"
              description="Lideré el desarrollo de sistemas para Villa Simul y JL Concretos, optimizando la gestión de clientes, autenticación segura y generación de documentos. Utilicé PHP, MySQL y AJAX para garantizar eficiencia y seguridad."
              tags={["PHP", "MySQL", "AJAX", "Autenticación", "Documentos"]}
            />

            <ExperienceItem
              company="CARET SOFTWARE INDUSTRIAL"
              position="Practicante de Software"
              period="AGO 2023 – DIC 2023"
              description="Lideré la creación e integración de módulos clave, incluyendo Reportes, Productos y Pedidos de ropa. Realicé pruebas exhaustivas con ASP.NET y Angular, resolviendo errores y optimizando la gestión de más de 400 productos para garantizar la calidad y coherencia de CARET ERP."
              tags={["ASP.NET", "Angular", "Pruebas", "Optimización", "ERP"]}
            />
          </div>
        </section>

        <section id="education" className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">Educación</h2>
            <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow ml-4"></div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">Ingeniería En Desarrollo Y Gestión De Software</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Universidad Tecnologica de Tijuana</p>

                <h4 className="text-xl font-semibold mb-2">Certificaciones</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Certificacion ITEP B1</li>
                </ul>
              </div>
              <div className="md:w-1/3 flex justify-center items-center">
                <div className="w-32 h-32 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 text-purple-600 dark:text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">Contacto</h2>
            <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow ml-4"></div>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">¡Hablemos!</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Estoy interesado en oportunidades de trabajo como desarrollador web. Si tienes alguna pregunta o
                    quieres hablar sobre un proyecto, no dudes en contactarme.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Teléfono</p>
                        <a
                          href="tel:6646141705"
                          className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          664-614-1705
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                        <a
                          href="mailto:javiervalenzuela041219@gmail.com"
                          className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          javiervalenzuela041219@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Envíame un mensaje</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        placeholder="Tu mensaje..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Enviar mensaje</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-bold text-purple-600 dark:text-purple-400">Javier Ivan Valenzuela Esparza</p>
              <p className="text-gray-600 dark:text-gray-400">Desarrollador Web</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/JavierIvanValenzuelaEsparza"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/javier-esparza-a66a78281/"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:javiervalenzuela041219@gmail.com"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Javier Ivan Valenzuela Esparza. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

