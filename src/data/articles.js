const articles = [
  {
    id: "1",
    title: "Your Rights During a Police Stop",
    tag: "POLICE",
    summary: "Understanding what police can and cannot do when they stop you on the street or at a roadblock.",
    description: `Under Kenyan law, police have the right to stop you for questioning, but this power has clear limits. The Criminal Procedure Code (Chapter 43) outlines when and how police can conduct stops and searches. You have the right to know why you are being stopped, and police must identify themselves. At roadblocks, police can check your documents (license, insurance, ID) but cannot search your vehicle without reasonable suspicion. You are not required to consent to a search of your personal belongings. If you feel your rights are being violated, remain calm, do not resist physically, and note the officer's badge number. You can file a complaint with the Independent Policing Oversight Authority (IPOA).`,
    type: "article",
    imageUrl: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=800&q=80"
  },
  {
    id: "2",
    title: "Unfair Dismissal: What You Need to Know",
    tag: "LABOR",
    summary: "Your rights when facing termination from employment under Kenyan labor law.",
    description: `The Employment Act 2007 provides comprehensive protections against unfair dismissal. Section 41 requires that any termination must follow proper procedure, including a valid reason and a hearing. Your employer must give you written notice of the reasons for termination. For employees with more than 13 months of continuous service, termination requires both a valid reason AND fair procedure. You may be entitled to severance pay calculated at 15 days' pay for each completed year of service. If you believe you've been unfairly dismissed, you can file a complaint with the Employment and Labour Relations Court within 3 years. Always keep copies of your employment contract, payslips, and any written communications with your employer.`,
    type: "article",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
  },
  {
    id: "3",
    title: "Understanding Eviction Notices",
    tag: "TENANTS",
    summary: "How landlords must legally evict tenants and what notice periods apply.",
    description: `Kenyan tenancy law requires landlords to follow specific procedures before evicting tenants. The Rent Restriction Act and the Landlord and Tenant (Shops, Hotels and Catering Establishments) Act govern most tenancies. A landlord must serve a written notice specifying the grounds for eviction. For monthly tenancies, at least one month's notice is required. For weekly tenancies, at least one week's notice. The notice must be in writing and clearly state the reason. Self-help evictions (changing locks, cutting utilities, removing belongings) are illegal. If you receive an eviction notice, you have the right to challenge it in court. Legal Aid Kenya and various community legal organizations can help you understand your specific situation.`,
    type: "article",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
  },
  {
    id: "4",
    title: "Consumer Rights: Refunds and Defects",
    tag: "BUSINESS",
    summary: "What the Consumer Protection Act 2012 says about your right to refunds and repairs.",
    description: `The Consumer Protection Act 2012 provides strong protections for Kenyan consumers. If you purchase goods that are defective, you are entitled to a refund, repair, or replacement within 30 days of purchase. A shop cannot refuse a refund by citing a "no refund" policy for faulty products — such policies are illegal under the Act. For services, if the work is not done with reasonable care and skill, you can demand a redo or compensation. The Act also prohibits misleading advertisements and unfair business practices. If a business refuses to honor your rights, you can file a complaint with the Competition Authority of Kenya (CAK) or seek help from the Consumer Protection Division at the Attorney General's office.`,
    type: "article",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
  },
  {
    id: "5",
    title: "Bail and Bond Rights in Kenya",
    tag: "POLICE",
    summary: "Your rights to bail and bond after arrest, including constitutional protections.",
    description: `Article 49 of the Constitution of Kenya 2010 guarantees your right to be released on bond or bail pending trial, unless there are compelling reasons to deny it. When you are arrested, you have the right to be informed of the reason for your arrest, to remain silent, and to consult a lawyer. Police must bring you before a court within 24 hours of arrest. The court will consider factors like the seriousness of the offense, your ties to the community, and your criminal record when deciding on bail. If you cannot afford bail, you can apply for reduced bail or a bond. The bail amount must be reasonable and proportionate to the offense.`,
    type: "article",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
  },
  {
    id: "6",
    title: "Minimum Wage and Worker Protections",
    tag: "LABOR",
    summary: "Understanding the Regulation of Wages Orders and your entitlements as a worker.",
    description: `Kenya's Regulation of Wages Orders set minimum wages for different sectors and regions. As of 2024, the minimum wage varies by county and occupation. Workers in urban areas generally earn more than those in rural areas. Your employer must pay you at least the minimum wage, and they cannot make unauthorized deductions from your salary. You are entitled to overtime pay (1.5x normal rate for overtime, 2x for work on public holidays). The Factories and Other Places of Work Act requires safe working conditions. If your employer violates these laws, you can file a complaint with the County Labour Office or the Ministry of Labour. Keep records of your working hours and payslips as evidence.`,
    type: "article",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
  },
  {
    id: "7",
    title: "Security Deposit Protection",
    tag: "TENANTS",
    summary: "Rules around rental deposits and how to get your money back.",
    description: `When you rent a property in Kenya, your security deposit (usually 1-3 months' rent) is protected by law. Your landlord must return the deposit within 30 days of the tenancy ending, minus any legitimate deductions for damage beyond normal wear and tear. The landlord must provide an itemized statement showing exactly what deductions were made and why. When moving in, take detailed photos and videos of the property's condition. When moving out, do the same. This evidence is crucial if there's a dispute. If your landlord refuses to return your deposit, you can take them to the Small Claims Court (for amounts up to KES 1 million) or file a complaint with the County Government.`,
    type: "article",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
  },
  {
    id: "8",
    title: "Business Licensing Requirements",
    tag: "BUSINESS",
    summary: "What permits and licenses you need to operate a business in Kenya.",
    description: `All businesses in Kenya require a Single Business Permit from the county government where the business is located. The permit must be renewed annually. Depending on your industry, you may need additional licenses — for example, a food handling certificate for restaurants, or a KRA PIN certificate for tax purposes. The Business Registration Act 2015 governs how businesses are registered. You can register as a sole proprietor, partnership, or limited company through the eCitizen portal or the Business Registration Service. Failure to obtain proper licensing can result in fines or closure. Contact your county government's business registration office for specific requirements in your area.`,
    type: "article",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
  },
  {
    id: "9",
    title: "Roadblock Rights and Procedures",
    tag: "POLICE",
    summary: "What police can and cannot do at roadblocks and checkpoints.",
    description: `Police roadblocks in Kenya are regulated by the National Police Service Act 2011. At a roadblock, police can ask for your driving license, insurance, and vehicle registration. They can also check for sobriety. However, they cannot search your vehicle without reasonable suspicion that you are carrying illegal items. They cannot demand bribes or "fees" to pass. If you are asked for a bribe, do not pay — note the officer's badge number and report the incident to IPOA or the Ethics and Anti-Corruption Commission (EACC). You have the right to remain silent if questioned about criminal activity. Always remain calm and cooperative at roadblocks, but know your rights.`,
    type: "article",
    imageUrl: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=800&q=80"
  },
  {
    id: "10",
    title: "Workplace Safety and Health",
    tag: "LABOR",
    summary: "Your right to a safe working environment and what to do if it's compromised.",
    description: `The Occupational Safety and Health Act 2007 (OSHA) requires employers to provide a safe working environment. This includes proper ventilation, clean drinking water, first aid facilities, and protective equipment where needed. Employers must also conduct regular risk assessments and train workers on safety procedures. If you believe your workplace is unsafe, you have the right to report it to the Directorate of Occupational Safety and Health Services (DOSHS). You cannot be fired or penalized for making a safety complaint. DOSHS can inspect your workplace and issue improvement notices. In serious cases, they can shut down a workplace until safety improvements are made.`,
    type: "article",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
  },
  {
    id: "11",
    title: "Rent Increases and Disputes",
    tag: "TENANTS",
    summary: "When and how a landlord can increase your rent, and your rights to challenge it.",
    description: `Under Kenyan law, your landlord cannot increase your rent arbitrarily. For controlled tenancies under the Rent Restriction Act, rent increases must be approved by the Rent Tribunal. For other tenancies, the landlord must give you at least 3 months' written notice before any rent increase. The increase must be reasonable and reflect market conditions. If you believe the increase is excessive, you can challenge it through the Rent Tribunal or negotiate with your landlord. Keep records of your rent payments and any communications about increases. If your landlord tries to evict you for refusing an unreasonable rent increase, you have legal recourse.`,
    type: "article",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
  },
  {
    id: "12",
    title: "Debt Collection Rights",
    tag: "BUSINESS",
    summary: "How debt collectors must behave and what they cannot do.",
    description: `If you owe money, debt collectors in Kenya must follow specific rules. They cannot harass you, use threatening language, or contact you at unreasonable hours (before 8am or after 9pm). They cannot contact your employer or family members about your debt without your permission. They must send you a written notice before taking legal action. The Consumer Protection Act 2012 prohibits unfair debt collection practices. If a debt collector violates these rules, you can file a complaint with the Competition Authority of Kenya. If you're struggling with debt, consider seeking advice from a licensed credit counselor or legal aid organization. You have rights even when you owe money.`,
    type: "article",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
  },
  {
    id: "13",
    title: "Search and Seizure Laws",
    tag: "POLICE",
    summary: "Your rights when police want to search your home, car, or person.",
    description: `Article 31 of the Constitution of Kenya protects your right to privacy. Police generally need a warrant to search your home, issued by a magistrate. They can search without a warrant in urgent situations or if you consent. For your person, police can conduct a pat-down search if they have reasonable suspicion you're carrying weapons. For your car, they need reasonable suspicion of illegal items. For electronic devices (phones, laptops), they need a court order. If police search your property without proper authority, any evidence obtained may be inadmissible in court. Always ask to see the warrant, and note the officers' details.`,
    type: "article",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
  },
  {
    id: "14",
    title: "Matatu Passengers' Rights",
    tag: "POLICE",
    summary: "What rights you have as a public transport passenger in Kenya.",
    description: `As a passenger on public transport (matatu, bus, or train) in Kenya, you have specific rights under the Traffic Act and consumer protection laws. You have the right to safe transport — the vehicle must be roadworthy and the driver licensed. You have the right to travel without harassment. If you're injured in an accident, you can claim compensation from the vehicle owner's insurance. You have the right to a receipt for your fare. If a conductor overcharges you or refuses to give change, you can report them to the county transport office. Keep your belongings safe, and note the vehicle registration number in case of incidents.`,
    type: "article",
    imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80"
  },
  {
    id: "15",
    title: "Wills and Estate Planning",
    tag: "BUSINESS",
    summary: "Why every Kenyan adult should have a will and how to create one.",
    description: `Under the Law of Succession Act, every adult Kenyan should have a valid will. Without a will (intestate), your property is distributed according to fixed rules that may not reflect your wishes. A valid will must be in writing, signed by you, and witnessed by two witnesses who are not beneficiaries. You can change your will at any time. Your will should cover all your property, name an executor to manage your estate, and specify guardians for minor children. Without a will, the court appoints an administrator, which can cause delays and family disputes. Legal aid organizations can help you draft a will affordably. Store your will in a safe place and tell your executor where to find it.`,
    type: "article",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
  },
  {
    id: "16",
    title: "Your Rights at the Workplace",
    tag: "LABOR",
    summary: "A comprehensive guide to your rights as an employee in Kenya.",
    description: `The Employment Act 2007 establishes your fundamental rights at work. You have the right to a written contract within 2 months of starting work. You have the right to equal pay for equal work, regardless of gender or background. You have the right to rest — maximum working hours are 52 hours per week, with at least one rest day. You have the right to annual leave (at least 21 working days per year) and sick leave. You have the right to maternity leave (at least 3 months) and paternity leave (at least 2 weeks). Your employer cannot discriminate against you based on race, gender, religion, or disability. If your rights are violated, contact the County Labour Office or file a complaint with the Employment and Labour Relations Court.`,
    type: "article",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
  }
];

const FAQs = [
  {
    q: "How much notice does a landlord need to give for eviction?",
    a: "Under the Rent Restriction Act, a landlord must provide valid written notice. For month-to-month tenancies, this is typically one month's notice, but always check your specific lease agreement for details."
  },
  {
    q: "What is the legal minimum wage in Kenya?",
    a: "The minimum wage varies by sector and location. The latest Regulation of Wages Order publishes updated rates — general labourers in cities earn more than agricultural workers. Always refer to the most recent gazette notice."
  },
  {
    q: "Can the police search my phone without a warrant?",
    a: "Generally, no. The right to privacy is protected under Article 31 of the Constitution. Police need a court order or valid warrant to search your electronic devices, unless you give explicit consent."
  },
  {
    q: "What should I do if I am unfairly dismissed?",
    a: "You have the right to challenge an unfair dismissal through the labor office or the Employment and Labour Relations Court. You must typically file within 3 years, but taking immediate action is strongly recommended."
  },
  {
    q: "Can police search my car at a roadblock?",
    a: "Police can check your documents (license, insurance, ID) at a roadblock. However, they cannot search your vehicle without reasonable suspicion that you are carrying illegal items. Remain polite but firm."
  },
  {
    q: "Can my landlord keep my deposit?",
    a: "Only for unpaid rent or damage beyond normal wear and tear. The deposit must be returned within 30 days of the tenancy ending, with itemized receipts for any deductions. Take photos when moving in and out."
  },
  {
    q: "Do I need a license to run a small business?",
    a: "Yes. All businesses in Kenya require a permit from the county government. Depending on your industry, you may need additional licenses. Apply through your county's eCitizen portal."
  },
  {
    q: "Can a shop refuse to give me a refund?",
    a: "If goods are defective, a shop cannot refuse — 'no refund' policies are illegal for faulty products under the Consumer Protection Act 2012. You're entitled to a full refund, repair, or replacement within 30 days."
  }
];

function getArticles() {
  return articles;
}

function getArticleById(id) {
  return articles.find(a => a.id === id) || null;
}

function getArticlesByTag(tag) {
  return articles.filter(a => a.tag === tag.toUpperCase());
}

function searchArticles(query) {
  const q = query.toLowerCase();
  return articles.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.summary.toLowerCase().includes(q) ||
    a.description.toLowerCase().includes(q)
  );
}

module.exports = { articles, FAQs, getArticles, getArticleById, getArticlesByTag, searchArticles };
