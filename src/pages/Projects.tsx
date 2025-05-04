
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "IoT-Based Real-Time Posture Monitoring System",
      description: "Created a system for monitoring posture in real time, utilizing a rubber band and hardware integration to identify the sitting posture angle. We integrated this system with a decision-making algorithm to categorize postures and implement immediate user feedback on the IoT platform.",
      link: "https://drive.google.com/drive/folders/1-b9XDQ-WGyQYua-pQO6fZOlDGwD5Mc3v?usp=sharing",
      image: "/lovable-uploads/15aa1aba-5102-4dc0-9c1c-7263ed32c19d.png",
      technologies: ["IoT", "Hardware Integration", "Decision Algorithms", "Real-time Monitoring"]
    },
    {
      title: "Modeling of a Cost-Efficient Prosthetic Leg",
      description: "Utilised 3D modelling software to design a prosthetic limb, carefully combining all components to satisfy both practical and cosmetic requirements.",
      link: "https://grabcad.com/library/prosthetic-leg-18",
      image: "/lovable-uploads/6c12b103-b389-4ddb-9e6f-d14a164bb19a.png",
      technologies: ["3D Modeling", "Prosthetic Design", "Biomedical Engineering"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-serif font-bold mb-2 text-cvblue">Projects</h1>
          <p className="text-lg text-gray-600 mb-8">
            Selected engineering and research projects highlighting my technical skills and problem-solving approach.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden h-full card-hover transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div className="h-64 bg-white flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-cvblue">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cvblue hover:underline flex items-center gap-1"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
