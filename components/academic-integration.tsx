"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Users, Calendar, FileText, GraduationCap } from "lucide-react"

interface AcademicBook {
  id: string
  title: string
  author: string
  subject: string
  semester: string
  price: number
  condition: string
  seller: string
  image: string
}

interface StudyGroup {
  id: string
  subject: string
  topic: string
  date: string
  time: string
  location: string
  maxParticipants: number
  currentParticipants: number
  organizer: string
}

interface TutorService {
  id: string
  tutor: string
  subject: string
  rating: number
  pricePerHour: number
  availability: string[]
  specialties: string[]
}

export function AcademicIntegration() {
  const [selectedSemester, setSelectedSemester] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("")

  const books: AcademicBook[] = [
    {
      id: "1",
      title: "Cálculo de Una Variable",
      author: "James Stewart",
      subject: "Matemáticas",
      semester: "2",
      price: 45,
      condition: "Buen Estado",
      seller: "Ana García",
      image: "/placeholder.svg?height=150&width=100&text=Libro",
    },
    {
      id: "2",
      title: "Principios de Economía",
      author: "Gregory Mankiw",
      subject: "Economía",
      semester: "3",
      price: 60,
      condition: "Como Nuevo",
      seller: "Carlos López",
      image: "/placeholder.svg?height=150&width=100&text=Libro",
    },
  ]

  const studyGroups: StudyGroup[] = [
    {
      id: "1",
      subject: "Física I",
      topic: "Mecánica Clásica",
      date: "2024-01-15",
      time: "14:00",
      location: "Biblioteca Central - Sala 3",
      maxParticipants: 6,
      currentParticipants: 4,
      organizer: "María Rodríguez",
    },
    {
      id: "2",
      subject: "Programación",
      topic: "Estructuras de Datos",
      date: "2024-01-16",
      time: "16:00",
      location: "Lab de Computación A",
      maxParticipants: 8,
      currentParticipants: 3,
      organizer: "Diego Herrera",
    },
  ]

  const tutors: TutorService[] = [
    {
      id: "1",
      tutor: "Andrea Morales",
      subject: "Matemáticas",
      rating: 4.8,
      pricePerHour: 15,
      availability: ["Lunes 14-18", "Miércoles 14-18", "Viernes 14-18"],
      specialties: ["Cálculo", "Álgebra", "Estadística"],
    },
    {
      id: "2",
      tutor: "Roberto Silva",
      subject: "Programación",
      rating: 4.9,
      pricePerHour: 20,
      availability: ["Martes 15-19", "Jueves 15-19", "Sábados 9-13"],
      specialties: ["Java", "Python", "Bases de Datos"],
    },
  ]

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GraduationCap className="w-5 h-5" />
            <span>Recursos Académicos</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <Select onValueChange={setSelectedSemester}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar semestre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1er Semestre</SelectItem>
                <SelectItem value="2">2do Semestre</SelectItem>
                <SelectItem value="3">3er Semestre</SelectItem>
                <SelectItem value="4">4to Semestre</SelectItem>
                <SelectItem value="5">5to Semestre</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={setSelectedSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar materia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="matematicas">Matemáticas</SelectItem>
                <SelectItem value="fisica">Física</SelectItem>
                <SelectItem value="programacion">Programación</SelectItem>
                <SelectItem value="economia">Economía</SelectItem>
                <SelectItem value="ingles">Inglés</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Libros por Materia */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5" />
            <span>Libros por Materia</span>
          </CardTitle>
          <CardDescription>Encuentra libros específicos para tus materias</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {books.map((book) => (
              <div key={book.id} className="flex space-x-4 p-4 border rounded-lg">
                <img
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  className="w-16 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{book.title}</h3>
                  <p className="text-xs text-gray-500">{book.author}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {book.subject}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Sem. {book.semester}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-green-600">${book.price}</span>
                    <Button size="sm">Contactar</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Grupos de Estudio */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>Grupos de Estudio</span>
          </CardTitle>
          <CardDescription>Únete a grupos de estudio colaborativo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {studyGroups.map((group) => (
              <div key={group.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">
                    {group.subject} - {group.topic}
                  </h3>
                  <Badge variant={group.currentParticipants < group.maxParticipants ? "default" : "secondary"}>
                    {group.currentParticipants}/{group.maxParticipants}
                  </Badge>
                </div>
                <div className="grid md:grid-cols-3 gap-2 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {group.date} - {group.time}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>📍 {group.location}</span>
                  </div>
                  <div>
                    <span>Organiza: {group.organizer}</span>
                  </div>
                </div>
                <Button size="sm" disabled={group.currentParticipants >= group.maxParticipants}>
                  {group.currentParticipants >= group.maxParticipants ? "Grupo Lleno" : "Unirse"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Servicios de Tutoría */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Tutorías Disponibles</span>
          </CardTitle>
          <CardDescription>Encuentra tutores especializados en tu materia</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tutors.map((tutor) => (
              <div key={tutor.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{tutor.tutor}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">⭐ {tutor.rating}</span>
                    <span className="font-bold text-green-600">${tutor.pricePerHour}/hora</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">Materia: {tutor.subject}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {tutor.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mb-3">Disponibilidad: {tutor.availability.join(", ")}</div>
                <Button size="sm">Solicitar Tutoría</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
