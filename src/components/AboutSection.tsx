import React from 'react';
import { Book, Calendar, Code, File } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-container">
          <h2 className="section-heading">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* Left column: profile + bio */}
            <div className="space-y-5">
              <div className="space-y-4">
                <p className="text-gray-700">
                  I am a biomedical engineer with expertise in Health Informatics, Digital Signal Processing, 
                  Computational Modeling, and Machine Learning. Currently working as a Research Engineer 
                  at the Institute of Research, Innovation, Incubation & Commercialization (IRIIC), 
                  I focus on developing AI models and automated solutions for healthcare innovation.
                </p>
                <p className="text-gray-700">
                  My research interests span across various domains of biomedical engineering and health informatics,
                  with a particular focus on creating practical solutions that can improve healthcare outcomes
                  and patient care through technological innovation.
                </p>
                <p className="text-gray-700">
                  Through my work, I aim to bridge the gap between technological advancements and 
                  healthcare needs, developing solutions that are both innovative and practical for real-world implementation.
                </p>
              </div>

              {/* CV Section */}
              <div className="p-5 border-l-4 border-blue-600 bg-blue-50 rounded-md shadow-sm">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Curriculum Vitae</h3>
                <p className="text-gray-700 mb-3">
                  For a detailed overview of my academic background, technical skills, and project experience, 
                  you can view or download my full CV below.
                </p>
                <a
                  href={"${import.meta.env.BASE_URL}Ferdous_Wahid_Anik_CV.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-md transition shadow"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  View Full CV
                </a>
              </div>
            </div>

            {/* Right column: Academic profile */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="font-serif text-xl font-medium text-gray-800 mb-4">Academic Profile</h3>
              <div className="space-y-5">
                <div className="flex">
                  <Book className="mr-3 text-cvblue shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-medium text-base">B.Sc. in Biomedical Engineering</h4>
                    <p className="text-sm text-gray-600">Military Institute of Science and Technology (MIST), Dhaka, Bangladesh</p>
                    <p className="text-sm text-gray-600">2019 - 2023 | CGPA: 3.30 out of 4.00</p>
                  </div>
                </div>

                <div className="flex">
                  <File className="mr-3 text-cvblue shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-medium text-base">Thesis</h4>
                    <p className="text-sm text-gray-600">Dual Signal Acquisition of Seismocardiography (SCG) and Electrocardiogram (ECG).</p>
                  </div>
                </div>

                <div className="flex">
                  <Code className="mr-3 text-cvblue shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-medium text-base">Final Year Project</h4>
                    <p className="text-sm text-gray-600">Prediction of Gestational Diabetes Mellitus using ML classifiers.</p>
                  </div>
                </div>

                <div className="flex">
                  <Calendar className="mr-3 text-cvblue shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-medium text-base">Significant Courses</h4>
                    <p className="text-sm text-gray-600">
                      Biomedical Instrumentation, Digital Signal Processing, Bioinformatics, Medical Imaging, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
