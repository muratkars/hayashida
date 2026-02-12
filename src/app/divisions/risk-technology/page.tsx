import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Cpu,
  Database,
  Brain,
  Lock,
  Server,
  Activity,
  BarChart3,
  Globe2,
  ChevronRight,
  Layers,
  HardDrive,
  Users,
  Rocket,
  Scale,
  FileCheck,
  Network,
  Zap,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Risk & Technology",
  description:
    "Hayashida Group Risk & Technology division provides enterprise risk management, quantitative analytics, and next-generation technology infrastructure powering the firm's global operations. Over 500 million risk simulations daily.",
  keywords: [
    "enterprise risk management",
    "quantitative risk analytics",
    "technology infrastructure",
    "AI machine learning finance",
    "data platform modernization",
    "object storage",
    "risk simulations",
    "regulatory compliance",
  ],
};

const riskStats = [
  { label: "Daily Risk Simulations", value: "500M+" },
  { label: "Technology Professionals", value: "1,800+" },
  { label: "Data Centers", value: "6" },
  { label: "Uptime SLA", value: "99.99%" },
];

const quantCapabilities = [
  {
    title: "Value at Risk (VaR)",
    description:
      "Full-revaluation VaR computed across all asset classes using historical simulation, parametric, and Monte Carlo methodologies. Our VaR engine processes the firm's entire portfolio spanning equities, fixed income, FX, commodities, and derivatives with intraday recalculation windows.",
  },
  {
    title: "Stress Testing",
    description:
      "Comprehensive stress testing framework encompassing historical scenarios, hypothetical shocks, and reverse stress tests. We run over 2,000 scenario permutations daily across macro, credit, and liquidity risk factors to ensure the firm is prepared for tail-risk events.",
  },
  {
    title: "Counterparty Credit Risk",
    description:
      "Real-time counterparty exposure monitoring with potential future exposure (PFE), credit valuation adjustment (CVA), and wrong-way risk analytics. Our counterparty risk models cover more than 8,000 active counterparty relationships globally.",
  },
  {
    title: "Monte Carlo Simulation",
    description:
      "Large-scale Monte Carlo simulation engine capable of running hundreds of millions of path-dependent calculations per day. Used for exotic derivatives pricing, portfolio risk decomposition, and capital adequacy computations under Basel III/IV frameworks.",
  },
];

export default function RiskTechnologyPage() {
  return (
    <>
      <PageHeader
        title="Risk & Technology"
        subtitle="Powering enterprise risk management, quantitative analytics, and technology infrastructure across Hayashida Group's global operations."
        breadcrumbs={[
          { label: "Divisions", href: "/divisions" },
          { label: "Risk & Technology" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {riskStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-navy-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Division Overview */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-accent-red" />
              <h2 className="text-3xl font-bold text-navy-900">Division Overview</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              The Risk & Technology division serves as the backbone of Hayashida Group, providing the enterprise risk management framework and technology infrastructure that underpin every business activity across the firm. Our mandate is to safeguard the firm&apos;s financial resilience while enabling innovation and operational excellence at global scale.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With over 1,800 technology and risk professionals across six global data centers, this division operates the quantitative models, data platforms, and mission-critical systems that support trading, lending, investment management, and regulatory reporting. We are responsible for ensuring that risk is measured, monitored, and managed with the precision and speed demanded by modern global financial markets.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              In an era of exponential data growth, increasingly complex financial instruments, and evolving regulatory requirements, the division is leading a multi-year transformation to modernize Hayashida&apos;s data infrastructure and risk analytics capabilities, positioning the firm for the next decade of growth.
            </p>
          </div>
        </div>
      </section>

      {/* Quantitative Risk Analytics */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-6 h-6 text-accent-red" />
            <h2 className="text-3xl font-bold text-navy-900">
              Quantitative Risk Analytics
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">
            Our quantitative risk analytics platform processes over 500 million risk simulations daily, providing the firm with a comprehensive, real-time view of risk across all asset classes, business lines, and geographies. The computational footprint of this platform has grown threefold over the past three years, driven by increasing model complexity, regulatory demands, and the expansion of the firm&apos;s global trading activities.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl mb-12">
            The analytics engine spans Value at Risk calculations, stress testing, counterparty credit risk, and large-scale Monte Carlo simulations. Each of these capabilities is powered by proprietary models developed by our team of over 200 quantitative analysts and risk engineers, many holding advanced degrees in mathematics, physics, and financial engineering.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {quantCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-gray-50 rounded-lg border border-gray-100 p-8"
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  {cap.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-navy-900 rounded-xl p-8 lg:p-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "500M+", label: "Risk simulations per day" },
                { value: "200+", label: "Quantitative analysts" },
                { value: "2,000+", label: "Stress scenarios daily" },
                { value: "8,000+", label: "Active counterparties monitored" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white">
                    {item.value}
                  </div>
                  <div className="text-sm text-navy-400 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Platforms */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Server className="w-6 h-6 text-accent-red" />
            <h2 className="text-3xl font-bold text-navy-900">
              Infrastructure & Platforms
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">
            The firm&apos;s risk and trading infrastructure has historically been built on traditional NAS/SAN storage architectures. While this foundation served the firm reliably for many years, the explosive growth in data volume and computational intensity has exposed fundamental scalability challenges. Our risk data footprint now spans multiple petabytes, and the volume of data generated continues to accelerate with each new trading desk, product, and regulatory mandate.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl mb-12">
            To address these challenges, the division is actively evaluating S3-compatible, high-performance object storage solutions to replace legacy file-based storage and support next-generation analytics, AI/ML training pipelines, and real-time intraday risk calculations. The target architecture must sustain throughput exceeding 200 GB/s for end-of-day batch risk computations while simultaneously supporting random-access read patterns for interactive analytics workloads.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: HardDrive,
                title: "Legacy NAS/SAN Storage",
                description:
                  "Current infrastructure built on traditional NAS and SAN architectures. Facing performance bottlenecks, scalability limits, and increasing total cost of ownership as data volumes grow beyond petabyte scale. Vendor lock-in creates additional risk.",
              },
              {
                icon: Database,
                title: "Petabyte-Scale Risk Data",
                description:
                  "The firm's risk data estate encompasses multiple petabytes of historical market data, position data, trade data, counterparty data, and computed risk metrics. This data must be accessible for both batch processing and real-time query workloads.",
              },
              {
                icon: Zap,
                title: "Real-Time Intraday Risk",
                description:
                  "Trading desks require intraday risk recalculations with latency measured in minutes, not hours. Current infrastructure struggles to meet this requirement during peak trading periods, particularly for complex derivatives portfolios.",
              },
              {
                icon: Layers,
                title: "S3-Compatible Object Storage",
                description:
                  "Evaluating high-performance, S3-compatible object storage to provide a scalable, cost-efficient foundation for the firm's data platform. Target architecture must support 200 GB/s throughput for batch risk computations and scale elastically.",
              },
              {
                icon: Cpu,
                title: "AI/ML Pipeline Infrastructure",
                description:
                  "Modern AI and machine learning workloads require data infrastructure that can feed GPU clusters at scale. Current NAS-based storage creates I/O bottlenecks that limit model training throughput and iteration speed for quantitative research teams.",
              },
              {
                icon: Network,
                title: "Multi-Site Replication",
                description:
                  "Risk data must be replicated across multiple data centers for disaster recovery and regulatory compliance. Current replication mechanisms are complex, expensive, and cannot guarantee the recovery point objectives demanded by regulators.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg border border-gray-200 p-8"
              >
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl border border-gray-200 p-8 lg:p-10">
            <h3 className="text-xl font-bold text-navy-900 mb-6">
              Infrastructure at a Glance
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "6", label: "Global data centers" },
                { value: "PB-scale", label: "Risk data footprint" },
                { value: "200 GB/s", label: "Target batch throughput" },
                { value: "99.99%", label: "Platform uptime SLA" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-gray-50 border border-gray-100 rounded-lg p-5 text-center"
                >
                  <div className="text-2xl font-bold text-navy-900">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Horizon 2027 */}
      <section className="bg-navy-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="w-6 h-6 text-accent-red" />
            <h2 className="text-3xl font-bold">Horizon 2027</h2>
          </div>
          <p className="text-navy-200 text-sm font-semibold uppercase tracking-wider mb-6">
            Firm-Wide Digital Transformation Initiative
          </p>
          <p className="text-navy-300 text-lg leading-relaxed max-w-3xl mb-6">
            Horizon 2027 is Hayashida Group&apos;s flagship digital transformation initiative, a comprehensive program to modernize the firm&apos;s entire data infrastructure and build an AI-ready analytics platform. The initiative represents one of the most ambitious technology transformation programs in Japanese financial services.
          </p>
          <p className="text-navy-300 leading-relaxed max-w-3xl mb-12">
            At its core, Horizon 2027 involves the migration from legacy NAS/SAN storage to cloud-native, S3-compatible object storage, enabling the firm to unlock the full potential of its data assets. The program encompasses data lake architecture, real-time streaming pipelines, unified data governance, and the deployment of AI/ML infrastructure at enterprise scale. The targeted outcome is a 40% reduction in total cost of ownership for data infrastructure while simultaneously delivering a step-change improvement in performance, scalability, and analytical capability.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                value: "40%",
                label: "Target TCO reduction",
                detail: "Compared to current NAS/SAN infrastructure",
              },
              {
                value: "10x",
                label: "Data throughput improvement",
                detail: "End-of-day batch processing acceleration",
              },
              {
                value: "2027",
                label: "Full migration target",
                detail: "Phased rollout beginning 2025",
              },
              {
                value: "¥45B",
                label: "Total program investment",
                detail: "Multi-year capital allocation",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-navy-800/50 border border-navy-700 rounded-lg p-6"
              >
                <div className="text-3xl font-bold text-white">{item.value}</div>
                <div className="text-sm font-semibold text-navy-200 mt-2">
                  {item.label}
                </div>
                <div className="text-xs text-navy-400 mt-1">{item.detail}</div>
              </div>
            ))}
          </div>

          <div className="bg-navy-800/30 border border-navy-700 rounded-xl p-8 lg:p-10">
            <h3 className="text-xl font-bold mb-6">Key Program Workstreams</h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Migration from NAS/SAN to S3-compatible object storage",
                "Enterprise data lake with unified governance layer",
                "Real-time streaming data pipelines for intraday risk",
                "GPU cluster infrastructure for AI/ML model training",
                "Cloud-native microservices architecture for risk engines",
                "Data catalog and lineage tracking across all business lines",
                "Automated data quality monitoring and anomaly detection",
                "Multi-region active-active data replication",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 py-2">
                  <ChevronRight className="w-4 h-4 text-accent-red mt-0.5 shrink-0" />
                  <span className="text-navy-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-6 h-6 text-accent-red" />
            <h2 className="text-3xl font-bold text-navy-900">
              Regulatory Compliance
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">
            As a global systemically important financial institution, Hayashida Group operates under the oversight of multiple regulatory authorities across jurisdictions. The Risk & Technology division is responsible for ensuring that the firm&apos;s data infrastructure and risk management practices meet or exceed the requirements of every applicable regulatory framework.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl mb-12">
            Our regulatory technology stack provides data immutability through write-once-read-many (WORM) storage policies, comprehensive audit trails for every data modification and access event, and multi-region replication to satisfy data sovereignty requirements across all jurisdictions where the firm operates. These capabilities are critical for maintaining the trust of regulators, clients, and stakeholders.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-accent-red" />
                <h3 className="text-lg font-semibold text-navy-900">
                  Data Governance & Immutability
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Write-once-read-many (WORM) storage policies for regulatory records",
                  "Comprehensive audit trails for all data access and modification events",
                  "Automated data retention and lifecycle management across all asset classes",
                  "Cryptographic integrity verification for stored risk computations",
                  "Tamper-evident logging with real-time alerting for anomalous access patterns",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-navy-600 mt-0.5 shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-5 h-5 text-accent-red" />
                <h3 className="text-lg font-semibold text-navy-900">
                  Multi-Region Data Sovereignty
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Multi-region data replication with configurable data residency policies",
                  "Jurisdictional data isolation to comply with local data sovereignty laws",
                  "Cross-border data transfer frameworks aligned with regulatory guidance",
                  "Automated compliance reporting for data localization requirements",
                  "Real-time monitoring of data flows across jurisdictional boundaries",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-navy-600 mt-0.5 shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                regulator: "JFSA",
                full: "Japan Financial Services Agency",
                detail: "Primary regulator for all Japan-domiciled entities",
              },
              {
                regulator: "MAS",
                full: "Monetary Authority of Singapore",
                detail: "Oversight of Southeast Asia operations",
              },
              {
                regulator: "FCA",
                full: "Financial Conduct Authority",
                detail: "Regulation of UK and EMEA business activities",
              },
              {
                regulator: "SEC",
                full: "Securities and Exchange Commission",
                detail: "Compliance for US broker-dealer and advisory operations",
              },
            ].map((reg) => (
              <div
                key={reg.regulator}
                className="bg-navy-900 rounded-lg p-6 text-center"
              >
                <div className="text-2xl font-bold text-white">
                  {reg.regulator}
                </div>
                <div className="text-xs text-navy-400 mt-1">{reg.full}</div>
                <div className="text-xs text-navy-500 mt-2">{reg.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Machine Learning */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-6 h-6 text-accent-red" />
            <h2 className="text-3xl font-bold text-navy-900">
              AI & Machine Learning
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">
            Hayashida Group is investing heavily in artificial intelligence and machine learning to transform risk management, trading, and decision-making across the firm. The Risk & Technology division is building the foundational ML training pipelines and GPU cluster infrastructure required to support these ambitions at enterprise scale.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl mb-12">
            Our AI research program spans multiple initiatives, from deploying large language models for market risk prediction and natural language processing of regulatory filings to training deep learning models for anomaly detection in trading patterns. The division operates dedicated GPU clusters optimized for distributed model training and is pioneering the application of transformer architectures to financial time-series data.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Cpu,
                title: "GPU Cluster Infrastructure",
                description:
                  "Dedicated GPU clusters running NVIDIA A100 and H100 accelerators, optimized for distributed training of large-scale models. Our infrastructure supports multi-node training jobs across thousands of GPUs with high-bandwidth interconnects and optimized data loading pipelines from our object storage layer.",
              },
              {
                icon: Globe2,
                title: "University of Tokyo Partnership",
                description:
                  "A strategic research partnership with the University of Tokyo's Department of Mathematical Informatics, focused on advancing the application of AI to financial risk modeling. Joint research areas include reinforcement learning for dynamic hedging, graph neural networks for counterparty risk, and generative models for scenario analysis.",
              },
              {
                icon: BarChart3,
                title: "LLMs for Market Risk Prediction",
                description:
                  "Developing proprietary large language models trained on financial text data, earnings transcripts, central bank communications, and market microstructure data. These models augment traditional quantitative risk models with the ability to interpret unstructured information and identify emerging risk signals ahead of conventional indicators.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg border border-gray-200 p-8"
              >
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8 lg:p-10">
            <h3 className="text-xl font-bold text-navy-900 mb-6">
              AI/ML Research Focus Areas
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Large language models for market risk prediction and early warning",
                "Deep learning for anomaly detection in trading and transaction data",
                "Reinforcement learning for dynamic portfolio hedging strategies",
                "Graph neural networks for counterparty credit risk modeling",
                "Natural language processing for regulatory document analysis",
                "Generative models for synthetic market scenario generation",
                "Transformer architectures for financial time-series forecasting",
                "Federated learning for privacy-preserving cross-entity model training",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 py-2">
                  <ChevronRight className="w-4 h-4 text-accent-red mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-8">Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg border border-gray-100 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900">
                    Yuki Hasegawa
                  </h3>
                  <p className="text-gray-500">Chief Technology Officer</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Yuki Hasegawa serves as Chief Technology Officer of Hayashida Group, leading the firm&apos;s technology strategy, infrastructure, and digital transformation initiatives. With a background in distributed systems and computational finance, Hasegawa-san joined Hayashida from a major global technology company where she led cloud infrastructure engineering. She is the architect of the Horizon 2027 program and a recognized voice in the intersection of financial services and technology innovation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg border border-gray-100 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900">David Chen</h3>
                  <p className="text-gray-500">Global Head of Risk</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                David Chen leads the firm&apos;s global risk management function, overseeing market risk, credit risk, operational risk, and model risk across all business lines and geographies. A former quantitative researcher with a PhD in applied mathematics from MIT, Chen brings over 18 years of experience in financial risk management. He previously served as Chief Risk Officer at a leading Asian bank and is a frequent speaker on systemic risk, AI governance, and the future of risk management in financial services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-navy-900">
              Explore Our Other Divisions
            </h3>
            <p className="text-gray-500 mt-1">
              Learn how our integrated platform delivers comprehensive solutions.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/divisions/investment-banking"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-accent-red transition-colors"
            >
              Investment Banking <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/divisions"
              className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red-dark text-white px-6 py-2.5 rounded font-semibold text-sm transition-colors"
            >
              All Divisions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
