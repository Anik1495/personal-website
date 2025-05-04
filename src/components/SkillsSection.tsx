
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "C", "MATLAB", "R"]
    },
    {
      category: "Libraries",
      items: ["NumPy", "Scikit-learn", "NLTK", "TensorFlow", "OpenCV", "Pandas"]
    },
    {
      category: "Research Paper Writing Tools",
      items: ["LaTeX", "OriginPro"]
    },
    {
      category: "Application Software",
      items: ["MS Office"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-container">
          <h2 className="section-heading">Key Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {skills.map((skill, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-cvblue">{skill.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
