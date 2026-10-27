import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { researchImage, researchProjects } from '@/content/research';

const ResearchSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="section-container">
        <h2 className="section-heading">Selected Research</h2>
        <p className="text-gray-700 max-w-4xl mt-4">
          My research spans physiological sensing, clinical data preparation, structured medication knowledge and evidence-grounded decision support. These five projects show how I move from a clinical or measurement problem to a method, an implementation and a careful evaluation.
        </p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 mt-8">
          {researchProjects.map((project) => (
            <article key={project.title} className="rounded-2xl bg-white shadow-sm overflow-hidden flex flex-col">
              <a href={researchImage(project.media[0].file)} target="_blank" rel="noopener noreferrer" aria-label={`Open figure for ${project.title}`}>
                <img src={researchImage(project.media[0].file)} alt={project.media[0].alt} loading="lazy" className="w-full h-56 object-contain bg-white border-b border-gray-100 p-3" />
              </a>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-cvblue">{project.status}</p>
                <h3 className="font-serif text-xl font-semibold mt-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-700 mt-3">{project.summary}</p>
                <p className="text-sm text-gray-500 mt-3">{project.media[0].caption}</p>
                <Link to="/research" className="inline-flex items-center gap-2 text-cvblue font-medium hover:underline mt-auto pt-5">
                  Read about the research <ArrowRight size={16} />
                </Link>
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cvblue text-sm hover:underline mt-2">Project or paper <ExternalLink size={14} /></a>}
              </div>
            </article>
          ))}
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
