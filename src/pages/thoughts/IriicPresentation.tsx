import React from "react";
import { Link } from "react-router-dom";

const IriicPresentation = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <Link to="/" className="text-cvblue text-sm">← Back to Home</Link>
        <h1 className="text-3xl font-bold mt-4 mb-4">
          🚀 Honored to Present on Effective Dataset Paper Writing at IRIIC 🚀
        </h1>
        <p className="text-gray-600 mb-6">May 6, 2025</p>
        <img src={`${import.meta.env.BASE_URL}activities/IRIIC_lecture_1.jpeg`} className="rounded-lg mb-4" alt="Presentation" />
        <img src={`${import.meta.env.BASE_URL}activities/IRIIC_lecture_2.jpeg`} className="rounded-lg mb-6" alt="Presentation 2" />
        <p className="text-lg text-gray-800 mb-4">
          Had the privilege of presenting at <a href="https://iriic.uiu.ac.bd" className="underline text-cvblue" target="_blank" rel="noopener noreferrer">Institute of Research, Innovation, Incubation and Commercialization (IRIIC), UIU</a> on best practices for dataset paper writing. It was an enriching experience to share key insights on structuring and presenting datasets effectively in research papers. Thank you to everyone who participated and contributed to the discussion.
        </p>
        {/* Add the rest of your post text here */}
      </div>
    </section>
  );
};

export default IriicPresentation;