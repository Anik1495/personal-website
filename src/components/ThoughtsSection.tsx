// src/components/ThoughtsSection.tsx
import React from "react";

const ThoughtsSection = () => {
  const posts = [
    {
      title: "How AI is Transforming Healthcare",
      date: "May 5, 2025",
      summary: "Exploring the real-world applications of AI in diagnostics and patient care.",
    },
    {
      title: "Lessons Learned from My Research Project",
      date: "April 15, 2025",
      summary: "Key takeaways from building a machine learning pipeline for hypertension detection.",
    },
    {
      title: "Productivity Tools I Use as a Biomedical Engineer",
      date: "March 30, 2025",
      summary: "Some tools and tricks that boost my workflow and research efficiency.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading mb-8 text-center">My Thoughts & Activities</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{post.date}</p>
              <p className="text-gray-700">{post.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThoughtsSection;