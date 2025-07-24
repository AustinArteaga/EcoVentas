"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Clock, Shield, ThumbsUp } from "lucide-react"

interface RatingSystemProps {
  sellerId: string
  sellerName: string
  productTitle: string
  onSubmitRating: (rating: number, comment: string) => void
}

export function RatingSystem({ sellerId, sellerName, productTitle, onSubmitRating }: RatingSystemProps) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [comment, setComment] = useState("")

  const handleSubmit = () => {
    if (rating > 0) {
      onSubmitRating(rating, comment)
    }
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Calificar Vendedor</CardTitle>
        <CardDescription>¿Cómo fue tu experiencia con {sellerName}?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Producto: {productTitle}</p>
          <div className="flex justify-center space-x-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="focus:outline-none"
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Comentario (opcional)</label>
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comparte tu experiencia con otros estudiantes..."
            rows={3}
          />
        </div>

        <Button onClick={handleSubmit} className="w-full" disabled={rating === 0}>
          Enviar Calificación
        </Button>
      </CardContent>
    </Card>
  )
}

interface SellerProfileProps {
  sellerId: string
  sellerName: string
  rating: number
  totalRatings: number
  badges: string[]
  recentReviews: Array<{
    rating: number
    comment: string
    date: string
    buyerName: string
  }>
}

export function SellerProfile({
  sellerId,
  sellerName,
  rating,
  totalRatings,
  badges,
  recentReviews,
}: SellerProfileProps) {
  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "Vendedor Confiable":
        return <Shield className="w-4 h-4" />
      case "Entrega Rápida":
        return <Clock className="w-4 h-4" />
      case "Excelente Servicio":
        return <ThumbsUp className="w-4 h-4" />
      case "Top Vendedor":
        return <Award className="w-4 h-4" />
      default:
        return <Star className="w-4 h-4" />
    }
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Vendedor Confiable":
        return "bg-green-100 text-green-800"
      case "Entrega Rápida":
        return "bg-blue-100 text-blue-800"
      case "Excelente Servicio":
        return "bg-purple-100 text-purple-800"
      case "Top Vendedor":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <span>{sellerName}</span>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{rating.toFixed(1)}</span>
                <span className="text-sm text-gray-500">({totalRatings} reseñas)</span>
              </div>
            </CardTitle>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {badges.map((badge, index) => (
            <Badge key={index} className={`${getBadgeColor(badge)} flex items-center space-x-1`}>
              {getBadgeIcon(badge)}
              <span>{badge}</span>
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <h4 className="font-medium">Reseñas Recientes</h4>
          {recentReviews.map((review, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4">
              <div className="flex items-center space-x-2 mb-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-3 h-3 ${
                        star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{review.buyerName}</span>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
              {review.comment && <p className="text-sm text-gray-600">{review.comment}</p>}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
