
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ExperienceSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-container">
          <h2 className="section-heading">Professional Experience</h2>
          
          <div className="relative border-l-2 border-cvblue pl-8 ml-4 mt-10">
            {/* Current Position */}
            <div className="mb-12 relative">
              <div className="absolute -left-[46px] bg-white p-1 border-2 border-cvblue rounded-full">
                <div className="w-4 h-4 rounded-full bg-cvblue"></div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between mb-3">
                  <h3 className="text-xl font-medium text-cvblue">Research Engineer</h3>
                  <span className="text-gray-600">Jul, 2023 - Present</span>
                </div>
                <p className="text-gray-700 mb-3">
                  <a 
                    href="https://iriic.uiu.ac.bd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="italic text-cvblue hover:underline"
                  >
                    Institute of Research, Innovation, Incubation & Commercialization (IRIIC)
                  </a>
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Lead the design and development of AI models for healthcare innovation.</li>
                  <li>Apply machine learning and clinical decision support system for automation in traditional healthcare processes.</li>
                  <li>Proficient in proposal writing, presentation delivery, and managing ethical approval procedures for successful grant submissions.</li>
                  <li>Handle requisitions and fund management for multiple expenses related to projects.</li>
                  <li>Coordinate efforts to convert ideas from research to commercialization.</li>
                </ul>
              </div>
            </div>
            
            {/* Past Position */}
            <div className="relative">
              <div className="absolute -left-[46px] bg-white p-1 border-2 border-cvblue rounded-full">
                <div className="w-4 h-4 rounded-full bg-cvblue"></div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between mb-3">
                  <h3 className="text-xl font-medium text-cvblue">Intern</h3>
                  <span className="text-gray-600">Feb, 2022 - March, 2022</span>
                </div>
                <p className="text-gray-700 mb-3">
                  JMI Hospital Requisite Manufacturing Ltd. (JHRML)
                  <a 
                    href="https://drive.google.com/file/d/1vRy2a_3H2s1xlOh4gbrz4SHnzPQiWiVe/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 text-cvblue hover:underline"
                  >
                    [Certificate]
                  </a>
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Developed a strong appreciation for the importance of precision and attention to detail in medical device manufacturing.</li>
                  <li>Gained a strong understanding of the importance of quality control and safety procedures in pathological product manufacturing.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-cvblue text-cvblue hover:bg-cvblue hover:text-white">
              <Link to="/experience">
                View Full Experience <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
