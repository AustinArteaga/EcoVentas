"use client"

import type React from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

interface ServiceFormFieldsProps {
  category: string
  formData: any
  setFormData: (data: any) => void
}

export const ServiceFormFields: React.FC<ServiceFormFieldsProps> = ({ category, formData, setFormData }) => {
  if (category !== "servicios") return null

  return (
    <div className="space-y-4 p-4 bg-purple-50 rounded-lg">
      <h3 className="font-semibold text-purple-800 flex items-center">💼 Información del Servicio</h3>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="service-type">Tipo de Servicio</Label>
          <Select onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona el tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tutoria">📚 Tutoría Académica</SelectItem>
              <SelectItem value="diseno">🎨 Diseño Gráfico</SelectItem>
              <SelectItem value="programacion">💻 Programación</SelectItem>
              <SelectItem value="idiomas">🗣️ Clases de Idiomas</SelectItem>
              <SelectItem value="redaccion">✍️ Redacción y Corrección</SelectItem>
              <SelectItem value="fotografia">📸 Fotografía</SelectItem>
              <SelectItem value="musica">🎵 Clases de Música</SelectItem>
              <SelectItem value="deportes">⚽ Entrenamiento Deportivo</SelectItem>
              <SelectItem value="otro">🔧 Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Duración</Label>
          <Select onValueChange={(value) => setFormData({ ...formData, duration: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Duración del servicio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30min">30 minutos</SelectItem>
              <SelectItem value="1hora">1 hora</SelectItem>
              <SelectItem value="2horas">2 horas</SelectItem>
              <SelectItem value="medio-dia">Medio día</SelectItem>
              <SelectItem value="dia-completo">Día completo</SelectItem>
              <SelectItem value="proyecto">Por proyecto</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience">Experiencia y Habilidades</Label>
        <Textarea
          id="experience"
          value={formData.experience || ""}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          placeholder="Describe tu experiencia, certificaciones, proyectos previos, etc."
          rows={3}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="availability">Disponibilidad</Label>
          <Input
            id="availability"
            value={formData.availability || ""}
            onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            placeholder="Ej: Lunes a Viernes 2-6 PM"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="delivery-method">Modalidad</Label>
          <Select onValueChange={(value) => setFormData({ ...formData, deliveryMethod: value })}>
            <SelectTrigger>
              <SelectValue placeholder="¿Cómo ofreces el servicio?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="presencial">👥 Presencial</SelectItem>
              <SelectItem value="virtual">💻 Virtual</SelectItem>
              <SelectItem value="hibrido">🔄 Híbrido</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
