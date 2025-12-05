"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ScheduledPostsListProps {
  posts: any[]
  selectedDate: Date
  onDelete: (id: number) => void
  onEdit: (id: number) => void
}

export default function ScheduledPostsList({ posts, selectedDate, onDelete, onEdit }: ScheduledPostsListProps) {
  const postsForDate = posts.filter((post) => {
    const postDate = new Date(post.scheduledDate)
    return (
      postDate.getDate() === selectedDate.getDate() &&
      postDate.getMonth() === selectedDate.getMonth() &&
      postDate.getFullYear() === selectedDate.getFullYear()
    )
  })

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return "📷"
      case "whatsapp":
        return "💬"
      case "facebook":
        return "👍"
      case "twitter":
        return "𝕏"
      default:
        return "📱"
    }
  }

  return (
    <Card className="card-lg">
      <CardHeader>
        <CardTitle>
          Posts scheduled for {selectedDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {postsForDate.length > 0 ? (
          <div className="space-y-4">
            {postsForDate.map((post) => {
              const postTime = new Date(post.scheduledDate).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })

              return (
                <div
                  key={post.id}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-soft transition-smooth"
                >
                  <div className="flex gap-4 p-4">
                    {/* Thumbnail */}
                    <div className="relative h-24 w-24 rounded-lg overflow-hidden bg-muted-light flex-shrink-0">
                      <Image
                        src={post.thumbnail || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground">{post.title}</h4>
                          <p className="text-sm text-muted">{postTime}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{getPlatformIcon(post.platform)}</span>
                          <span className="badge-primary text-xs capitalize">{post.status}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => onEdit(post.id)}>
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-error hover:border-error bg-transparent"
                          onClick={() => onDelete(post.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📭</div>
            <p className="text-foreground font-semibold mb-2">No posts scheduled</p>
            <p className="text-muted text-sm">Select a date with scheduled posts to view them here</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
