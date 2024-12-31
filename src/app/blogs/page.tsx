"use client";  

import { useEffect, useState } from "react";
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Pharmacy: An Introduction",
    content:
      "AI is transforming pharmacy by speeding up drug discovery, personalizing treatments, and automating tasks...",
    date: "29 December 2024",
    image: "/ai in pharmacy.png",
  },
  {
    id: 2,
    title: "AI and Medication Adherence: Can Technology Improve Compliance?",
    content:
      "AI improves medication adherence with personalized reminders and tracking, helping patients...",
    date: "29 December 2024",
    image: "/compliance.jpeg",
  },
  {
    id: 3,
    title: "Will AI Replace Pharmacists? Understanding the Human-AI Partnership",
    content:
      "AI will enhance pharmacists' roles by automating tasks and providing insights, but human expertise...",
    date: "29 December 2024",
    image: "/replace.webp",
  },
  {
    id: 4,
    title: "The Role of AI in Fighting Antibiotic Resistance",
    content:
      "AI is combating antibiotic resistance by accelerating drug discovery, optimizing treatments, and...",
    date: "29 December 2024",
    image: "/resistance.jpeg",
  },
  {
    id: 5,
    title: "AI in Clinical Trials: Reducing Time and Costs",
    content:
      "AI accelerates clinical trials by optimizing recruitment, trial design, and data analysis, reducing...",
    date: "29 December 2024",
    image: "/clinical.jpg",
  },
  {
    id: 6,
    title: "How AI Can Help You Find the Right Medication Faster",
    content:
      "AI speeds up finding the right medication by personalizing treatment recommendations based on patient...",
    date: "29 December 2024",
    image: "/bottle-pills.avif",
  },
];

type BlogPost = {
  id: number;
  title: string;
  content: string;
  date: string;
  image: string;
};

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    
    const fetchPosts = async () => {
      
      setPosts(blogPosts); 
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
      <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={500}
                className="w-full h-52 object-cover rounded-t-md"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm">{post.content}</p>
                <p className="text-orange-500 text-[13px] font-semibold mt-4">
                  {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
