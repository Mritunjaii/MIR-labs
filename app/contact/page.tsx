"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Page Header */}
      <div className="text-center py-12 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with MIR Labs for inquiries, collaborations, or membership information
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows={6}
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-xl">📧</span>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@mirlabs.org</p>
                  <p className="text-gray-600">admin@mirlabs.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-xl">📞</span>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+65 6123-4567 (Singapore)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-xl">📍</span>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    MIR Labs International
                    <br />
                    123 Research Drive
                    <br />
                    Singapore 123456
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-xl">🕒</span>
                <div>
                  <h3 className="font-semibold">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM (SGT)</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM (SGT)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Membership Inquiries:</strong> membership@mirlabs.org
                </p>
                <p>
                  <strong>Conference Submissions:</strong> conferences@mirlabs.org
                </p>
                <p>
                  <strong>Publication Inquiries:</strong> publications@mirlabs.org
                </p>
                <p>
                  <strong>Partnership Opportunities:</strong> partnerships@mirlabs.org
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Follow Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  ResearchGate
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
