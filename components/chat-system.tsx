"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Phone, MapPin, X, Clock } from "lucide-react"

interface Message {
  id: string
  senderId: string
  senderName: string
  content: string
  timestamp: Date
  type: "text" | "location"
}

interface ChatSystemProps {
  productId: string
  sellerId: string
  sellerName: string
  buyerId: string
  buyerName: string
  productTitle: string
  onClose: () => void
}

export function ChatSystem({
  productId,
  sellerId,
  sellerName,
  buyerId,
  buyerName,
  productTitle,
  onClose,
}: ChatSystemProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      senderId: sellerId,
      senderName: sellerName,
      content: "¡Hola! Gracias por tu interés en mi producto. ¿Tienes alguna pregunta?",
      timestamp: new Date(Date.now() - 300000),
      type: "text",
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isOnline, setIsOnline] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = () => {
    if (!newMessage.trim()) return

    const message: Message = {
      id: Date.now().toString(),
      senderId: buyerId,
      senderName: buyerName,
      content: newMessage,
      timestamp: new Date(),
      type: "text",
    }

    setMessages((prev) => [...prev, message])
    setNewMessage("")

    // Simular respuesta del vendedor después de 2 segundos
    setTimeout(() => {
      const responses = [
        "¡Perfecto! ¿Cuándo te gustaría verlo?",
        "Claro, podemos coordinar un encuentro en el campus",
        "Está disponible. ¿Prefieres que nos encontremos en la biblioteca?",
        "Sin problema, te puedo mostrar más fotos si necesitas",
      ]

      const response: Message = {
        id: (Date.now() + 1).toString(),
        senderId: sellerId,
        senderName: sellerName,
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        type: "text",
      }
      setMessages((prev) => [...prev, response])
    }, 2000)
  }

  const shareLocation = () => {
    const locationMessage: Message = {
      id: Date.now().toString(),
      senderId: buyerId,
      senderName: buyerName,
      content: "Biblioteca Central - Planta Baja",
      timestamp: new Date(),
      type: "location",
    }
    setMessages((prev) => [...prev, locationMessage])
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-EC", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <Card className="fixed bottom-4 right-4 w-96 h-96 shadow-xl z-50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{sellerName}</CardTitle>
            <p className="text-sm text-gray-500 truncate">{productTitle}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant={isOnline ? "default" : "secondary"} className="text-xs">
              {isOnline ? "En línea" : "Desconectado"}
            </Badge>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0 flex flex-col h-80">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.senderId === buyerId ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.senderId === buyerId ? "bg-green-600 text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {message.type === "location" ? (
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{message.content}</span>
                    </div>
                  ) : (
                    <p className="text-sm">{message.content}</p>
                  )}
                  <div className="flex items-center justify-end mt-1 space-x-1">
                    <Clock className="w-3 h-3 opacity-70" />
                    <span className="text-xs opacity-70">{formatTime(message.timestamp)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div ref={messagesEndRef} />
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex space-x-2 mb-2">
            <Button variant="outline" size="sm" onClick={shareLocation}>
              <MapPin className="w-4 h-4 mr-1" />
              Ubicación
            </Button>
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4 mr-1" />
              Llamar
            </Button>
          </div>
          <div className="flex space-x-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Escribe un mensaje..."
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1"
            />
            <Button onClick={sendMessage} size="sm">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
