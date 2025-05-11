"use client"

import React from 'react';
import { CheckCircle2, Lock, UserCircle2, VideoIcon, MicIcon, FileBadge } from 'lucide-react';
import Image from 'next/image';
import workimage from '../../../assests/work.png';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Lock className="w-12 h-12 text-blue-500" />,
      title: "Login or Sign Up",
      description: "Securely access your personalized interview sessions using Clerk authentication.",
      details: [
        "Create a new account or log in",
        "Secure and quick authentication process",
        "Personalized user experience"
      ]
    },
    {
      icon: <UserCircle2 className="w-12 h-12 text-blue-500" />,
      title: "Choose Your Interview Type",
      description: "Select your domain, job role, and difficulty level for a tailored mock interview.",
      details: [
        "Technical Interviews",
        "HR & Behavioral Assessments",
        "Industry-Specific Evaluations"
      ]
    },
    {
      icon: <VideoIcon className="w-12 h-12 text-blue-500" />,
      title: "Allow Camera & Microphone",
      description: "Grant permissions for a comprehensive interview experience.",
      details: [
        "Camera access for visual analysis",
        "Microphone for speech evaluation",
        "Seamless browser permissions"
      ]
    },
    {
      icon: <MicIcon className="w-12 h-12 text-blue-500" />,
      title: "AI Generates Questions",
      description: "Dynamic, intelligent question generation based on your selected domain.",
      details: [
        "One question at a time",
        "Time-boxed responses",
        "Adaptive difficulty"
      ]
    },
    {
      icon: <VideoIcon className="w-12 h-12 text-blue-500" />,
      title: "Answer or Skip",
      description: "Record your video response or move to the next question.",
      details: [
        "Video recording capabilities",
        "Flexible response options",
        "No-pressure environment"
      ]
    },
    {
      icon: <FileBadge className="w-12 h-12 text-blue-500" />,
      title: "AI Analysis & Feedback",
      description: "Comprehensive performance evaluation using advanced AI technologies.",
      details: [
        "Speech clarity assessment",
        "Body language analysis",
        "Confidence measurement"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              🚀 Experience AI-Powered Mock Interviews Like Never Before!
            </h1>
            <p className="text-xl text-gray-600">
              PrepAI helps you prepare for real interviews with AI-generated questions, 
              real-time feedback, and performance analysis. Follow these simple steps 
              to get started!
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
              Start Your Mock Interview
            </button>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image 
              src={workimage}
              alt="AI Interview Process" 
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Your Journey to Interview Success
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center mb-4">
                  {step.icon}
                  <h3 className="ml-4 text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li 
                      key={detailIndex} 
                      className="flex items-center text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2 text-blue-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;