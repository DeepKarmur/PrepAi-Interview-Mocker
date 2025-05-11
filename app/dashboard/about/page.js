"use client"

import React from 'react'
import { Briefcase, Target, TrendingUp, Users } from 'lucide-react'

export default function AboutPage() {
  const features = [
    {
      icon: <Briefcase className="w-12 h-12 text-primary" />,
      title: "AI-Powered Interview Preparation",
      description: "Simulate real interview scenarios with our intelligent AI question generator."
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Personalized Feedback",
      description: "Receive detailed, constructive feedback to improve your interview skills."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Performance Tracking",
      description: "Monitor your progress and identify areas for improvement."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Multiple Interview Domains",
      description: "Prepare for interviews across various industries and job roles."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About PrepAI Mock Interview</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering job seekers with AI-driven interview preparation, 
            helping you confidently ace your next interview.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
            <p className="text-gray-700">
              PrepAI Mock Interview is dedicated to transforming interview preparation 
              through cutting-edge AI technology. We aim to provide a comprehensive, 
              personalized platform that helps job seekers build confidence, 
              improve communication skills, and increase their chances of success.
            </p>
          </div>

          {/* How We Help Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-primary">How We Help</h2>
            <p className="text-gray-700">
              By leveraging artificial intelligence, we create realistic interview 
              scenarios, provide instant video response analysis, and offer 
              actionable feedback. Our platform adapts to your specific career goals, 
              ensuring you're fully prepared for your dream job interview.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}