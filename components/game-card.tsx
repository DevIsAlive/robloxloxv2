"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Users, Star } from "lucide-react"

interface GameCardProps {
  title: string
  description: string
  players: number
  rating: number
  imageUrl?: string
  onPlay: () => void
}

export function GameCard({ title, description, players, rating, imageUrl, onPlay }: GameCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-md mb-2 flex items-center justify-center">
          {imageUrl ? (
            <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover rounded-md" />
          ) : (
            <Play className="h-12 w-12 text-white" />
          )}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">{players.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <Button onClick={onPlay} className="w-full">
          <Play className="h-4 w-4 mr-2" />
          Play Now
        </Button>
      </CardContent>
    </Card>
  )
}
