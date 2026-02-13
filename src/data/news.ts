export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "meridian-launches-horizon-2027",
    title: "Meridian Launches Horizon 2027 Digital Transformation Initiative",
    date: "2025-06-15",
    category: "Corporate Strategy",
    summary: "Meridian Capital Group announces a comprehensive, firm-wide digital transformation program targeting modernization of core technology infrastructure by 2027.",
    content: [
      "New York, June 15, 2025 — Meridian Capital Group, Inc. (NYSE: MRDN) today announced the launch of Horizon 2027, a sweeping digital transformation initiative that will modernize the firm's technology infrastructure across all business divisions globally.",
      "The program, overseen by Chief Technology Officer David Hasegawa, represents one of the largest technology investments in Meridian's nearly century-long history. Horizon 2027 encompasses the migration of legacy storage systems, the adoption of cloud-native architectures, and the integration of artificial intelligence across trading, risk management, and client services.",
      "\"Our legacy infrastructure — built primarily on Hadoop HDFS clusters and traditional NAS/SAN storage arrays — has served us well for over a decade, but it was never designed for the scale and speed that modern financial markets demand,\" said Mr. Hasegawa. \"Our HDFS clusters suffer from poor storage density, high operational overhead, and availability limitations that directly impact our risk management SLAs. Horizon 2027 will replace this aging infrastructure with high-performance, S3-compatible object storage and a modern analytics layer powered by Dremio. This isn't just a technology upgrade — it's a fundamental rearchitecture of how we manage, analyze, and derive value from data.\"",
      "A key priority of the initiative is the migration of the firm's risk analytics data platform from Hadoop/HDFS — currently spanning 8 petabytes across multiple aging clusters in 14 data centers globally — to a unified, software-defined object storage platform with Dremio as the analytics query engine. The firm is evaluating enterprise-grade, S3-compatible object storage solutions capable of delivering the throughput, storage density, and availability required for quantitative risk analytics, algorithmic trading, and machine learning workloads. The combination of high-density object storage with Dremio's lakehouse query engine is expected to deliver a 3x improvement in storage density, dramatically improved risk management SLAs, and a 40% reduction in total cost of ownership.",
      "Meridian's annual technology budget stands at approximately $290 million, with a significant portion allocated to Horizon 2027 over the program's three-year timeline. The initiative targets a 40% reduction in total cost of ownership for data infrastructure by 2027.",
      "\"The financial services industry is at an inflection point,\" added Robert Meridian, Chairman and CEO. \"Firms that fail to modernize their data infrastructure will find themselves unable to compete in an era defined by real-time analytics, AI-driven decision-making, and increasingly complex regulatory requirements. Horizon 2027 ensures Meridian remains at the forefront of innovation.\"",
      "The program will be executed in phases, beginning with the risk analytics and quantitative research divisions, before expanding to trading platforms, client reporting systems, and compliance infrastructure.",
    ],
  },
  {
    slug: "risk-analytics-500m-simulations",
    title: "Meridian Risk Analytics Division Achieves Record 500 Million Daily Simulations",
    date: "2025-09-22",
    category: "Risk & Technology",
    summary: "The Quantitative Risk Analytics team reaches a milestone of 500 million daily risk simulations, highlighting both the division's capabilities and its growing infrastructure demands.",
    content: [
      "New York, September 22, 2025 — Meridian Capital Group's Quantitative Risk Analytics division has achieved a significant operational milestone, successfully processing over 500 million risk simulations in a single trading day across its global operations.",
      "The achievement reflects the firm's expanding quantitative capabilities as well as the growing complexity of regulatory and internal risk measurement requirements. The simulations span value-at-risk (VaR), stress testing, counterparty credit risk, and multi-asset Monte Carlo analyses across the firm's wholesale banking and global markets portfolios.",
      "\"Reaching 500 million daily simulations is a testament to our team's ingenuity, but it also exposes the limitations of our current HDFS-based infrastructure,\" said David Chen, Global Head of Risk. \"Our Hadoop clusters are struggling with availability issues that threaten our risk management SLAs, poor storage density that drives up data center costs, and operational complexity that consumes engineering resources better spent on analytics innovation. The throughput demands of next-generation risk models — particularly those incorporating AI and machine learning — will far exceed what our aging HDFS architecture can deliver.\"",
      "Mr. Chen noted that the division's data footprint has grown approximately threefold over the past three years, driven by increased model granularity, expanded scenario coverage, and regulatory mandates from the SEC, FCA, BaFin, and MAS requiring more comprehensive risk data retention and auditability. The existing HDFS clusters were not designed for this scale of growth, leading to cluster sprawl and escalating TCO.",
      "The milestone is closely tied to the firm's Horizon 2027 initiative, which includes the migration of risk analytics infrastructure from HDFS to high-performance, S3-compatible object storage with Dremio as the unified analytics query engine. The target platform must sustain throughput exceeding 200 GB/s for end-of-day batch risk computations while enabling sub-second interactive analytics for intraday risk monitoring through Dremio's reflection and materialization capabilities.",
      "\"The future of risk analytics is real-time, AI-augmented, and data-intensive,\" Mr. Chen added. \"By replacing HDFS with modern object storage and Dremio, we expect to improve our risk reporting SLAs from hours to minutes, increase storage density by 3x, and reduce infrastructure TCO by 40% — all while maintaining the data immutability and regulatory compliance that financial regulators require.\"",
    ],
  },
  {
    slug: "london-technology-hub-expansion",
    title: "Meridian Expands London Technology Hub, Plans to Hire 200 Engineers",
    date: "2025-11-08",
    category: "Corporate",
    summary: "Meridian Capital Group announces a major expansion of its London technology center, with plans to recruit 200 engineers specializing in cloud infrastructure, data engineering, and ML operations.",
    content: [
      "London, November 8, 2025 — Meridian Capital Group today announced a significant expansion of its London Technology Hub, located in the City of London, with plans to hire approximately 200 engineers over the next 18 months.",
      "The expansion is a key component of the firm's Horizon 2027 digital transformation initiative and reflects Meridian's commitment to building world-class technology capabilities across its global operations. The London hub will serve as a center of excellence for cloud infrastructure, data engineering, and machine learning operations.",
      "\"London is home to some of the world's best technology talent, and our expanded hub will be at the heart of Meridian's infrastructure modernization efforts,\" said David Hasegawa, Chief Technology Officer. \"We're looking for engineers who are passionate about building the next generation of financial technology — from migrating petabyte-scale HDFS clusters to modern object storage, to deploying Dremio as our enterprise analytics engine, to building real-time ML inference platforms.\"",
      "Key hiring areas include storage infrastructure engineering with expertise in HDFS-to-object-storage migration, data platform engineering with Dremio and lakehouse architectures, ML operations engineering for training and serving financial models at scale, and site reliability engineering for mission-critical data and analytics platforms.",
      "The London Technology Hub currently employs approximately 350 technology professionals and supports Meridian's European operations across investment banking, global markets, and risk management. The expansion will bring the hub's total headcount to over 550 by mid-2027.",
      "Meridian's London operations are regulated by the Financial Conduct Authority (FCA), and the technology hub plays a critical role in ensuring the firm's infrastructure meets stringent regulatory requirements for data sovereignty, operational resilience, and cyber security.",
    ],
  },
  {
    slug: "ai-market-risk-research-partnership",
    title: "Meridian Partners with MIT on AI-Driven Market Risk Research",
    date: "2025-12-03",
    category: "Research & Innovation",
    summary: "A new research collaboration will explore the application of large language models and deep learning to market risk prediction and scenario generation.",
    content: [
      "New York, December 3, 2025 — Meridian Capital Group and MIT's Computer Science and Artificial Intelligence Laboratory (CSAIL) today announced a three-year research partnership focused on the application of artificial intelligence to market risk analysis and prediction.",
      "The collaboration will explore the use of large language models (LLMs), deep reinforcement learning, and generative AI techniques for market risk scenario generation, stress test design, and real-time anomaly detection in financial markets.",
      "\"Traditional risk models, while essential, are inherently backward-looking,\" said Professor James Chen, who will lead the MIT research team. \"By combining Meridian's unparalleled market data with cutting-edge AI techniques, we aim to develop forward-looking risk frameworks that can anticipate market dislocations before they occur.\"",
      "The partnership will leverage Meridian's extensive historical market data — comprising over 15 petabytes of structured and unstructured financial data — to train and validate novel AI models. The research program will require significant high-performance computing and storage resources, which Meridian plans to provision through its Horizon 2027 infrastructure modernization initiative.",
      "\"This research partnership exemplifies why infrastructure modernization is so critical,\" said David Hasegawa, Meridian's CTO. \"Training large-scale AI models on petabytes of financial data requires storage systems that can deliver sustained, high-throughput data access — something our legacy HDFS clusters simply cannot provide at the scale we need. Our investment in modern, S3-compatible object storage with Dremio as the analytics layer through Horizon 2027 will provide the data platform these AI workloads demand.\"",
      "The research outputs will be published in leading academic journals and are expected to inform both Meridian's internal risk management practices and broader industry approaches to AI-augmented risk analytics.",
    ],
  },
  {
    slug: "global-markets-apac-expansion",
    title: "Meridian Global Markets Division Reports Record APAC Trading Volumes",
    date: "2025-10-15",
    category: "Global Markets",
    summary: "The Global Markets division posts record trading volumes across Asia-Pacific, driven by strong client flows in fixed income and foreign exchange.",
    content: [
      "Hong Kong, October 15, 2025 — Meridian Capital Group's Global Markets division reported record trading volumes across its Asia-Pacific operations for the third quarter of fiscal year 2026, with total notional volumes exceeding $2.8 trillion.",
      "The results were driven by robust client activity in fixed income, foreign exchange, and emerging market products, as well as the expansion of the firm's electronic trading capabilities in the region. Meridian's APAC markets business now serves over 1,200 institutional clients across 15 markets.",
      "\"Our APAC franchise continues to gain market share as clients increasingly turn to Meridian for liquidity, execution quality, and innovative product solutions,\" said James Morgan, Global Head of Markets. \"The investments we've made in our electronic trading platforms and quantitative pricing models are delivering clear competitive advantages.\"",
      "The division's growth in the region has also driven increased demands on its technology infrastructure, including market data storage, real-time risk calculation, and trade surveillance systems. These requirements are being addressed as part of the firm's broader Horizon 2027 technology modernization program.",
    ],
  },
  {
    slug: "sustainability-green-bond-framework",
    title: "Meridian Publishes Updated Green Bond Framework Aligned with ICMA Principles",
    date: "2025-08-20",
    category: "Sustainability",
    summary: "Meridian Capital Group updates its sustainable finance framework, reinforcing its commitment to financing the transition to a low-carbon economy.",
    content: [
      "New York, August 20, 2025 — Meridian Capital Group today published an updated Green Bond Framework, aligned with the International Capital Market Association (ICMA) Green Bond Principles 2024 and the firm's broader commitment to sustainable finance.",
      "The updated framework expands eligible project categories to include renewable energy infrastructure, clean transportation, sustainable water management, and green buildings. It also introduces enhanced impact reporting standards and third-party verification requirements.",
      "\"Sustainable finance is not just a corporate responsibility — it is a significant growth opportunity,\" said Sarah Whitfield, Head of Sustainability. \"Since establishing our sustainable finance practice in 2019, we have underwritten over $5.5 billion in green, social, and sustainability-linked bonds. This updated framework positions us to accelerate that trajectory.\"",
      "Meridian has set a target to allocate $14 billion in sustainable financing by 2030, supporting projects that contribute to the United Nations Sustainable Development Goals and the Paris Agreement climate targets.",
    ],
  },
  {
    slug: "wealth-management-digital-platform",
    title: "Meridian Wealth Management Launches Next-Generation Digital Advisory Platform",
    date: "2025-07-12",
    category: "Wealth Management",
    summary: "A new digital advisory platform offers high-net-worth clients personalized portfolio insights powered by AI and advanced analytics.",
    content: [
      "New York, July 12, 2025 — Meridian Wealth Management today launched Meridian Insights, a next-generation digital advisory platform that provides high-net-worth and ultra-high-net-worth clients with personalized portfolio analytics, market intelligence, and AI-driven investment recommendations.",
      "The platform, developed in-house by Meridian's technology team, leverages machine learning models trained on the firm's proprietary market research and economic forecasting data. Clients can access real-time portfolio performance dashboards, personalized risk assessments, and curated investment opportunities through a secure web and mobile interface.",
      "\"Our clients expect the same level of digital sophistication from their wealth manager as they experience in every other aspect of their lives,\" said Michael Sato, Head of Wealth Management. \"Meridian Insights represents a step change in how we deliver value to our clients — combining the judgment of our experienced advisors with the power of AI and data analytics.\"",
      "The platform currently serves clients in New York, London, and Frankfurt, with plans to expand to Singapore and Hong Kong in the first half of 2026. Assets under management in Meridian's wealth management division currently total approximately $56 billion.",
    ],
  },
  {
    slug: "fy2025-q2-earnings",
    title: "Meridian Reports Solid Q2 FY2026 Results, Reaffirms Full-Year Guidance",
    date: "2025-11-28",
    category: "Investor Relations",
    summary: "Meridian Capital Group delivers steady performance in Q2 FY2026, with strong contributions from Global Markets and Asset Management offsetting headwinds in Investment Banking.",
    content: [
      "New York, November 28, 2025 — Meridian Capital Group, Inc. (NYSE: MRDN) today reported financial results for the second quarter of fiscal year 2026, with net revenue of $3.2 billion and net income of $400 million.",
      "The results reflected strong performance in the Global Markets and Asset Management divisions, which benefited from favorable market conditions and continued client inflows. The Investment Banking division experienced a moderation in advisory fees compared to the prior quarter but maintained a robust pipeline of mandated transactions.",
      "\"Our diversified business model continues to deliver stable, resilient performance across varying market conditions,\" said Robert Meridian, Chairman and CEO. \"We are executing on our strategic priorities, including the Horizon 2027 technology modernization program, which remains on track and on budget.\"",
      "Technology-related expenditures for the quarter totaled $74 million, consistent with the firm's planned investment trajectory under Horizon 2027. The firm reaffirmed its full-year technology budget of approximately $290 million, with the majority allocated to infrastructure modernization, cybersecurity, and AI/ML capabilities.",
      "Meridian reaffirmed its full-year net revenue guidance of $12.4 billion and maintained its commitment to a dividend payout ratio of approximately 40%.",
    ],
  },
];
