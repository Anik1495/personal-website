
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Research = () => {
  const researchProjects = [
    {
      title: "AI-Based Prescription Audit System",
      period: "Jul, 2023 - Present",
      link: "https://iriic.uiu.ac.bd/ai-based-prescription-audit-system/",
      category: "health-informatics",
      description: "Creating a robust protocol for auditing prescriptions and developing a hybrid model aimed at identifying and correcting common prescription errors.",
      contributions: [
        "Formulation of Audit Protocol: Created a robust protocol for auditing prescriptions, starting from input data verification to anomaly detection.",
        "Development of a Comprehensive Knowledge Base: To develop a personalized medication guideline in structured format, meticulously constructed a knowledge base by gathering medication information of drugs from various reputable clinical guidelines and pharmaceutical websites.",
        "Model Development: Developed hybrid model (CDSS with ML) aimed at identifying and correcting common prescription errors.",
        "Validation Using Real-World Clinical Data: Associated the model and knowledge base with real-world clinical data patterns by conducting an exploratory analysis of the dataset containing real prescriptions.",
        "Interdisciplinary Collaboration and Ethics: Collaborated with healthcare experts for clinical validation of knowledge base, model validation and secured ethical approvals for data usage, ensuring compliance with clinical research protocols."
      ]
    },
    {
      title: "Data-Driven Prescription Optimization for Diabetes Treatment",
      period: "Dec, 2023 – Jun, 2024",
      category: "health-informatics",
      description: "Defining protocols for creating a knowledge base for diabetes medication and structuring a model for medication correction.",
      contributions: [
        "Protocol Development: Defined protocols for creating a comprehensive knowledge base dataset for diabetes medication.",
        "Design Model Structure: Structured the model for the medication correction tool, enhancing the project's framework by integrating data-driven design principles.",
        "Dataset Creation: Organized clinical guidelines for diabetes medication into a structured format of dataset according to a defined protocol, aiding in the creation of a comprehensive knowledge base dataset."
      ]
    },
    {
      title: "Signal Acquisition and Preprocessing for Further Research on Detecting CVD (Thesis)",
      period: "Mar, 2022 - Feb, 2023",
      category: "signal-processing",
      description: "Designing a dual-signal acquisition system using MEMS interfaced with a microcontroller for cardiovascular disease detection.",
      contributions: [
        "Hardware Integration: Designed and developed a dual-signal acquisition system that utilizes Microelectromechanical Systems (MEMS) interfaced with a versatile, user-friendly microcontroller.",
        "Signal Processing: Utilized MATLAB for preprocessing the acquired signals, applying noise reduction techniques such as filtering and baseline correction to improve signal quality.",
        "Interdisciplinary Approach and Collaboration: Integrated knowledge from physiology, electronics, and digital signal processing to design and conduct the experiments."
      ]
    },
    {
      title: "Early GDM Prediction using ML Models (Final Year Project)",
      period: "Jun, 2022 – Dec, 2022",
      category: "machine-learning",
      description: "Handling data preprocessing and feature engineering to improve model performance for predicting gestational diabetes mellitus.",
      contributions: [
        "Data Collection and Preprocessing: Handled missing values and outliers through data cleaning techniques, ensuring a high-quality dataset for model training.",
        "Feature Engineering and Selection: Explored data to identify relevant features, applied statistical tests to identify GDM predictors, then scaled and normalised features to improve model performance and provide consistent input data for machine learning algorithms."
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-serif font-bold mb-2 text-cvblue">Research Experience</h1>
          <p className="text-lg text-gray-600 mb-8">
            Exploring the intersection of healthcare, technology, and data science to create innovative solutions.
          </p>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All Research</TabsTrigger>
              <TabsTrigger value="health-informatics">Health Informatics</TabsTrigger>
              <TabsTrigger value="signal-processing">Signal Processing</TabsTrigger>
              <TabsTrigger value="machine-learning">Machine Learning</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-8">
              {researchProjects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between">
                      <div>
                        <CardTitle className="text-2xl text-cvblue">
                          {project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                              {project.title}
                            </a>
                          ) : (
                            project.title
                          )}
                        </CardTitle>
                        <CardDescription className="text-lg">{project.period}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    
                    <h3 className="text-lg font-medium mb-2">Key Contributions:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {project.contributions.map((contribution, i) => (
                        <li key={i} className="text-gray-700">{contribution}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="health-informatics" className="space-y-8">
              {researchProjects
                .filter(project => project.category === 'health-informatics')
                .map((project, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <CardTitle className="text-2xl text-cvblue">
                            {project.link ? (
                              <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {project.title}
                              </a>
                            ) : (
                              project.title
                            )}
                          </CardTitle>
                          <CardDescription className="text-lg">{project.period}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      
                      <h3 className="text-lg font-medium mb-2">Key Contributions:</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {project.contributions.map((contribution, i) => (
                          <li key={i} className="text-gray-700">{contribution}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
            
            <TabsContent value="signal-processing" className="space-y-8">
              {researchProjects
                .filter(project => project.category === 'signal-processing')
                .map((project, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <CardTitle className="text-2xl text-cvblue">
                            {project.link ? (
                              <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {project.title}
                              </a>
                            ) : (
                              project.title
                            )}
                          </CardTitle>
                          <CardDescription className="text-lg">{project.period}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      
                      <h3 className="text-lg font-medium mb-2">Key Contributions:</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {project.contributions.map((contribution, i) => (
                          <li key={i} className="text-gray-700">{contribution}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
            
            <TabsContent value="machine-learning" className="space-y-8">
              {researchProjects
                .filter(project => project.category === 'machine-learning')
                .map((project, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <CardTitle className="text-2xl text-cvblue">
                            {project.link ? (
                              <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {project.title}
                              </a>
                            ) : (
                              project.title
                            )}
                          </CardTitle>
                          <CardDescription className="text-lg">{project.period}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      
                      <h3 className="text-lg font-medium mb-2">Key Contributions:</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {project.contributions.map((contribution, i) => (
                          <li key={i} className="text-gray-700">{contribution}</li>
                        ))}
                      </ul>
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

export default Research;
