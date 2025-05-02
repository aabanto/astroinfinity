import Link from "next/link"
import { Star, Moon, Sun, Calendar, MessageCircle, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-purple-900/20 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-bold tracking-wider text-white">
              ASTRO<span className="text-purple-400">VISIÓN</span>
            </span>
          </div>
          <nav className="hidden md:flex md:gap-6">
            <Link href="#" className="text-sm font-medium text-white/70 transition-colors hover:text-purple-400">
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="text-sm font-medium text-white/70 transition-colors hover:text-purple-400"
            >
              Servicios
            </Link>
            <Link
              href="#testimonios"
              className="text-sm font-medium text-white/70 transition-colors hover:text-purple-400"
            >
              Testimonios
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium text-white/70 transition-colors hover:text-purple-400"
            >
              Contacto
            </Link>
          </nav>
          <Button className="bg-purple-700 hover:bg-purple-600">Reservar Consulta</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-950/40 to-black"></div>
          <div className="absolute inset-0 opacity-30 mix-blend-lighten">
            {/* Estrellas y constelaciones de fondo */}
            <div className="absolute top-20 left-1/4 h-2 w-2 rounded-full bg-white shadow-[0_0_10px_2px_rgba(167,139,250,0.7)]"></div>
            <div className="absolute top-40 left-1/3 h-2 w-2 rounded-full bg-white shadow-[0_0_8px_2px_rgba(167,139,250,0.7)]"></div>
            <div className="absolute top-60 left-1/5 h-1 w-1 rounded-full bg-white shadow-[0_0_6px_1px_rgba(167,139,250,0.7)]"></div>
            <div className="absolute top-80 left-2/3 h-2 w-2 rounded-full bg-white shadow-[0_0_10px_2px_rgba(167,139,250,0.7)]"></div>
            <div className="absolute top-40 left-3/4 h-1 w-1 rounded-full bg-white shadow-[0_0_6px_1px_rgba(167,139,250,0.7)]"></div>
            <div className="absolute top-60 right-1/4 h-2 w-2 rounded-full bg-white shadow-[0_0_8px_2px_rgba(167,139,250,0.7)]"></div>
          </div>
        </div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/70">
              Descubre Tu Destino Estelar
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Revelando los Secretos del <span className="text-purple-400">Universo</span> en Tu Carta Astral
            </h1>
            <p className="mb-8 text-lg text-white/70">
              Interpretaciones profesionales y personalizadas que te guiarán en tu camino de autodescubrimiento y
              crecimiento personal.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-purple-700 hover:bg-purple-600">
                Obtener Mi Carta Astral
              </Button>
              <Button size="lg" variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-950/30">
                Conocer Más
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Nuestros Servicios</h2>
            <p className="mx-auto max-w-2xl text-white/70">
              Descubre el poder de los astros y cómo pueden guiarte en cada aspecto de tu vida.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-purple-950/20 border-purple-800/30">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/50">
                  <Star className="h-6 w-6 text-purple-300" />
                </div>
                <CardTitle>Carta Astral Completa</CardTitle>
                <CardDescription className="text-white/70">
                  Análisis detallado de tu mapa natal y las influencias planetarias en tu vida.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-purple-400" />
                    Interpretación de casas y planetas
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-purple-400" />
                    Análisis de aspectos planetarios
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-purple-400" />
                    Identificación de fortalezas y desafíos
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-purple-400" />
                    Reporte digital personalizado
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-700 hover:bg-purple-600">Reservar por $75</Button>
              </CardFooter>
            </Card>
            <Card className="bg-purple-900/30 border-purple-700/50 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-700/50">
                  <Moon className="h-6 w-6 text-purple-200" />
                </div>
                <CardTitle>Interpretación de Carta Natal</CardTitle>
                <CardDescription className="text-white/70">
                  Sesión personalizada para entender profundamente tu carta de nacimiento.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-purple-400" />
                    Consulta en vivo de 60 minutos
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-purple-400" />
                    Análisis de personalidad y potencial
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-purple-400" />
                    Orientación para decisiones importantes
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-purple-400" />
                    Grabación de la sesión incluida
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-500">Reservar por $120</Button>
              </CardFooter>
            </Card>
            <Card className="bg-purple-950/20 border-purple-800/30">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/50">
                  <Sun className="h-6 w-6 text-purple-300" />
                </div>
                <CardTitle>Pronóstico Astrológico Anual</CardTitle>
                <CardDescription className="text-white/70">
                  Previsión de tendencias y oportunidades para los próximos 12 meses.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-purple-400" />
                    Análisis de tránsitos planetarios
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-purple-400" />
                    Predicciones por áreas de vida
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-purple-400" />
                    Fechas clave y momentos favorables
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-purple-400" />
                    Estrategias para aprovechar oportunidades
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-700 hover:bg-purple-600">Reservar por $150</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 bg-black">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Testimonios</h2>
            <p className="mx-auto max-w-2xl text-white/70">
              Lo que nuestros clientes dicen sobre nuestros servicios astrológicos.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gradient-to-br from-purple-950/30 to-black border-purple-800/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-purple-700/50 flex items-center justify-center">
                    <span className="font-semibold text-purple-200">ML</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">María López</CardTitle>
                    <CardDescription className="text-white/50">Madrid, España</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  "La interpretación de mi carta natal fue reveladora. Entendí aspectos de mi personalidad que siempre
                  me habían confundido y ahora tengo más claridad sobre mi camino."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-950/30 to-black border-purple-800/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-purple-700/50 flex items-center justify-center">
                    <span className="font-semibold text-purple-200">JR</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Juan Rodríguez</CardTitle>
                    <CardDescription className="text-white/50">Buenos Aires, Argentina</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  "El pronóstico anual me ayudó a tomar decisiones importantes en momentos clave. La precisión de las
                  predicciones fue sorprendente y me siento más preparado para el futuro."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-950/30 to-black border-purple-800/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-purple-700/50 flex items-center justify-center">
                    <span className="font-semibold text-purple-200">CM</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Carolina Méndez</CardTitle>
                    <CardDescription className="text-white/50">Ciudad de México</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  "Mi carta astral completa me dio perspectivas que ningún otro análisis me había proporcionado. El
                  servicio es profesional y la atención personalizada es excepcional."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-gradient-to-t from-black to-purple-950/20">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-xl bg-purple-950/20 p-8 border border-purple-800/30 shadow-[0_0_25px_rgba(147,51,234,0.2)]">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-3xl font-bold tracking-tight">Reserva Tu Consulta</h2>
              <p className="text-white/70">
                Completa el formulario y nos pondremos en contacto contigo para agendar tu sesión.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-white/90">Nombre</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-purple-800/30 bg-black/50 px-4 py-2 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white/90">Email</label>
                <input
                  type="email"
                  className="w-full rounded-md border border-purple-800/30 bg-black/50 px-4 py-2 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white/90">Fecha de Nacimiento</label>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-purple-400" />
                  <input
                    type="date"
                    className="w-full rounded-md border border-purple-800/30 bg-black/50 px-4 py-2 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white/90">Servicio</label>
                <select className="w-full rounded-md border border-purple-800/30 bg-black/50 px-4 py-2 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500">
                  <option>Carta Astral Completa</option>
                  <option>Interpretación de Carta Natal</option>
                  <option>Pronóstico Astrológico Anual</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-white/90">Mensaje</label>
                <textarea
                  className="w-full rounded-md border border-purple-800/30 bg-black/50 px-4 py-2 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  rows={4}
                  placeholder="Cuéntanos más sobre lo que buscas..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <Button className="w-full bg-purple-700 hover:bg-purple-600">
                  <MessageCircle className="mr-2 h-4 w-4" /> Enviar Solicitud
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-900/20 bg-black py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold tracking-wider text-white">
                  ASTRO<span className="text-purple-400">VISIÓN</span>
                </span>
              </div>
              <p className="text-sm text-white/70">
                Revelando los secretos del universo a través de la astrología profesional desde 2010.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Servicios</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="#" className="transition-colors hover:text-purple-400">
                    Carta Astral
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-purple-400">
                    Interpretación Natal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-purple-400">
                    Pronóstico Anual
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-purple-400">
                    Compatibilidad Astrológica
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Recursos</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="#" className="transition-colors hover:text-purple-400">
                    Blog Astrológico
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-purple-400">
                    Guías Gratuitas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-purple-400">
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-purple-400">
                    Glosario Astrológico
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>contacto@astrovision.com</li>
                <li>+34 912 345 678</li>
                <li>Lunes a Viernes: 10:00 - 19:00</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-purple-900/20 pt-6 text-center text-sm text-white/50">
            <p>© {new Date().getFullYear()} AstroVisión. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
