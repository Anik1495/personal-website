
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const professionalExperience = [
    {
      position: "Research Engineer",
      organization: "Institute of Research, Innovation, Incubation & Commercialization (IRIIC)",
      period: "Jul, 2023 - Present",
      website: "https://iriic.uiu.ac.bd",
      responsibilities: [
        "Lead the design and development of AI models for healthcare innovation.",
        "Apply machine learning and clinical decision support system for automation in tradition healthcare process.",
        "Proficient in proposal writing, presentation delivery, and managing ethical approval procedures for successful grant submissions.",
        "Handle requisitions and fund management for multiple expenses related to the project.",
        "Conduct surveys to assess user requirements and acceptance of systems to guide the development and implementation of solutions.",
        "Develop protocols for collecting data in real-world healthcare settings in accordance with project methodology.",
        "Organize and facilitate consultative workshops for the project's process verification and methodology to gather essential feedback for refinement.",
        "Ensure the accuracy and reliability of healthcare solutions by applying rigorous testing and clinical validation protocols in real-world clinical settings.",
        "Coordinate efforts to convert ideas from research to commercialization by finding key opportunities and creating business models.",
        "Contribute to research paper writing and publishing, supporting the overall process from drafting to submission in multiple projects."
      ]
    },
    {
      position: "Intern",
      organization: "JMI Hospital Requisite Manufacturing Ltd. (JHRML)",
      period: "Feb, 2022 - March, 2022",
      certificate: "https://drive.google.com/file/d/1vRy2a_3H2s1xlOh4gbrz4SHnzPQiWiVe/view?usp=sharing",
      responsibilities: [
        "Developed a strong appreciation for the importance of precision and attention to detail in medical device manufacturing.",
        "Gained a strong understanding of the importance of quality control and safety procedures in pathological product manufacturing."
      ]
    }
  ];

  const leadershipExperience = [
    {
      position: "President",
      organization: "MIST Einthoven Club, MIST, Bangladesh",
      period: "2021 - 2022",
      certificate: "https://drive.google.com/file/d/1o3UsHsUXegrlVE8lgauPj532trrmEFh9/view?usp=sharing",
      description: "Led the organization of ANURONON'22, the first large national biomedical event, working with enthusiasts to develop ground-breaking solutions for the health sector of Bangladesh."
    },
    {
      position: "General Secretary",
      organization: "IEEE MIST Student Branch, MIST, Bangladesh",
      period: "2021 - 2022",
      description: "Actively organized various events and workshops like guest lectures, technical competitions throughout the year organized by IEEE MIST SB."
    },
    {
      position: "General Secretary",
      organization: "MIST Literature and Culture Club, MIST, Bangladesh",
      period: "2021 - 2022",
      description: "Coordinated club activities, organised events, managed communications, and fostered a vibrant environment through the planning and hosting of workshops, cultural programs, and collaborative events with other clubs."
    },
    {
      position: "Administrative Lead",
      organization: "IEEE Computer Society Bangladesh Chapter Team SPARK, Bangladesh",
      period: "2020 - 2021",
      link: "https://site.ieee.org/bangladesh-cs/spark-committee/",
      description: "Served as the Administrative Lead for Team SPARK and had the opportunity to work with the IEEE Computer Society Bangladesh Chapter and gathered knowledge about managing the administrative operations of a department or organization."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-serif font-bold mb-2 text-cvblue">Experience</h1>
          <p className="text-lg text-gray-600 mb-8">
            Professional experience and leadership activities throughout my career.
          </p>
          
          <Tabs defaultValue="professional" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="professional">Professional Experience</TabsTrigger>
              <TabsTrigger value="leadership">Leadership Activities</TabsTrigger>
            </TabsList>
            
            <TabsContent value="professional" className="space-y-8">
              {professionalExperience.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl text-cvblue">{exp.position}</CardTitle>
                        <CardDescription className="text-lg">
                          {exp.website ? (
                            <a 
                              href={exp.website} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="hover:underline flex items-center gap-1"
                            >
                              {exp.organization} <ExternalLink size={14} />
                            </a>
                          ) : (
                            exp.organization
                          )}
                        </CardDescription>
                      </div>
                      <div className="md:text-right mt-2 md:mt-0">
                        <Badge variant="outline" className="text-gray-700">{exp.period}</Badge>
                        {exp.certificate && (
                          <div className="mt-2">
                            <a 
                              href={exp.certificate} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-cvblue hover:underline text-sm flex items-center gap-1 md:justify-end"
                            >
                              View Certificate <ExternalLink size={14} />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-medium mb-3">Key Responsibilities:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i} className="text-gray-700">{responsibility}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="leadership" className="space-y-8">
              {leadershipExperience.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl text-cvblue">{exp.position}</CardTitle>
                        <CardDescription className="text-lg">{exp.organization}</CardDescription>
                      </div>
                      <div className="md:text-right mt-2 md:mt-0">
                        <Badge variant="outline" className="text-gray-700">{exp.period}</Badge>
                        {(exp.certificate || exp.link) && (
                          <div className="mt-2">
                            {exp.certificate && (
                              <a 
                                href={exp.certificate} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-cvblue hover:underline text-sm flex items-center gap-1 md:justify-end"
                              >
                                View Certificate <ExternalLink size={14} />
                              </a>
                            )}
                            {exp.link && (
                              <a 
                                href={exp.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-cvblue hover:underline text-sm flex items-center gap-1 md:justify-end mt-1"
                              >
                                View Link <ExternalLink size={14} />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Experience;
