import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { publishedPapers, manuscriptsUnderReview } from '@/content/publications';
import { PublishedPaperCard, ManuscriptCard } from '@/components/PublicationCards';

const Publications = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-serif font-bold mb-2 text-cvblue">Publications</h1>
        <p className="text-lg text-gray-600 mb-8">Published papers and clearly identified manuscripts under review in biomedical engineering, clinical data science and health informatics.</p>
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-6">Published Papers</h2>
            <div className="space-y-5">{publishedPapers.map((paper) => <PublishedPaperCard key={paper.doi} paper={paper} />)}</div>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-6">Manuscripts Under Review</h2>
            <p className="text-gray-600 mb-5">Journal and conference names identify submission venues. The links open venue websites, not the unpublished manuscripts; submission does not indicate acceptance.</p>
            <div className="space-y-5">{manuscriptsUnderReview.map((paper) => <ManuscriptCard key={paper.title} paper={paper} />)}</div>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Publications;
