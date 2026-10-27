import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { publishedPapers, manuscriptsUnderReview } from '@/content/publications';
import { PublishedPaperCard, ManuscriptCard } from '@/components/PublicationCards';

const PublicationsSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="section-container">
        <h2 className="section-heading">Publications</h2>
        <p className="text-gray-700 max-w-4xl mt-4">Figures appear only with published work. Manuscripts under review are listed separately with their submission venues; each card links to the journal or conference website.</p>
        <div className="space-y-5 mt-7">
          {publishedPapers.map((paper) => <PublishedPaperCard key={paper.doi} paper={paper} />)}
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-medium mb-4">Manuscripts Under Review</h3>
          <div className="space-y-5">
            {manuscriptsUnderReview.slice(0, 3).map((paper) => <ManuscriptCard key={paper.title} paper={paper} />)}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-cvblue text-cvblue hover:bg-cvblue hover:text-white">
            <Link to="/publications">View All Publications <ArrowRight className="ml-2" size={16} /></Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PublicationsSection;
