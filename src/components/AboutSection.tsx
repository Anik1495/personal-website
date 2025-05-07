import React from 'react';
import { 
  Book, 
  Calendar, 
  Code, 
  File 
} from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-container">
          <h2 className="section-heading">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-6">
            {/* Left column: profile + bio */}
            <div className="space-y-4">
              {/* 👇 Profile image and greeting */}
              <div className="text-center">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="My Profile"
                  className="w-40 h-40 object-cover mx-auto border-4 border-gray-300 rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-2">Hi, I'm Anik</h3>
              </div>

              {/* 👇 Bio */}
              <p className="text-gray-700">
                I am a biomedical engineer with expertise in Health Informatics, Digital Signal Processing, 
                Computational Modeling, and Machine Learning. Currently working as a Research Engineer 
                at the Institute of Research, Innovation, Incubation & Commercialization (IRIIC), 
                I focus on developing AI models and automated solutions for healthcare innovation.
              </p>

              <p className="text-gray-700">
                My research interests span across various domains of biomedical engineering and health informatics,
                wi a particular focus on creating practical solutions that can improve healthcare outcomes
                and patient care through technological innovation.
              </p>

              <p className="text-gray-700">
                Through my work, I aim to bridge the gap between technological advancements and 
                healthcare needs, developing solutions that are both innovative and practical for real-world implementation.
              </p>
            </div>

            {/* Right column: Academic profile */}
            <div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="font-serif text-xl font-medium mb-4 text-gray-800">Academic Profile</h3>

                <div className="space-y-4">
                  <div className="flex">
                    <Book className="mr-3 text-cvblue shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">B.Sc. in Biomedical Engineering</h4>
                      <p className="text-sm text-gray-600">Military Institute of Science and Technology (MIST), Dhaka, Bangladesh</p>
                      <p className="text-sm text-gray-600">2019 - 2023 | CGPA: 3.30 out of 4.00</p>
                    </div>
                  </div>

                  <div className="flex">
                    <File className="mr-3 text-cvblue shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Thesis</h4>
                      <p className="text-sm text-gray-600">Development of a Dual Signal Acquisition of Seismocardiography (SCG) and Electrocardiogram (ECG).</p>
                    </div>
                  </div>

                  <div className="flex">
                    <Code className="mr-3 text-cvblue shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Final Year Project</h4>
                      <p className="text-sm text-gray-600">Gestational Diabetes Mellitus in Women prediction using Different Machine Learning Classifiers.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <Calendar className="mr-3 text-cvblue shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Significant Courses</h4>
                      <p className="text-sm text-gray-600">Biomedical Instrumentation and Measurements, Biomechanics, Digital Signal Processing, Bioinformatics, Medical Imaging, Probability and Statistics.</p>
                    </div>
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
