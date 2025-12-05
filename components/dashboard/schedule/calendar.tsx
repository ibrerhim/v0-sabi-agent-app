"use client"

import { useState } from "react"

interface ScheduleCalendarProps {
  selectedDate: Date
  onSelectDate: (date: Date) => void
  scheduledPosts: any[]
}

export default function ScheduleCalendar({ selectedDate, onSelectDate, scheduledPosts }: ScheduleCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getPostsForDate = (date: Date) => {
    return scheduledPosts.filter((post) => {
      const postDate = new Date(post.scheduledDate)
      return (
        postDate.getDate() === date.getDate() &&
        postDate.getMonth() === date.getMonth() &&
        postDate.getFullYear() === date.getFullYear()
      )
    })
  }

  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)
  const days = Array.from(
    { length: daysInMonth },
    (_, i) => new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1),
  )

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  return (
    <div className="card-lg">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-foreground">
            {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </h3>
          <div className="flex gap-2">
            <button onClick={handlePrevMonth} className="p-2 hover:bg-muted-light rounded-lg transition-smooth">
              ◀
            </button>
            <button onClick={handleNextMonth} className="p-2 hover:bg-muted-light rounded-lg transition-smooth">
              ▶
            </button>
          </div>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-xs font-semibold text-muted">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square"></div>
          ))}
          {days.map((day) => {
            const postsCount = getPostsForDate(day)
            const isSelected = day.toDateString() === selectedDate.toDateString()

            return (
              <button
                key={day.toString()}
                onClick={() => onSelectDate(day)}
                className={`aspect-square rounded-lg text-xs font-medium transition-smooth flex flex-col items-center justify-center ${
                  isSelected ? "bg-primary text-white" : "bg-muted-light text-foreground hover:bg-border"
                }`}
              >
                <span>{day.getDate()}</span>
                {postsCount.length > 0 && <span className="text-xs mt-1">{postsCount.length}</span>}
              </button>
            )
          })}
        </div>
      </div>

      <div className="bg-info/10 border border-info/50 rounded-lg p-3">
        <p className="text-xs text-info">Click on a date to see scheduled posts for that day</p>
      </div>
    </div>
  )
}
