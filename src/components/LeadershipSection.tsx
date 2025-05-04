
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LeadershipSection = () => {
  const leadership = [
    {
      title: "President",
      organization: "MIST Einthoven Club, MIST, Bangladesh",
      period: "2021 - 2022",
      description: "Led the organization of ANURONON'22, the first large national biomedical event, working with enthusiasts to develop ground-breaking solutions for the health sector of Bangladesh.",
      certificate: "https://drive.google.com/file/d/1o3UsHsUXegrlVE8lgauPj532trrmEFh9/view?usp=sharing"
    },
    {
      title: "General Secretary",
      organization: "IEEE MIST Student Branch, MIST, Bangladesh",
      period: "2021 - 2022",
      description: "Actively organized various events and workshops like guest lectures, technical competitions throughout the year organized by IEEE MIST SB."
    },
    {
      title: "General Secretary",
      organization: "MIST Literature and Culture Club, MIST, Bangladesh",
      period: "2021 - 2022",
      description: "Coordinated club activities, organised events, managed communications, and fostered a vibrant environment through the planning and hosting of workshops, cultural programs, and collaborative events with other clubs."
    },
    {
      title: "Administrative Lead",
      organization: "IEEE Computer Society Bangladesh Chapter Team SPARK, Bangladesh",
      period: "2020 - 2021",
      description: "Served as the Administrative Lead for Team SPARK and had the opportunity to work with the IEEE Computer Society Bangladesh Chapter and gathered knowledge about managing the administrative operations of a department or organization.",
      link: "https://site.ieee.org/bangladesh-cs/spark-committee/"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-container">
          <h2 className="section-heading">Leadership Activities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {leadership.map((role, index) => (
              <Card key={index} className="card-hover h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-cvblue">{role.title}</CardTitle>
                    <Badge variant="outline">{role.period}</Badge>
                  </div>
                  <CardDescription className="font-medium text-gray-700">{role.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{role.description}</p>
                  
                  <div className="mt-4 flex gap-2">
                    {role.certificate && (
                      <a 
                        href={role.certificate} 
                        className="text-cvblue hover:text-blue-700 flex items-center text-sm font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate <ArrowRight size={16} className="ml-1" />
                      </a>
                    )}
                    
                    {role.link && (
                      <a 
                        href={role.link} 
                        className="text-cvblue hover:text-blue-700 flex items-center text-sm font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Link <ArrowRight size={16} className="ml-1" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
