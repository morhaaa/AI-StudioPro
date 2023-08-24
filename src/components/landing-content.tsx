"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle,HelpCircle,Image, Code, Video, TrendingUp} from "lucide-react";

const testimonials = [
  {
    name: "Joel",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "CEO",
    description: "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "CFO",
    description: "The best in class, definitely worth the premium subscription!",
  },
];

const features = [
  {
    icon: <HelpCircle/>,
    title: "Ask anything",
    description: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  },
  {
    icon: <Code/>,
    title: "Intelligent Coding",
    description: "Transform your ideas into reality with the power of AI. Our intelligent coding tool helps you write clean and efficient code, speeding up the development process.",
  },
  {
    icon: <Image/>,
    title: "Advanced Media Creation",
    description: "Explore new dimensions of creativity. Create stunning images, captivating videos, and engaging audio tracks using the power of artificial intelligence as your creative assistant.",
  },
  {
    icon: <MessageCircle/>,
    title: "Virtual Chat Assistant",
    description: "Make your website interact naturally. The AI-powered virtual chat assistant is here to answer visitors' questions and guide them through your site with engaging conversations.",
  },
  {
    icon: <Video/>,
    title: "Visual Content Generation",
    description: "AI becomes your digital brush. From illustrations to social media graphics, create astonishing visuals without any required artistic experience.",
  },
  {
    icon: <TrendingUp/>,
    title: "Improve everyday",
    description: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  },
];


export const LandingContent = () => {

  return (
    <div className="px-12">
      <div className="bg-[#000814]/70 backdrop-blur-md flex flex-col gap-4 items-center rounded-md py-8">
        <h2 className="text-4xl font-bold text-slate-50">Our features</h2>
        <div className="grid grid-cols-3 gap-2 px-8">
        {features.map((ft, index)=>(<Card key={index} className="bg-[#000814] border-none flex flex-col p-2">
         <CardHeader className="flex flex-row items-center  gap-2">
          <div className="w-8 h-8 text-white flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-900 rounded-md">
          {ft.icon}
         </div>
          <CardTitle className="text-white ">{ft.title}</CardTitle>         
         </CardHeader> 
          <CardContent className="text-white">{ft.description}</CardContent></Card>))}
        </div>
        </div>
     
    </div>
  )
}