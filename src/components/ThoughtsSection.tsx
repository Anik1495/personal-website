// src/components/ThoughtsSection.tsx
import React from "react";

import { Link } from "react-router-dom";

const posts = [
  {
    slug: "iriic-presentation",
    title: "🚀 Honored to Present on Effective Dataset Paper Writing at IRIIC 🚀",
    date: "May 6, 2025",
    summary: "Presented at IRIIC, UIU on best practices for writing dataset papers...",
    image: "/activities/IRIIC_lecture_1.jpeg"
  },
  {
    slug: "mit-solve-proposal",
    title: "💡Just wrapped up a proposal writing for MIT SOLVE x The Trinity Challenge",
    date: "May 2, 2025",
    summary: "Submitting a global health solution for antibiotic access to MIT Solve...",
    image: "/activities/SOLVE.jpeg"
  },
];

const ThoughtsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading mb-8 text-center">My Thoughts & Activities</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <img src={`${import.meta.env.BASE_URL}${post.image}`} alt={post.title} className="h-48 w-full object-cover rounded mb-3" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{post.date}</p>
              <p className="text-gray-700">{post.summary}</p>
              <Link to={`/thoughts/${post.slug}`} className="text-cvblue text-sm font-medium mt-2 inline-block">
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThoughtsSection;