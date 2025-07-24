import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, Store, Zap, Users, Shield, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">EcoVentas</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Iniciar Sesión</Button>
            </Link>
            <Link href="/register">
              <Button>Registrarse</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Marketplace Exclusivo para
            <span className="text-green-600 block">Estudiantes de Universidad ECOTEC</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Compra y vende productos entre estudiantes de tu universidad de forma segura y rápida. Desde comida hasta
            accesorios e inmuebles, todo en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register?type=buyer">
              <Button size="lg" className="w-full sm:w-auto">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Quiero Comprar
              </Button>
            </Link>
            <Link href="/register?type=seller">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                <Store className="w-5 h-5 mr-2" />
                Quiero Vender
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir EcoVentas?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle>Publicación Instantánea</CardTitle>
                <CardDescription>
                  Publica tus productos al momento y que otros estudiantes los vean inmediatamente
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle>Solo Estudiantes</CardTitle>
                <CardDescription>Plataforma exclusiva para estudiantes universitarios verificados</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="w-10 h-10 text-orange-600 mb-2" />
                <CardTitle>Ofertas Limitadas</CardTitle>
                <CardDescription>Sección especial para ofertas por tiempo limitado y productos únicos</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Categorías Disponibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍕</span>
                </div>
                <CardTitle>Comida</CardTitle>
                <CardDescription>Comida casera, snacks, bebidas y más</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎒</span>
                </div>
                <CardTitle>Accesorios</CardTitle>
                <CardDescription>Mochilas, tecnología, ropa y accesorios estudiantiles</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <CardTitle>Inmuebles</CardTitle>
                <CardDescription>Habitaciones, departamentos y espacios de estudio</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <CardTitle>Servicios</CardTitle>
                <CardDescription>Tutorías, diseño, programación y servicios profesionales</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a la comunidad de estudiantes que ya están comprando y vendiendo en EcoVentas
          </p>
          <Link href="/register">
            <Button size="lg" variant="secondary">
              Crear Cuenta Gratis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold">EcoVentas</span>
          </div>
          <p className="text-gray-400">
            © 2024 EcoVentas. Plataforma exclusiva para estudiantes de Universidad ECOTEC.
          </p>
        </div>
      </footer>
    </div>
  )
}
