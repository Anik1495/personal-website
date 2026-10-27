
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Research = () => {
  const researchProjects = [
    {
      title: "Evidence-Grounded Prescription Auditing",
      period: "Sep 2025 - Present",
      link: "https://iriic.uiu.ac.bd/ai-based-prescription-audit-system/",
      category: "health-informatics",
      description: "I developed the technical plan for a broader prescription-audit system after piloting a focused antibiotic dose checker. The pipeline is under development and is being integrated into a point-of-prescribing copilot.",
      contributions: [
        "Prepared the proposal, architecture, research methodology and budget that helped secure approximately USD 377,000 through the World Bank-funded HEAT initiative.",
        "Organized a consultative workshop with more than 40 healthcare professionals to refine the research protocol and define prescribing concerns across six clinical domains.",
        "Built patient-context reconstruction, deterministic medicine normalization, candidate generation, source-linked medicine and guideline retrieval, and structured output checks.",
        "Separated optional language-model retrieval-query planning from evidence-grounded audit generation. A deterministic fallback supports retrieval when the planning stage is unavailable.",
        "Currently integrating the pipeline into a prescribing copilot designed to provide reviewable feedback during entry and to assess the completed prescription. Clinical evaluation of this integration remains ahead."
      ]
    },
    {
      title: "DOSAGE and Antibiotic Dose Checking",
      period: "Jul 2023 - Aug 2025",
      category: "health-informatics",
      description: "Development of a clinician-reviewed antibiotic dosing dataset and its use in prescription-writing support.",
      contributions: [
        "Designed the DOSAGE data protocol and manually curated nearly 4,000 records covering 98 antibiotic generics.",
        "Worked with physicians and pharmacists to resolve ambiguous recommendations and coordinate clinical review.",
        "Published the dataset as first author in Scientific Data.",
        "Worked with CMED to integrate dose checking into its prescription-writing platform and pilot the tool with clinicians."
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
      title: "Portable SCG-ECG Dual Signal Acquisition (Thesis)",
      period: "Mar, 2022 - Feb, 2023",
      category: "signal-processing",
      description: "Designed a synchronized ECG-SCG acquisition prototype and analysed paired recordings from healthy volunteers under resting conditions.",
      contributions: [
        "Hardware Integration: Designed and developed a dual-signal acquisition system that utilizes Microelectromechanical Systems (MEMS) interfaced with a versatile, user-friendly microcontroller.",
        "Signal Processing: Developed MATLAB workflows for baseline correction, filtering, peak detection, cardiac timing and extraction of a respiratory waveform from SCG.",
        "Interdisciplinary Approach and Collaboration: Designed a chest belt to stabilize the accelerometer during noninvasive data collection and prepared a first-author manuscript now under review."
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
            Research in physiological sensing, structured clinical knowledge and evidence-grounded decision support.
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
