export interface Scheme {
    title: string;
    description: string;
    department: string;
    eligibility: string;
    link?: string; // Optional link for more information
  }
  
  export const schemes: Scheme[] = [
    {
      title: "Gruha Lakshmi Scheme",
      description: "Financial assistance to women heads of households.",
      department: "Various",
      eligibility: "Woman head of household in BPL, APL, or Antyodaya card, Karnataka resident.",
      link: "https://sevasindhu.karnataka.gov.in/" // Based on "How to Apply"
    },
    {
      title: "Pension Scheme (KBOCWWB)",
      description: "Pension for registered construction workers.",
      department: "Karnataka Building and Other Construction Workers Welfare Board",
      eligibility: "Registered with KBOCWWB, Age >= 60 years.",
      link: "https://karbwwb.karnataka.gov.in/" // Based on "How to Apply"
    },
    {
      title: "Medical Assistance (Karmika Arogya Bhagya - KBOCWWB)",
      description: "Medical assistance for construction workers and their families.",
      department: "Karnataka Building and Other Construction Workers Welfare Board",
      eligibility: "Registered KBOCWWB worker or dependent, Age >= 18 years.",
      link: "https://karbwwb.karnataka.gov.in/" // Based on "How to Apply"
    },
    {
      title: "Shrama Shakthi Scheme",
      description: "Provides financial assistance to women from SC/ST for self-employment activities.",
      department: "Department of Social Welfare",
      eligibility: "Age 18-55 years, Religious minority community, Family income <= 3.5 lakh/year, No government/PSU-employed family member, Not a KMDC loan defaulter, 50% loan repaid in 36 months for subsidy",
      link: "https://kmdc.karnataka.gov.in/" // Assuming KMDC manages this for minorities
    },
    {
      title: "Arivu Education Loan Scheme",
      description: "Education loan scheme for minority students.",
      department: "Karnataka Minority Development Corporation",
      eligibility: "Minority community students in professional courses.",
      link: "https://kmdc.karnataka.gov.in/" // Based on "How to Apply"
    },
    {
      title: "KSWDC Loan Scheme",
      description: "Loan scheme for women entrepreneurs.",
      department: "Karnataka State Womens Development Corporation",
      eligibility: "Family income <40,000/year (general) or no limit (widows, destitute, SC/ST), Age 18-45 years, 3-day EDP training, Priority for widows, destitute, SC/ST",
      link: "https://dwcd.karnataka.gov.in/" // Based on "How to Apply"
    },
    {
      title: "Krushi Aranya Protsaha Yojane (KAPY)",
      description: "Scheme to promote afforestation.",
      department: "Karnataka Forest Department",
      eligibility: "Farmers and general public.",
      link: "https://forest.karnataka.gov.in/" // Based on "How to Apply"
    },
    {
      title: "Indira Gandhi National Old Age Pension Scheme (IGNOAPS)",
      description: "Pension scheme for BPL elderly.",
      department: "Social Welfare Department",
      eligibility: "BPL cardholder, Age >= 60 years.",
      link: "https://sw.kar.nic.in/" // Based on "How to Apply"
    },
    {
      title: "Airavata Scheme",
      description: "Assistance for Scheduled Caste entrepreneurs.",
      department: "Social Welfare Department",
      eligibility: "Scheduled Caste (SC) community, No family member received >1 lakh Karnataka government subsidy",
      link: "https://sw.kar.nic.in/" // Assuming Social Welfare handles this
    },
    {
      title: "Anna Bhagya Scheme",
      description: "Food security scheme for BPL and APL families.",
      department: "Food, Civil Supplies, and Consumer Affairs Department",
      eligibility: "BPL or APL cardholder, Registered in Karnataka Ration Card system, Priority for ONORC migrant workers",
      link: "https://ahara.kar.nic.in/" // Based on "How to Apply"
    },
    {
      title: "Ksheera Bhagya Scheme",
      description: "Provides milk to schoolchildren.",
      department: "School Education Department",
      eligibility: "Enrolled in Karnataka government/aided schools, No income or category restrictions",
      link: "https://schooleducation.kar.nic.in/" // Based on "How to Apply"
    },
    {
      title: "Raitha Shakti Yojana",
      description: "Support scheme for farmers.",
      department: "Department of Agriculture",
      eligibility: "Registered Karnataka farmer, Owns agricultural land, Karnataka resident",
      link: "https://raitamitra.karnataka.gov.in/" // Based on "How to Apply"
    },
    {
      title: "Labour Card Scholarship",
      description: "Scholarship for children of construction workers.",
      department: "Karnataka Labour Welfare Board",
      eligibility: "Parent registered with Karnataka Labour Welfare Board, Family income ≤35,000/month, Student scored ≥50% (general) or ≥45% (SC/ST)",
      link: "https://klwbapps.karnataka.gov.in/" // Based on "How to Apply"
    },
    {
        title: 'Thayi Magu Sahaya Hastha Scheme',
        description: 'Financial assistance for women construction workers during maternity',
        department: 'Karnataka Building and Other Construction Workers Welfare Board',
        eligibility: 'Registered KBOCWWB woman worker, Karnataka resident, Apply via Board software',
        link: 'https://karbwwb.karnataka.gov.in/', // Based on "How to Apply"
    },
    {
        title: 'Disability Pension (KBOCWWB)',
        description: 'Pension for disabled construction workers',
        department: 'Karnataka Building and Other Construction Workers Welfare Board',
        eligibility: 'Registered KBOCWWB worker, Disability certified by Department for Empowerment of Differently Abled, Ex-gratia based on disability percentage',
        link: 'https://karbwwb.karnataka.gov.in/', // Based on "How to Apply"
    },
    {
        title: 'Janani Suraksha Yojana',
        description: 'Maternity benefit scheme for BPL or SC/ST pregnant women',
        department: 'Health and Family Welfare Services Department',
        eligibility: 'BPL or SC/ST women, Age ≥19 years, Registered with health workers for antenatal care, Karnataka resident',
        link: 'https://hfwcom.karnataka.gov.in/', // Based on likely department
    },
    {
        title: 'Pradhan Mantri Awas Yojana (Gramin)',
        description: 'Housing scheme for rural BPL households',
        department: 'Rural Development and Panchayat Raj Department',
        eligibility: 'BPL cardholder, No family member aged 15–59 years or disabled member, Casual laborer, Priority for SC/ST/minorities, Karnataka resident',
        link: 'https://rdpr.karnataka.gov.in/', // Based on likely department
    },
    {
        title: 'Health Insurance Scheme for Weavers',
        description: 'Health insurance for registered weavers',
        department: 'Department of Handlooms and Textiles',
        eligibility: 'Registered weaver (male/female), Covers first two children for maternity, Karnataka resident',
        link: 'https://handlooms.karnataka.gov.in/', // Based on "How to Apply"
    },
    {
        title: 'Vidyasiri Scholarship',
        description: 'Scholarship for backward class students',
        department: 'Backward Classes Welfare Department',
        eligibility: 'OBC/SC/ST/minority, Family income ≤2.5 lakh (OBC) or ≤1 lakh (SC/ST), ≥50% marks in previous exam, Karnataka resident',
        link: 'https://ssp.karnataka.gov.in/', // Based on likely portal
    },
      {
      title: "Karnataka Free Laptop Scheme",
      description: "Provides free laptops to 12th-pass students.",
      department: "Department of Collegiate Education",
      eligibility: "Passed 12th class in Karnataka, Registered via dce.karnataka.gov.in, Priority for economically weaker sections",
      link: "https://dce.karnataka.gov.in/" // Based on eligibility
    },
    {
      title: "Bhoochetana Scheme",
      description: "Improves soil fertility and crop productivity.",
      department: "Department of Agriculture",
      eligibility: "Registered Karnataka farmer, Participates in KVK/ICAR training, Owns agricultural land",
      link: "https://raitamitra.karnataka.gov.in/" // Assuming handled by Agriculture Dept.
    },
    {
      title: "Shaadi Bhagya Scheme",
      description: "Financial assistance for minority women for marriage.",
      department: "Karnataka Minority Development Corporation",
      eligibility: "Bride age ≥18 years, groom ≥21 years, Minority community (Muslim, Christian, Jain, Buddhist, Sikh, Parsi), Family income ≤1.5 lakh, Karnataka resident",
      link: "https://kmdc.karnataka.gov.in/" // Based on "How to Apply"
    },
    {
      title: "Krishi Bhagya Scheme",
      description: "Promotes rainwater harvesting and efficient water use in agriculture.",
      department: "Department of Agriculture",
      eligibility: "Registered Karnataka farmer, Owns agricultural land, Participates in watershed programs",
      link: "https://raitamitra.karnataka.gov.in/" // Assuming handled by Agriculture Dept.
    },
    {
      title: "National Social Assistance Programme (NSAP)",
      description: "Provides financial assistance to the elderly, widows, and disabled.",
      department: "Social Welfare Department",
      eligibility: "BPL cardholder, Age ≥60 years (old age), 18–59 years (widow), or certified disability, No other pension schemes, Karnataka resident",
      link: "https://sw.kar.nic.in/" // Based on likely department
    },
    {
      title: "Yuva Nidhi Scheme",
      description: "Provides allowance to unemployed youth.",
      department: "Department of Labour",
      eligibility: "Age 18–35 years, Karnataka resident, Unemployed, Registered with employment exchange, Not in higher education",
      link: "https://labour.karnataka.gov.in/" // Based on likely department
    },
    {
      title: "Chief Ministers Anila Bhagya Scheme",
      description: "Provides free LPG connections to BPL households.",
      department: "Food, Civil Supplies, and Consumer Affairs Department",
      eligibility: "BPL cardholder, Karnataka resident, No existing LPG connection",
      link: "https://ahara.kar.nic.in/" // Assuming managed by this department
    },
      {
      title: "Santhwana Scheme",
      description: "Provides relief to women who are victims of accidents or violence.",
      department: "Karnataka State Womens Development Corporation",
      eligibility: "Karnataka resident, Woman victim of accident, acid attack, or violence, Apply within 6 months",
      link: "https://dwcd.karnataka.gov.in/" // Based on "How to Apply"
    },
    {
      title: "Manaswini Scheme",
      description: "Provides monthly allowance to unmarried, divorced, and widowed women.",
      department: "Karnataka State Womens Development Corporation",
      eligibility: "Age 25–50 years, Unmarried/divorced/widowed, Family income ≤1 lakh, Karnataka resident",
      link: "https://dwcd.karnataka.gov.in/" // Based on "How to Apply"
    },
    {
      title: "Karmika Samman Yojana",
      description: "Provides financial assistance to unorganized sector workers.",
      department: "Labour Department",
      eligibility: "Registered with Karnataka Labour Welfare Board, Age 18–60 years, Family income ≤2 lakh",
      link: "https://labour.karnataka.gov.in/" // Based on "How to Apply"
    },
    {
      title: "Organic Farming Support Scheme",
      description: "Provides support for farmers practicing organic farming.",
      department: "Department of Agriculture",
      eligibility: "Registered Karnataka farmer, Certified organic land, Participates in KVK/NGO training",
      link: "https://raitamitra.karnataka.gov.in/" // Assuming handled by Agriculture Dept.
    },
  ];