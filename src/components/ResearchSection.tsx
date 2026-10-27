import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const image = (name: string) => `${import.meta.env.BASE_URL}research/${name}`;

const ResearchSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="section-container">
        <h2 className="section-heading">Selected Research</h2>
        <p className="text-gray-700 max-w-4xl mt-4">
          My work has progressed from biomedical signal acquisition to structured medication knowledge and evidence-grounded prescription review. Across these projects, I design the data and methods, work with clinical collaborators, and test how the resulting tools fit a real workflow.
        </p>

        <article className="mt-8 grid lg:grid-cols-2 gap-8 rounded-2xl bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cvblue">Current research · System integration in progress</p>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mt-2">Evidence-grounded prescription auditing</h3>
            <p className="text-gray-700 mt-4">
              I prepared the technical proposal, architecture, methodology and budget for a World Bank-funded HEAT project awarded approximately USD 377,000. As Technical Lead, I organized a consultative workshop with more than 40 healthcare professionals to refine the audit protocol.
            </p>
            <p className="text-gray-700 mt-3">
              The pipeline reconstructs patient context, normalizes medicines, retrieves source-linked guidance and checks potential concerns. An optional large language model plans retrieval queries, while a separate evidence-grounded stage drafts reviewable audit findings. I am integrating this work into a prescribing copilot that can provide feedback as a prescription is written. Clinical evaluation of that integration remains ahead.
            </p>
            <Link to="/research" className="inline-flex items-center gap-2 text-cvblue font-medium hover:underline mt-5">
              Read about the research <ArrowRight size={16} />
            </Link>
          </div>
          <figure className="flex flex-col justify-center">
            <a href={image('audit-architecture.png')} target="_blank" rel="noopener noreferrer" aria-label="Open the prescription audit architecture figure">
              <img src={image('audit-architecture.png')} alt="Knowledge-constrained prescription audit architecture with distinct retrieval planning and evidence-grounded audit stages" loading="lazy" className="w-full rounded-lg border border-gray-200 bg-white" />
            </a>
            <figcaption className="text-sm text-gray-600 mt-3">
              Architecture from my conference manuscript under review. The current prescribing copilot is an ongoing integration.
            </figcaption>
          </figure>
        </article>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <article className="rounded-2xl bg-white shadow-sm overflow-hidden">
            <a href={image('dosage-data-model.png')} target="_blank" rel="noopener noreferrer" aria-label="Open the DOSAGE data model figure">
              <img src={image('dosage-data-model.png')} alt="DOSAGE data model showing disease-specific, standard, renal-adjusted and risk-related antibiotic dosing information" loading="lazy" className="w-full h-64 object-contain bg-white border-b border-gray-100 p-3" />
            </a>
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-cvblue">Published in Scientific Data</p>
              <h3 className="font-serif text-xl font-semibold mt-2">DOSAGE and antibiotic dose checking</h3>
              <p className="text-gray-700 mt-3">
                I designed the data protocol and manually curated nearly 4,000 records for 98 antibiotic generics, coordinating physician and pharmacist review. The first-author dataset publication supported a dose checker that I helped integrate into CMED's prescription-writing platform and pilot with clinicians.
              </p>
              <a href="https://doi.org/10.1038/s41597-025-05761-8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cvblue font-medium hover:underline mt-4">
                Read the publication <ExternalLink size={16} />
              </a>
            </div>
          </article>

          <article className="rounded-2xl bg-white shadow-sm overflow-hidden">
            <a href={image('ecg-scg-prototype.jpg')} target="_blank" rel="noopener noreferrer" aria-label="Open the ECG and SCG prototype photograph">
              <img src={image('ecg-scg-prototype.jpg')} alt="ECG electrodes, portable acquisition hardware and elastic belt for seismocardiography" loading="lazy" className="w-full h-64 object-contain bg-white border-b border-gray-100 p-3" />
            </a>
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-cvblue">Undergraduate thesis · Manuscript under review</p>
              <h3 className="font-serif text-xl font-semibold mt-2">Portable ECG–SCG acquisition</h3>
              <p className="text-gray-700 mt-3">
                I built synchronized ECG and chest-acceleration hardware, designed a belt to stabilize the sensor, and developed MATLAB filtering and feature-extraction methods. Paired resting recordings from ten healthy volunteers supported an initial feasibility evaluation of cardiac and respiratory measurements.
              </p>
              <Link to="/research" className="inline-flex items-center gap-2 text-cvblue font-medium hover:underline mt-4">
                Read about the thesis <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-cvblue text-cvblue hover:bg-cvblue hover:text-white">
            <Link to="/research">View All Research <ArrowRight className="ml-2" size={16} /></Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default ResearchSection;
