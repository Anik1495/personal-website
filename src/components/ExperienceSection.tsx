import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const positions = [
  {
    title: 'Research Associate and Technical Lead',
    period: 'Sep 2025 – Present',
    organization: 'HEAT Project, Department of Pharmacy and IRIIC, United International University',
    details: [
      'Prepared the technical proposal, system architecture, methodology, and budget for a funded prescription-audit project.',
      'Lead development of evidence-grounded prescription review and a prescribing copilot with clinical and engineering collaborators.',
      'Organized a consultative workshop to refine clinical requirements and the research protocol.'
    ]
  },
  {
    title: 'Research Engineer',
    period: 'Jul 2023 – Aug 2025',
    organization: 'AIMS Lab, IRIIC, United International University',
    details: [
      'Designed and curated DOSAGE, a clinician-reviewed antibiotic dosing dataset published in Scientific Data.',
      'Worked with CMED to integrate dose checking into a prescription-writing platform and pilot it with clinicians.',
      'Mentored undergraduate researchers and interns in data engineering and research practice.'
    ]
  }
];

const ExperienceSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="section-container">
        <h2 className="section-heading">Professional Experience</h2>
        <div className="relative border-l-2 border-cvblue pl-8 ml-4 mt-10">
          {positions.map((position) => (
            <div className="mb-8 relative" key={position.title}>
              <div className="absolute -left-[46px] bg-white p-1 border-2 border-cvblue rounded-full">
                <div className="w-4 h-4 rounded-full bg-cvblue"></div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between mb-3">
                  <h3 className="text-xl font-medium text-cvblue">{position.title}</h3>
                  <span className="text-gray-600">{position.period}</span>
                </div>
                <p className="text-gray-700 mb-3">{position.organization}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {position.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-cvblue text-cvblue hover:bg-cvblue hover:text-white">
            <Link to="/experience">View Full Experience <ArrowRight className="ml-2" size={16} /></Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
