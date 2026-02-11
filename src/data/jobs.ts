export interface JobListing {
  id: string;
  title: string;
  location: string;
  division: string;
  type: string;
  description: string;
  requirements: string[];
}

export const jobListings: JobListing[] = [
  {
    id: "TK-2025-0142",
    title: "Cloud Infrastructure Engineer — Object Storage",
    location: "Tokyo, Japan",
    division: "Risk & Technology",
    type: "Full-time",
    description: "Design, deploy, and operate petabyte-scale S3-compatible storage clusters supporting mission-critical risk analytics, trading, and AI/ML workloads. You will be part of the Horizon 2027 infrastructure modernization team, responsible for migrating legacy NAS/SAN storage to a modern, high-performance object storage platform. The role requires deep expertise in distributed storage systems, S3 API compatibility, erasure coding, and performance optimization at scale.",
    requirements: [
      "5+ years of experience with distributed storage systems (MinIO, Ceph, or equivalent)",
      "Strong understanding of S3 API, object storage architecture, and erasure coding",
      "Experience operating storage clusters at petabyte scale with throughput requirements exceeding 100 GB/s",
      "Proficiency in Linux systems administration, networking, and infrastructure automation (Terraform, Ansible)",
      "Experience with Kubernetes and containerized storage deployments",
      "Familiarity with financial services regulatory requirements for data management",
    ],
  },
  {
    id: "LN-2025-0089",
    title: "ML Platform Engineer",
    location: "London, United Kingdom",
    division: "Risk & Technology",
    type: "Full-time",
    description: "Build and operate ML training and inference pipelines on GPU clusters backed by high-throughput object storage. You will work with quantitative researchers and data scientists to deliver scalable platforms for training financial models, including large language models for market analysis and deep learning models for risk prediction. This role is part of Hayashida's London Technology Hub expansion under the Horizon 2027 initiative.",
    requirements: [
      "4+ years of experience building ML platforms or MLOps infrastructure",
      "Experience with GPU compute clusters (NVIDIA A100/H100) and distributed training frameworks (PyTorch, Horovod)",
      "Strong understanding of high-throughput storage systems and data pipelines for ML workloads",
      "Experience with Kubernetes, containerization, and CI/CD for ML workflows",
      "Familiarity with S3-compatible object storage for training data management",
      "Knowledge of financial markets or quantitative finance is a plus",
    ],
  },
  {
    id: "NY-2025-0201",
    title: "Senior Data Engineer — Risk Analytics",
    location: "New York, United States",
    division: "Risk & Technology",
    type: "Full-time",
    description: "Lead the migration of legacy risk data from traditional NAS/SAN storage systems to a modern lakehouse architecture built on S3-compatible object storage. You will design data pipelines for ingesting, transforming, and serving risk analytics data at petabyte scale, supporting real-time intraday risk calculations and end-of-day batch processing. This is a critical role within the Horizon 2027 program.",
    requirements: [
      "7+ years of experience in data engineering, with at least 3 years in financial services",
      "Deep expertise in building data pipelines on object storage (S3/S3-compatible) with Apache Spark, Trino, or equivalent",
      "Experience with lakehouse architectures (Delta Lake, Apache Iceberg)",
      "Strong SQL and Python skills",
      "Understanding of market risk, credit risk, or regulatory risk reporting",
      "Experience migrating legacy data platforms to modern cloud-native architectures",
    ],
  },
  {
    id: "TK-2025-0156",
    title: "Quantitative Risk Analyst — Monte Carlo Methods",
    location: "Tokyo, Japan",
    division: "Risk & Technology",
    type: "Full-time",
    description: "Develop and optimize Monte Carlo simulation models for market risk, counterparty credit risk, and stress testing across Hayashida's global portfolio. Work closely with technology teams to ensure risk models are optimized for high-throughput execution on modern infrastructure.",
    requirements: [
      "Ph.D. or Master's in Financial Mathematics, Statistics, or related quantitative field",
      "3+ years of experience in quantitative risk modeling at a financial institution",
      "Expert-level proficiency in C++ and Python for numerical computing",
      "Experience with Monte Carlo simulation techniques, variance reduction, and parallel computing",
      "Strong understanding of market risk regulations (FRTB, Basel III/IV)",
    ],
  },
  {
    id: "SG-2025-0078",
    title: "Vice President — M&A Advisory, Technology Sector",
    location: "Singapore",
    division: "Investment Banking",
    type: "Full-time",
    description: "Originate and execute M&A advisory mandates in the technology sector across Southeast Asia, with a focus on cross-border transactions. Work closely with senior bankers and clients to deliver strategic advice on mergers, acquisitions, and divestitures.",
    requirements: [
      "6+ years of investment banking experience with a focus on technology M&A",
      "Strong financial modeling and valuation skills",
      "Established client relationships in the ASEAN technology ecosystem",
      "MBA or equivalent advanced degree preferred",
      "Fluency in English; Mandarin or Japanese language skills are a plus",
    ],
  },
  {
    id: "HK-2025-0112",
    title: "Portfolio Manager — Asian Equities",
    location: "Hong Kong",
    division: "Asset Management",
    type: "Full-time",
    description: "Manage a long-only Asian equities portfolio with approximately $2 billion in AUM. Conduct fundamental research, develop investment theses, and make portfolio allocation decisions across developed and emerging Asian markets.",
    requirements: [
      "8+ years of experience in equity portfolio management or research",
      "CFA charterholder required",
      "Deep knowledge of Asian equity markets and corporate governance practices",
      "Strong track record of alpha generation in Asian equities",
      "Fluency in English and at least one Asian language",
    ],
  },
  {
    id: "LN-2025-0095",
    title: "Site Reliability Engineer — Trading Systems",
    location: "London, United Kingdom",
    division: "Risk & Technology",
    type: "Full-time",
    description: "Ensure the availability, performance, and reliability of Hayashida's global electronic trading platforms. Design and implement monitoring, alerting, and incident response capabilities for mission-critical, latency-sensitive financial systems.",
    requirements: [
      "5+ years of SRE or production engineering experience",
      "Experience supporting low-latency, high-throughput trading systems",
      "Strong Linux systems expertise and networking fundamentals",
      "Experience with observability tools (Prometheus, Grafana, ELK stack)",
      "Familiarity with financial services regulatory requirements for operational resilience",
    ],
  },
  {
    id: "TK-2025-0163",
    title: "Compliance Analyst — Data Governance",
    location: "Tokyo, Japan",
    division: "Compliance",
    type: "Full-time",
    description: "Support Hayashida Group's data governance and regulatory compliance programs across JFSA, FCA, SEC, and MAS jurisdictions. Ensure data management practices meet regulatory requirements for data sovereignty, retention, immutability, and auditability.",
    requirements: [
      "3+ years of experience in compliance or data governance at a financial institution",
      "Knowledge of data protection regulations (JFSA guidelines, GDPR, SEC Rule 17a-4)",
      "Understanding of data management principles including data lineage, classification, and retention",
      "Experience working with technology teams on compliance-related infrastructure requirements",
      "Japanese language proficiency required; English proficiency required",
    ],
  },
];
