import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { BookText, ExternalLink } from 'lucide-react';
import { publishedPapers, manuscriptsUnderReview } from '@/content/publications';

const Publications = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-serif font-bold mb-2 text-cvblue">Publications</h1>
        <p className="text-lg text-gray-600 mb-8">
          Peer-reviewed work and manuscripts in biomedical engineering, clinical data science, and health informatics.
        </p>
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-6">Published Papers</h2>
            <div className="space-y-6">
              {publishedPapers.map((paper) => (
                <Card key={paper.doi}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <BookText size={24} className="text-cvblue mt-1 shrink-0" />
                      <div>
                        <CardTitle className="text-xl text-cvblue">
                          <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-start gap-1">
                            {paper.title} <ExternalLink size={16} className="shrink-0 mt-1" />
                          </a>
                        </CardTitle>
                        <p className="text-gray-700 mt-2">{paper.authors}</p>
                        <p className="text-gray-600 text-sm mt-1">{paper.venue}, {paper.year}</p>
                        <p className="text-gray-500 text-sm mt-1">DOI: {paper.doi}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-6">Manuscripts Under Review</h2>
            <div className="space-y-6">
              {manuscriptsUnderReview.map((paper) => (
                <Card key={paper.title}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <BookText size={24} className="text-cvblue mt-1 shrink-0" />
                      <div>
                        <CardTitle className="text-xl text-cvblue">{paper.title}</CardTitle>
                        <p className="text-gray-700 mt-2">{paper.authors}</p>
                        <p className="text-gray-600 text-sm mt-1">{paper.status}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Publications;
