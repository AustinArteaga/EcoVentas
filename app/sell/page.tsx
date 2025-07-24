"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, Upload, ArrowLeft, Zap } from "lucide-react"

export default function SellPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    location: "",
    condition: "",
    isLimitedOffer: false,
    images: [],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Nuevo producto:", formData)
    // Aquí iría la lógica para guardar el producto
    alert("¡Producto publicado exitosamente!")
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">UniMarket</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Publicar Producto</CardTitle>
            <CardDescription>
              Completa la información de tu producto para que otros estudiantes puedan verlo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Título */}
              <div className="space-y-2">
                <Label htmlFor="title">Título del Producto *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Ej: iPhone 13 Pro Max - Excelente Estado"
                  required
                />
              </div>

              {/* Descripción */}
              <div className="space-y-2">
                <Label htmlFor="description">Descripción *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe tu producto, incluye detalles importantes como estado, características, etc."
                  rows={4}
                  required
                />
              </div>

              {/* Precio y Categoría */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Precio (MXN) *</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="0"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Categoría *</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="comida">🍕 Comida</SelectItem>
                      <SelectItem value="accesorios">🎒 Accesorios</SelectItem>
                      <SelectItem value="inmuebles">🏠 Inmuebles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Ubicación y Estado */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Ubicación en Campus *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Ej: Biblioteca Central, Cafetería"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Estado del Producto</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, condition: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nuevo">Nuevo</SelectItem>
                      <SelectItem value="como-nuevo">Como Nuevo</SelectItem>
                      <SelectItem value="buen-estado">Buen Estado</SelectItem>
                      <SelectItem value="usado">Usado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Imágenes */}
              <div className="space-y-2">
                <Label>Imágenes del Producto</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 mb-2">
                    Arrastra y suelta imágenes aquí, o haz clic para seleccionar
                  </p>
                  <Button type="button" variant="outline" size="sm">
                    Seleccionar Imágenes
                  </Button>
                </div>
              </div>

              {/* Oferta Limitada */}
              <div className="flex items-center space-x-2 p-4 bg-orange-50 rounded-lg">
                <Checkbox
                  id="limited-offer"
                  checked={formData.isLimitedOffer}
                  onCheckedChange={(checked) => setFormData({ ...formData, isLimitedOffer: checked as boolean })}
                />
                <div className="flex-1">
                  <Label htmlFor="limited-offer" className="flex items-center font-medium">
                    <Zap className="w-4 h-4 mr-2 text-orange-500" />
                    Marcar como Oferta Limitada
                  </Label>
                  <p className="text-sm text-gray-600">
                    Tu producto aparecerá destacado en la sección de ofertas especiales
                  </p>
                </div>
              </div>

              {/* Botones */}
              <div className="flex gap-4">
                <Link href="/dashboard" className="flex-1">
                  <Button type="button" variant="outline" className="w-full bg-transparent">
                    Cancelar
                  </Button>
                </Link>
                <Button type="submit" className="flex-1">
                  Publicar Producto
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
