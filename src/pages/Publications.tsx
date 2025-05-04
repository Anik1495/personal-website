
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link, ExternalLink, ArrowRight, BookText } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Gestational Diabetes Prediction in Pregnancy: A Machine Learning and Data Preprocessing Approach",
      authors: "Tanvir Hasan Riyed, Tasnia Nabi, Aishwariya Dutta, Md. Kamrul Hasan, Ferdous Wahid Anik, & Akid Ornob",
      year: "2023",
      venue: "26th International Conference on Computer and Information Technology (ICCIT), IEEE",
      url: "https://ieeexplore.ieee.org/abstract/document/10441112",
      doi: "10.1109/ICCIT60459.2023.10441112",
      abstract: "Gestational Diabetes Mellitus (GDM) is a common pregnancy complication that can lead to adverse outcomes for both mother and child. This study utilized machine learning algorithms to predict GDM early in pregnancy, employing data preprocessing techniques to enhance model performance. The research demonstrates the effectiveness of these approaches for early intervention and improved maternal health outcomes."
    },
    {
      title: "Feasibility of Automated Prescription Audit Systems for Better Patient Care",
      authors: "Fardeen Ahmed, Ferdous Wahid Anik, Farhana Sarker, Ahmedul Kabir, & Khondaker A. Mamun",
      year: "2023",
      venue: "International Health Economics Conference 2023: Progress Towards Universal Health Coverage",
      url: "https://www.researchgate.net/publication/385815141_Feasibility_of_Automated_Prescription_Audit_Systems_for_Better_Patient_Care",
      doi: "10.13140/RG.2.2.24756.87683",
      abstract: "This research explores the feasibility of implementing automated prescription audit systems to enhance patient care and medication safety. By analyzing the potential benefits, challenges, and economic implications, the study provides insights into how these systems can be effectively integrated into healthcare workflows while maintaining cost-effectiveness."
    },
    {
      title: "The Importance of Prescription Audits: Navigating Complexities and AI-Driven Advancement",
      authors: "Ferdous Wahid Anik, Fahmid Al Rifat, Marzia Zaman, Farhana Sarkar, & Khondaker A. Mamun",
      year: "2024",
      venue: "IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON), IEEE",
      url: "https://ieeexplore.ieee.org/abstract/document/10962770",
      doi: "10.1109/BECITHCON64160.2024.10962770",
      abstract: "This paper emphasizes the critical role of prescription audits in healthcare and explores how artificial intelligence can overcome the complexities involved in the audit process. It discusses the challenges in traditional audit methods and presents innovative AI-based solutions to enhance accuracy, efficiency, and patient safety in medication management."
    }
  ];

  const underReview = [
    {
      title: "Evaluation of Automated Prescription Audit Systems and the Utilization of Artificial Intelligence - A Systematic Review",
      authors: "Ferdous Wahid Anik, Fardeen Ahmed, Fahmid Al Rifat, Marzia Zaman, Farhana Sarkar, & Khondaker A. Mamun",
      journal: "Journal of Drug Safety, Springer Nature",
      manuscript: "DRSA-D-25-00365",
      abstract: "This systematic review evaluates existing automated prescription audit systems and examines the current and potential applications of artificial intelligence in enhancing these systems. By analyzing methodologies, performance metrics, and implementation challenges, the study provides comprehensive insights for healthcare stakeholders seeking to adopt or improve automated audit processes."
    },
    {
      title: "DOSAGE: Dataset for Optimized Safe Antibiotic Guidelines and Estimates",
      authors: "Ferdous Wahid Anik, Marzia Zaman, Tahmina Foyez, & Khondaker A. Mamun",
      journal: "Nature Scientific Data, Springer Nature",
      manuscript: "SDATA-25-01798",
      abstract: "This data descriptor paper introduces DOSAGE, a comprehensive dataset designed to support the development and validation of antibiotic prescribing guidelines and dosing models. The dataset integrates evidence-based recommendations with clinical parameters to enable more accurate and personalized antibiotic dosing strategies."
    },
    {
      title: "Evaluation of a Knowledge-Driven System for Detecting Antibiotic Dosage Errors in Prescriptions",
      authors: "Ferdous Wahid Anik, Fahmid Al Rifat, Marzia Zaman, Farhana Sarkar, & Khondaker A. Mamun",
      journal: "Heliyon, Elsevier",
      manuscript: "HELIYON-D-25-06506",
      abstract: "This research evaluates the performance of a knowledge-driven clinical decision support system designed to identify and flag antibiotic dosage errors in prescriptions. The study assesses the system's accuracy, sensitivity, and specificity across various clinical scenarios and discusses its potential to improve patient safety and antibiotic stewardship."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-serif font-bold mb-2 text-cvblue">Publications</h1>
          <p className="text-lg text-gray-600 mb-8">
            Research publications in health informatics, biomedical engineering, and machine learning.
          </p>
          
          <div className="space-y-10">
            {/* Published Papers */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Published Papers</h2>
              
              <div className="space-y-8">
                {publications.map((pub, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <BookText size={24} className="text-cvblue mt-1 shrink-0" />
                        <div>
                          <CardTitle className="text-xl text-cvblue">
                            <a 
                              href={pub.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="hover:underline flex items-start gap-1"
                            >
                              {pub.title}
                              <ExternalLink size={16} className="shrink-0 mt-1" />
                            </a>
                          </CardTitle>
                          <CardDescription className="text-base mt-1">{pub.authors}</CardDescription>
                          <p className="text-gray-600 text-sm mt-1">{pub.venue}, {pub.year}</p>
                          <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                            <Link size={14} /> DOI: <a 
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-cvblue hover:underline"
                            >
                              {pub.doi}
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h3 className="font-medium mb-2">Abstract</h3>
                      <p className="text-gray-700">{pub.abstract}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Under Review Papers */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Under Review</h2>
              
              <div className="space-y-8">
                {underReview.map((pub, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <BookText size={24} className="text-cvblue mt-1 shrink-0" />
                        <div>
                          <CardTitle className="text-xl text-cvblue">{pub.title}</CardTitle>
                          <CardDescription className="text-base mt-1">{pub.authors}</CardDescription>
                          <p className="text-gray-600 text-sm mt-1">{pub.journal}</p>
                          <p className="text-gray-500 text-sm mt-1">Manuscript Number: {pub.manuscript}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h3 className="font-medium mb-2">Abstract</h3>
                      <p className="text-gray-700">{pub.abstract}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Publications;
