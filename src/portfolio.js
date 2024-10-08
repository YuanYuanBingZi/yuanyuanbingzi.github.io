/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tong Guan",
  title: "Hello, I'm Tong",
  subTitle: emoji(
    "I'm a senior CS major graduating in Dec❄️ 🚀 Profient in Java/Python/React/SQL, web development, AWS and GenAI applications. I'm actively seeking New Grad opps for applying my skills ✨ and growing as a successful Software Dev Engineer👩‍💻."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1KsA3eOqJ7zwTccPXAJMZKMiFaam_M8ko/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/YuanYuanBingZi",
  linkedin: "https://www.linkedin.com/in/tongg/",
  gmail: "yuanyuanbingzi@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Expertise in Backend Development, Specializing in AWS"),
    emoji(
      "⚡ Proficient in React, Creating Highly Interactive Front-End Pages"
    ),
    emoji("⚡ Passionate about New Techs and Dive Deep on Solutions")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Oregon",
      logo: require("./assets/images/uoLogo.png"),
      subHeader:
        "Bachelor of Science in Computer Science, Minor in Comparative Literature",
      duration: "September 2021 - December 2024",
      desc: "Once a Duck🦆, Always a Duck~~",
      descBullets: [
        "Activities: @UO WICS Women in Computer Science",
        "Dean’s Lists, CAS Hands-on Scholarship",
        "Courses: Data Structures and Algorithms, Database, Software Engineering, Operating System, Computer Architecture, Compiler Design, Artificial Intelligence, Machine Learning, GPU Programming"
      ]
    },
    {
      schoolName: "University of California, Berkeley",
      logo: require("./assets/images/ucbLogo.png"),
      subHeader: "Exchange Program in Comparative Literature Department",
      duration: "January 2020 - December 2020",
      desc: "Enjoy my Best College Life at Cali☀️🍦🥤",
      descBullets: [
        "Courses: French II, German II, Japanese Literature(Intro/Intermediate), Japanese/English Translation, Japanese History and Culture, Intro Comparative Literature, The Modern Period, Holocaust Literature"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend (Spring MVC/Boot, Hibernate, Flask, Django, AWS)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend (React/CSS/HTML/JavaScript/TypeScript)",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming (Java/Python/C/C++/Go/SQL/CUDA)",
      progressPercentage: "80%"
    },
    {
      Stack: "GenAI(Amazon Bedrock/Kendra, LLMs and find-tuning) ",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Dev Engineer Intern",
      company: "Amazon",
      companylogo: require("./assets/images/amazonLogo.png"),
      date: "June 2024 – Sep 2024",
      desc: "Seattle, Washington",
      descBullets: [
        "Built a full-stack generative AI project with RAG and LLM",
        "Developed backend services using AWS CDK following IaC",
        "Built a secure frontend application with React and TypeScript"
      ]
    },
    {
      role: "Undergraduate Researcher",
      company: "UO Machine Learning Lab",
      companylogo: require("./assets/images/uoLogo.png"),
      date: "Nov 2023 – March 2024",
      desc: "Eugene, Oregon",
      descBullets: [
        "Identified high-frequency features in target and non-target categories",
        "Applied LLM(OpenAI 3.5/4) to rephrase and generate adversarial (poisonous) data in datasets"
      ]
    },
    {
      role: "Full-Stack SDE Intern",
      company: "IpserLab",
      companylogo: require("./assets/images/IpserLabLogo.png"),
      date: "Jan 2023 – June 2023",
      desc: "Mountain View, California",
      descBullets: [
        "Designed a user-friendly Web Page using React/Redux and Ant Design",
        "Integrated backend with Java and Spring Boot for order management",
        "Implemented secure data handling with MySQL and OAuth protocols"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const projects = {
  title: "Projects",
  subtitle: "Here are some of my projects along with their code and demos",
  projects: [
    {
      image: require("./assets/images/UnixLogo.png"),
      projectName: "UnixLite Shell",
      projectDesc: "An intuitive shell crafted to mimic Unix interface. The shell is designed with Linux System calls and supports both interactive and file modes for core commands like cd, mkdir, rm, and cat.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/YuanYuanBingZi/UnixLite_Shell"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/GhostLogo.png"),
      projectName: "Ghost in the Machine",
      projectDesc: "This project implement the process management, scheduling, and resource control in an operating system, act as the 'consciousness' behind multiple parallel processes.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/YuanYuanBingZi/Ghost-In-The-Shell"
        }
      ],
    },
    {
      image: require("./assets/images/DuckLogo.png"),
      projectName: "Duck Bank",
      projectDesc: "A multithreaded banking system built with pthreads, designed to handle high volumes of transactions using concurrency control, resource management, and inter-process communication.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/YuanYuanBingZi/Duck-Bank.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/StressLogo.png"),
      projectName: "MindMeld - StressDetection",
      projectDesc: "A Machine Learning System designed to predict stress-related content from online posts. This project implement advanced NLP and compares various models.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/YuanYuanBingZi/MindMeld-StressDetection.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/QuackLogo.png"),
      projectName: "Mini Quack: Compiler",
      projectDesc: "MiniQuack is a custom-built compiler for a subset of the Quack programming language. It features parsing with Lark, AST construction, type inference, static analysis, symbol table generation, and code output.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/YuanYuanBingZi/MiniQuack.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/GenAILogo.png"),
      projectName: "GenAI: Series",
      projectDesc: "Explore the power of Generative AI with this project series! From text generation and image synthesis to creative applications like AI-driven storytelling and art generation, each project showcases practical uses of GenAI models.",
      footerLink: [
        {
          name: "Visit Series",
          url: "https://yuanyuanbingzi.github.io/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/CryptoCoreLogo.png"),
      projectName: "CryptoCore",
      projectDesc: "CryptoCore is a comprehensive project implementing classic encryption algorithms like Substitution, Caesar, ROT13, Running Key, and Vigenère ciphers. Using OOP, it provides modular encryption/decryption methods.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/YuanYuanBingZi/CryptoCore"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/StudentLogo.png"),
      projectName: "StudentDBTree",
      projectDesc: "A C++ project that implements BST to manage a student database. Each student is assigned a unique ID upon joining, and the BST provides efficient operations for storing, retrieving, and deleting student records.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/YuanYuanBingZi/StudentDBTree"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Software Engineer Virtual Experience",
      subtitle: "JPMorgan Chase & Co",
      image: require("./assets/images/JPMCLogo.png"),
      imageAlt: "JPMC Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_tGCTZSGsiivyWscyg_1662429311564_completion_certificate.pdf"
        },
      ]
    },
    {
      title: "ML & Deep Learning",
      subtitle: "Kaggle",
      image: require("./assets/images/KaggleLogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Data Visualization",
          url: "https://www.kaggle.com/learn/certification/serenatong/data-visualization"
        },
        {
          name: "Machine Learning",
          url: "https://www.kaggle.com/learn/certification/serenatong/intermediate-machine-learning"
        },
        {
          name: "Deep Learning",
          url: "https://www.kaggle.com/learn/certification/serenatong/intro-to-deep-learning"
        }
      ]
    },
    {
      title: "Game Development",
      subtitle: "Zenva",
      image: require("./assets/images/ZenvaLogo.png"),
      imageAlt: "ZenvaLogo",
      footerLink: [
        {
          name: "Game Development",
          url: "https://academy.zenva.com/certificate/4a54b5fd9be6"
        },
        {
          name: "Unity Projects",
          url: "https://academy.zenva.com/certificate/ee10a6e04baf"
        },
        {
          name: "3D Game",
          url: "https://academy.zenva.com/certificate/ddb68d583367"
        }
      ]
    },
    {
      title: "Responsive Code Design",
      subtitle: "freeCodeCamp",
      image: require("./assets/images/freeCodeCampLogo.png"),
      imageAlt: "freeCodeCampLogo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/fcc517d08a4-6008-422a-91ed-ca7e3d3e512d/responsive-web-design"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  projects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable,
  resumeSection
};
