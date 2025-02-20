import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import dropdown from "../../assets/media/dropdown.svg";
import dropup from "../../assets/media/dropup.svg";

interface Paper {
  id: string;
  title: string;
  citation: string;
  year: string;
}

interface ResearchCategory {
  title: string;
  papers: Paper[];
  id: string;
}

const researchData: ResearchCategory[] = [
  {
    title: "Psychology of Learning: Anxiety and Prediction Errors",
    id: "psychology-anxiety-prediction-errors",
    papers: [
      {
        id: "https://www.jstor.org/stable/2696443",
        title:
          "Psychological Expected Utility Theory and Anticipatory Feelings",
        citation: "Quarterly Journal of Economics",
        year: "2001",
      },
      {
        id: "https://bpb-us-e1.wpmucdn.com/wp.nyu.edu/dist/2/8350/files/2017/12/Fear-as-a-Policy-Instrument.pdf",
        title: "Fear as a Policy Instrument",
        citation: "In Time and Decision, eds. G. Loewenstein and D. Read",
        year: "2003",
      },
      {
        id: "https://www.jstor.org/stable/1593781",
        title: "AIDS Policy and Psychology: A Mechanism Design Approach",
        citation: "RAND Journal of Economics",
        year: "2003",
      },
      {
        id: "https://www.jstor.org/stable/3590292",
        title: "The Supply of Information by a Concerned Expert",
        citation: "Economic Journal",
        year: "2004",
      },
      {
        id: "https://academic.oup.com/qje/article-abstract/123/2/663/1930862",
        title: "Dopamine, Reward Prediction Error, and Economics",
        citation: "Quarterly Journal of Economics",
        year: "2008",
      },
      {
        id: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4092011/",
        title: "Measuring Beliefs and Rewards: A Neuroeconomic Approach",
        citation: "Quarterly Journal of Economics",
        year: "2010",
      },
      {
        id: "https://www.nber.org/system/files/working_papers/w25707/w25707.pdf",
        title: "Wishful Thinking",
        citation: "NBER Working Paper",
        year: "2019",
      },
    ],
  },
  {
    title:
      "Data Engineering for Cognitive Economics: State Dependent Stochastic Choice and Choice Process Data",
    id: "cognitive-data-engineering",
    papers: [
      {
        id: "https://www.jstor.org/stable/2696443",
        title:
          "Psychological Expected Utility Theory and Anticipatory Feelings",
        citation: "Quarterly Journal of Economics",
        year: "2001",
      },
      {
        id: "https://academic.oup.com/book/2119/chapter-abstract/142058523?redirectedFrom=fulltext",
        title: "In Defense of Mindless Economics",
        citation: "Foundations of Positive and Normative Economics, MIT Press",
        year: "2008",
      },
      {
        id: "https://link.springer.com/chapter/10.1007/978-94-010-9276-0_8",
        title: "Random Orderings and Stochastic Theories of Response",
        citation: "Cowles Foundation Discussion Paper",
        year: "1959",
      },
      {
        id: "https://www.aeaweb.org/articles?id=10.1257/aer.101.7.2899",
        title: "Search and Satisficing",
        citation: "American Economic Review",
        year: "2011",
      },
      {
        id: "https://link.springer.com/article/10.1007/s40881-015-0003-5",
        title: "Naïve Play and the Process of Choice in Guessing Games",
        citation: "Journal of the Economic Science Association",
        year: "2015",
      },
      {
        id: "https://onlinelibrary.wiley.com/doi/abs/10.1111/ecoj.12130",
        title: "A Testable Theory of Imperfect Perception",
        citation: "Economic Journal",
        year: "2015",
      },
      {
        id: "https://onlinelibrary.wiley.com/doi/10.1111/ecin.12294",
        title:
          "The Dual-Process Drift Diffusion Model: Evidence from Response Times",
        citation: "Economic Inquiry",
        year: "2016",
      },
      {
        id: "https://shs.cairn.info/revue-economique-2017-5-page-747?lang=fr",
        title: "Defaults and Attention: The Dropout Effect",
        citation: "Revue économique",
        year: "2017",
      },
      {
        id: "https://www.annualreviews.org/content/journals/10.1146/annurev-economics-080315-015417",
        title: "Measuring and Modeling Attention",
        citation: "Annual Review of Economics",
        year: "2016",
      },
      {
        id: "https://academic.oup.com/qje/article/135/3/1681/5819451",
        title: "Rational Inattention, Competitive Supply, and Psychometrics",
        citation: "Quarterly Journal of Economics",
        year: "2020",
      },
      {
        id: "https://www.nber.org/papers/w32587",
        title:
          "Judging the Judges: Indexing of Complex Information Reduces Injustice",
        citation: "NBER Working Paper 32587",
        year: "2024",
      },
      {
        id: "https://www.nber.org/papers/w30600",
        title: "Modeling Machine Learning: A Cognitive Economic Approach",
        citation: "NBER Working Paper 30600",
        year: "2022",
      },
      {
        id: "https://www.nber.org/papers/w31674",
        title:
          "Economic Decision-Making Skill Predicts Income in Two Countries",
        citation: "NBER Working Paper 31674",
        year: "2023",
      },
      {
        id: "https://www.nber.org/papers/w33021",
        title:
          "The ABC’s of Who Benefits from Working with AI: Ability, Beliefs, and Calibration",
        citation: "NBER Working Paper 33021",
        year: "2024",
      },
      {
        id: "https://link.springer.com/book/10.1007/978-3-031-73042-9",
        title:
          "An Introduction to Cognitive Economics: The Science of Mistakes",
        citation: "Palgrave Macmillan Pivot",
        year: "2025",
      },
      {
        id: "https://www.nber.org/papers/w29378",
        title: "Data Engineering for Cognitive Economics",
        citation: "Journal of Economic Literature",
        year: "2025",
      },
      {
        id: "",
        title:
          "Improving Human and Machine Classification through Cognitive-Inspired Data Engineering",
        citation: "Unpublished (2025)",
        year: "2025",
      },
    ],
  },
  {
    title: "Cognitive Economic Modeling and Rational Inattention Theory",
    id: "cognitive-economic-modeling-and-rational-inattention-theory",
    papers: [
      {
        id: "https://onlinelibrary.wiley.com/doi/abs/10.3982/TE592",
        title: "Search, Choice, and Revealed Preference",
        citation: "Journal of Economic Theory",
        year: "2011",
      },
      {
        id: "https://onlinelibrary.wiley.com/doi/abs/10.1111/ecoj.12130",
        title: "A Testable Theory of Imperfect Perception",
        citation: "Economic Journal",
        year: "2015",
      },
      {
        id: "https://www.aeaweb.org/articles?id=10.1257/aer.20140117",
        title:
          "Rational Inattention, Revealed Preference, and Costly Information Acquisition",
        citation: "American Economic Review",
        year: "2015",
      },
      {
        id: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2575487",
        title: "Social Learning and Selective Attention",
        citation: "NBER Working Paper 21001",
        year: "2015",
      },
      {
        id: "https://academic.oup.com/restud/article-abstract/86/3/1061/5060717?redirectedFrom=fulltext",
        title:
          "Rational Inattention, Optimal Consideration Sets, and Stochastic Choice",
        citation: "Review of Economic Studies",
        year: "2019",
      },
      {
        id: "https://www.journals.uchicago.edu/doi/abs/10.1086/719276",
        title:
          "Rationally Inattentive Behavior: Characterizing and Generalizing Shannon Entropy",
        citation: "Journal of Political Economy",
        year: "2022",
      },
      {
        id: "https://www.nber.org/papers/w29586",
        title: "Inattention and Inequity in School Matching",
        citation: "NBER Working Paper 29586",
        year: "2021",
      },
      {
        id: "https://academic.oup.com/qje/article/135/3/1681/5819451",
        title: "Rational Inattention, Competitive Supply, and Psychometrics",
        citation: "Quarterly Journal of Economics",
        year: "2020",
      },
      {
        id: "https://www.journals.uchicago.edu/doi/abs/10.1086/716104",
        title: "Comparisons of Decisions under Unknown Experiments",
        citation: "Journal of Political Economy",
        year: "2021",
      },
      {
        id: "https://ideas.repec.org/b/wsi/wsbook/13026.html",
        title:
          "The Science of Mistakes: Lecture Notes on Economic Data Engineering",
        citation: "World Scientific Press",
        year: "2023",
      },
      {
        id: "https://bpb-us-e1.wpmucdn.com/wp.nyu.edu/dist/3/7631/files/2022/06/Revealed_Bayesian_Learning_Presentation-3-Andrew-Caplin.pdf",
        title: "Revealed Bayesian Learning",
        citation: "Economic Theory",
        year: "2024",
      },
      {
        id: "https://www.nber.org/papers/w30600",
        title: "Modeling Machine Learning: A Cognitive Economic Approach",
        citation: "Journal of Economic Theory",
        year: "2025",
      },
      {
        id: "https://link.springer.com/book/10.1007/978-3-031-73042-9",
        title:
          "An Introduction to Cognitive Economics: The Science of Mistakes",
        citation: "Palgrave Macmillan Pivot",
        year: "2025",
      },
      {
        id: "https://www.nber.org/papers/w29378",
        title: "Data Engineering for Cognitive Economics",
        citation: "Journal of Economic Literature",
        year: "2025",
      },
    ],
  },

  {
    title: "Human-AI Interactions",
    id: "human-ai-interactions-paper",
    papers: [
      {
        id: "https://www.nber.org/papers/w30600",
        title: "Modeling Machine Learning: A Cognitive Economic Approach",
        citation: "Journal of Economic Theory",
        year: "2025",
      },
      {
        id: "https://www.nber.org/papers/w33021",
        title:
          "The ABC’s of Who Benefits from Working with AI: Ability, Beliefs, and Calibration",
        citation: "NBER Working Paper 33021",
        year: "2024",
      },
      {
        id: "",
        title:
          "Improving Human and Machine Classification through Cognitive-Inspired Data Engineering",
        citation: "Unpublished",
        year: "2025",
      },
    ],
  },
  {
    title:
      "Life Cycle Savings, Strategic Survey Questions, and Contingent Beliefs",
    id: "life-cycle-savings-strategic-survey-questions",
    papers: [
      {
        id: "https://www.jstor.org/stable/2965550",
        title:
          "Using Expectations Data to Study Subjective Income Expectations",
        citation: "Journal of the American Statistical Association",
        year: "1997",
      },
      {
        id: "https://www.jstor.org/stable/2951245",
        title: "Preference Parameters and Behavioral Heterogeneity",
        citation: "Quarterly Journal of Economics",
        year: "1997",
      },
      {
        id: "https://www.jstor.org/stable/2295722",
        title: "Myopia and Inconsistency in Dynamic Utility Maximization",
        citation: "Review of Economic Studies",
        year: "1955",
      },
      {
        id: "https://www.nber.org/system/files/working_papers/w8920/w8920.pdf",
        title: "Wealth Accumulation and the Propensity to Plan",
        citation: "American Economic Review",
        year: "2003",
      },
      {
        id: "https://www.annualreviews.org/content/journals/10.1146/annurev-economics-080315-015417",
        title: "Measuring Self-Control Problems",
        citation: "American Economic Review",
        year: "2007",
      },
      {
        id: "https://onlinelibrary.wiley.com/doi/abs/10.1111",
        title: "The Joy of Giving or Assisted Living?",
        citation: "Journal of Finance",
        year: "2011",
      },
      {
        id: "https://www.journals.uchicago.edu/doi/abs/10.1086/706686?mobileUi=0&",
        title: "Long-Term Care Utility and Late-in-Life Savings",
        citation: "Unpublished",
        year: "2022",
      },
      {
        id: "https://www.nber.org/papers/w20973",
        title: "Long Term Care in the Family Context",
        citation: "Economic Inquiry",
        year: "2016",
      },
      {
        id: "https://academic.oup.com/book/5658/chapter-abstract/148713451?redirectedFrom=fulltext",
        title: "Annuity Valuation, Long Term Care, and Bequest Motives",
        citation: "Oxford University Press",
        year: "2008",
      },
      {
        id: "https://www.nber.org/papers/w22726",
        title: "The Long-Term-Care Insurance Puzzle: Modeling and Measurement",
        citation: "NBER Working Paper 22726",
        year: "2016",
      },
      {
        id: "https://www.nber.org/papers/w29634",
        title:
          "Cognitive Decline, Limited Awareness, Imperfect Agency, and Financial Well-being",
        citation: "American Economic Review: Insights",
        year: "2023",
      },
      {
        id: "https://www.nber.org/papers/w31019",
        title: "Subjective Earnings Risk",
        citation: "NBER Working Paper 31019",
        year: "2023",
      },
      {
        id: "https://economics.sas.upenn.edu/system/files/2022-01/JMP_AlisonAndrew_MMReturns%286%29.pdf",
        title: "Revealed Beliefs and the Marriage Market Return to Education",
        citation: "Under Revision for Quarterly Journal of Economics",
        year: "2023",
      },
      {
        id: "https://onlinelibrary.wiley.com/doi/10.3982/ECTA22780",
        title:
          "Economics and Measurement: New Measures to Model Decision-Making",
        citation: "Econometrica",
        year: "2024",
      },
    ],
  },
  {
    title:
      "Job Transitions, Career Dynamics, and Earnings in the Cognitive Economy",
    id: "job-transitions-career-dynamics",
    papers: [
      {
        id: "https://www.nber.org/papers/w31674",
        title:
          "Economic Decision-Making Skill Predicts Income in Two Countries",
        citation: "NBER Working Paper 31674",
        year: "2023",
      },
      {
        id: "https://www.nber.org/papers/w31019",
        title: "Subjective Earnings Risk",
        citation: "NBER Working Paper 31019",
        year: "2023",
      },
      {
        id: "https://www.aeaweb.org/articles?id=10.1257/mac.20170403",
        title: "Older Americans Would Work Longer If Jobs Were Flexible",
        citation: "American Economic Journal: Macroeconomics",
        year: "2020",
      },
      {
        id: "https://www.nber.org/papers/w30342",
        title:
          "How Worker Productivity and Wages Grow with Tenure and Experience: The Firm Perspective",
        citation: "NBER Working Paper 30342",
        year: "2022",
      },
      {
        id: "https://www.nber.org/papers/w32309",
        title:
          "Identification of Marginal Treatment Effects using Subjective Expectations",
        citation: "NBER Working Paper 32309",
        year: "2024",
      },
      {
        id: "",
        title: "Women, Children, and Work: The Partner Effect",
        citation: "Unpublished",
        year: "2025",
      },
    ],
  },
  {
    title: "Real Estate and Housing Finance",
    id: "real-estate-housing-finance",
    papers: [
      {
        id: "https://www.nber.org/papers/w31674",
        title:
          "Economic Decision-Making Skill Predicts Income in Two Countries",
        citation: "NBER Working Paper 31674",
        year: "2023",
      },
      {
        id: "https://www.nber.org/papers/w31019",
        title: "Subjective Earnings Risk",
        citation: "NBER Working Paper 31019",
        year: "2023",
      },
      {
        id: "https://www.aeaweb.org/articles?id=10.1257/mac.20170403",
        title: "Older Americans Would Work Longer If Jobs Were Flexible",
        citation: "American Economic Journal: Macroeconomics",
        year: "2020",
      },
      {
        id: "https://www.nber.org/papers/w30342",
        title:
          "How Worker Productivity and Wages Grow with Tenure and Experience: The Firm Perspective",
        citation: "NBER Working Paper 30342",
        year: "2022",
      },
      {
        id: "https://www.nber.org/papers/w32309",
        title:
          "Identification of Marginal Treatment Effects using Subjective Expectations",
        citation: "NBER Working Paper 32309",
        year: "2024",
      },
      {
        id: "",
        title: "Women, Children, and Work: The Partner Effect",
        citation: "Unpublished",
        year: "2025",
      },
      {
        id: "https://www.jstor.org/stable/2953710",
        title:
          "Collateral Damage: How Refinancing Constraints Exacerbate Regional Recessions",
        citation: "Journal of Money, Credit and Banking",
        year: "1997",
      },
      {
        id: "https://www.academia.edu/98113389/Housing_Partnerships_A_new_system_of_housing_Finance",
        title: "Housing Partnerships: A New System of Housing Finance",
        citation: "Columbia University Discussion Paper 705",
        year: "1994",
      },
      {
        id: "https://mitpress.mit.edu/9780262527262/housing-partnerships/",
        title:
          "Housing Partnerships: A New Approach to a Market at a Crossroads",
        citation: "MIT Press",
        year: "1997",
      },
      {
        id: "https://core.ac.uk/download/pdf/228110809.pdf",
        title: "The Reverse Mortgage Market: Problems and Prospects",
        citation: "University of Pennsylvania Press",
        year: "2002",
      },
      {
        id: "https://www.researchgate.net/publication/228163773_Shared_Equity_Mortgages_Housing_Affordability_and_Homeownership",
        title:
          "Shared Equity Mortgages, Housing Affordability, and Home Ownership",
        citation: "Housing Policy Debate",
        year: "2007",
      },
      {
        id: "https://ideas.repec.org/p/ysm/wpaper/ysm372.html",
        title: "Home Equity Insurance: A Pilot Project",
        citation: "Lincoln Press",
        year: "2009",
      },
      {
        id: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1267064",
        title: "Rectifying the Tax Treatment of Shared Appreciation Mortgages",
        citation: "Tax Law Review",
        year: "2008",
      },
      {
        id: "https://yann.lecun.com/exdb/publis/pdf/chopra-kdd-07.pdf",
        title:
          "Discovering the Hidden Structure of House Prices with a Non-Parametric Latent Manifold Model",
        citation:
          "ACM SIGKDD International Conference on Knowledge Discovery and Data Mining",
        year: "2007",
      },
      {
        id: "https://yann.lecun.com/exdb/publis/pdf/caplin-ssrn-08.pdf",
        title:
          "Machine Learning and the Spatial Structure of House Prices and Housing Returns",
        citation: "SSRN Working Paper",
        year: "2008",
      },
      {
        id: "https://www.nber.org/papers/w15802",
        title: "Reassessing FHA Risk",
        citation: "NBER Working Paper",
        year: "2010",
      },
      {
        id: "https://www.sciencedirect.com/science/article/abs/pii/S0304406814000500",
        title: "A Graph Theoretic Approach to Markets for Indivisible Goods",
        citation: "Journal of Mathematical Economics",
        year: "2014",
      },
      {
        id: "https://www.sciencedirect.com/science/article/abs/pii/S0304406820300756",
        title: "Comparative Statics in Markets for Indivisible Goods",
        citation: "Journal of Mathematical Economics",
        year: "2020",
      },
      {
        id: "https://www.aeaweb.org/articles?id=10.1257/aer.104.5.77",
        title: "The Mortgage Mess, the Press, and the Politics of Inattention",
        citation: "American Economic Review Papers and Proceedings",
        year: "2014",
      },
    ],
  },
  {
    title: "Hidden Information, Social Learning, and Market Dynamics",
    id: "hidden-information-social-learning-market-dynamics",
    papers: [
      {
        id: "https://www.jstor.org/stable/2118067",
        title: "Business as Usual, Market Crashes, and Wisdom after the Fact",
        citation: "American Economic Review",
        year: "1994",
      },
      {
        id: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2575487",
        title: "Social Learning and Selective Attention",
        citation: "NBER Working Paper 21001",
        year: "2015",
      },
      {
        id: "https://www.jstor.org/stable/2565737",
        title: "Miracle on Sixth Avenue",
        citation: "Economic Journal",
        year: "1998",
      },
      {
        id: "https://www.jstor.org/stable/2298099",
        title: "Sectoral Shocks, Learning, and Aggregate Fluctuations",
        citation: "Review of Economic Studies",
        year: "1993",
      },
    ],
  },
  {
    title: "Industrial Organization and Markets",
    id: "industrial-organization-markets",
    papers: [
      {
        id: "https://www.jstor.org/stable/2938239#:~:text=INTRODUCTION-,WE%20PRESENT%20A%20NEW%20APPROACH%20to%20the%20theory%20of%20imperfect,producing%20any%20set%20of%20products.",
        title: "Aggregation and Imperfect Competition",
        citation: "Econometrica",
        year: "1991",
      },
      {
        id: "https://www.sciencedirect.com/science/article/pii/S0022053196922127",
        title: "Competition among Institutions",
        citation: "Journal of Economic Theory",
        year: "1997",
      },
      {
        id: "https://www.sciencedirect.com/science/article/abs/pii/S0304406814000500",
        title: "A Graph Theoretic Approach to Markets for Indivisible Goods",
        citation: "Journal of Mathematical Economics",
        year: "2014",
      },
      {
        id: "https://www.nber.org/system/files/working_papers/w16285/w16285.pdfs",
        title: "Comparative Statics in Markets for Indivisible Goods",
        citation: "Journal of Mathematical Economics",
        year: "2010",
      },
      {
        id: "https://www.nber.org/papers/w29586",
        title: "Inattention and Inequity in School Matching",
        citation: "NBER Working Paper 29586",
        year: "2021",
      },
    ],
  },
  {
    title: "State Dependence and Monetary Policy",
    id: "state-dependence-monetary-policy-paper",
    papers: [
      {
        id: "https://www.jstor.org/stable/1913214",
        title:
          "The Variability of Aggregate Demand with (S,s) Inventory Policies",
        citation: "Econometrica",
        year: "1985",
      },
      {
        id: "https://www.jstor.org/stable/1884277",
        title: "Menu Costs and the Neutrality of Money",
        citation: "Quarterly Journal of Economics",
        year: "1987",
      },
      {
        id: "https://www.jstor.org/stable/2937923",
        title: "State Dependent Pricing and the Dynamics of Money and Output",
        citation: "Quarterly Journal of Economics",
        year: "1991",
      },
      {
        id: "https://www.jstor.org/stable/2118300",
        title: "Monetary Policy as a Process of Search",
        citation: "American Economic Review",
        year: "1996",
      },
      {
        id: "https://www.jstor.org/stable/2938239",
        title: "Aggregation and Optimization with State Dependent Pricing",
        citation: "Econometrica",
        year: "1997",
      },
      {
        id: "https://www.sciencedirect.com/science/article/abs/pii/S0022053105000360#:~:text=Equilibrium%20models%20of%20durable%20goods,that%20of%20a%20monopoly%20producer",
        title:
          "Equilibrium in a Durable Goods Market with Lumpy Adjustment Costs",
        citation: "Journal of Economic Theory",
        year: "2006",
      },
      {
        id: "https://www.aeaweb.org/articles?id=10.1257/jep.24.1.183",
        title:
          "Economic Theory and the World of Practice: A Celebration of the (S,s) Model",
        citation: "Journal of Economic Perspectives",
        year: "2010",
      },
    ],
  },
  {
    title: "Political Economy",
    id: "political-economy",
    papers: [
      {
        id: "https://www.jstor.org/stable/1912699",
        title: "On 64% Majority Rule",
        citation: "Econometrica",
        year: "1988",
      },
      {
        id: "https://www.jstor.org/stable/2938238",
        title: "Aggregation and Social Choice: A Mean Voter Theorem",
        citation: "Econometrica",
        year: "1991",
      },
      {
        id: "https://link.springer.com/book/10.1007/978-1-349-24262-7",
        title: "Competition among Institutions",
        citation: "Journal of Economic Theory",
        year: "1997",
      },
      {
        id: "https://www.aeaweb.org/articles?id=10.1257/aer.104.5.77",
        title: "The Mortgage Mess, the Press, and the Politics of Inattention",
        citation: "American Economic Review Papers and Proceeding",
        year: "2014",
      },
    ],
  },
  {
    title: "Social Welfare and Policy",
    id: "social-welfare-policy",
    papers: [
      {
        id: "https://www.journals.uchicago.edu/doi/abs/10.1086/424740",
        title: "The Social Discount Rate",
        citation: "Journal of Political Economy",
        year: "2004",
      },
      {
        id: "https://www.annualreviews.org/content/journals/10.1146/annurev-financial-101822-112948",
        title:
          "Missing Participants, Missing Markets, and the Social Discount Rate",
        citation: "Annual Review of Financial Economics",
        year: "2023",
      },
      {
        id: "https://www.nature.com/articles/s41467-019-09155-4",
        title:
          "Advancing Environmental Exposure Assessment Science to Benefit Society",
        citation: "Nature Communications",
        year: "2019",
      },
      {
        id: "https://www.aeaweb.org/articles?id=10.1257/aer.104.5.77",
        title: "The Mortgage Mess, the Press, and the Politics of Inattention",
        citation: "American Economic Review Papers and Proceedings",
        year: "2014",
      },
    ],
  },
  {
    title: "Operations Research",
    id: "operations-research-paper",
    papers: [
      {
        id: "https://www.jstor.org/stable/3689638",
        title: "Scarf's Algorithm and a Dual Simplex Algorithm",
        citation: "Mathematics of Operations Research",
        year: "1983",
      },
      {
        id: "https://www.sciencedirect.com/science/article/abs/pii/S0304406814000500",
        title: "A Graph Theoretic Approach to Markets for Indivisible Goods",
        citation: "Journal of Mathematical Economics",
        year: "2014",
      },
      {
        id: "https://www.nber.org/system/files/working_papers/w16285/w16285.pdf",
        title: "Comparative Statics in Markets for Indivisible Goods",
        citation: "Journal of Mathematical Economics",
        year: "2010",
      },
    ],
  },
];

export function ResearchAccordion() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const navigate = useNavigate();
  const activeCategoryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (openCategory && activeCategoryRef.current) {
      activeCategoryRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [openCategory]);
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-5xl text-[#000000] font-bold font-outfit">
            Research: Back Story and  Research Papers
          </h1>
        </div>
        <p className="text-2xl text-[#000000] font-outfit mb-8 leading-relaxed text-justify">
          Here are my all research papers organised by broad area:
        </p>
      </div>
      <div className="mx-auto max-w-5xl space-y-4">
        {researchData.map((category, index) => (
          <div
            key={index}
            className="border-2 border-[#000000] rounded-lg overflow-hidden"
            ref={openCategory === category.title ? activeCategoryRef : null}
          >
            <button
           
              onClick={() =>
                setOpenCategory(
                  openCategory === category.title ? null : category.title
                )
              }
              className={`w-full px-4 py-3 flex items-center justify-between text-left font-outfit font-semibold ${
                openCategory === category.title
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {/* Category Title with Separate Click Event */}
 
              <span
                className="text-md font-medium font-outfit cursor-pointer hover:underline"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent button click from triggering dropdown toggle
                  navigate(
                    `/research/papers/${category.id
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`
                  );
                }}
              >
                {category.title}
                
              </span>
             
              <img
                src={openCategory === category.title ? dropup : dropdown}
                alt="toggle icon"
                className="w-4 h-4 transition-transform duration-300"
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                openCategory === category.title ? "max-h-screen" : "max-h-0"
              }`}
            >
              {category.papers.length > 0 && (
                <div className="px-4 py-2 border-t-2 border-[#000000] space-y-3 max-h-[600px] overflow-y-auto">
                  {category.papers.map((paper, paperIndex) => (
                    <a
                      key={paperIndex}
                      href={`${paper.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm hover:bg-gray-50 -mx-4 px-4 py-2"
                    >
                      <div className="text-sm text-[#000000] font-outfit font-light">
                        {paper.title}
                      </div>
                      <div className="text-xs text-[#000000] font-outfit font-extralight">
                        {paper.citation} - {paper.year}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 mx-auto font-outfit text-justify text-black">
        <section className="mb-6">
          <h1 className="text-2xl font-semibold mb-4">Economic Logic</h1>
          <p className="text-lg mb-4">
            I first encountered formal economic logic in high school at age 15.
            I felt a profound sense of relief in at last finding a field in
            which <strong>logic</strong> can be applied to human affairs. This
            was a stark contrast to the identity-driven discourse and moral
            posturing that dominates much of social and economic commentary—a
            frustration that has only deepened with time.
          </p>
          <p className="text-lg mb-4">
            My fascination with reasoning about social affairs led me to pursue
            an undergraduate degree in economics at Cambridge. While I learned
            much, I was often disheartened by my tutors’ focus on ideological
            critiques of <i className="font-light">capitalism</i> and
            disinterest in comparing their ill-defined abstractions to reality.
            Despite this, I found inspiration in my broad reading and research,
            including a formative essay on the life-cycle model of wealth
            accumulation, which explored how adjustable-rate mortgages might
            explain the spike in U.K. savings during the 1970s inflation.
          </p>
          <p className="text-lg mb-4">
            One of my early academic heroes, Frank Hahn, profoundly shaped my
            thinking. Yet when I explained my ideas to him, he immediately
            pointed out its flaws under perfect capital markets. Even he seemed
            unwilling to engage with actual market imperfections. This
            highlighted a recurring academic attitude too admiring of existing
            markets: “If it’s a good idea, it already being done.” Fighting
            against this resistance to innovation has shaped my career,
            particularly my work in housing finance reform, as detailed in
            another section of this website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Graduate School and Intellectual Development
          </h2>
          <p className="text-lg mb-4">
            At Yale, I was fortunate to work with remarkable mentors like Herb
            Scarf, Bill Nordhaus, Don Brown, and James Tobin. They taught me to
            bridge the gap between abstract economic models and real-world
            social questions—a bridge that has defined my research.
          </p>
          <p className="text-lg mb-4">
            My first research project, with Herb Scarf, involved integer
            programming in operations research. While no breakthroughs emerged,
            it sharpened my geometric skills and laid a foundation for later
            work. After some frustration, I shifted to applied questions,
            exploring why firms adhered to FIFO accounting during inflation when
            LIFO would have reduced their tax burdens. Though unsuccessful, this
            experience fueled my interest in understanding apparent “mistakes”
            in decision-making.
          </p>
          <p className="text-lg mb-4">
            A turning point came in my fourth year when I read Alan Blinder’s
            article on retail inventory behavior. It inspired my first
            significant research contribution, culminating in the paper{" "}
            <i className="font-light">Aggregation of (S,s) Policies</i>. This
            work laid the foundation for my later research on state-dependent
            pricing and macroeconomic dynamics.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Navigating Academic Boundaries
          </h2>
          <p className="text-lg mb-4">
            Despite these successes, I became increasingly frustrated with the
            rigid silos within and between social science disciplines.
            Theoretical advancements often lacked corresponding innovations in
            measurement, and academic conventions stifled interdisciplinary
            exploration. This dissatisfaction drove me to step outside
            traditional academic structures in 1994, focusing on work with
            real-world impact—most notably, housing finance reform. The journey
            has been long and often unrewarding, but the current recognition of
            these ideas is deeply gratifying.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Bringing Social Science into the 21st Century
          </h2>
          <p className="text-lg mb-4">
            Social science lags behind disciplines like biology and data science
            in connecting ideas with applications. Archaic institutional
            structures hinder progress, and it’s time to shake things up. I
            welcome ideas and collaborations to drive this transformation.
            Irrelevance is not a virtue.
          </p>
        </section>
      </div>
    </div>
  );
}
