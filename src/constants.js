import {
  meta,
  shopify,
  starbucks,
  tesla,
  skillsoft,
  swiggy,
} from "./assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  //   tailwindcss,
  threads,
  typescript,
} from "./assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    // imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Development Engineer 2",
    company_name: "Skillsoft",
    icon: skillsoft,
    iconBg: "#accbe1",
    date: "June 2024 - Present",
    points: [
      "Led the standardization of <strong>i18n (internationalization)</strong> across the entire app, enabling support for 5+ native languages, expanding the platform’s accessibility to global users.",
      "Spearheaded key frontend development for the <strong>Spotlight Project</strong> (company’s <strong>highest-level AI-driven presentation</strong>) practice tool, implementing critical configuration and editing flows for <strong>2 million plus users.</strong>",
      "Developed a GitHub Action script that <strong>automated static string checks in PRs</strong>, significantly improving the PR review process by reducing <strong>manual review time by 15%</strong> and ensuring compliance with i18n standards across <strong>100+ code sub missions</strong> per month.",
      "Introduced Mockoon API mocks, drastically improving the developer experience by cutting frontend-backend dependency and <strong>accelerating development cycles by 20%</strong>, leading to faster feature rollouts and increased developer efficiency.",
    ],
  },
  {
    title: "Software Development Engineer 1",
    company_name: "Swiggy",
    icon: swiggy,
    iconBg: "#fbc3bc",
    date: "Dec 2021 - June 2024",
    points: [
      "Completely revamped the user interface of MysteryBox, leading to a significant increase in user engagement, resulting in a total of <strong>6.51 million monthly visits</strong>, proving my expertise in enhancing user experiences",
      "Created and managed Bulk Orders Project, achieving exceptional results during its pilot phase in its first city launch: <strong>5,000 daily traffic, Order Per Day (OPD) at 5.8, 170 high-value completed orders, and a Gross Merchandise Value (GMV) of Rs 982,000</strong>",
      "Demonstrated proficiency in developing and maintaining Logout Options Page, a high-traffic webview with over <strong>1.15M monthly users</strong>, driving user engagement and satisfaction.",
      "Successfully created and maintained Edit Profile Page, a webview with a user base of <strong>848K monthly active users</strong>, delivering valuable software solution.",
      "Optimized system performance by <strong>implementing geolocation-based routing</strong>, effectively redirecting <strong>288K requests per month</strong> to the correct restaurants, improving user experience and system efficiency.",
      "Designed and managed Roast Your Dost webview, which witnessed a remarkable surge in popularity, <strong>garnering 6 million page visits in just 7 days</strong>, showcasing my ability to handle high-impact projects.",
      "During my on-call responsibilities, I <strong>demonstrated effective collaboration with cross-functional teams</strong>, including Sec-Ops and DevOps, to devise a solution that involved implementing a rule in HAProxy to block requests originating from the same user agent for a specific collection. This proactive initiative resulted in a <strong>remarkable reduction of unnecessary requests, slashing the rate from 992K to 0</strong>, and effectively resolving persistent incidents, preventing unnecessary PD alerts for 4-5 weeks.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "Swiggy",
    icon: swiggy,
    iconBg: "#fbc3bc",
    date: "June 2021 - Dec 2021",
    points: [
      "Created layout of Logout Options Page which now clocks over <strong>1.15M monthly users.</strong>",
      "I authored comprehensive end-to-end test cases utilizing Playwright and Cypress, as well as unit test cases with Jest, <strong>leading to a substantial boost in code coverage from 65% to over 85%.</strong> This quality assurance initiative ensured more robust and reliable software, enhancing overall product stability.",
    ],
  },
];
