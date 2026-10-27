import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink } from 'lucide-react';
import { researchImage, researchProjects, type ResearchProject } from '@/content/research';

const ProjectCard = ({ project }: { project: ResearchProject }) => (
  <Card>
    <CardHeader>
      <p className="text-sm font-semibold uppercase tracking-wide text-cvblue">{project.status}</p>
      <CardTitle className="text-2xl text-cvblue mt-2">{project.title}</CardTitle>
      <CardDescription className="text-base">{project.period}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className={`grid gap-4 mb-6 ${project.media.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
        {project.media.map((media) => (
          <figure key={media.file} className="rounded-xl border border-gray-200 overflow-hidden bg-white">
            <a href={researchImage(media.file)} target="_blank" rel="noopener noreferrer" aria-label={`Open ${media.alt}`}>
              <img src={researchImage(media.file)} alt={media.alt} loading="lazy" className="w-full h-64 md:h-80 object-contain p-3" />
            </a>
            <figcaption className="text-sm text-gray-600 px-4 py-3 bg-gray-50">{media.caption}</figcaption>
          </figure>
        ))}
      </div>
      <p className="text-gray-700 mb-4">{project.summary}</p>
      <h3 className="text-lg font-medium mb-2">My contributions</h3>
      <ul className="list-disc pl-6 space-y-2">
        {project.contributions.map((contribution) => <li key={contribution} className="text-gray-700">{contribution}</li>)}
      </ul>
      {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cvblue font-medium hover:underline mt-5">Open project or paper <ExternalLink size={16} /></a>}
    </CardContent>
  </Card>
);

const Research = () => {
  const tabs = [
    { value: 'all', label: 'All Research' },
    { value: 'health-informatics', label: 'Health Informatics' },
    { value: 'signal-processing', label: 'Signal Processing' },
    { value: 'machine-learning', label: 'Machine Learning' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-serif font-bold mb-2 text-cvblue">Research Experience</h1>
          <p className="text-lg text-gray-600 mb-8">Research in physiological sensing, clinical data science and evidence-grounded decision support.</p>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 flex flex-wrap h-auto gap-1">
              {tabs.map((tab) => <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>)}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="space-y-8">
                {researchProjects.filter((project) => tab.value === 'all' || project.category === tab.value).map((project) => <ProjectCard key={project.title} project={project} />)}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
