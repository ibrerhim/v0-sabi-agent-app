"use client"

import { useState } from "react"
import ContentForm from "@/components/dashboard/generator/content-form"
import GeneratedContentPreview from "@/components/dashboard/generator/content-preview"
import { Button } from "@/components/ui/button"

export default function ContentGenerator() {
  const [generatedContent, setGeneratedContent] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleGenerateContent = async (formData: any) => {
    setLoading(true)
    try {
      // Simulate API call - in production, call /api/generate-content
      const mockContent = {
        caption: `Introducing our stunning ${formData.productName}! 🌟\n\nPerfect for ${formData.targetAudience}, this ${formData.productType} is crafted with excellence in mind.\n\nDon't miss out - Shop now and transform your experience!\n\n#SupportLocal #QualityProducts #${formData.productName.replace(/\s+/g, "")}`,
        hashtags: [
          "#SupportLocal",
          "#QualityProducts",
          `#${formData.productName.replace(/\s+/g, "")}`,
          "#MadeInAfrica",
          "#ShopLocal",
        ],
        thumbnail: "/product-thumbnail.png",
      }
      setGeneratedContent(mockContent)
    } catch (error) {
      console.error("Error generating content:", error)
    } finally {
      setLoading(false)
    }
  }

  const handlePostNow = async () => {
    console.log("Posting content now...")
    // Implementation for posting immediately
  }

  const handleSchedule = async () => {
    console.log("Opening schedule modal...")
    // Implementation for scheduling
  }

  return (
    <div className="p-8">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold text-foreground">Content Generator</h1>
        <p className="text-muted">Create AI-powered content for your products in seconds</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div>
          <div className="card-lg">
            <ContentForm onSubmit={handleGenerateContent} isLoading={loading} />
          </div>
        </div>

        {/* Preview Section */}
        <div>
          {generatedContent ? (
            <div className="space-y-4">
              <GeneratedContentPreview content={generatedContent} />
              <div className="flex gap-4">
                <Button onClick={handlePostNow} className="flex-1 bg-primary hover:bg-primary-dark">
                  Post Now
                </Button>
                <Button onClick={handleSchedule} variant="outline" className="flex-1 bg-transparent">
                  Schedule
                </Button>
              </div>
            </div>
          ) : (
            <div className="card-lg flex flex-col items-center justify-center h-96 text-center border-2 border-dashed border-border">
              <div className="text-5xl mb-4">✨</div>
              <p className="text-foreground font-semibold mb-2">No content generated yet</p>
              <p className="text-muted text-sm">Fill in the form and click Generate to see your AI-powered content</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
