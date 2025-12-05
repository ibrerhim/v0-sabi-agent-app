"use client"

import { useState } from "react"
import ScheduleCalendar from "@/components/dashboard/schedule/calendar"
import ScheduledPostsList from "@/components/dashboard/schedule/posts-list"

export default function SchedulePage() {
  const [scheduledPosts, setScheduledPosts] = useState([
    {
      id: 1,
      title: "Leather Bag Collection",
      platform: "instagram",
      scheduledDate: "2024-12-10T14:00:00",
      status: "pending",
      thumbnail: "/placeholder.svg?key=j5kd2",
    },
    {
      id: 2,
      title: "New Product Launch",
      platform: "whatsapp",
      scheduledDate: "2024-12-11T09:00:00",
      status: "pending",
      thumbnail: "/placeholder.svg?key=m3lq1",
    },
    {
      id: 3,
      title: "Seasonal Sale Announcement",
      platform: "facebook",
      scheduledDate: "2024-12-12T16:30:00",
      status: "pending",
      thumbnail: "/placeholder.svg?key=p7jx4",
    },
  ])

  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDeletePost = (id: number) => {
    setScheduledPosts(scheduledPosts.filter((post) => post.id !== id))
  }

  const handleEditPost = (id: number) => {
    console.log("Edit post:", id)
    // Implementation for editing post
  }

  return (
    <div className="p-8">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold text-foreground">Schedule Posts</h1>
        <p className="text-muted">Manage and schedule your content in advance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-1">
          <ScheduleCalendar
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
            scheduledPosts={scheduledPosts}
          />
        </div>

        {/* Posts List */}
        <div className="lg:col-span-2">
          <ScheduledPostsList
            posts={scheduledPosts}
            selectedDate={selectedDate}
            onDelete={handleDeletePost}
            onEdit={handleEditPost}
          />
        </div>
      </div>
    </div>
  )
}
