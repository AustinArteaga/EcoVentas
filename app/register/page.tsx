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
import { PhoneInput } from "@/components/phone-input"
import { Users, ShoppingBag, Store } from "lucide-react"

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const initialType = searchParams.get("type") || "buyer"

  const [userType, setUserType] = useState(initialType)
  const [emailError, setEmailError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    studentId: "",
    career: "",
    semester: "",
    celular: "",
  })

  const validateEmail = (email: string) => {
    if (!email.endsWith("@est.ecotec.edu.ec")) {
      setEmailError("Debes usar tu correo institucional de ECOTEC (@est.ecotec.edu.ec)")
      return false
    }
    setEmailError("")
    return true
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    setFormData({ ...formData, email })
    if (email) {
      validateEmail(email)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(formData.email)) {
      return
    }

    console.log("Registro:", { ...formData, userType })
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-green-800">EcoVentas</span>
          </div>
          <CardTitle className="text-2xl">Crear Cuenta</CardTitle>
          <CardDescription>Únete a la comunidad estudiantil de ECOTEC</CardDescription>
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
              <Label htmlFor="name">Nombre Completo *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Institucional ECOTEC *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleEmailChange}
                placeholder="tu.nombre@est.ecotec.edu.ec"
                className={emailError ? "border-red-500" : ""}
                required
              />
              {emailError && <p className="text-sm text-red-600">{emailError}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña *</Label>
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
              <Label htmlFor="studentId">Número de Estudiante *</Label>
              <Input
                id="studentId"
                value={formData.studentId}
                onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                placeholder="Ej: 2024001234"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="career">Carrera *</Label>
              <Input
                id="career"
                value={formData.career}
                onChange={(e) => setFormData({ ...formData, career: e.target.value })}
                placeholder="Ej: Ingeniería en Sistemas"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="semester">Semestre</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, semester: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu semestre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1er Semestre</SelectItem>
                  <SelectItem value="2">2do Semestre</SelectItem>
                  <SelectItem value="3">3er Semestre</SelectItem>
                  <SelectItem value="4">4to Semestre</SelectItem>
                  <SelectItem value="5">5to Semestre</SelectItem>
                  <SelectItem value="6">6to Semestre</SelectItem>
                  <SelectItem value="7">7mo Semestre</SelectItem>
                  <SelectItem value="8">8vo Semestre</SelectItem>
                  <SelectItem value="9">9no Semestre</SelectItem>
                  <SelectItem value="10">10mo Semestre</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Número Celular */}
            <PhoneInput
              value={formData.celular}
              onChange={(value) => setFormData({ ...formData, celular: value })}
              required
            />

            {/* Términos y Condiciones */}
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm">
                Acepto los términos y condiciones de EcoVentas
              </Label>
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Crear Cuenta
            </Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              ¿Ya tienes cuenta?{" "}
              <Link href="/login" className="text-green-600 hover:underline">
                Iniciar Sesión
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
