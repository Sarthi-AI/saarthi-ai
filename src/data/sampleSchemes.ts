
import { Scheme } from '../components/SchemeCard';

export const sampleSchemes: Scheme[] = [
  {
    name: "PMEGP (Prime Minister's Employment Generation Programme)",
    description: "A credit-linked subsidy scheme that provides financial assistance to establish micro-enterprises in rural and urban areas.",
    eligibility: "Individuals above 18 years, SHGs, cooperative societies, and charitable trusts with family income below ₹3 lakhs per annum.",
    category: ["self-employment", "rural", "SHG"],
    state: "All",
    sector: "MSME",
    language: "multi",
    apply_link: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp"
  },
  {
    name: "MUDRA Loan (Pradhan Mantri MUDRA Yojana)",
    description: "Financial support for small entrepreneurs and micro business units to help them grow their business activities.",
    eligibility: "Small manufacturing units, shopkeepers, service sector units, and small industries.",
    category: ["loan", "micro-enterprise", "startup"],
    state: "All",
    sector: "Finance",
    language: "multi",
    apply_link: "https://www.mudra.org.in/"
  },
  {
    name: "DAY-NULM (Deendayal Antyodaya Yojana-National Urban Livelihoods Mission)",
    description: "Aims to reduce poverty among the urban poor by providing them access to self-employment and skilled wage employment opportunities.",
    eligibility: "Urban poor, particularly women and the unemployed living below the poverty line.",
    category: ["urban", "skill-development", "self-employment"],
    state: "All",
    sector: "Urban Development",
    language: "multi",
    apply_link: "https://nulm.gov.in/"
  },
  {
    name: "NSAP (National Social Assistance Programme)",
    description: "Financial assistance to the elderly, widows, and persons with disabilities in the form of social pensions.",
    eligibility: "Elderly persons (60+ years), widows, and persons with disabilities living below the poverty line.",
    category: ["pension", "social-welfare", "disability"],
    state: "All",
    sector: "Social Welfare",
    language: "multi",
    apply_link: "https://nsap.nic.in/"
  },
  {
    name: "Agriculture Infrastructure Fund (AIF)",
    description: "Financial support for investment in agriculture infrastructure and community farming assets.",
    eligibility: "Farmers, FPOs, APMCs, Cooperatives, Rural entrepreneurs, Start-ups, and Joint Liability Groups.",
    category: ["agriculture", "infrastructure", "farming"],
    state: "All",
    sector: "Agriculture",
    language: "multi",
    apply_link: "https://agriinfra.dac.gov.in/"
  }
];
