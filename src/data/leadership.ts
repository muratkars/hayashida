export interface Executive {
  name: string;
  title: string;
  division?: string;
  bio: string;
}

export const executives: Executive[] = [
  {
    name: "Robert Meridian",
    title: "Chairman & Chief Executive Officer",
    bio: "Robert Meridian is the fourth-generation leader of Meridian Capital Group, having assumed the role of Chairman and CEO in 2018. Under his leadership, the firm has expanded its global footprint, grown assets under management to over $300 billion, and launched the Horizon 2027 initiative — the most ambitious digital transformation program in the firm's history. Mr. Meridian is a graduate of Columbia University (Economics) and holds an MBA from INSEAD. He serves on the board of the Securities Industry and Financial Markets Association (SIFMA) and is a member of the World Economic Forum's Financial Services Governors community. He is committed to stewarding the firm through its most ambitious digital transformation while preserving the values of trust, integrity, and long-term thinking that have defined Meridian Capital Group for nearly a century.",
  },
  {
    name: "David Hasegawa",
    title: "Chief Technology Officer & Head of Technology",
    bio: "David Hasegawa joined Meridian Capital Group in 2012 and was appointed CTO in 2022. He is responsible for all aspects of the firm's technology strategy, infrastructure, and digital innovation. Mr. Hasegawa is the architect and executive sponsor of Horizon 2027, Meridian's enterprise-wide initiative to modernize data infrastructure with cloud-native, high-performance object storage and AI-driven analytics. Under his leadership, the technology division is executing a comprehensive migration from legacy NAS/SAN storage systems to a modern, S3-compatible object storage platform designed to support petabyte-scale workloads across risk analytics, trading, and machine learning. Prior to joining Meridian, he held senior technology roles at Goldman Sachs and Google. He holds a Ph.D. in Computer Science from ETH Zurich and a B.Eng. from Stanford University.",
  },
  {
    name: "David Chen",
    title: "Global Head of Risk",
    bio: "David Chen leads Meridian Capital Group's global risk management function, overseeing quantitative risk platforms that process over 500 million daily simulations across multi-asset classes. His mandate includes market risk, credit risk, operational risk, and model validation across all business divisions and geographies. Mr. Chen is a driving force behind the modernization of Meridian's risk infrastructure, working closely with the CTO to ensure that the firm's storage and compute systems can support next-generation Monte Carlo simulations, real-time intraday risk calculations, and AI-augmented risk models. He previously served as Head of Quantitative Risk at JPMorgan Chase and holds a Ph.D. in Financial Mathematics from Columbia University.",
  },
  {
    name: "James Morgan",
    title: "Global Head of Markets",
    bio: "James Morgan oversees Meridian's Global Markets division, encompassing fixed income, equities, foreign exchange, and commodities trading across all major financial centers. Under his leadership, the division has achieved record trading volumes in APAC and expanded its electronic trading capabilities globally. Mr. Morgan has been with Meridian for over 20 years and previously led the firm's US rates trading desk. He holds a degree in Economics from the University of Chicago.",
  },
  {
    name: "Richard Thornton",
    title: "Global Head of Investment Banking",
    bio: "Richard Thornton leads Meridian's Investment Banking division, which provides advisory, underwriting, and capital markets services to corporate and institutional clients worldwide. Under his leadership, the division has expanded its presence in cross-border M&A, particularly in technology and healthcare sectors. Mr. Thornton joined Meridian in 2015 from Lazard, where he was a Managing Director in the European M&A practice. He holds an MBA from Harvard Business School and a B.A. from Oxford University.",
  },
  {
    name: "Sarah Whitfield",
    title: "Head of Sustainability & ESG",
    bio: "Sarah Whitfield oversees Meridian Capital Group's sustainability strategy, ESG integration, and sustainable finance initiatives. She has led the firm's expansion into green bonds and sustainability-linked lending, with over $5.5 billion in sustainable financing underwritten since 2019. Ms. Whitfield is a member of the ICMA Green Bond Principles Executive Committee and previously served at the Asian Development Bank. She holds a Master's degree in Environmental Management from Yale University.",
  },
  {
    name: "Michael Sato",
    title: "Head of Wealth Management",
    bio: "Michael Sato leads Meridian's Wealth Management division, serving high-net-worth and ultra-high-net-worth clients across Asia-Pacific, Europe, and the Americas. Under his leadership, the division has grown assets under management to approximately $56 billion and launched the Meridian Insights digital advisory platform. Mr. Sato joined the firm in 2005 and has held various leadership roles in private banking. He holds an MBA from the Wharton School.",
  },
  {
    name: "Katherine Reynolds",
    title: "Head of Asset Management",
    bio: "Katherine Reynolds oversees Meridian Asset Management, which manages approximately $255 billion in assets across public equities, fixed income, alternatives, and multi-asset strategies. She has driven the division's expansion into quantitative and ESG-integrated investment strategies. Prior to her current role, Ms. Reynolds led the firm's fixed income portfolio management team. She holds a CFA charter and a degree in Economics from the University of Pennsylvania.",
  },
  {
    name: "James Mitchell",
    title: "Chief Financial Officer",
    bio: "James Mitchell is responsible for Meridian Capital Group's global financial management, investor relations, and strategic planning. He has overseen the firm's capital optimization program and plays a key role in resource allocation for the Horizon 2027 initiative. Mr. Mitchell joined Meridian in 2019 from Goldman Sachs, where he served as Deputy CFO. He is a Chartered Accountant and holds a degree from the London School of Economics.",
  },
  {
    name: "Elizabeth Marsh",
    title: "Chief Compliance Officer",
    bio: "Elizabeth Marsh leads Meridian Capital Group's global compliance function, ensuring adherence to regulatory requirements across all jurisdictions in which the firm operates, including the SEC, FINRA, FCA, BaFin, MAS, SFC, and ASIC. She has been instrumental in strengthening the firm's data governance and regulatory reporting capabilities, particularly in the areas of data sovereignty, immutability, and audit trail requirements mandated by global financial regulators. Ms. Marsh holds a J.D. from Columbia Law School and previously served at the U.S. Securities and Exchange Commission.",
  },
  {
    name: "Andrew Park",
    title: "Chief Information Security Officer",
    bio: "Andrew Park oversees cybersecurity, information security, and operational resilience across Meridian Capital Group's global operations. He is responsible for ensuring that the firm's technology modernization under Horizon 2027 maintains the highest security standards, including data encryption at rest and in transit, zero-trust architecture, and regulatory compliance for critical financial infrastructure. Mr. Park previously served as VP of Security Engineering at Amazon Web Services and holds a M.S. in Cybersecurity from Carnegie Mellon University.",
  },
  {
    name: "Sophia Laurent",
    title: "Head of Human Resources",
    bio: "Sophia Laurent leads Meridian Capital Group's global human resources function, overseeing talent acquisition, organizational development, and employee engagement across 28,000 employees in more than 30 countries. She has been central to the firm's talent strategy for Horizon 2027, including the hiring of over 500 technology professionals in cloud infrastructure, data engineering, and AI/ML. Ms. Laurent joined Meridian in 2020 from McKinsey & Company and holds an MBA from HEC Paris.",
  },
];
