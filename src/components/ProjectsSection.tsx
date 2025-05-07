
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      title: "IoT-Based Real-Time Posture Monitoring System",
      description: "Created a system for monitoring posture in real time, utilizing a rubber band and hardware integration to identify the sitting posture angle.",
      link: "https://drive.google.com/drive/folders/1-b9XDQ-WGyQYua-pQO6fZOlDGwD5Mc3v?usp=sharing",
      image: "/anik-personal-cv-site/loveable-uploads/IoT_Project.png"
    },
    {
      title: "Modeling of a Cost-Efficient Prosthetic Leg",
      description: "Utilised 3D modelling software to design a prosthetic limb, carefully combining all components to satisfy both practical and cosmetic requirements.",
      link: "https://grabcad.com/library/prosthetic-leg-18",
      image: "/lovable-uploads/Prosthetic_Leg_Project.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-container">
          <h2 className="section-heading">Selected Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div className="h-64 bg-gray-200">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain bg-white"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-cvblue">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <a 
                    href={project.link} 
                    className="text-cvblue hover:text-blue-700 flex items-center text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ArrowRight size={16} className="ml-1" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-cvblue text-cvblue hover:bg-cvblue hover:text-white">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
