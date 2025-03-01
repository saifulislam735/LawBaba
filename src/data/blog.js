// data/blogs.js
const blogs = [
    {
        id: 1,
        category: "Criminal Law",
        title_en: "Understanding Theft Laws in Bangladesh",
        title_bn: "বাংলাদেশে চুরির আইন বোঝা",
        content_en: "Theft, as defined under Section 378 of the Penal Code of Bangladesh, involves the dishonest intention to take movable property without the owner's consent. Penalties can include up to 7 years of imprisonment, fines, or both, depending on the severity and circumstances. This blog dives deep into the legal framework, exploring real-life examples such as petty theft in markets or organized theft rings. We’ll discuss the investigation process, which involves police reports, evidence collection like CCTV footage, and court proceedings. Defenses, such as proving lack of intent or consent, are also covered, along with statistics showing a rise in theft cases in urban areas like Dhaka over the past decade.",
        content_bn: "চুরি, বাংলাদেশের দণ্ডবিধির ৩৭৮ ধারায় সংজ্ঞায়িত, মালিকের সম্মতি ছাড়া চলমান সম্পত্তি নেওয়ার অসৎ উদ্দেশ্য জড়িত। শাস্তি ৭ বছর পর্যন্ত কারাদণ্ড, জরিমানা বা উভয়ই হতে পারে, যা অপরাধের তীব্রতা এবং পরিস্থিতির উপর নির্ভর করে। এই ব্লগটি আইনি কাঠামোর গভীরে প্রবেশ করে, বাজারে ছোটখাটো চুরি বা সংগঠিত চুরির দলের মতো বাস্তব জীবনের উদাহরণ নিয়ে আলোচনা করে। আমরা তদন্ত প্রক্রিয়া নিয়ে আলোচনা করব, যার মধ্যে পুলিশ রিপোর্ট, সিসিটিভি ফুটেজের মতো প্রমাণ সংগ্রহ এবং আদালতের কার্যক্রম রয়েছে। উদ্দেশ্যের অভাব বা সম্মতি প্রমাণের মতো প্রতিরক্ষাও কভার করা হয়েছে, সাথে গত দশকে ঢাকার মতো শহুরে এলাকায় চুরির মামলা বৃদ্ধির পরিসংখ্যানও দেওয়া হয়েছে।",
        date: "2025-02-01",
        image: "https://lh5.googleusercontent.com/proxy/RHqu1AAYXUqbknbUF5XrwkAiAGtn2_BzZXz6wJBJZILwA5kC8p6M-K1oaPrxUXLH766Uz9Uv3-BLnrrpqBDf_VrsyvAaqVO8Uh3FcS13qSbIjDEf-XDnGM9NI4Bl" // Courtroom image
    },
    {
        id: 2,
        category: "Family Law",
        title_en: "Divorce Procedures in Bangladesh",
        title_bn: "বাংলাদেশে বিবাহবিচ্ছেদের প্রক্রিয়া",
        content_en: "Divorce procedures for Muslims in Bangladesh are governed by the Muslim Family Laws Ordinance 1961. A husband can initiate divorce through talaq, requiring a written notice to the local Union Parishad chairman, followed by a 90-day reconciliation period. A wife can seek khula via court if the husband consents or if irreconcilable differences are proven. This blog outlines each step in detail: drafting the notice, submitting it, the arbitration process, and final registration. It also discusses required documents (marriage certificate, ID proofs), common challenges like delays in reconciliation, and cultural stigmas affecting women seeking divorce. Real cases illustrate how courts handle disputes over dowry or child custody during divorce.",
        content_bn: "বাংলাদেশে মুসলিমদের জন্য বিবাহবিচ্ছেদ প্রক্রিয়া ১৯৬১ সালের মুসলিম পারিবারিক আইন অধ্যাদেশ দ্বারা পরিচালিত হয়। একজন স্বামী তালাকের মাধ্যমে বিবাহবিচ্ছেদ শুরু করতে পারেন, যার জন্য স্থানীয় ইউনিয়ন পরিষদের চেয়ারম্যানের কাছে লিখিত নোটিশ প্রয়োজন, তারপর ৯০ দিনের সমঝোতার সময়। একজন স্ত্রী খুলার মাধ্যমে আদালতের মাধ্যমে বিবাহবিচ্ছেদ চাইতে পারেন যদি স্বামী সম্মতি দেয় বা অমিলনযোগ্য পার্থক্য প্রমাণিত হয়। এই ব্লগটি প্রতিটি ধাপ বিস্তারিতভাবে রূপরেখা দেয়: নোটিশ তৈরি, জমা দেওয়া, সালিশি প্রক্রিয়া এবং চূড়ান্ত নিবন্ধন। এটি প্রয়োজনীয় নথি (বিয়ের সার্টিফিকেট, পরিচয় প্রমাণ), সমঝোতায় বিলম্বের মতো সাধারণ চ্যালেঞ্জ এবং বিবাহবিচ্ছেদ চাওয়া মহিলাদের প্রভাবিত করা সাংস্কৃতিক কলঙ্ক নিয়েও আলোচনা করে। বাস্তব মামলা দিয়ে আদালত কীভাবে যৌতুক বা সন্তানের হেফাজত নিয়ে বিরোধ পরিচালনা করে তা চিত্রিত করা হয়েছে।",
        date: "2025-02-03",
        image: "https://legaladvicebd.com/wp-content/uploads/2024/07/how-to-get-divorce-in-bangladesh.jpg" // Family law image
    },
    {
        id: 3,
        category: "Property Law",
        title_en: "Land Registration Process",
        title_bn: "জমি নিবন্ধন প্রক্রিয়া",
        content_en: "Registering land in Bangladesh is a critical step to secure legal ownership and avoid disputes. The process starts with verifying ownership documents like sale deeds and mutation certificates, followed by paying stamp duties and registration fees at the Sub-Registrar’s office. A land survey may be required to confirm boundaries. This blog covers the detailed procedure, including common pitfalls like forged documents or boundary disputes, and offers tips such as hiring a lawyer for due diligence. It also examines recent reforms aimed at digitizing land records to reduce corruption and delays.",
        content_bn: "বাংলাদেশে জমি নিবন্ধন আইনি মালিকানা সুরক্ষিত করতে এবং বিরোধ এড়াতে একটি গুরুত্বপূর্ণ পদক্ষেপ। প্রক্রিয়াটি বিক্রয় দলিল এবং মিউটেশন সার্টিফিকেটের মতো মালিকানা নথি যাচাইয়ের মাধ্যমে শুরু হয়, তারপর সাব-রেজিস্ট্রারের কার্যালয়ে স্ট্যাম্প শুল্ক এবং নিবন্ধন ফি প্রদান করা হয়। সীমানা নিশ্চিত করতে জমি জরিপের প্রয়োজন হতে পারে। এই ব্লগটি বিস্তারিত প্রক্রিয়া কভার করে, যার মধ্যে জাল নথি বা সীমানা বিরোধের মতো সাধারণ সমস্যা রয়েছে এবং যথাযথ পরিশ্রমের জন্য আইনজীবী নিয়োগের মতো টিপস দেয়। এটি দুর্নীতি এবং বিলম্ব কমাতে জমির রেকর্ড ডিজিটাইজ করার লক্ষ্যে সাম্প্রতিক সংস্কারও পরীক্ষা করে।",
        date: "2025-02-05",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" // Property image
    },
    {
        id: 4,
        category: "Criminal Law",
        title_en: "Cybercrime Laws in Bangladesh",
        title_bn: "বাংলাদেশে সাইবার অপরাধ আইন",
        content_en: "The Digital Security Act 2018 addresses cybercrimes like hacking, phishing, and online defamation in Bangladesh, with penalties ranging from fines to 14 years imprisonment. This blog explores key sections, such as Section 19 (content harming religious sentiments) and Section 25 (cyber-terrorism), alongside enforcement challenges like limited technical expertise. Recent cases, such as social media scams targeting rural users, are analyzed. Critics argue the law restricts free speech, a debate we’ll unpack with examples of journalists facing charges.",
        content_bn: "ডিজিটাল নিরাপত্তা আইন ২০১৮ বাংলাদেশে হ্যাকিং, ফিশিং এবং অনলাইন মানহানির মতো সাইবার অপরাধ সমাধান করে, যার শাস্তি জরিমানা থেকে ১৪ বছরের কারাদণ্ড পর্যন্ত। এই ব্লগটি মূল ধারাগুলো নিয়ে আলোচনা করে, যেমন ধারা ১৯ (ধর্মীয় অনুভূতি ক্ষুণ্ণকারী বিষয়বস্তু) এবং ধারা ২৫ (সাইবার-সন্ত্রাসবাদ), পাশাপাশি সীমিত প্রযুক্তিগত দক্ষতার মতো প্রয়োগের চ্যালেঞ্জ। গ্রামীণ ব্যবহারকারীদের লক্ষ্য করে সামাজিক মিডিয়া কেলেঙ্কারির মতো সাম্প্রতিক মামলা বিশ্লেষণ করা হয়েছে। সমালোচকরা যুক্তি দেন যে আইনটি বাক স্বাধীনতা সীমিত করে, আমরা সাংবাদিকদের বিরুদ্ধে অভিযোগের উদাহরণ দিয়ে এই বিতর্ক উন্মোচন করব।",
        date: "2025-02-07",
        image: "https://dailyasianage.com/library/1625955780_9.jpg?v=0,1" // Cybersecurity image
    },
    {
        id: 5,
        category: "Labor Law",
        title_en: "Workers' Rights in Bangladesh",
        title_bn: "বাংলাদেশে শ্রমিকদের অধিকার",
        content_en: "The Bangladesh Labour Act 2006 guarantees workers rights to fair wages, safe workplaces, and benefits like maternity leave. This blog details protections against unfair dismissal, overtime pay rules (up to 2 hours daily), and the role of trade unions in sectors like garments. It also examines enforcement issues, such as factory safety violations post-Rana Plaza, and ongoing efforts to improve conditions through international pressure and local reforms.",
        content_bn: "বাংলাদেশ শ্রম আইন ২০০৬ শ্রমিকদের ন্যায্য মজুরি, নিরাপদ কর্মক্ষেত্র এবং মাতৃত্বকালীন ছুটির মতো সুবিধার অধিকার নিশ্চিত করে। এই ব্লগটি অন্যায় বরখাস্তের বিরুদ্ধে সুরক্ষা, ওভারটাইম বেতনের নিয়ম (প্রতিদিন ২ ঘণ্টা পর্যন্ত) এবং গার্মেন্টসের মতো খাতে ট্রেড ইউনিয়নের ভূমিকার বিস্তারিত বর্ণনা দেয়। এটি রানা প্লাজার পরে কারখানার নিরাপত্তা লঙ্ঘনের মতো প্রয়োগের সমস্যা এবং আন্তর্জাতিক চাপ ও স্থানীয় সংস্কারের মাধ্যমে পরিস্থিতি উন্নতির চলমান প্রচেষ্টাও পরীক্ষা করে।",
        date: "2025-02-09",
        image: "https://khulnagazette.com/wp-content/uploads/2021/04/%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A6%AE%E0%A6%BF%E0%A6%95-%E0%A6%A6%E0%A6%BF%E0%A6%AC%E0%A6%B8.jpg" // Workers image
    },
    {
        id: 6,
        category: "Family Law",
        title_en: "Child Custody Laws",
        title_bn: "সন্তানের হেফাজত আইন",
        content_en: "Under the Guardians and Wards Act 1890, child custody in Bangladesh prioritizes the child’s welfare. Courts assess parental fitness, financial stability, and, for children over 9, their preferences. This blog explores custody battles, including joint custody arrangements, and the emotional and legal challenges parents face. Case studies show how courts balance cultural norms with legal standards, especially in interfaith custody disputes.",
        content_bn: "গার্ডিয়ানস অ্যান্ড ওয়ার্ডস অ্যাক্ট ১৮৯০-এর অধীনে, বাংলাদেশে সন্তানের হেফাজত সন্তানের কল্যাণকে অগ্রাধিকার দেয়। আদালত পিতামাতার যোগ্যতা, আর্থিক স্থিতিশীলতা এবং ৯ বছরের বেশি বয়সী শিশুদের জন্য তাদের পছন্দ বিবেচনা করে। এই ব্লগটি হেফাজতের লড়াই, যৌথ হেফাজত ব্যবস্থা এবং পিতামাতার মুখোমুখি হওয়া আবেগিক ও আইনি চ্যালেঞ্জ নিয়ে আলোচনা করে। কেস স্টাডিগুলো দেখায় কীভাবে আদালত সাংস্কৃতিক নিয়ম এবং আইনি মানদণ্ডের মধ্যে ভারসাম্য বজায় রাখে, বিশেষ করে আন্তঃধর্মীয় হেফাজত বিরোধে।",
        date: "2025-02-11",
        image: "https://gehilaw.com/wp-content/uploads/2023/05/child_custody_bannercomp.jpg" // Family image
    },
    {
        id: 7,
        category: "Property Law",
        title_en: "Inheritance Laws in Bangladesh",
        title_bn: "বাংলাদেশে উত্তরাধিকার আইন",
        content_en: "Inheritance in Bangladesh varies by religion: Muslims follow Sharia law, Hindus follow Dayabhaga, and others use the Succession Act 1925. This blog explains how property is divided (e.g., a daughter gets half a son’s share under Muslim law), the role of wills, and dispute resolution through courts or mediation. It includes examples of complex cases, like disputed joint family properties, and tips for drafting a legally binding will.",
        content_bn: "বাংলাদেশে উত্তরাধিকার ধর্ম অনুসারে পরিবর্তিত হয়: মুসলিমরা শরিয়া আইন, হিন্দুরা দায়ভাগ এবং অন্যরা সাকসেশন অ্যাক্ট ১৯২৫ ব্যবহার করে। এই ব্লগটি সম্পত্তি কীভাবে বিভক্ত হয় (যেমন, মুসলিম আইনে একটি মেয়ে ছেলের অংশের অর্ধেক পায়), উইলের ভূমিকা এবং আদালত বা মধ্যস্থতার মাধ্যমে বিরোধ নিষ্পত্তি ব্যাখ্যা করে। এটি যৌথ পরিবারের সম্পত্তি নিয়ে জটিল মামলার উদাহরণ এবং আইনত বাধ্যতামূলক উইল তৈরির টিপস অন্তর্ভুক্ত করে।",
        date: "2025-02-13",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" // Property image (reused)
    },
    {
        id: 8,
        category: "Criminal Law",
        title_en: "Bail Procedures in Bangladesh",
        title_bn: "বাংলাদেশে জামিন প্রক্রিয়া",
        content_en: "The Code of Criminal Procedure 1898 governs bail in Bangladesh. Bailable offenses allow bail at police stations, while non-bailable ones require court approval based on factors like crime severity and flight risk. This blog details the application process, conditions (e.g., surrendering passports), and recent trends showing stricter bail denials in high-profile cases. It also offers practical advice for applicants.",
        content_bn: "ফৌজদারি কার্যবিধি সংহিতা ১৮৯৮ বাংলাদেশে জামিন পরিচালনা করে। জামিনযোগ্য অপরাধে থানায় জামিন দেওয়া যায়, যখন অজামিনযোগ্য অপরাধে অপরাধের তীব্রতা এবং পলায়নের ঝুঁকির মতো বিষয়ের ভিত্তিতে আদালতের অনুমোদন প্রয়োজন। এই ব্লগটি আবেদন প্রক্রিয়া, শর্ত (যেমন, পাসপোর্ট জমা দেওয়া) এবং হাই-প্রোফাইল মামলায় কঠোর জামিন প্রত্যাখ্যানের সাম্প্রতিক প্রবণতার বিস্তারিত বর্ণনা দেয়। এটি আবেদনকারীদের জন্য ব্যবহারিক পরামর্শও দেয়।",
        date: "2025-02-15",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs9oJidaJ_Qndbbum0VrBwrHZRRDxWhBZl9Q&s" // Courtroom image (reused)
    },
    {
        id: 9,
        category: "Business Law",
        title_en: "Starting a Business in Bangladesh",
        title_bn: "বাংলাদেশে ব্যবসা শুরু করা",
        content_en: "Starting a business in Bangladesh involves registering with the Registrar of Joint Stock Companies, obtaining a trade license from the local municipality, and securing tax identification. This blog walks through each step, estimated costs (e.g., BDT 5,000-20,000 for registration), and legal obligations like annual audits. It also covers incentives for startups in export zones and challenges like bureaucratic delays.",
        content_bn: "বাংলাদেশে ব্যবসা শুরু করতে জয়েন্ট স্টক কোম্পানির রেজিস্ট্রারের সাথে নিবন্ধন, স্থানীয় পৌরসভা থেকে ট্রেড লাইসেন্স এবং কর সনাক্তকরণ নিশ্চিত করা জড়িত। এই ব্লগটি প্রতিটি ধাপ, আনুমানিক খরচ (যেমন, নিবন্ধনের জন্য ৫,০০০-২০,০০০ টাকা) এবং বার্ষিক নিরীক্ষার মতো আইনি বাধ্যবাধকতার মাধ্যমে হাঁটে। এটি রপ্তানি অঞ্চলে স্টার্টআপদের জন্য প্রণোদনা এবং আমলাতান্ত্রিক বিলম্বের মতো চ্যালেঞ্জও কভার করে।",
        date: "2025-02-17",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" // Business image
    },
    {
        id: 10,
        category: "Labor Law",
        title_en: "Minimum Wage Regulations",
        title_bn: "ন্যূনতম মজুরি নিয়ন্ত্রণ",
        content_en: "The Minimum Wages Board sets sector-specific wage rates in Bangladesh, like BDT 8,000/month for garment workers (as of 2018, with reviews pending). This blog examines the legal framework, enforcement struggles (e.g., non-compliance by small factories), and the socio-economic impact on workers. It includes data on wage protests and international pressure from brands to improve standards.",
        content_bn: "ন্যূনতম মজুরি বোর্ড বাংলাদেশে খাত-নির্দিষ্ট মজুরি হার নির্ধারণ করে, যেমন গার্মেন্ট শ্রমিকদের জন্য মাসে ৮,০০০ টাকা (২০১৮ সালের হিসেবে, পর্যালোচনা বাকি)। এই ব্লগটি আইনি কাঠামো, প্রয়োগের সংগ্রাম (যেমন, ছোট কারখানার অ-সম্মতি) এবং শ্রমিকদের উপর সামাজিক-অর্থনৈতিক প্রভাব পরীক্ষা করে। এটি মজুরি বিক্ষোভের তথ্য এবং মান উন্নত করতে ব্র্যান্ডগুলোর আন্তর্জাতিক চাপ অন্তর্ভুক্ত করে।",
        date: "2025-02-19",
        image: "https://rajshahinews24.com/public/postimages/656581b9e7c49.jpg" // Workers image (reused)
    }
];

export default blogs;