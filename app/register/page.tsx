"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, ShoppingBag, Store } from "lucide-react"

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const initialType = searchParams.get("type") || "buyer"

  const [userType, setUserType] = useState(initialType)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    studentId: "",
    university: "",
    career: "",
    semester: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de registro
    console.log("Registro:", { ...formData, userType })
    // Redirigir al dashboard después del registro exitoso
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">UniMarket</span>
          </div>
          <CardTitle className="text-2xl">Crear Cuenta</CardTitle>
          <CardDescription>Únete a la comunidad estudiantil</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Tipo de Usuario */}
            <div className="space-y-2">
              <Label>¿Qué quieres hacer principalmente?</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  variant={userType === "buyer" ? "default" : "outline"}
                  onClick={() => setUserType("buyer")}
                  className="flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Comprar</span>
                </Button>
                <Button
                  type="button"
                  variant={userType === "seller" ? "default" : "outline"}
                  onClick={() => setUserType("seller")}
                  className="flex items-center justify-center space-x-2"
                >
                  <Store className="w-4 h-4" />
                  <span>Vender</span>
                </Button>
              </div>
            </div>

            {/* Información Personal */}
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Institucional</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu.email@universidad.edu"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            {/* Información Académica */}
            <div className="space-y-2">
              <Label htmlFor="studentId">Número de Estudiante</Label>
              <Input
                id="studentId"
                value={formData.studentId}
                onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="university">Universidad</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, university: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu universidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unam">Universidad Nacional Autónoma de México</SelectItem>
                  <SelectItem value="ipn">Instituto Politécnico Nacional</SelectItem>
                  <SelectItem value="itesm">Tecnológico de Monterrey</SelectItem>
                  <SelectItem value="uam">Universidad Autónoma Metropolitana</SelectItem>
                  <SelectItem value="other">Otra</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="career">Carrera</Label>
              <Input
                id="career"
                value={formData.career}
                onChange={(e) => setFormData({ ...formData, career: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono (opcional)</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            {/* Términos y Condiciones */}
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm">
                Acepto los términos y condiciones
              </Label>
            </div>

            <Button type="submit" className="w-full">
              Crear Cuenta
            </Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              ¿Ya tienes cuenta?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Iniciar Sesión
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
