

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // 
  animation: splashAnimation,
  duration: 2000
};


const illustration = {
  animated: true 
};

const greeting = {
  username: "Allan Vemy",
  title: "Hello, je suis Développeur Full Stack",
  subTitle: emoji(
    " Hello, je suis Développeur Full Stack passionné par la création d'applications web et mobiles. J'aime apprendre de nouvelles technologies et relever des défis techniques. N'hésitez pas à me contacter pour discuter de projets ou de collaborations !"
  ),
  resumeLink:
    "https://www.canva.com/design/DAGM-ZAgBcw/KDd91UO4qmcxl46YiEqO3g/view?utm_content=DAGM-ZAgBcw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a5a33e22d", // Set to empty to hide the button
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AllanVemy27", 
  linkedin: "https://www.linkedin.com/in/allan-vmy/", 
  gmail: "vemyallan8@gmail.com",
  facebook: "https://www.facebook.com/AllanVemy27",
  display: true 
};

// Skills Section

const skillsSection = {
  title: "Qu'est ce que j'utilise ?",
  subTitle: "Je vous présente les technologies que j'utilise pour développer des applications web.",
  skills: [
    emoji(
      "⚡ Développement d'applications Front-End"
    ),
    emoji("⚡ Développement d'applications Back-End")
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "OpenClassrooms",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Formation de Développeur Web",
      duration: "2022 - 2023",
      desc: "J'ai découvert un panel de langage de programmation.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "DAVA de Normandie",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "BTS Communication",
      duration: "Janvier 2023 - Présent",
      desc: "Durant cette formation, j'ai pu valider mes compétences et valoriser mes expériences dans un livret.",
      descBullets: ["Valrisation de mes compétences", "Valorisation de mes expériences"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programmation",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Développeur Web & Chargé de communication",
      company: "Association Norm'Handicap",
      companylogo: require("./assets/images/436354941_334770292967744_2999232595206336180_n.jpg"),
      date: "June 2020 – Present",
      desc: "Création et mise en place d'un site internet, hébergement du site internet.",
    },
    {
      role: "Développeur Web",
      company: "Le Trait d'Union",
      companylogo: require("./assets/images/letraitdunion.png"),
      date: "Octobre 2022",
      desc: "Créer le site internet du café associatif le Trait d'Union."
    },
    {
      role: "Chargé de communication & Développeur Web",
      company: "L'Aire Joyeux",
      companylogo: require("./assets/images/lairejoyeux.jpg"),
      date: "Septembre 2022 - Janvier 2024",
      desc: "Piloter la stratégie de communication et marketing, gérer les réseaux sociaux, réaliser les supports de communication et du site internet."
    }
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


const bigProjects = {
  title: "Mes Projets",
  subtitle: "Présentation des mes projets les plus récents et intéressants.",
  projects: [
    {
      image: require("./assets/images/436354941_334770292967744_2999232595206336180_n.jpg"),
      projectName: "Norm'Handicap",
      projectDesc: "Page d'accueil du site internet de l'association Norm'Handicap",
      footerLink: [
        {
          name: "Visiter le site internet",
          url: "https://normhandicap.fr/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/lairejoyeux.jpg"),
      projectName: "L'Aire Joyeux",
      projectDesc: "Réseaux sociaux de l'association L'Aire Joyeux",
      footerLink: [
        {
          name: "Visiter la page Facebook",
          url: "https://www.facebook.com/lairejoyeux"
        }
      ]
    },
    {
      image: require("./assets/images/letraitdunion.png"),
      projectName: "Le Trait d'Union",
      projectDesc: "Site internet de l'association Le Trait d'Union",
      footerLink: [
        {
          name: "Visiter le site internet",
          url: "https://letraitdunionbernay.fr/"
        }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Bootcamp et certifications 🏆 "),
  subtitle:
    "Présentation de mes réalisations, certifications et formation que j'ai réalisé en autonomie.",

  achievementsCards: [
    {
      title: "Inco Academy",
      subtitle:
        "Bootcamp de 2 mois pour apprendre les bases du développement web et mobile.",
      image: require("./assets/images/inco_academy_logo.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Udemy",
      subtitle:
        "Formation de Développeur Web Full Stack avec 24 certifications.",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "#Avenir",
      subtitle: "Parcours me permettant de découvrir différents métiers et de chosir mon projet professionnel.",
      image: require("./assets/images/YT_avenir.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Me contacter : ☎️"),
  subtitle:
    "Discuter d'un projet, d'une opportunité ou simplement dire bonjour. Mon e-mail est toujours ouvert !",
  number: "06 58 20 99 02",
  email_address: "vemyallan8@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
