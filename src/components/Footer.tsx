
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-gray-800">Ferdous Wahid Anik</h3>
            <p className="text-gray-600">
              Biomedical Engineer specializing in Health Informatics, Digital Signal Processing, 
              Computational Modeling, and Machine Learning.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-cvblue">Home</Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-600 hover:text-cvblue">Research</Link>
              </li>
              <li>
                <Link to="/publications" className="text-gray-600 hover:text-cvblue">Publications</Link>
              </li>
              <li>
                <Link to="/experience" className="text-gray-600 hover:text-cvblue">Experience</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-cvblue">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-cvblue">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-gray-800">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-2 text-cvblue" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Mail size={18} className="mr-2 text-cvblue" />
                <a href="mailto:ferdous.1495@gmail.com" className="hover:text-cvblue">ferdous.1495@gmail.com</a>
              </li>
              <li className="flex items-center text-gray-600">
                <Linkedin size={18} className="mr-2 text-cvblue" />
                <a href="https://www.linkedin.com/in/ferdous-wahid-26033/" target="_blank" rel="noopener noreferrer" className="hover:text-cvblue">LinkedIn</a>
              </li>
              <li className="flex items-center text-gray-600">
                <Github size={18} className="mr-2 text-cvblue" />
                <a href="#" className="hover:text-cvblue">Github</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Ferdous Wahid Anik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
