import React from 'react';
import { ExternalLink } from 'lucide-react';
import { publishedPapers, manuscriptsUnderReview } from '@/content/publications';
import { researchImage } from '@/content/research';

type PublishedPaper = (typeof publishedPapers)[number];
type Manuscript = (typeof manuscriptsUnderReview)[number];

export const PublishedPaperCard = ({ paper }: { paper: PublishedPaper }) => (
  <article className="grid md:grid-cols-[13rem_1fr] gap-5 rounded-xl border border-gray-200 bg-white overflow-hidden">
    <figure className="bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col">
      <a href={researchImage(paper.figure)} target="_blank" rel="noopener noreferrer" aria-label={`Open figure for ${paper.title}`}>
        <img src={researchImage(paper.figure)} alt={paper.figureAlt} loading="lazy" className="w-full h-44 object-contain p-3" />
      </a>
      <figcaption className="px-3 pb-3 text-xs text-gray-600">{paper.figureCaption}</figcaption>
    </figure>
    <div className="p-5 md:pl-0">
      <h3 className="text-lg font-semibold text-cvblue">
        <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-start gap-1">{paper.title}<ExternalLink size={15} className="shrink-0 mt-1" /></a>
      </h3>
      <p className="text-gray-700 mt-2">{paper.authors}</p>
      <p className="text-gray-600 text-sm mt-1">{paper.venue}, {paper.year}</p>
      <p className="text-gray-500 text-sm mt-1">DOI: {paper.doi}</p>
    </div>
  </article>
);

export const ManuscriptCard = ({ paper }: { paper: Manuscript }) => (
  <article className="rounded-xl border border-gray-200 bg-white overflow-hidden">
    <a
      href={paper.venueUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open the ${paper.venue} website. ${paper.title} is a manuscript under review, not a published paper.`}
      className="grid md:grid-cols-[13rem_1fr] hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cvblue"
    >
      <div className="bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 min-h-32 flex flex-col justify-center items-center p-4 text-center">
        <span className="text-xs uppercase tracking-widest text-gray-500">{paper.venueKind}</span>
        <span className="font-serif font-semibold text-lg text-cvblue mt-2 leading-tight">{paper.venue}</span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-cvblue inline-flex items-start gap-1">{paper.title}<ExternalLink size={15} className="shrink-0 mt-1" /></h3>
        <p className="text-gray-700 mt-2">{paper.authors}</p>
        <p className="text-sm text-gray-600 mt-1">{paper.status} · Submitted to {paper.venue}</p>
        <p className="text-xs text-gray-500 mt-2">Opens the {paper.venueKind.toLowerCase()} website, not the unpublished manuscript.</p>
      </div>
    </a>
  </article>
);
