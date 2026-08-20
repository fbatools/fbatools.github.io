import fs from 'fs';
import path from 'path';

const email = "prosun@gobase64.com";
const year = "2026";

// 1. Generate Legal & About Pages
const legalPages = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    content: "---\ntitle: \"Privacy Policy\"\ndescription: \"Privacy Policy for our SEO and Amazon FBA tool review site.\"\npubDate: \"Aug 20 2026\"\n---\n\n# Privacy Policy\n\nYour privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.\n\n## 1. Information We Collect\nWe may collect minimal analytics data (like IP addresses and browser types) to improve our website. If you contact us, we collect your email address.\n\n## 2. Affiliate Tracking\nWe use affiliate links (including Helium 10, SmartScout, and AMZScout). When you click these links, a cookie is placed on your browser to track the referral so we can earn a commission. This tracking is handled entirely by the respective affiliate programs.\n\n## 3. Contact Us\nFor any privacy-related concerns, please contact us at: **" + email + "**\n"
  },
  {
    slug: "terms",
    title: "Terms and Conditions",
    content: "---\ntitle: \"Terms and Conditions\"\ndescription: \"Terms of service and affiliate disclosures.\"\npubDate: \"Aug 20 2026\"\n---\n\n# Terms and Conditions\n\nBy using this website, you agree to the following terms.\n\n## 1. Affiliate Disclosure (FTC Compliance)\nThis website is reader-supported. We participate in the Helium 10, SmartScout, and AMZScout affiliate programs. This means if you click on a link and purchase a subscription, we may earn a commission at no additional cost to you. In fact, our coupon codes often save you money.\n\n## 2. Accuracy of Information\nWhile we strive to keep pricing and coupon codes (like GEO35DUSA and PROSUN) up to date for " + year + ", software pricing changes frequently. We are not responsible for pricing discrepancies on third-party sites.\n\n## 3. Contact\nQuestions? Email us at **" + email + "**\n"
  },
  {
    slug: "about",
    title: "About Us",
    content: "---\ntitle: \"About Us\"\ndescription: \"Learn more about our mission to help Amazon FBA sellers.\"\npubDate: \"Aug 20 2026\"\n---\n\n# About Us\n\nWelcome to our Amazon FBA resource hub. We are dedicated to testing, reviewing, and comparing the best software tools for Amazon sellers.\n\nWhether you are deciding between Helium 10, SmartScout, or AMZScout, our goal is to provide transparent reviews and the absolute best discount codes on the internet.\n\n### Get in Touch\nWe love hearing from fellow sellers. Drop us a line at **" + email + "**.\n"
  }
];

// Write Legal Pages
legalPages.forEach(page => {
  fs.writeFileSync(path.join(process.cwd(), 'src', 'content', 'blog', page.slug + '.md'), fileContent);
});

// 2. Generate 15 SEO Articles
const articles = [
  {
    slug: "helium-10-vs-jungle-scout",
    title: "Helium 10 vs Jungle Scout: Which is Better in 2026?",
    desc: "The ultimate comparison between Helium 10 and Jungle Scout. Find out which Amazon FBA software wins the verdict.",
    keywords: ["helium 10 vs jungle scout", "which is better helium 10 or jungle scout", "jungle scout vs helium 10 verdict"],
    body: "The debate of **Helium 10 vs Jungle Scout** has been raging for years. If you are starting an Amazon FBA business in " + year + ", choosing the right tool is critical.\n\n<div style=\"background: #f8f9fa; padding: 20px; border-left: 5px solid #007bff; margin-bottom: 30px;\">\n  <strong>Quick Verdict:</strong> Helium 10 is the superior all-in-one suite for advanced keyword research and PPC management. Jungle Scout is slightly more beginner-friendly, but Helium 10 offers more scalability. <strong>Winner: Helium 10.</strong>\n</div>\n\n### Feature Comparison\nWhile Jungle Scout has a great supplier database, Helium 10's **Cerebro** and **Black Box** tools are unmatched for reverse-engineering competitor listings.\n\n### Pricing & Discounts\nHelium 10 is more expensive, but you can use our verified discount codes to make it cheaper than Jungle Scout:\n*   [Get 35% OFF Helium 10 Diamond](/go/helium10-diamond-annual) (Code: **GEO35DUSA**)\n*   [Get 35% OFF Helium 10 Platinum](/go/helium10-platinum-annual) (Code: **GEO35PUSA**)\n"
  },
  {
    slug: "helium-10-vs-smartscout",
    title: "SmartScout vs Helium 10: Which FBA Tool Do You Need?",
    desc: "Comparing SmartScout and Helium 10 for wholesale and private label Amazon sellers.",
    keywords: ["smartscout vs helium 10", "helium 10 alternatives"],
    body: "When comparing **SmartScout vs Helium 10**, it's important to understand they serve different business models.\n\n<div style=\"background: #f8f9fa; padding: 20px; border-left: 5px solid #007bff; margin-bottom: 30px;\">\n  <strong>Quick Verdict:</strong> If you are doing Wholesale or Arbitrage, SmartScout is the winner. If you are doing Private Label, Helium 10 is the better choice.\n</div>\n\n### Why Choose SmartScout?\nSmartScout allows you to search by *brand* rather than just product, making it the ultimate tool for finding wholesale accounts. \n*   [Get SmartScout with 25% OFF](/go/smartscout) using code **PROSUN**.\n\n### Why Choose Helium 10?\nHelium 10 dominates in keyword research and listing optimization. If you are launching your own brand, you need [Helium 10](/go/helium10-diamond-annual).\n"
  },
  {
    slug: "how-to-use-helium-10-cerebro",
    title: "How to Use Cerebro Helium 10 for Keyword Research",
    desc: "A complete tutorial on using Helium 10 Cerebro to reverse-engineer competitor keywords.",
    keywords: ["how to use cerebro helium 10", "what is cerebro in helium 10", "keyword research using helium 10"],
    body: "If you want to rank your product on page 1 of Amazon, you need to know exactly what keywords your competitors are targeting. That is where **Cerebro** comes in.\n\n### What is Cerebro in Helium 10?\nCerebro is a reverse ASIN lookup tool. You paste a competitor's ASIN into the search bar, and it reveals every single keyword that product is ranking for.\n\n### Step-by-Step Tutorial\n1.  **Find a Top Competitor:** Search your main keyword on Amazon and copy the ASIN of the top organic result.\n2.  **Run Cerebro:** Paste the ASIN into Cerebro.\n3.  **Filter Results:** Set the Organic Rank filter to 1-10. These are the golden keywords driving their sales.\n\nDon't have Cerebro yet? [Grab 35% off the Platinum Plan](/go/helium10-platinum-annual) with code **GEO35PUSA**.\n"
  },
  {
    slug: "helium-10-black-box-tutorial",
    title: "Helium 10 Black Box Tutorial: Find Winning Products",
    desc: "Learn how to do product research on Helium 10 using the Black Box tool.",
    keywords: ["helium 10 black box", "how to do product research on helium 10", "helium 10 product hunting"],
    body: "Product research is the most critical step in Amazon FBA. The **Helium 10 Black Box** tool makes finding high-demand, low-competition products easy.\n\n### How to use Black Box\nBlack Box contains a database of over 2 billion Amazon products. You can filter this database using specific criteria:\n*   **Search Volume:** Minimum 1,000 searches per month.\n*   **Price:** $20 - $50 (ideal for impulse buys).\n*   **Review Count:** Max 150 reviews (ensures low competition).\n\nOnce you hit search, Black Box will spit out hundreds of product ideas that meet your exact criteria.\n\nReady to start product hunting? Use code **GEO35PUSA** to [get 35% off Helium 10](/go/helium10-platinum-annual).\n"
  },
  {
    slug: "amzscout-vs-helium-10",
    title: "AMZScout vs Helium 10: Which is Right for You?",
    desc: "An in-depth review and comparison of AMZScout and Helium 10 for Amazon FBA sellers.",
    keywords: ["amzscout vs helium 10", "helium 10 alternatives"],
    body: "Looking for a cost-effective alternative to Helium 10? **AMZScout** might be exactly what you need.\n\n<div style=\"background: #f8f9fa; padding: 20px; border-left: 5px solid #007bff; margin-bottom: 30px;\">\n  <strong>Quick Verdict:</strong> AMZScout is incredibly budget-friendly and great for beginners doing simple product research. However, Helium 10 is required if you need advanced PPC and listing tools.\n</div>\n\n### AMZScout Benefits\nAMZScout offers a fantastic Chrome Extension and web app that gives you accurate sales estimates. It is significantly cheaper than Helium 10.\n*   [Get $10 OFF AMZScout](/go/amzscout) using code **PROSUN10**.\n\n### Helium 10 Benefits\nHelium 10 is the enterprise-grade choice. Use [code GEO35DUSA for 35% off](/go/helium10-diamond-annual).\n"
  },
  {
    slug: "helium-10-chrome-extension",
    title: "How to Add & Use the Helium 10 Chrome Extension",
    desc: "Step by step guide on installing and using the free Helium 10 Chrome Extension (Xray).",
    keywords: ["how to add helium 10 chrome extension", "helium 10 xray chrome extension", "helium 10 free chrome extension"],
    body: "The **Helium 10 Chrome Extension** (specifically the Xray tool) is a must-have for any Amazon seller. Best of all, you can start using it for free.\n\n### How to Install\n1. Go to the Chrome Web Store.\n2. Search for \"Helium 10\".\n3. Click \"Add to Chrome\".\n\n### How to Use Xray\nOnce installed, go to any Amazon search page and click the Helium 10 icon. Select **Xray**. It will instantly show you the estimated monthly revenue, sales, and review velocity for every product on the page.\n\nIf you hit your free limit, upgrade using [code GEO35PUSA for 35% off](/go/helium10-platinum-annual).\n"
  },
  {
    slug: "is-helium-10-worth-it",
    title: "Is Helium 10 Worth It in 2026? Honest Review",
    desc: "We break down the costs and features to answer: Is Helium 10 really worth the money?",
    keywords: ["is helium 10 worth it", "helium 10 review", "helium 10 benefits"],
    body: "A common question among new sellers is: **Is Helium 10 worth it?**\n\nThe short answer is **yes**. If you are serious about building an Amazon FBA business, trying to guess keyword search volume or competitor revenue is a recipe for failure.\n\n### The ROI of Helium 10\nIf Cerebro helps you find just one low-competition keyword that generates 10 extra sales a month, the software pays for itself instantly.\n\n### Making it Affordable\nIt is definitely worth it when you use a discount code. Don't pay full retail price.\n*   [Use GEO35DUSA for 35% off Diamond](/go/helium10-diamond-annual)\n*   [Use GEO35PUSA for 35% off Platinum](/go/helium10-platinum-annual)\n"
  },
  {
    slug: "helium-10-for-beginners",
    title: "Helium 10 Tutorial for Absolute Beginners",
    desc: "A step-by-step Helium 10 tutorial for absolute beginners starting Amazon FBA.",
    keywords: ["helium 10 for beginners", "helium 10 tutorial", "helium 10 beginner guide"],
    body: "Feeling overwhelmed? This **Helium 10 tutorial for absolute beginners** will guide you through the noise.\n\n### Step 1: Product Research (Black Box)\nStart in Black Box. This is where you find what to sell. Look for products with high revenue and low reviews.\n\n### Step 2: Keyword Research (Cerebro & Magnet)\nOnce you have a product, use Cerebro to reverse-engineer top competitors and Magnet to expand your keyword list.\n\n### Step 3: Listing Optimization (Frankenstein & Scribbles)\nClean up your keyword list with Frankenstein, and write an SEO-optimized listing using Scribbles.\n\nGet started today with [35% off using code GEO35PUSA](/go/helium10-platinum-annual).\n"
  },
  {
    slug: "how-to-use-helium-10-magnet",
    title: "Helium 10 Magnet Tutorial: Master Keyword Expansion",
    desc: "Learn how to use the Helium 10 Magnet tool to find thousands of high-volume keywords.",
    keywords: ["helium 10 magnet tutorial", "magnet tool helium 10", "helium 10 magnet"],
    body: "While Cerebro is for competitor analysis, **Magnet** is for keyword expansion.\n\n### How to use Magnet\nEnter a broad \"seed\" keyword into Magnet (e.g., \"garlic press\"). Magnet will pull data from Amazon's actual search database and return thousands of related keywords, complete with search volume and competition scores.\n\nSort by \"Magnet IQ Score\" to find keywords that have high search volume but very few competing products. These are your goldmines.\n\nUnlock Magnet today with [35% off Helium 10](/go/helium10-platinum-annual) using code **GEO35PUSA**.\n"
  },
  {
    slug: "helium-10-free-trial",
    title: "How to Get a Helium 10 Free Trial & Account",
    desc: "Learn how to use Helium 10 for free and how to upgrade with massive discounts.",
    keywords: ["helium 10 free trial", "how to use helium 10 for free", "helium 10 free account"],
    body: "Want to test the waters before buying? Here is how to use **Helium 10 for free**.\n\n### The Free Account\nHelium 10 doesn't have a traditional time-based \"free trial\". Instead, they offer a forever-free account with limited daily uses. You can do a few Cerebro searches and Black Box queries per day for free.\n\n### When to Upgrade\nOnce you are ready to actually launch a product, the free limits will hold you back. When you upgrade, never pay full price:\n*   [Claim 35% OFF the Platinum Plan](/go/helium10-platinum-annual) (Code: **GEO35PUSA**)\n*   [Claim 35% OFF the Diamond Plan](/go/helium10-diamond-annual) (Code: **GEO35DUSA**)\n"
  },
  {
    slug: "helium-10-alternatives",
    title: "Top 3 Helium 10 Alternatives for Amazon FBA",
    desc: "Discover the best free and paid Helium 10 alternatives in 2026.",
    keywords: ["helium 10 alternatives free", "best helium 10 alternatives"],
    body: "If Helium 10 is out of your budget, there are excellent **Helium 10 alternatives** available.\n\n### 1. SmartScout (Best for Wholesale)\nIf you aren't doing Private Label, SmartScout is actually better than Helium 10. It analyzes entire brands and categories.\n*   [Get 25% off SmartScout](/go/smartscout) with code **PROSUN**.\n\n### 2. AMZScout (Best Budget Option)\nAMZScout provides excellent product research tools at a fraction of the cost.\n*   [Get $10 OFF AMZScout](/go/amzscout) with code **PROSUN10**.\n\n### 3. Jungle Scout\nThe original Amazon FBA tool. Great for beginners, but lacks some of Helium 10's advanced PPC features.\n"
  },
  {
    slug: "helium-10-listing-builder",
    title: "How to Create an Amazon Listing Using Helium 10",
    desc: "Optimize your Amazon listings for maximum SEO visibility using Helium 10 Listing Builder and Scribbles.",
    keywords: ["create amazon listing using helium 10", "helium 10 listing optimization", "scribbles helium 10"],
    body: "Writing an Amazon listing isn't just about copywriting; it's about algorithm optimization. **Helium 10 Listing Builder** ensures you don't miss any keywords.\n\n### Using Scribbles and Listing Builder\n1. Import your master keyword list (from Cerebro and Magnet).\n2. As you write your Title, Bullets, and Description, Helium 10 will cross the keywords off your list.\n3. This ensures 100% indexing for your top phrases.\n\nGet access to Listing Builder now with [35% off Helium 10](/go/helium10-platinum-annual) using code **GEO35PUSA**.\n"
  },
  {
    slug: "smartscout-wholesale-course",
    title: "SmartScout Wholesale Course Review",
    desc: "Is the SmartScout Wholesale course worth it? We break down the curriculum.",
    keywords: ["smartscout wholesale course", "amazon wholesale product research"],
    body: "If you want to master Amazon Wholesale, the **SmartScout Wholesale Course** is heavily recommended.\n\nSmartScout was built specifically for finding wholesale suppliers, and their course teaches you the exact standard operating procedures (SOPs) to land massive brand accounts.\n\n[Check out the SmartScout Course Pricing here](/go/smartscout-course) and don't forget to use coupon code **PROSUN** for your software subscription!\n"
  },
  {
    slug: "amazon-fba-product-research-guide",
    title: "The Ultimate Amazon FBA Product Research Guide (2026)",
    desc: "Learn exactly how to do amazon fba product research using the best tools on the market.",
    keywords: ["how to do amazon fba product research using helium 10", "amazon product hunting helium 10"],
    body: "Finding a winning product requires analyzing data, not guessing. \n\n### The Formula\n1. **High Demand:** Look for products doing at least $5,000/month in revenue.\n2. **Low Competition:** Look for niches where the top sellers have under 200 reviews.\n3. **Good Margins:** Use the Helium 10 profitability calculator to ensure a 30%+ net margin.\n\n### The Tools\nYou can execute this strategy flawlessly using either:\n*   [Helium 10](/go/helium10-platinum-annual) (Code **GEO35PUSA**)\n*   [AMZScout](/go/amzscout) (Code **PROSUN10**)\n"
  },
  {
    slug: "helium-10-hindi-tamil-uae",
    title: "Using Helium 10 Internationally (UAE, India, & More)",
    desc: "How to use Helium 10 for Amazon India, UAE, and international marketplaces.",
    keywords: ["how to use helium 10 for product research in uae", "how to use helium 10 for amazon india", "helium 10 in hindi", "helium 10 tamil"],
    body: "Helium 10 isn't just for the US market. You can perform deep keyword and product research for **Amazon India, Amazon UAE, UK, Germany**, and more.\n\nSimply select your marketplace flag from the dropdown menu in Black Box or Cerebro to pull local data. \n\n*Note for our international readers looking for tutorials in Hindi or Tamil:* While the dashboard is in English, the data it pulls for Amazon.in and Amazon.ae is highly accurate. \n\nStart expanding globally with [35% off Helium 10](/go/helium10-diamond-annual) using code **GEO35DUSA**.\n"
  }
];

// Write Blog Articles with Interlinking
const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');
if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
}

articles.forEach((article, index) => {
  const link1 = articles[(index + 1) % articles.length];
  const link2 = articles[(index + 2) % articles.length];
  const link3 = articles[(index + 3) % articles.length];

  const content = "---\ntitle: \"" + article.title + "\"\ndescription: \"" + article.desc + "\"\npubDate: \"Aug 20 2026\"\nheroImage: \"../../assets/blog-placeholder-" + ((index % 5) + 1) + ".jpg\"\n---\n\n" + article.body + "\n\n---\n### Related Guides\n* [" + link1.title + "](/blog/" + link1.slug + "/)\n* [" + link2.title + "](/blog/" + link2.slug + "/)\n* [" + link3.title + "](/blog/" + link3.slug + "/)\n";

  fs.writeFileSync(path.join(blogDir, article.slug + '.md'), content);
});

console.log("Successfully pumped 15 SEO optimized articles + Legal pages!");
