export const projects = [
  {
    title: 'Industry Disruption & Competitive Strategy Analysis — Thyrocare',
    category: 'Strategy',
    type: 'Individual Academic Case Analysis (HBS Case) · GLIM Chennai',
    summary:
      "In-depth strategic management analysis of Thyrocare's disruption of India's diagnostic industry, applying industry structure, VRIO, and corporate diversification frameworks through an iterative AI-guided analytical process.",
    highlights: [
      'Analyzed the "one big kitchen" centralization model vs. rivals\' hub-and-spoke networks, mapping value-chain reconfiguration and disintermediation of the physician gatekeeper.',
      "Applied VRIO analysis through the Organization lens to explain inimitability, identifying rivals' sick-care revenue dependency as the binding cannibalization barrier rather than capital constraints.",
      'Classified the strategy as focused cost leadership (Porter) and assessed corporate diversification (Aarogyam, Whaters, Nuclear Healthcare) by degree of competence transfer, culminating in a management recommendation.',
    ],
    tools: ['Strategic Management', 'VRIO', 'Industry Analysis'],
  },
  {
    title: 'Capacity & Manufacturing Lead Time Analysis — Stonehaven, Inc.',
    category: 'Operations',
    type: 'Academic Case Analysis (HBS Case) · GLIM Chennai',
    summary:
      "Quantitative operations case analyzing a footwear manufacturer's five-department production flow to separate daily capacity from batch lead time and identify the true bottleneck.",
    highlights: [
      'Computed department-wise processing times across Cutting, Kitting, Stitching, Steaming, and Lasting to identify Cutting as the bottleneck, deriving daily capacity of ~109 pairs/day.',
      "Applied Little's Law (I = R × T) using WIP buffer and in-process inventory data to calculate a manufacturing lead time of 1.05 working days (8.43 hours) per batch.",
      'Distinguished capacity (bottleneck-driven output) from lead time (queueing-driven), showing ~78% of lead time was idle buffer wait — pinpointing WIP reduction as the key lever for cutting throughput time.',
    ],
    tools: ["Little's Law", 'Bottleneck Analysis'],
  },
  {
    title: 'ERP Implementation & Business Simulation — SmartBrew Coffee Pvt. Ltd.',
    category: 'ERP',
    type: 'Academic Simulation Lab · GLIM Chennai',
    summary:
      "Hands-on ERP simulation configuring and operating a multi-product coffee manufacturer's end-to-end business cycle on Odoo, spanning company setup through management reporting.",
    highlights: [
      'Configured core master data, departments, and role-based access, then executed the full Order-to-Cash cycle — CRM lead through sales order, delivery, invoicing, and payment reconciliation.',
      'Ran the Procure-to-Pay cycle (RFQ to goods receipt) and Manufacturing workflow using a Bill of Materials to convert raw coffee beans into finished, sellable stock.',
      'Synthesized Sales, Inventory, and Financial dashboards into a data-driven management recommendation for leadership.',
    ],
    tools: ['Odoo ERP'],
  },
  {
    title: 'Cost Structure & Break-Even Analysis — Chennai Beverages Campus Café',
    category: 'Economics',
    type: 'Field-Based Microeconomics Study · GLIM Chennai',
    summary:
      "Field-based microeconomics study analyzing the fixed-variable cost structure of a campus café, benchmarked against an AI-generated theoretical model to reconcile assumptions with ground-reality data.",
    highlights: [
      'Conducted primary field research and owner interviews to capture actual fixed, variable, and semi-variable costs (rent, staff, raw materials, utilities) across daily/monthly frequencies.',
      'Computed Total Fixed Cost, Total Variable Cost, and per-unit economics across monthly units to build Average and Marginal Cost curves.',
      'Reconciled AI-projected cost estimates against actual field data, identifying key variances in labor costs, real estate assumptions, and economies of scale.',
    ],
    tools: ['MS Excel'],
  },
  {
    title: 'Macroeconomic Analysis — Yes Bank & RBI Policy Impact',
    category: 'Macroeconomics',
    type: 'Individual Assignment · GLIM Chennai',
    summary:
      "Analyzed the macroeconomic implications of RBI's repo rate cuts on Yes Bank's financial performance under the EBLR framework.",
    highlights: [
      'Examined NIM dynamics and asymmetric repricing lag between loan portfolios and term deposit costs.',
      'Studied FCNR(B) deposit strategy as a dual-sided margin pressure.',
      "Commentary on Yes Bank's post-crisis liability restructuring and monetary policy sensitivity.",
    ],
    tools: ['Excel', 'RBI policy data'],
  },
]

export const empiricalProjects = [
  {
    title: 'BrandPulse AI Analyst — Cross-Channel Complaint Diagnosis',
    category: 'Empirical Study',
    type: 'Independent Empirical Study · GLIM Chennai',
    summary:
      'This study proposes BrandPulse AI Analyst, an AI-driven system that reads reviews scattered across multiple sales channels, automatically clusters similar complaints without predefined categories, infers the likely root cause behind each cluster, and allows a brand manager to query the system in plain English (e.g., "why is Blinkit underperforming this month?").',
    highlights: [
      'Unifies cross-channel review data — pulling scattered D2C complaints from multiple sales platforms into a single structured pipeline for analysis.',
      'Applies embeddings-based clustering to automatically group similar complaints without relying on predefined categories, surfacing emerging complaint spikes as they form.',
      'Infers the likely root cause behind each complaint cluster, turning unstructured review text into diagnosable, actionable signals.',
      'Provides a natural-language query interface so brand managers can ask plain-English questions and get an instant, auto-diagnosed answer.',
    ],
    tools: ['Embeddings', 'Clustering', 'NLP', 'Python'],
  },
]

export const karmaYogaProjects = [
  {
    title: 'Climate Resilience & Adaptive Strategies — Veerapuram, Chennai',
    category: 'Sustainability',
    type: 'Karma Yoga Committee Project Leader · GLIM Chennai',
    summary:
      'Field-based sustainability initiative addressing climate vulnerability in Tamil Nadu villages through farmer engagement, SHG interaction, and community-driven micro-enterprise design.',
    highlights: [
      'Conducted field visits identifying ~50% crop losses, rainfall/borewell dependence, and income leakage through intermediaries via farmer and SHG interactions.',
      'Designed three climate-resilient micro-enterprise models — vermicompost production, village farming, and neem oil/bio-pesticide production — using locally available resources.',
      'Organized a Climate Change Awareness Camp, distributing saplings and vegetable seeds to promote sustainable agricultural practices and strengthen climate-resilient livelihoods.',
    ],
    tools: ['Field Research', 'Community Engagement'],
    sidePage: 'images/karma-yoga/newsletter-page-6.jpg',
  },
]
