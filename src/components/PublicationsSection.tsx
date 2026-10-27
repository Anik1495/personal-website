import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { publishedPapers, manuscriptsUnderReview } from '@/content/publications';

const PublicationsSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="section-container">
        <h2 className="section-heading">Publications</h2>
        <div className="space-y-6 mt-6">
          {publishedPapers.map((paper, index) => (
            <React.Fragment key={paper.doi}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/12 flex justify-center">
                  <BookText size={24} className="text-cvblue mt-1" />
                </div>
                <div className="md:w-11/12">
                  <h3 className="text-lg font-medium">
                    <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="text-cvblue hover:underline">
                      {paper.title}
                    </a>
                  </h3>
                  <p className="text-gray-700 mt-1">{paper.authors}</p>
                  <p className="text-gray-600 text-sm mt-1">{paper.venue}, {paper.year}</p>
                </div>
              </div>
              {index < publishedPapers.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-10 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">Manuscripts Under Review</h3>
          <ul className="space-y-3 list-disc pl-5">
            {manuscriptsUnderReview.slice(0, 3).map((paper) => (
              <li key={paper.title} className="text-gray-700">
                <strong>{paper.title}</strong>
                <p className="text-gray-600 text-sm">{paper.status}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-cvblue text-cvblue hover:bg-cvblue hover:text-white">
            <Link to="/publications">
              View All Publications <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PublicationsSection;
