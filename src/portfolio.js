/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nasigari Jitesh",
  description:
    "An aspiring entrepreneur who thrives to design solutions to real world problems through Tech and Innovation.",
  og: {
    title: "Nasigari Jitesh Portfolio",
    type: "website",
    url: "http://www.nasigarijitesh.me/",
  },
};

//Home Page
const greeting = {
  title: "Nasigari Jitesh",
  logo_name: "NasigariJitesh",
  nickname: "nasigari.jr",
  subTitle:
    "An aspiring entrepreneur who thrives to design solutions to real world problems through Tech and Innovation.",
  portfolio_repository: "https://github.com/NasigariJitesh/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/NasigariJitesh",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nasigarijr/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:nasigarijitesh@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/NasigariJr",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/nasigari.jr",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nasigari.jr/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Discord",
    link: "https://discordapp.com/users/761886626003157013",
    fontAwesomeIcon: "fa-discord",
    backgroundColor: "#7289DA",
  },
];

const introduction = {
  title: "What Am I Upto",
  description:
    "I am currently pursuing My third year in B.E (Computer Science and Engineering) from MVSR Engineering College, Osmania University and parallely toiling at my own startup EME, to develop a futuristic, technically equipped digital platform to resolve most of the re-occuring problems in the events space",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⭐ Building resposive website front end using React-Redux",
        "⭐ Developing server renderd websites with built-in Caching, Automatic Static Optimization using NextJS",
        "⭐ Creating application backend in Node & Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "ExpressJs",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "NextJs",
          fontAwesomeClassname: "simple-icons:next-dot-js",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            backgroundColor: "#transparent",
            color: "#38B2AC",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⭐ Experience working on multiple cloud platforms",
        "⭐ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⭐ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

const interests = {
  data: [
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⭐ Designing highly attractive user interface for mobile and web applications",
        "⭐ Customizing logo designs and building logos from scratch",
        "⭐ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
    {
      title: "Data Analytics, IoT & AI",
      fileName: "DataScienceImg",
      skills: [
        "⭐ A high level of mathematical ability alongside analysing, modelling and interpreting data",
        "⭐ Experience of working with Arduino",
        "⭐ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            backgroundColor: "transparent",
            color: "#276DC3",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Scikit Learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "Arduino",
          fontAwesomeClassname: "simple-icons:arduino",
          style: {
            backgroundColor: "transparent",
            color: "#00979D",
          },
        },
        {
          skillName: "IBM Watson",
          fontAwesomeClassname: "simple-icons:ibmwatson",
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
        {
          skillName: "MathWorks-MatLab",
          fontAwesomeClassname: "simple-icons:mathworks",
          style: {
            backgroundColor: "transparent",
            color: "#0076A8",
          },
        },
      ],
    },
  ],
};
// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/nasigari_jr",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Maturi Venkata Subba Rao (MVSR) Engineering College, Hyderabad",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "mvsr_logo.png",
      alt_name: "MVSREC",
      duration: "2018 - Present",
      descriptions: [
        "⭐ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⭐ Apart from this, I have done courses on Data Science, Cloud Computing and Full Stack Development.",
        "⭐ I won several coding competitions and hackathons",
      ],
      website_link: "https://www.mvsrec.edu.in/",
    },
    {
      title: "Narayana Junior College, Hyderabad",
      subtitle: "Intermediate (Maths, Physics, Chemistry)",
      logo_path: "narayana_logo.png",
      alt_name: "Narayana",
      duration: "2016 - 2018",
      descriptions: [],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Programming Essentials in C	",
      subtitle: "- CISCO Networking Academy",
      logo_path: "cisco_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1VI8UemlMFBzpbrh42-AEQPgLNw9HjI_u/view",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
    {
      title: "Design Thinking",
      subtitle: "-BlackBuck Engineers",
      logo_path: "blackbuck_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1hvHEFV2bEwGei9WzqCN3kDccMWYQlCL3/view",
      alt_name: "BlackBuck",
      color_code: "#00000099",
    },
    {
      title: "Programming Essentials in C++",
      subtitle: "- CISCO Networking Academy",
      logo_path: "cisco_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1VTrWJA2jGyeBCrYvkIgfWjTFqyfxWmrR/view",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
    {
      title: "Data Science",
      subtitle: "-BlackBuck Engineers",
      logo_path: "blackbuck_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/13Nh5QHAsRHtSsata7-Iv0RgDjqKTA9Fy/view",
      alt_name: "BlackBuck",
      color_code: "#00000099",
    },
    {
      title: "Programming Essentials in Python",
      subtitle: "- CISCO Networking Academy",
      logo_path: "cisco_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1PzlmXBk6WTGdFCKIIWTDhJstHWKDupUd/view",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
    {
      title: "Cloud Computing",
      subtitle: "-BlackBuck Engineers",
      logo_path: "blackbuck_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/18RYZm8RTAtj-vE0HWgMVnsfR3R_hGZRm/view",
      alt_name: "BlackBuck",
      color_code: "#00000099",
    },
    {
      title: "	DevNet Associate",
      subtitle: "- CISCO Networking Academy",
      logo_path: "cisco_logo.png",
      certificate_link:
        "https://www.credly.com/badges/99837e7f-b437-4b6e-a6f8-d94481fea747",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
    {
      title: "Internet of Things",
      subtitle: "-BlackBuck Engineers",
      logo_path: "blackbuck_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1-zl9dM3qNcDjcPSRLjvXgKGJ-Md6LQBc/view",
      alt_name: "BlackBuck",
      color_code: "#00000099",
    },
    {
      title: "Introduction to Cybersecurity",
      subtitle: "- CISCO Networking Academy",
      logo_path: "cisco_logo.png",
      certificate_link:
        "https://www.credly.com/badges/0a2e1e23-57f7-4645-b414-34a8c122efe2",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
    {
      title: "Full Stack MERN",
      subtitle: "- Hitesh choudhary",
      logo_path: "lco_logo.png",
      certificate_link:
        "https://courses.learncodeonline.in/learn/certificate/3332921-50332",
      alt_name: "LCO",
      color_code: "#F2A6A6",
    },
    {
      title: "Cybersecurity Essentials",
      subtitle: "- CISCO Networking Academy",
      logo_path: "cisco_logo.png",
      certificate_link:
        "https://www.credly.com/badges/097308bd-fe76-485a-b0a9-43e8a9df096d",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
    {
      title: "R",
      subtitle: "- IIT Bombay",
      logo_path: "spoken_tutorial_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1vCo5rfAHuxi4CqM9HSRMj07_eWEcvkHL/view",
      alt_name: "Spoken Tutorial",
      color_code: "#00000099",
    },
    {
      title: "Introduction to Packet Tracer",
      subtitle: "- CISCO Networking Academy",
      logo_path: "cisco_logo.png",
      certificate_link:
        "https://www.credly.com/badges/963f5c90-4c53-4a71-a589-a269f0bb373d",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
    {
      title: "CyberOps Associate",
      subtitle: "- CISCO Networking Academy",
      logo_path: "cisco_logo.png",
      certificate_link:
        "https://www.credly.com/badges/d8782497-1103-4b01-b6f0-28fa5757ba8d",
      alt_name: "Cisco",
      color_code: "#fffffc",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have thirst for creating products that create technological and social impact, which pushed me to look for ideas to start my own startup venture. I love organising events and that is why I am also involved with many professional bodies as a representative. I believe that the best way to find one's self is to lose themself in the service of others, thus ended up working in quite a number of NGO's.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Founder",
          company: "EME- Event X Made Easy",
          company_url: "https://www.eventx.me/",
          logo_path: "eme_logo.png",
          duration: "April 2021 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on developing an digital platform, which will be first of its kind.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Co-Ordinator",
          company: "CSI MVSR",
          company_url: "http://csimvsr.blogspot.com/",
          logo_path: "csi_mvsr_logo.png",
          duration: "August 2019 - Present",
          location: "Hyderabad, Telangana",
          description:
            "CSI-MVSREC Student Chapter, inaugurated in January, 2011 is a professional student body that organisestudents initiated programs meeting the needs of the society and rapidly changing technology.",
          color: "#4285F4",
        },
        {
          title: "Executive committee Member ",
          company: "NSS Unit MVSREC",
          company_url:
            "https://www.mvsrec.edu.in/index.php?option=com_content&view=article&id=1733&Itemid=1645",
          logo_path: "nss_logo.png",
          duration: "Nov 2019 - May 2021",
          location: "Hyderabad, Telangana",
          description:
            "NSS Unit MVSREC is part of National Service Scheme. The National Service Scheme (NSS) is an Indian government-sponsored public service program conducted by the Ministry of Youth Affairs and Sports of the Government of India. Popularly known as NSS, the scheme was launched in Gandhiji's Centenary year in 1969. Aimed at developing student's personality through community service, NSS is a voluntary association of young people in Colleges, Universities and at +2 level working for a campus-community (esp. Villages) linkage.",
          color: "#D83B01",
        },
        {
          title: "Head , Logistics",
          company: "Street Cause - MVSR",
          company_url: "https://www.streetcause.org/",
          logo_path: "street_cause_logo.png",
          duration: "June 2020 - May 2021",
          location: "Hyderabad, Telangana",
          description:
            "Street Cause is an NGO comprising of students intent on doing their bit for the betterment of society. My responsibility in this organisation was to procure logistics and execute ngo activites in college and in the city. ",
          color: "#000000",
        },
        {
          title: "Joint Secretary",
          company: "Withyou MVSR",
          company_url: "https://withyoungo.org/",
          logo_path: "withyou_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "With you organisation is a youth driven, non profit organisation. The charters of WITH YOU: To create awareness and work on cleanliness and tree plantations To promote education to underprivileged children To Organize relief programs for natural calamities To create awareness and to organize camps in health sector.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "March 2021 - PRESENT",
          location: "Remote",
          description:
            "I am actively contributing to opensource projects. These contributions include bug fixes, feature requests and formulating proper documentation for project",
          color: "#181717",
        },
      ],
    },
  ],
};

//Accomplishments Page
const accomplishment = {
  title: "Accomplishments",
  subtitle: "Startups and Achievements",
  description:
    "So early in my life, I had learned that if you want something, you had better make some noise.",
};

const startupProjects = {
  title: "Start up Projects",
  subtitle: "Projects,I am part of and that have been evolved into startups",
  projects: [
    {
      projectName: "EME",
      projectDesc: "Event X Made Easy",
      image: "eme_logo.png",
      footerLink: [
        {
          url: "https://www.eventx.me/",
          name: "Know More",
        },
      ],
    },
  ],
};

const Achivements = {
  title: "Achievements",
  subtitle: "Achievements, Award Letters and Some Cool stuff that I have done.",
  achivements: [
    {
      title: "Winner-CSI NPDH 2021",
      subtitle: "National Level Product Development Hackathon",
      image: "csi_logo.png",
      footerLink: [
        {
          url: "https://www.csichennai.net/product-development-hackathon",
          name: "Visit Site",
        },
        {
          url:
            "https://drive.google.com/file/d/1TKzJhnmHKctKBslBKPPIcmSaFzHrUdzw/view",
          name: "View certificate",
        },
      ],
    },
    {
      title: "Certificate of Appreciation- IoTCloud’21, IIIT Kottayam",
      subtitle:
        "IoT Cloud For Societal Applications - ACM/CSI/IEEECS Research & Industry Symposium.",
      image: "iot-cloud-logo.png",
      footerLink: [
        {
          url: "http://icentre.iiitkottayam.ac.in/pdfs/proceedings.pdf#page=88",
          name: "View Paper",
        },
        {
          url:
            "https://drive.google.com/file/d/1gq_aNahQEaEvU1z_puLquiWj2HCSxe-R/view",
          name: "View certificate",
        },
      ],
    },
    {
      title: "Organiser - Fusion 2020 BC",
      subtitle: "CSI Telangana State Level Student DIGITAL Convention.",
      image: "csi_logo.png",
      footerLink: [
        {
          url: "https://sites.google.com/mvsrec.edu.in/fusion2020bc",
          name: "Visit Site",
        },
      ],
    },
    {
      title: "Contributions to Covid-19 Releif Program",
      subtitle:
        "Program aimed at helping people during lockdown and imapcted 730 families and 3 orphanages which is 3073 people in total.",
      image: "withyou_logo.png",
      footerLink: [
        {
          url: "https://withyoungo.org/events",
          name: "Visit Site",
        },
        {
          url:
            "https://drive.google.com/file/d/1nd-OXM9A_UYEIK4PwBzwHQQ8CO0-eemd/view",
          name: "View Letter",
        },
      ],
    },
    {
      title: "Head of Organising Committee - MVSR MUN 2020",
      subtitle:
        "21st -23rd February, 2020. Presented by Matrusri Eductional Society.",
      image: "mvsr_mun_logo.png",
      footerLink: [
        {
          url: "https://www.mvsrmun.com/",
          name: "Visit Site",
        },
        {
          url:
            "https://drive.google.com/file/d/14NyrTG0D5wPBiv-nq3szKKxPHWxFt5-Z/view",
          name: "View Certificate",
        },
      ],
    },
    {
      title: "Organiser - Fusion 2020",
      subtitle:
        "CSI National Level Student Technical Symposium. Hosted by Maturi Venkata Subba Rao (MVSR) Engineering College.",
      image: "csi_logo.png",
      footerLink: [
        {
          url: "https://crypticwalnut.wixsite.com/mysite-1",
          name: "Visit Site",
        },
      ],
    },
    {
      title: "Winner- Technical Quiz, Fusion 2019",
      subtitle:
        "32nd CSI Region-V Student Convention. Organised by CSI-MVSR Student branch",
      image: "csi_mvsr_logo.png",
      footerLink: [
        {
          url:
            "http://csimvsr.blogspot.com/2019/01/fusion-2019-01st-02nd-march-2019.html",
          name: "Visit Site",
        },
        {
          url:
            "https://drive.google.com/file/d/14Lf9hf-fgAz_oeYCfiyJe3nueIsp_z36/view",
          name: "View Certificate",
        },
      ],
    },
    {
      title: "Organiser - Fusion 2019",
      subtitle:
        "32nd CSI Region-V Student Convention. Organised by CSI-MVSR Student branch",
      image: "csi_mvsr_logo.png",
      footerLink: [
        {
          url:
            "http://csimvsr.blogspot.com/2019/01/fusion-2019-01st-02nd-march-2019.html",
          name: "Visit Site",
        },
        {
          url:
            "https://drive.google.com/file/d/14Tb_hQTNTXTWqljglo1orbBoRTIinZzy/view",
          name: "View Certificate",
        },
      ],
    },
    {
      title: "Inter School Level",
      subtitle: "Apex National Spell Bee - 2015-2016",
      image: "apex_logo.png",
      footerLink: [
        {
          url: "https://apexspellbee.com/",
          name: "Visit Site",
        },
        {
          url:
            "https://drive.google.com/file/d/14S14E1id8F0AncxJLAWVfKYTOG-_zQMF/view",
          name: "View Certificate",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "jitesh.png",
    description:
      "I am active on every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to express my views opnions an thoughts as well as share my experiences through my blog",
    link: "https://blog.nasigarijitesh.me/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bhatji Nagar, Aliabad, Hyderabad, Telangana 500053",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/oy4F2ztvREg8QMp19",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9676959686",
  },
};

export {
  settings,
  seo,
  greeting,
  introduction,
  socialMediaLinks,
  skills,
  interests,
  competitiveSites,
  degrees,
  certifications,
  accomplishment,
  startupProjects,
  Achivements,
  experience,
  projectsHeader,
  contactPageData,
};
