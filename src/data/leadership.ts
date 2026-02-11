export interface Executive {
  name: string;
  title: string;
  division?: string;
  bio: string;
}

export const executives: Executive[] = [
  {
    name: "Kenji Hayashida",
    title: "Chairman & Chief Executive Officer",
    bio: "Kenji Hayashida is the fourth-generation leader of Hayashida Group, having assumed the role of Chairman and CEO in 2018. Under his leadership, the firm has expanded its global footprint, grown assets under management to over ¥45 trillion, and launched the Horizon 2027 initiative — the most ambitious digital transformation program in the firm's history. Mr. Hayashida is a graduate of the University of Tokyo (Economics) and holds an MBA from INSEAD. He serves on the board of the Japan Securities Dealers Association and is a member of the World Economic Forum's Financial Services Governors community. He is committed to stewarding the firm through its most ambitious digital transformation while preserving the values of trust, integrity, and long-term thinking that have defined Hayashida Group for nearly a century.",
  },
  {
    name: "Yuki Hasegawa",
    title: "Chief Technology Officer & Head of Technology",
    bio: "Yuki Hasegawa joined Hayashida Group in 2012 and was appointed CTO in 2022. She is responsible for all aspects of the firm's technology strategy, infrastructure, and digital innovation. Ms. Hasegawa is the architect and executive sponsor of Horizon 2027, Hayashida's enterprise-wide initiative to modernize data infrastructure with cloud-native, high-performance object storage and AI-driven analytics. Under her leadership, the technology division is executing a comprehensive migration from legacy NAS/SAN storage systems to a modern, S3-compatible object storage platform designed to support petabyte-scale workloads across risk analytics, trading, and machine learning. Prior to joining Hayashida, she held senior technology roles at Goldman Sachs and Google. She holds a Ph.D. in Computer Science from ETH Zurich and a B.Eng. from Kyoto University.",
  },
  {
    name: "David Chen",
    title: "Global Head of Risk",
    bio: "David Chen leads Hayashida Group's global risk management function, overseeing quantitative risk platforms that process over 500 million daily simulations across multi-asset classes. His mandate includes market risk, credit risk, operational risk, and model validation across all business divisions and geographies. Mr. Chen is a driving force behind the modernization of Hayashida's risk infrastructure, working closely with the CTO to ensure that the firm's storage and compute systems can support next-generation Monte Carlo simulations, real-time intraday risk calculations, and AI-augmented risk models. He previously served as Head of Quantitative Risk at JPMorgan Chase and holds a Ph.D. in Financial Mathematics from Columbia University.",
  },
  {
    name: "Takeshi Mori",
    title: "Global Head of Markets",
    bio: "Takeshi Mori oversees Hayashida's Global Markets division, encompassing fixed income, equities, foreign exchange, and commodities trading across all major financial centers. Under his leadership, the division has achieved record trading volumes in APAC and expanded its electronic trading capabilities globally. Mr. Mori has been with Hayashida for over 20 years and previously led the firm's Asia-Pacific rates trading desk. He holds a degree in Economics from Keio University.",
  },
  {
    name: "Richard Thornton",
    title: "Global Head of Investment Banking",
    bio: "Richard Thornton leads Hayashida's Investment Banking division, which provides advisory, underwriting, and capital markets services to corporate and institutional clients worldwide. Under his leadership, the division has expanded its presence in cross-border M&A, particularly in technology and healthcare sectors. Mr. Thornton joined Hayashida in 2015 from Lazard, where he was a Managing Director in the European M&A practice. He holds an MBA from Harvard Business School and a B.A. from Oxford University.",
  },
  {
    name: "Akiko Tanaka",
    title: "Head of Sustainability & ESG",
    bio: "Akiko Tanaka oversees Hayashida Group's sustainability strategy, ESG integration, and sustainable finance initiatives. She has led the firm's expansion into green bonds and sustainability-linked lending, with over ¥800 billion in sustainable financing underwritten since 2019. Ms. Tanaka is a member of the ICMA Green Bond Principles Executive Committee and previously served at the Asian Development Bank. She holds a Master's degree in Environmental Management from Yale University.",
  },
  {
    name: "Haruki Sato",
    title: "Head of Wealth Management",
    bio: "Haruki Sato leads Hayashida's Wealth Management division, serving high-net-worth and ultra-high-net-worth clients across Asia-Pacific, Europe, and the Americas. Under his leadership, the division has grown assets under management to approximately ¥8.2 trillion and launched the Hayashida Insights digital advisory platform. Mr. Sato joined the firm in 2005 and has held various leadership roles in private banking. He holds an MBA from the Wharton School.",
  },
  {
    name: "Natsuki Kimura",
    title: "Head of Asset Management",
    bio: "Natsuki Kimura oversees Hayashida Asset Management, which manages approximately ¥37 trillion in assets across public equities, fixed income, alternatives, and multi-asset strategies. She has driven the division's expansion into quantitative and ESG-integrated investment strategies. Prior to her current role, Ms. Kimura led the firm's fixed income portfolio management team. She holds a CFA charter and a degree in Economics from Hitotsubashi University.",
  },
  {
    name: "James Mitchell",
    title: "Chief Financial Officer",
    bio: "James Mitchell is responsible for Hayashida Group's global financial management, investor relations, and strategic planning. He has overseen the firm's capital optimization program and plays a key role in resource allocation for the Horizon 2027 initiative. Mr. Mitchell joined Hayashida in 2019 from Nomura Holdings, where he served as Deputy CFO. He is a Chartered Accountant and holds a degree from the London School of Economics.",
  },
  {
    name: "Mariko Oshima",
    title: "Chief Compliance Officer",
    bio: "Mariko Oshima leads Hayashida Group's global compliance function, ensuring adherence to regulatory requirements across all jurisdictions in which the firm operates, including the JFSA, FCA, SEC, MAS, SFC, and ASIC. She has been instrumental in strengthening the firm's data governance and regulatory reporting capabilities, particularly in the areas of data sovereignty, immutability, and audit trail requirements mandated by global financial regulators. Ms. Oshima holds a J.D. from the University of Tokyo and previously served at the Japan Financial Services Agency.",
  },
  {
    name: "Andrew Park",
    title: "Chief Information Security Officer",
    bio: "Andrew Park oversees cybersecurity, information security, and operational resilience across Hayashida Group's global operations. He is responsible for ensuring that the firm's technology modernization under Horizon 2027 maintains the highest security standards, including data encryption at rest and in transit, zero-trust architecture, and regulatory compliance for critical financial infrastructure. Mr. Park previously served as VP of Security Engineering at Amazon Web Services and holds a M.S. in Cybersecurity from Carnegie Mellon University.",
  },
  {
    name: "Sophia Laurent",
    title: "Head of Human Resources",
    bio: "Sophia Laurent leads Hayashida Group's global human resources function, overseeing talent acquisition, organizational development, and employee engagement across 28,000 employees in more than 30 countries. She has been central to the firm's talent strategy for Horizon 2027, including the hiring of over 500 technology professionals in cloud infrastructure, data engineering, and AI/ML. Ms. Laurent joined Hayashida in 2020 from McKinsey & Company and holds an MBA from HEC Paris.",
  },
];
