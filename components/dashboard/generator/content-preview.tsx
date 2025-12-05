"use client"

import Image from "next/image"

interface ContentPreviewProps {
  content: {
    caption: string
    hashtags: string[]
    thumbnail: string
  }
}

export default function GeneratedContentPreview({ content }: ContentPreviewProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("Copied to clipboard!")
  }

  return (
    <div className="space-y-4">
      {/* Thumbnail Preview */}
      <div className="card-lg">
        <p className="text-sm font-medium text-foreground mb-3">Preview</p>
        <div className="relative w-full h-64 bg-muted-light rounded-lg overflow-hidden">
          <Image src={content.thumbnail || "/placeholder.svg"} alt="Content thumbnail" fill className="object-cover" />
        </div>
      </div>

      {/* Caption */}
      <div className="card-lg">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-foreground">Caption</p>
          <button
            onClick={() => copyToClipboard(content.caption)}
            className="text-xs text-primary hover:text-primary-dark transition-smooth"
          >
            Copy
          </button>
        </div>
        <div className="bg-muted-light rounded-lg p-4 text-foreground whitespace-pre-line text-sm max-h-40 overflow-y-auto">
          {content.caption}
        </div>
      </div>

      {/* Hashtags */}
      <div className="card-lg">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-foreground">Hashtags</p>
          <button
            onClick={() => copyToClipboard(content.hashtags.join(" "))}
            className="text-xs text-primary hover:text-primary-dark transition-smooth"
          >
            Copy All
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {content.hashtags.map((tag, index) => (
            <span
              key={index}
              className="badge-primary cursor-pointer hover:bg-primary hover:text-white transition-smooth"
              onClick={() => copyToClipboard(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="card-lg grid grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">{content.caption.split(" ").length}</p>
          <p className="text-xs text-muted">Words</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">{content.hashtags.length}</p>
          <p className="text-xs text-muted">Hashtags</p>
        </div>
      </div>
    </div>
  )
}
