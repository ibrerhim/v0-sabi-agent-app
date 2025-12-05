"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ContentFormProps {
  onSubmit: (data: any) => void
  isLoading: boolean
}

export default function ContentForm({ onSubmit, isLoading }: ContentFormProps) {
  const [formData, setFormData] = useState({
    productName: "",
    productType: "",
    targetAudience: "",
    platform: "instagram",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const productTypes = [
    "Fashion & Clothing",
    "Food & Beverage",
    "Electronics",
    "Home & Garden",
    "Beauty & Wellness",
    "Sports & Fitness",
    "Books & Media",
    "Services",
    "Other",
  ]

  const platforms = ["instagram", "twitter", "facebook", "whatsapp"]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Product Name</label>
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          placeholder="e.g., Handmade Leather Bag"
          className="input"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Product Type</label>
        <select name="productType" value={formData.productType} onChange={handleChange} className="input" required>
          <option value="">Select a category</option>
          {productTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Target Audience</label>
        <input
          type="text"
          name="targetAudience"
          value={formData.targetAudience}
          onChange={handleChange}
          placeholder="e.g., Young professionals, Fashion enthusiasts"
          className="input"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Platform</label>
        <select name="platform" value={formData.platform} onChange={handleChange} className="input">
          {platforms.map((platform) => (
            <option key={platform} value={platform}>
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="pt-4 border-t border-border">
        <div className="bg-info/10 border border-info/50 rounded-lg p-3 mb-4">
          <p className="text-sm text-info">
            This will use <span className="font-semibold">1 credit</span>. You have 87 credits remaining.
          </p>
        </div>

        <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary-dark">
          {isLoading ? "Generating..." : "Generate Content"}
        </Button>
      </div>

      <div className="bg-secondary/10 border border-secondary/50 rounded-lg p-4">
        <h4 className="font-semibold text-foreground mb-2">Pro Tips</h4>
        <ul className="text-sm text-muted space-y-1">
          <li>• Be specific about your product for better results</li>
          <li>• Include your target audience for personalized content</li>
          <li>• Different platforms get tailored content automatically</li>
        </ul>
      </div>
    </form>
  )
}
