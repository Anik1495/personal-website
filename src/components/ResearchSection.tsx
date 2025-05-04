
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ResearchSection = () => {
  const researchProjects = [
    {
      title: "AI-Based Prescription Audit System",
      period: "Jul, 2023 - Present",
      description: "Creating a robust protocol for auditing prescriptions and developing a hybrid model aimed at identifying and correcting common prescription errors.",
      link: "https://iriic.uiu.ac.bd/ai-based-prescription-audit-system/",
    },
    {
      title: "Data-Driven Prescription Optimization for Diabetes Treatment",
      period: "Dec, 2023 – Jun, 2024",
      description: "Defining protocols for creating a knowledge base for diabetes medication and structuring a model for medication correction.",
      link: "/research",
    },
    {
      title: "Signal Acquisition and Preprocessing for CVD Detection",
      period: "Mar, 2022 - Feb, 2023",
      description: "Designing a dual-signal acquisition system using MEMS interfaced with a microcontroller for cardiovascular disease detection.",
      link: "/research",
    },
    {
      title: "Early GDM Prediction using ML Models",
      period: "Jun, 2022 – Dec, 2022",
      description: "Handling data preprocessing and feature engineering to improve model performance for predicting gestational diabetes mellitus.",
      link: "/research",
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-container">
          <h2 className="section-heading">Research Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
            {researchProjects.map((project, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl text-cvblue">{project.title}</CardTitle>
                  <CardDescription>{project.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <a 
                    href={project.link} 
                    className="text-cvblue hover:text-blue-700 flex items-center text-sm font-medium"
                    target={project.link.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-cvblue text-cvblue hover:bg-cvblue hover:text-white">
              <Link to="/research">
                View All Research <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
