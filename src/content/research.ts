export type ResearchMedia = {
  file: string;
  alt: string;
  caption: string;
};

export type ResearchProject = {
  title: string;
  period: string;
  category: 'health-informatics' | 'signal-processing' | 'machine-learning';
  status: string;
  summary: string;
  contributions: string[];
  media: ResearchMedia[];
  link?: string;
};

export const researchImage = (file: string) => `${import.meta.env.BASE_URL}research/${file}`;

export const researchProjects: ResearchProject[] = [
  {
    title: 'AI-Assisted Prescription Auditing and Point-of-Prescribing CDSS',
    period: '2025–present',
    category: 'health-informatics',
    status: 'System integration in progress',
    link: 'https://iriic.uiu.ac.bd/ai-based-prescription-audit-system/',
    summary: 'I developed the technical proposal, architecture, methodology and budget for a broader prescription-audit project that received approximately USD 377,533 through the World Bank-funded HEAT initiative. I now lead the technical work under its clinical principal investigator.',
    contributions: [
      'Organized a consultative workshop with more than 40 healthcare professionals to refine the research protocol and define prescribing concerns.',
      'Designed a pipeline that reconstructs patient context, normalizes medicines, retrieves source-linked guidance and validates structured audit output.',
      'Separated optional large-language-model (LLM) query planning from evidence-grounded audit generation, with a deterministic retrieval fallback.',
      'Currently integrating the pipeline into a prescribing copilot intended to give reviewable feedback during entry and a whole-prescription review. This integration has not yet undergone clinical evaluation.'
    ],
    media: [
      {
        file: 'prescribing-copilot-demo.png',
        alt: 'Prototype prescription-writing interface with section-level review alerts beside clinical entries',
        caption: 'Prototype interface using fictional test data. Example alerts show the interaction design, not validated clinical performance.'
      },
      {
        file: 'audit-architecture.png',
        alt: 'Architecture diagram showing retrieval, evidence and audit stages',
        caption: 'Architecture figure from a conference manuscript under review.'
      }
    ]
  },
  {
    title: 'Knowledge-Driven Antibiotic Dosing CDSS',
    period: '2023–2025',
    category: 'health-informatics',
    status: 'Dataset published in Scientific Data',
    link: 'https://doi.org/10.1038/s41597-025-05761-8',
    summary: 'I designed the DOSAGE data protocol, manually curated nearly 4,000 records for 98 antibiotic generics and coordinated review with physicians and pharmacists. The clinician-reviewed knowledge base became my first-author Scientific Data publication.',
    contributions: [
      'Structured indication-specific and renal-adjusted dosing information for a knowledge-driven dose checker.',
      'Worked with CMED, our digital-health partner, to integrate dose checking into a prescription-writing platform and pilot it with clinicians.',
      'Used clinician feedback to refine how possible dosing concerns were presented.'
    ],
    media: [{
      file: 'dosage-website.png',
      alt: 'Blank DOSAGE web interface for a single medication check',
      caption: 'DOSAGE web interface shown with empty fields. No patient data are displayed.'
    }]
  },
  {
    title: 'AI-Based Prescription Audit Feasibility and Evidence-Grounded Methods',
    period: '2023–present',
    category: 'health-informatics',
    status: 'Research and implementation',
    summary: 'My audit research began with a funded feasibility proposal and a systematic review of 90 studies on automated prescription-error detection. The work identified the need to connect each concern to patient conditions and clinical evidence.',
    contributions: [
      'Developed the initial methodology under Dr. Khondaker A. Mamun’s supervision and published the research rationale in an IEEE conference paper.',
      'Implemented candidate generation, guideline retrieval, bounded audit generation and checks that reject unsupported findings.',
      'In a rule-label consistency analysis across four model deployments, exact concordance ranged from 88.9% to 95.1% against a physician-selected reference configuration. This is not a measure of clinical accuracy.'
    ],
    media: [{
      file: 'prescription-audit-code.svg',
      alt: 'Excerpt of implementation code constraining audit findings to supplied candidates and evidence',
      caption: 'Selected source-code excerpt from the audit-generation stage. It contains no credentials or patient information.'
    }]
  },
  {
    title: 'Portable ECG–SCG Acquisition and Signal Analysis',
    period: 'Undergraduate thesis, 2022–2023',
    category: 'signal-processing',
    status: 'First-author manuscript under review',
    summary: 'I built a portable system to acquire electrical and mechanical cardiac signals together, using ECG as a reference and a chest-mounted MEMS accelerometer for seismocardiography (SCG).',
    contributions: [
      'Designed synchronized microcontroller acquisition and an elastic chest belt to stabilize noninvasive sensing.',
      'Developed MATLAB methods for baseline correction, filtering, peak detection, cardiac timing and extraction of a respiratory waveform from the accelerometer signal.',
      'Collected paired resting recordings from ten healthy volunteers. The manuscript reports approximately 98% mean agreement between SCG and ECG heart-rate estimates under those controlled conditions.'
    ],
    media: [
      {
        file: 'ecg-scg-architecture.png',
        alt: 'ECG and SCG sensor architecture with raw and processed signal examples',
        caption: 'Sensor placement, acquisition hardware and signal-processing flow from the thesis manuscript.'
      },
      {
        file: 'ecg-scg-prototype.jpg',
        alt: 'Photograph of the portable ECG–SCG prototype and elastic sensor belt',
        caption: 'Portable acquisition prototype and chest-mounted sensor hardware.'
      }
    ]
  },
  {
    title: 'Data-Driven Machine Learning for Gestational Diabetes Prediction',
    period: 'Undergraduate project, 2022',
    category: 'machine-learning',
    status: 'Co-authored IEEE ICCIT 2023 paper',
    link: 'https://doi.org/10.1109/ICCIT60459.2023.10441112',
    summary: 'Rather than reporting only a classifier’s final score, our study compared how decisions at successive data-preparation stages affected gestational-diabetes prediction. I contributed to feature engineering and statistical normalization.',
    contributions: [
      'Examined intermediate data quality and feature relationships before model training.',
      'Compared preprocessing choices and their effect on the downstream classifier.'
    ],
    media: [{
      file: 'gestational-diabetes-data.png',
      alt: 'Correlation matrix of gestational-diabetes features in the undergraduate project report',
      caption: 'Feature-correlation analysis from the undergraduate project report.'
    }]
  }
];
