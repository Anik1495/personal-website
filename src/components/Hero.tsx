import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left: Profile Image */}
          <div className="md:w-1/4 mb-4 md:mb-0 text-center md:text-left"> {/* Increased margin-bottom */}
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="My Profile"
              className="w-full max-w-[300px] h-auto object-cover mx-auto md:mx-0 border-4 border-blue-300 rounded-lg"
            />
          </div>

          {/* Center: Name, Role, Description */}
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left space-y-3 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
              Ferdous Wahid Anik
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-cvblue">
              Biomedical Engineer & Health Informatics Researcher
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Specializing in Health Informatics, Digital Signal Processing, Computational Modeling, 
              and Machine Learning to develop innovative healthcare solutions.
            </p>
            <div className="flex space-x-4 pt-4 justify-center md:justify-start">
              <Button className="bg-cvblue hover:bg-blue-700 text-white">
                <Link to="/contact" className="flex items-center">
                  Contact Me <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              <Button variant="outline" className="border-cvblue text-cvblue hover:bg-cvblue hover:text-white">
                <Link to="/research" className="flex items-center">
                  View Research <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Research Interest */}
          <div className="md:w-1/4 flex justify-center animate-slide-in">
            <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-100 transform rotate-3 transition-all duration-300 hover:rotate-0">
              <div className="bg-cvblue text-white p-8 rounded-md">
                <h3 className="text-2xl font-serif mb-4">Research Interest</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Health Informatics
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Digital Signal Processing
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Computational Modeling
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Machine Learning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;