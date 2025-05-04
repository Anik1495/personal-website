
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Gestational Diabetes Prediction in Pregnancy: A Machine Learning and Data Preprocessing Approach",
      authors: "Tanvir Hasan Riyed, Tasnia Nabi, Aishwariya Dutta, Md. Kamrul Hasan, Ferdous Wahid Anik, & Akid Ornob",
      year: "2023",
      venue: "26th International Conference on Computer and Information Technology (ICCIT), IEEE",
      url: "https://ieeexplore.ieee.org/abstract/document/10441112",
      doi: "10.1109/ICCIT60459.2023.10441112"
    },
    {
      title: "Feasibility of Automated Prescription Audit Systems for Better Patient Care",
      authors: "Fardeen Ahmed, Ferdous Wahid Anik, Farhana Sarker, Ahmedul Kabir, & Khondaker A. Mamun",
      year: "2023",
      venue: "International Health Economics Conference 2023: Progress Towards Universal Health Coverage",
      url: "https://www.researchgate.net/publication/385815141_Feasibility_of_Automated_Prescription_Audit_Systems_for_Better_Patient_Care",
      doi: "10.13140/RG.2.2.24756.87683"
    },
    {
      title: "The Importance of Prescription Audits: Navigating Complexities and AI-Driven Advancement",
      authors: "Ferdous Wahid Anik, Fahmid Al Rifat, Marzia Zaman, Farhana Sarkar, & Khondaker A. Mamun",
      year: "2024",
      venue: "IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON), IEEE",
      url: "https://ieeexplore.ieee.org/abstract/document/10962770",
      doi: "10.1109/BECITHCON64160.2024.10962770"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-container">
          <h2 className="section-heading">Publications</h2>
          
          <div className="space-y-6 mt-6">
            {publications.map((pub, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/12 flex justify-center">
                    <BookText size={24} className="text-cvblue mt-1" />
                  </div>
                  <div className="md:w-11/12">
                    <h3 className="text-lg font-medium">
                      <a 
                        href={pub.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-cvblue hover:underline"
                      >
                        {pub.title}
                      </a>
                    </h3>
                    <p className="text-gray-700 mt-1">{pub.authors}</p>
                    <p className="text-gray-600 text-sm mt-1">{pub.venue}, {pub.year}</p>
                    <p className="text-gray-500 text-sm mt-1">DOI: {pub.doi}</p>
                  </div>
                </div>
                {index < publications.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-cvblue text-cvblue hover:bg-cvblue hover:text-white">
              <Link to="/publications">
                View All Publications <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>

          <div className="mt-10 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Manuscripts Under Review</h3>
            <ul className="space-y-3 list-disc pl-5">
              <li className="text-gray-700">
                <strong>Evaluation of Automated Prescription Audit Systems and the Utilization of Artificial Intelligence - A Systematic Review</strong>
                <p className="text-gray-600 text-sm">Journal of Drug Safety, Springer Nature. Manuscript Number: DRSA-D-25-00365</p>
              </li>
              <li className="text-gray-700">
                <strong>DOSAGE: Dataset for Optimized Safe Antibiotic Guidelines and Estimates</strong>
                <p className="text-gray-600 text-sm">Nature Scientific Data, Springer Nature. Manuscript Number: SDATA-25-01798</p>
              </li>
              <li className="text-gray-700">
                <strong>Evaluation of a Knowledge-Driven System for Detecting Antibiotic Dosage Errors in Prescriptions</strong>
                <p className="text-gray-600 text-sm">Heliyon, Elsevier. Manuscript Number: HELIYON-D-25-06506</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
