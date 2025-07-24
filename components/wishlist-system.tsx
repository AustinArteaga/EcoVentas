"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Heart, Plus, Trash2, Share2, Bell } from "lucide-react"

interface WishlistItem {
  id: string
  title: string
  price: number
  category: string
  image: string
  seller: string
  isAvailable: boolean
  priceDropped: boolean
}

interface WishlistProps {
  items: WishlistItem[]
  onRemoveItem: (id: string) => void
  onCreateList: (name: string) => void
}

export function WishlistSystem({ items, onRemoveItem, onCreateList }: WishlistProps) {
  const [newListName, setNewListName] = useState("")
  const [showCreateList, setShowCreateList] = useState(false)

  const handleCreateList = () => {
    if (newListName.trim()) {
      onCreateList(newListName)
      setNewListName("")
      setShowCreateList(false)
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "comida":
        return "🍕"
      case "accesorios":
        return "🎒"
      case "inmuebles":
        return "🏠"
      case "servicios":
        return "💼"
      default:
        return "📦"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>Mi Lista de Deseos</span>
              </CardTitle>
              <CardDescription>{items.length} productos guardados</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => setShowCreateList(!showCreateList)}>
              <Plus className="w-4 h-4 mr-2" />
              Nueva Lista
            </Button>
          </div>
        </CardHeader>

        {showCreateList && (
          <CardContent className="pt-0">
            <div className="flex space-x-2">
              <Input
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                placeholder="Nombre de la lista..."
                onKeyPress={(e) => e.key === "Enter" && handleCreateList()}
              />
              <Button onClick={handleCreateList} size="sm">
                Crear
              </Button>
            </div>
          </CardContent>
        )}
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Card key={item.id} className="relative">
            {item.priceDropped && (
              <Badge className="absolute top-2 right-2 bg-red-500 z-10">
                <Bell className="w-3 h-3 mr-1" />
                ¡Precio Bajo!
              </Badge>
            )}

            <div className="relative">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="absolute top-2 left-2">
                <Badge variant="secondary">{getCategoryIcon(item.category)}</Badge>
              </div>
            </div>

            <CardContent className="p-4">
              <h3 className="font-medium text-sm mb-2 line-clamp-2">{item.title}</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-green-600">${item.price}</span>
                <Badge variant={item.isAvailable ? "default" : "secondary"}>
                  {item.isAvailable ? "Disponible" : "No disponible"}
                </Badge>
              </div>
              <p className="text-xs text-gray-500 mb-3">Vendedor: {item.seller}</p>

              <div className="flex space-x-2">
                <Button size="sm" className="flex-1" disabled={!item.isAvailable}>
                  Contactar
                </Button>
                <Button variant="outline" size="sm" onClick={() => onRemoveItem(item.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {items.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">Tu lista de deseos está vacía</p>
            <p className="text-sm text-gray-400">Guarda productos que te interesen para comprar después</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
