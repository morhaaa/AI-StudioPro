"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MessageCircle,
  HelpCircle,
  Image,
  Code,
  Video,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: <HelpCircle />,
    title: "Ask anything",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
  },
  {
    icon: <Code />,
    title: "Intelligent Coding",
    description:
      "Transform your ideas into reality with the power of AI. Our intelligent coding tool helps you write clean and efficient code, speeding up the development process.",
  },
  {
    icon: <Image />,
    title: "Advanced Media Creation",
    description:
      "Explore new dimensions of creativity. Create stunning images, captivating videos, and engaging audio tracks using the power of artificial intelligence as your creative assistant.",
  },
  {
    icon: <MessageCircle />,
    title: "Virtual Chat Assistant",
    description:
      "Make your website interact naturally. The AI-powered virtual chat assistant is here to answer visitors' questions and guide them through your site with engaging conversations.",
  },
  {
    icon: <Video />,
    title: "Visual Content Generation",
    description:
      "AI becomes your digital brush. From illustrations to social media graphics, create astonishing visuals without any required artistic experience.",
  },
  {
    icon: <TrendingUp />,
    title: "Improve everyday",
    description:
      "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 h-[80%]">
      <div className="bg-[#000814]/70 backdrop-blur-md flex flex-col  gap-2 md:gap-4 items-center rounded-md py-6 md:py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
          Our features
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-2 px-8">
          {features.map((ft, index) => (
            <Card
              key={index}
              className="bg-[#000814] border-none flex flex-col p-2"
            >
              <CardHeader className="flex flex-row items-center  gap-1 md:gap-3 ">
                <div className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-900 rounded-md p-1">
                  {ft.icon}
                </div>
                <CardTitle className="text-white text-xl lg:text-2xl p-0">
                  {ft.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white text-sm lg:text-md">
                {ft.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
