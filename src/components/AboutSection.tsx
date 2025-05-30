import React, { useEffect, useState } from "react";
import { Book, Calendar, Code, File } from "lucide-react";

interface AboutData {
  bio: string[];
  cv: {
    url: string;
    description: string;
  };
  education: {
    degree: string;
    institution: string;
    years: string;
    cgpa: string;
  };
  thesis: {
    title: string;
  };
  fyp: {
    title: string;
  };
  courses: string[];
}

const AboutSection = () => {
  const [data, setData] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch("/personal-website/content/about.yaml")
      .then(res => res.text())
      .then(text => {
        const yaml = require("js-yaml");
        const parsed = yaml.load(text) as AboutData;
        setData(parsed);
      })
      .catch(err => console.error("Failed to load About content", err));
  }, []);

  if (!data) return <div className="text-center p-10">Loading...</div>;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-container">
          <h2 className="section-heading">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* Left: Bio */}
            <div className="space-y-5">
              <div className="space-y-4">
                {data.bio.map((paragraph, idx) => (
                  <p className="text-gray-700" key={idx}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* CV Box */}
              <div className="p-5 border-l-4 border-blue-600 bg-blue-50 rounded-md shadow-sm">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Curriculum Vitae</h3>
                <p className="text-gray-700 mb-3">{data.cv.description}</p>
                <a
                  href={`${import.meta.env.BASE_URL}${data.cv.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-md transition shadow"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  View Full CV
                </a>
              </div>
            </div>

            {/* Right: Academic */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="font-serif text-xl font-medium text-gray-800 mb-4">Academic Profile</h3>
              <div className="space-y-5">
                <div className="flex">
                  <Book className="mr-3 text-cvblue shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-medium text-base">{data.education.degree}</h4>
                    <p className="text-sm text-gray-600">{data.education.institution}</p>
                    <p className="text-sm text-gray-600">{data.education.years} | {data.education.cgpa}</p>
                  </div>
                </div>

                <div className="flex">
                  <File className="mr-3 text-cvblue shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-medium text-base">Thesis</h4>
                    <p className="text-sm text-gray-600">{data.thesis.title}</p>
                  </div>
                </div>

                <div className="flex">
                  <Code className="mr-3 text-cvblue shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-medium text-base">Final Year Project</h4>
                    <p className="text-sm text-gray-600">{data.fyp.title}</p>
                  </div>
                </div>

                <div className="flex">
                  <Calendar className="mr-3 text-cvblue shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-medium text-base">Significant Courses</h4>
                    <p className="text-sm text-gray-600">
                      {data.courses.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
