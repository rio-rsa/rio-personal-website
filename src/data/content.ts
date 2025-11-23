import { BlogPost, Project, Publication } from '@/types';

export const ABOUT_ME = `
I am a Data Engineer and casual researcher with a passion for building robust, scalable data pipelines and exploring the theoretical underpinnings of information systems. 

My work bridges the gap between raw data and actionable insights. I specialize in distributed systems, real-time analytics, and modern data warehousing. When I'm not engineering data flows, I'm researching efficient storage algorithms and writing about the intersection of data and logic.
`;

export const SKILLS = [
  'Python',
  'Rust',
  'SQL',
  'Apache Spark',
  'Kafka',
  'Snowflake',
  'AWS',
  'Terraform',
  'dbt',
  'Docker',
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'StreamLine ETL Engine',
    description:
      'A high-throughput, low-latency ETL engine built with Rust and Apache Kafka. Capable of processing 100k events/second with guaranteed exactly-once semantics.',
    technologies: ['Rust', 'Kafka', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/riothinks/streamline',
  },
  {
    id: '2',
    title: 'Distributed Graph Analyzer',
    description:
      'A distributed system for analyzing large-scale social graph networks. Implements custom partitioning algorithms to optimize traversal speed.',
    technologies: ['Python', 'Spark', 'Neo4j', 'AWS EMR'],
    link: 'https://riothinks.com/projects/graph',
  },
  {
    id: '3',
    title: 'Data Quality Monitor',
    description:
      'An automated anomaly detection system for data warehouses. Uses statistical profiling to alert engineering teams of data drift or schema violations in real-time.',
    technologies: ['Python', 'dbt', 'Snowflake', 'Airflow'],
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'Optimizing Columnar Storage for Sparse Datasets',
    journal: 'Journal of Data Engineering Research',
    year: 2024,
    abstract:
      'An investigation into compression techniques for highly sparse high-dimensional data in modern analytical databases.',
    link: '#',
  },
  {
    id: 'p2',
    title: 'Event Consistency in Distributed Ledgers',
    journal: 'International Conference on Cloud Computing',
    year: 2023,
    abstract:
      'Proposed a novel consensus mechanism for ensuring causal ordering in high-velocity event streams across geologically distributed clusters.',
    link: '#',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Why I Rewrote My Pipeline in Rust',
    date: 'October 12, 2024',
    excerpt:
      'Memory safety and zero-cost abstractions make Rust a compelling choice for data engineering. Here is my journey migrating a critical Python service.',
    readTime: '6 min read',
    tags: ['Rust', 'Engineering', 'Performance'],
  },
  {
    id: 'b2',
    title: 'The Fallacy of "Real-Time" Everything',
    date: 'September 28, 2024',
    excerpt:
      'Not every business dashboard needs sub-second latency. A pragmatic look at batch vs. streaming architectures in 2024.',
    readTime: '4 min read',
    tags: ['Architecture', 'Opinion'],
  },
  {
    id: 'b3',
    title: 'Understanding LSM Trees',
    date: 'August 15, 2024',
    excerpt:
      'A deep dive into Log-Structured Merge-trees, the data structure powering many of the databases we use daily like RocksDB and Cassandra.',
    readTime: '8 min read',
    tags: ['Deep Dive', 'Database Internals'],
  },
];
