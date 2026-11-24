// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: 'Israt Tabassum',
  role: 'PhD Candidate in Computer Science',
  // Not shown on the page; used only for the page <title> and search/social description.
  tagline:
    'Deep learning for multi-class classification of image, text and multi-modal data.',
  about: [
    'I am a detail-oriented and analytical computer science professional with a strong passion for working with data and developing intelligent, data-driven solutions. I have experience across data analysis, data science, Python development, and AI engineering, with a particular interest in machine learning, deep learning, and transformer-based models. I enjoy exploring complex datasets, identifying meaningful patterns, building predictive models, and translating data into practical insights. My background combines academic research and hands-on industry experience, enabling me to approach real-world challenges with both analytical thinking and technical expertise.',
  ],
  links: {
    email: 'israt.tabassum1997@gmail.com',
    github: 'https://github.com/israt-tabassum',
  },
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year?: number;
  url: string;
  summary: string;
  tags: string[];
};

export const publications: Publication[] = [
  {
    title:
      'Transformer-Based Multi-Class Classification of Bangladeshi Rice Varieties Using Image Data',
    authors: 'I. Tabassum, V. Nunavath',
    venue: 'Applied Sciences (MDPI)',
    year: 2026,
    url: 'https://doi.org/10.3390/app16031279',
    summary:
      'Applies transformer-based vision models to classify Bangladeshi rice varieties from image data, supporting automated quality control and variety identification in agriculture.',
    tags: ['Vision Transformers', 'Agriculture', 'Image Classification'],
  },
  {
    title: 'A Deep Learning Approach for Multi-Class Classification of Air Quality from Image Data',
    authors: 'I. Tabassum, G. M. A. Kabir, I. Tasnuva, S. Sultana',
    venue: 'Computer Science and Engineering Research',
    year: 2025,
    url: 'https://doi.org/10.69517/cser.2025.02.01.0003',
    summary:
      'A framework combining CNN and ResNet-50, transformer architectures (ViT, Swin Transformer) and classical classifiers (SVM, Random Forest) to classify air quality from images for environmental monitoring.',
    tags: ['CNN', 'Swin Transformer', 'Environmental Monitoring'],
  },
  {
    title:
      'A Hybrid Deep Learning Approach for Multi-Class Cyberbullying Classification Using Multi-Modal Social Media Data',
    authors: 'I. Tabassum, V. Nunavath',
    venue: 'Applied Sciences (MDPI)',
    year: 2024,
    url: 'https://doi.org/10.3390/app142412007',
    summary:
      'Combines RoBERTa for text and Vision Transformer for images in a hybrid model to identify and classify cyberbullying across multiple classes in multi-modal social media posts.',
    tags: ['RoBERTa', 'ViT', 'Multi-modal'],
  },
  {
    title:
      'A Deep-Learning Based Approach for Multi-Class Cyberbullying Classification Using Social Media Text and Image Data',
    authors: 'I. Tabassum, V. Nunavath',
    venue: 'NIKT — Norsk IKT-konferanse for forskning og utdanning',
    year: 2024,
    url: 'https://www.ntnu.no/ojs/index.php/nikt/article/view/6258',
    summary:
      'Trains nine deep learning models — ResNet-50, CNN and ViT for images; LSTM, GRU, BERT, DistilBERT, RoBERTa and a hybrid CNN+LSTM for text — on a self-collected and a public dataset.',
    tags: ['BERT', 'LSTM', 'ResNet-50'],
  },
  {
    title: 'Fake News Detection: Covid-19 Perspective',
    authors: 'I. Tabassum et al.',
    venue: 'Academia.edu',
    year: 2022,
    url: 'https://www.academia.edu/download/120950436/Fake_News_Detection_Covid_19_pdf.pdf',
    summary:
      'Introduces a dataset of 3,000+ Covid-19 news pieces from traditional media and evaluates four classifiers with Count Vectorizer and TF-IDF features for fake news detection.',
    tags: ['NLP', 'TF-IDF', 'Misinformation'],
  },
  {
    title: 'Bar 2-Visibility Representations of 2-Planar Graphs',
    authors: 'I. Tabassum et al.',
    venue: 'ResearchGate',
    year: 2020,
    url: 'https://www.researchgate.net/publication/386422723_Bar_2-Visibility_Representations_of_2-Planar_Graphs',
    summary:
      'An algorithm computing bar 2-visibility representations for embedded 2-planar graphs with face length five and at most 5n−10 edges, where each edge crosses at most two bars.',
    tags: ['Algorithms', 'Graph Theory'],
  },
];

export const experience = [
  {
    role: 'PhD Candidate',
    org: 'NTNU — Department of Computer Science',
    url: 'https://www.ntnu.edu/idi',
    period: 'Present',
    description:
      'Doctoral research on deep learning for multi-class and multi-modal classification.',
  },
  {
    role: 'AI Engineer',
    org: 'G2i',
    url: 'https://www.g2i.co/',
    period: 'Oct 2024 – Apr 2025',
    description: 'Built data-driven solutions and solved AI and data problems with Python.',
  },
  {
    role: 'Data Scientist',
    org: 'SLB',
    url: 'https://www.slb.com/',
    period: 'May 2024 – Sep 2024',
    description:
      'Built ML and ETL pipelines for energy-sector projects, including work with the OLGA multiphase flow simulator.',
  },
  {
    role: 'Web Developer',
    org: 'Simula Metropolitan Center for Digital Engineering',
    url: 'https://www.simulamet.no/',
    period: 'Jun 2023 – Aug 2023',
    description:
      'Developed responsive web applications with TypeScript and Python back-end integrations for the Center for Resilient Networks and Applications.',
  },
  {
    role: 'Data Analyst',
    org: 'Golden Harvest Infotech Ltd',
    url: '',
    period: '2020 – 2022',
    description:
      'Data cleaning, ETL and visualisation to support business decisions and client projects.',
  },
];

export const projects = [
  {
    title: 'OLGA Simulation Data Tooling',
    description:
      'ETL tooling for the OLGA multiphase flow simulator at SLB: converting between text, tabular and JSON formats and generating well diagrams from measurement data.',
    tags: ['Python', 'ETL', 'NLP', 'Visualisation'],
  },
  {
    title: 'Multi-modal Cyberbullying Classification',
    description:
      'Deep learning models classifying cyberbullying from combined text and image data — the basis of two peer-reviewed publications.',
    tags: ['Deep Learning', 'Transformers', 'Multi-modal'],
  },
  {
    title: 'Air Quality Classification from Images',
    description:
      'Comparing CNNs, ResNet-50, ViT and Swin Transformer for multi-class air quality prediction from photographs.',
    tags: ['Computer Vision', 'Deep Learning'],
  },
  {
    title: 'Resilient Networks Web Platform',
    description:
      'Web applications for the Center for Resilient Networks and Applications at SimulaMet.',
    tags: ['TypeScript', 'Python', 'HTML/CSS'],
  },
  {
    title: 'Airline Flight Delay Prediction',
    description: 'Machine learning models predicting flight delays, with Power BI dashboards.',
    tags: ['Machine Learning', 'Power BI', 'MongoDB'],
  },
  {
    title: 'Big Data Analysis of the Covid-19 Pandemic',
    description: 'Analysing Covid-19 data with NoSQL tooling and interactive visualisation.',
    tags: ['NoSQL', 'Python', 'Power BI'],
  },
  {
    title: 'University Management System',
    description: 'A university management website built with PHP, CodeIgniter and SQL.',
    tags: ['PHP', 'CodeIgniter', 'SQL'],
  },
  {
    title: 'Animated Village Scene',
    description: 'A computer graphics animation of a village scene implemented in C++.',
    tags: ['C++', 'Computer Graphics'],
  },
];

export const education = [
  {
    degree: 'PhD in Computer Science',
    school: 'Norwegian University of Science and Technology',
    url: 'https://www.ntnu.edu/',
    period: 'In progress',
    detail: '',
    logo: null,
  },
  {
    degree: 'MSc in Computer Science',
    school: 'University of South-Eastern Norway',
    url: 'https://www.usn.no/',
    period: '2024',
    detail: 'Grade A · Thesis on multi-class cyberbullying classification',
    logo: 'usn',
  },
  {
    degree: 'BSc in Computer Science and Engineering',
    school: 'Notre Dame University Bangladesh',
    url: 'https://ndub.edu.bd/',
    period: '2020',
    detail: 'CGPA 3.91 / 4.00',
    logo: 'ndub',
  },
] as const;

export const skills = [
  { group: 'AI & Data', items: ['Deep Learning', 'Machine Learning', 'NLP', 'Computer Vision', 'Data Engineering', 'Data Analysis'] },
  { group: 'Programming', items: ['Python', 'SQL', 'C', 'C++', 'PHP', 'Flask'] },
  { group: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { group: 'Tools', items: ['Jupyter', 'Google Colab', 'Power BI', 'MongoDB', 'Git'] },
];

export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Bengali', level: 'Native' },
  { name: 'Hindi & Urdu', level: 'Conversational' },
  { name: 'Norwegian', level: 'Basic' },
];
