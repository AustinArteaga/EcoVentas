"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Plus, Search, Clock, MapPin, ShoppingBag, Store, Zap } from "lucide-react"

// Datos de ejemplo
const products = [
  {
    id: 1,
    title: "Tacos de Canasta - Comida Casera",
    price: 25,
    category: "comida",
    seller: "María González",
    time: "Hace 5 min",
    location: "Facultad de Ingeniería",
    image: "/placeholder.svg?height=200&width=200",
    isLimited: false,
  },
  {
    id: 2,
    title: "MacBook Air M1 - Como Nuevo",
    price: 18000,
    category: "accesorios",
    seller: "Carlos Ruiz",
    time: "Hace 15 min",
    location: "Biblioteca Central",
    image: "/placeholder.svg?height=200&width=200",
    isLimited: true,
  },
  {
    id: 3,
    title: "Cuarto Cerca del Campus",
    price: 3500,
    category: "inmuebles",
    seller: "Ana López",
    time: "Hace 30 min",
    location: "Zona Universitaria",
    image: "/placeholder.svg?height=200&width=200",
    isLimited: false,
  },
  {
    id: 4,
    title: "Mochila Jansport Original",
    price: 800,
    category: "accesorios",
    seller: "Luis Martín",
    time: "Hace 1 hora",
    location: "Cafetería Principal",
    image: "/placeholder.svg?height=200&width=200",
    isLimited: true,
  },
]

const limitedOffers = products.filter((p) => p.isLimited)

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "comida":
        return "🍕"
      case "accesorios":
        return "🎒"
      case "inmuebles":
        return "🏠"
      default:
        return "📦"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">UniMarket</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/sell">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Vender
                </Button>
              </Link>
              <Button variant="ghost">Mi Perfil</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="marketplace" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="marketplace">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Marketplace
            </TabsTrigger>
            <TabsTrigger value="limited">
              <Zap className="w-4 h-4 mr-2" />
              Ofertas Limitadas
            </TabsTrigger>
            <TabsTrigger value="my-products">
              <Store className="w-4 h-4 mr-2" />
              Mis Productos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="marketplace" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar productos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={selectedCategory === "all" ? "default" : "outline"}
                      onClick={() => setSelectedCategory("all")}
                    >
                      Todos
                    </Button>
                    <Button
                      variant={selectedCategory === "comida" ? "default" : "outline"}
                      onClick={() => setSelectedCategory("comida")}
                    >
                      🍕 Comida
                    </Button>
                    <Button
                      variant={selectedCategory === "accesorios" ? "default" : "outline"}
                      onClick={() => setSelectedCategory("accesorios")}
                    >
                      🎒 Accesorios
                    </Button>
                    <Button
                      variant={selectedCategory === "inmuebles" ? "default" : "outline"}
                      onClick={() => setSelectedCategory("inmuebles")}
                    >
                      🏠 Inmuebles
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {product.isLimited && (
                      <Badge className="absolute top-2 right-2 bg-red-500">
                        <Zap className="w-3 h-3 mr-1" />
                        Oferta Limitada
                      </Badge>
                    )}
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary">{getCategoryIcon(product.category)}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{product.title}</CardTitle>
                    <CardDescription className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-600">${product.price}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {product.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        {product.location}
                      </div>
                      <div className="text-sm">
                        Vendedor: <span className="font-medium">{product.seller}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Contactar Vendedor
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="limited" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-orange-500" />
                  Ofertas Limitadas
                </CardTitle>
                <CardDescription>Productos con ofertas especiales por tiempo limitado</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {limitedOffers.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow border-orange-200">
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-red-500">
                      <Zap className="w-3 h-3 mr-1" />
                      Oferta Limitada
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{product.title}</CardTitle>
                    <CardDescription className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-600">${product.price}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {product.time}
                      </div>
                      <div className="text-sm">
                        Vendedor: <span className="font-medium">{product.seller}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <Zap className="w-4 h-4 mr-2" />
                      ¡Aprovechar Oferta!
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mis Productos</CardTitle>
                <CardDescription>Administra los productos que has publicado</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Store className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">Aún no has publicado ningún producto</p>
                  <Link href="/sell">
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Publicar Primer Producto
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
