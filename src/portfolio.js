const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello",
  title2: "Ravindra",
  logo_name: "RAVINDRA REDDY",
  nickname: "RAVI",
  full_name: "SIDDAM RAVINDRA REDDY",
  subTitle:
    "Mechanical engineer, Web Developer, Intrested in Software field, Machine Learning Enthusiast, Quick Learner",
  resumeLink:
    "https://drive.google.com/file/d/14uWnf9e5I1PD1NEXrAulipUuVxN-sWld/view?usp=drive_open",
  mail: "ravindrareddy1217@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/ravindra579/",
  linkedin: "https://www.linkedin.com/in/siddam-ravindra-reddy-230539190",
  gmail: "ravindrareddy1217@gmail.com",
};
const degrees = {
  degrees: [
    {
      title: "National Istitute of Technology Calicut",
      subtitle: "B.Tech. in Mechanical Engineering",
      duration: "2019 - Present",
      color_code: "#2AAFED",
      descriptions: [
        ">> CGPA=8.78 till fourth semester",  
        ">> Intrested in Mechanical core Sujects,Coading ,Web Development,Machine Learning & Software field",
        ">> Actively participating in Competetions",
        ">> Worked on many self Projects as well as in Group projects",     
      ]
    },
    {
        title: "Narayana Junior College ,Nannur",
        subtitle: "MPC",
        color_code: "#ffc475",
        duration: "2017-2019",
        descriptions: [
          ">> CGPA - 9.88 ",
          ">> JEE Main Rank - 11,979",
          ">> APEAMCET Rank - 2079 ",
          ">> TSEAMCET rRnk - 781 ",
        ]
      }, 
      {
        title: "SRI Vikas High School ,Koilakuntla",
        subtitle: "",
        color_code: "#0C9D5899",
        duration: "2016-2017",
        descriptions: [
          ">> CGPA - 9.3 ",
          ">> Participated in district level Criket and Kabaddi Games",
        ]
      }, 
  ]
};

const certifications = {
  certifications: [
    {
        title: "Neural Networks and Deep Learning",
        subtitle: "deeplearning.ai",
        subtitle1:"Coursera",
        certificate_link:"dl.JPG",
        color_code: "#7A7A7A",
      },
    {
      title: "Sequence Models",
      subtitle: "deeplearning.ai",
      subtitle1:"Coursera",
      certificate_link:"sm.JPG",
      color_code: "#F6B808",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "deeplearning.ai",
      subtitle1:"Coursera",
      certificate_link:"cnn.JPG",
      color_code: "#2AAFED",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "deeplearning.ai",
      subtitle1:"Coursera",
      certificate_link:"ml.JPG",
      color_code: "#E2405F",
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "deeplearning.ai",
      subtitle1:"Coursera",
      certificate_link:"nn.JPG",
      color_code: "#0C9D5899",
    },
    {
      title: "Introduction to Web Development",
      subtitle: "UCDAVIS",
      subtitle1:"Coursera",
      certificate_link: "web.JPG",
      color_code: "#C5E2EE",
    },
    {
      title: "Matlab",
      subtitle: "Matlab Comprehensive course by Sanjeev",
      subtitle1:"Udemy",
      certificate_link: "Matlab.JPG",
      color_code: "#ffc475",
    },
    {
      title: "Sofware Engineer virtual Experience",
      subtitle: "JPMorgan Chase & Co",
      subtitle1:"Forage",
      certificate_link: "jpmc.JPG",
      color_code: "#1e70c1",
    },
    {
      title: "Cloud Computing with AWS",
      subtitle: "Internshala Course",
      subtitle1:" ",
      certificate_link: "internshala.JPG",
      color_code: "#ffbfae",
    },
    {
        title: "Python Programming",
        subtitle: "Python programming by Avinash Jain",
        subtitle1:"Udemy",
        certificate_link: "p1.JPG",
        color_code: "#2AAFED",
      },
      {
        title: "Hello English Training Competetion",
        subtitle: "Hello English",
        subtitle1:"FFE",
        certificate_link: "Hello.JPG",
        color_code: "#ffbfae",
      },
      {
        title: "Wire Technology in Bikes & Engine System Workshop",
        subtitle: "Skyy Rider",
        subtitle1:" ",
        certificate_link: "sr.JPG",
        color_code: "#F6B808",
      },
      {
        title: "Front End Workshop",
        subtitle: "Skill Safari",
        subtitle1:"",
        certificate_link: "fe.JPG",
        color_code: "#7A7A7A",
      },
      
  ],
};

// Experience Page
const experience = {
      experiences: [
        {
          title: "Full Stack Developer [Befinsavvy]",
          company: "BeFinSavvy",
          company_url: " ",
          logo_path: "buld.jpg",
          duration: "May-2021 – July-2021",
          location: "Work From Home",
          description:[
            ">> Currently working on building frontend pages, Backend and API's [befinsavvy.herokuapp.com].",
            ">> Worked on optimization of Database. Worked on optimization of Database."
          ],
          color_code: "#4ED0CE",
        },
        {
          title: "Data Acquisition system",
          company: " ",
          company_url: " ",
          logo_path: "buld.jpg",
          duration: "May-2021 – July-2021",
          location: "Work From Home",
          description:[
            ">> Designed a cooling system for a new product",
            ">> Worked on developing a GUI for visualizing radar data [in C++ using QT Framework]."
          ],
          color_code: "#0071C5",
        },
        {
          title: "IOT",
          company: "National Olampiad",
          company_url: " ",
          logo_path: "wrighter.jpg",
          duration: "June-2021 - July-2021",
          location: "",
          description: [
              ">> Automated things like generating mail ,saving information on Drive when a new video uploaded on a specific channel using IFFT."
        ],
          color_code: "#56A4D3",
        },{
          title: "Web Developer & Designer",
          company: "Sparks Foundation",
          company_url: "https://sugarlabs.org/",
          logo_path: "google_logo.png",
          duration: "1 jan 2021 - 31 jan 2021",
          location: "Work From Home",
          description:[
            ">> Worked on Designing “Basic banking system website” using PHP and MYSQL Database"
          ],
          color_code: "#FFBC42",
        }
    
      ],
};
const Volunteer ={
   Volunteers:[
          {
            title: "Campus Ambassoder",
            company: "Smart Knower",
            duration: "August 2020 - Febraury 2021",
            location: " ",
            description:[
              ">> I had worked 8 months as a campus Ambassoder during this time i get to know how efficiently we have to express and share our ideas and conducted some awareness programme about the programmes offered by Smart Knower"
            ],
            color_code: "#4285F4",
          },
          {
            title: "Volunteer for Thatva'19 & Ragam'20",
            company: "NITC",
            duration: "During the fest",
            location: " ",
            description:[
              ">> During Thathva'19 worked in League of Machines which is robotic competetion, I am one of the volunteer for organising that event.",
              ">> During Ragam'20 volunteerd for Ethnic stall which is Skits and Dance group."
            ],
            color_code: "#D83B01",
          },
          {
            title: "Member of Club Ignite",
            company: "NITC",
            duration: "2020 - On Going",
            location: " ",
            description:[
              ">> I am one of the member of club Ignite the main aim of this club is to help poor students by providing books [mainly related to JEE Mains] and recorded lectures ,with the help of this club i had experienced how to manage and work with a group of members"
            ],
            color_code:"#7A7A7A",
          },
   ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profilepic.JPG",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};
const projects = {
  data: [
    {
      id: "0",
      name: "Portfolio",
      website_id:"1",
      website:"https://ravindra579.github.io/ravindra_portfolio/#/",
      url: "https://github.com/ravindra579/portfolio",
      description: [
          "A clean and full customizable portfolio website."
        ],
      language:[
        "ReactJS",
      ],
    },
    {
      id: "0",
      name: "Repot generator",
      website_id:"1",
      website:"http://spl-report.herokuapp.com/",
      url: "https://github.com/ravindra579/spl_report_generator",
      description:[
        "This Website basically generates reports of users who attended the Interview Preparation course conducted by the Skill Craft",
        "Successfully deployed website in Heroku",
        "In Order to view content inside webiste enter email as 'ravindrareddy1217@gmail.com' in  website login page",
      ],
      language: [
         "Python",
         "Django",
         "Postgresql",
         "HTML",
         "Javascript",
         "Bulma CSS"
      ],
    },
    {
      id: "0",
      website_id:"1",
      website:"http://set-forth.herokuapp.com/",
      name: "Dynamic websites with Django",
      url: "https://github.com/ravindra579/dynamic_website_with_django",
      description:[
        "This is my first Responsive website",
        "With the help of this of this Website we can get to know how the projects have to do ,scope,plans ....,Internships,Jobs if some one fill their home page in website but  currently there were no users its empty"],
      language: [
          "Python",
          "Django",
          "Postgresql",
          "HTML",
          "Javascript",
          "Tailwind CSS"
      ],
    },
    {
      id: "0",
      website_id:"0",
      website:"",
      name: "Object detection using YOLOV4",
      url: "https://github.com/ravindra579/object-detection_yolov4",
      description:[
        "Mainly focused on YOLOV4 algorithm and the new things in YOLOV4 compared to other algorithms and the importance ,Selected YOLOV4 because of its accuracy and speed","Written Blogs on “Medium Website” based on this project"],
      language: [
          "Python",
          "Tensorflow",
          "Keras"
      ],
    },
    {
      id: "0",
      website_id:"0",
      website:"",
      name: "Chess Game",
      url: "https://github.com/ravindra579/chess-app",
      description:[
        "Designed and Developed simple two player chess game in Android Studio using Java XML and some other technologies",
        "mainly focused on efficiency of Algorithms and applied my Data structures and algorithms knowledge to work effective"],
      language: [
        "Java",
        "XML"
      ],
    },
    {
      id: "0",
      website_id:"0",
      website:"",
      name: "Kuzushiji recognition with Center-net",
      url: "https://github.com/ravindra579/centernet-kuzhusiji_recognition",
      description:[
        "Detecting of japanese words using Centernet and corernet Algorithm ,got experience on Math behind the algorithms and Machine Learning "],
      language: [
          "Python",
          "Tensorflow"
      ],
    },
    {
      id: "1",
      website_id:"0",
      website:"",
      name: "Brake Fluid Leakage Indicator",
      url: " ",
      description:[
        "worked as a group of five Members mainly focused on theory and we Learned how to work, share ideas as a group even though its online [work from home](without interacting directly) we tried our best to complete the project and to brush-up and improved our knowledge"],
      language: [
        "Solidworks"
      ],
    },
    {
      id: "1",
      website_id:"0",
      website:"",
      name: "Self stabilising robot using PID",
      url: " ",
      description:[
        "Made a Simple stabilizing Robot using PID technique and with the help of sensors", 
        "Experienced with Arduino coding" ],
      language: [
        "Aurdino"
      ],
    },
    {
      id: "0",
      website_id:"0",
      website:"",
      name: "Variation of Temperature in Fluids using C++",
      url: "https://github.com/ravindra579/cpp_project",
      description:
        ["Computational analysis of Temperature Variation in Viscous Fluids.",
    "Anlysed the Variation of Temperature plot using C++ Programming"],
      language: [
        "C++"
      ],
    },
    {
      id: "0",
      website_id:"0",
      website:"",
      name: "Structural analysis of axisymmetric object",
      url: "https://github.com/ravindra579/FEM",
      description:
        ["Analysed the Displacement,Stress,Strain in Hollow Cylinder Using Finite Element Method techniques",
    "Written Matlab Code Which is coustamisible "],
      language: [
        "MATLAB"
      ],
    },
    {
      id: "0",
      website_id:"0",
      website:"",
      name: "Cluster based Algorithm in Matlab",
      url: "https://github.com/ravindra579/cbm",
      description:
        ["Analysed the Peroidic Vibration Using Cluster Based Algorithm in Matlab",
    "Improved the Cluster based algorithm based on Grid concept"],
      language: [
        "MATLAB"
      ],
    },
    {
      id: "0",
      website_id:"0",
      website:"",
      name: "Simple Libarary Management System in C++",
      url: "https://github.com/ravindra579/library-management-system",
      description:
        ["A simple Library Management System Functions using C++ code"],
      language: [
        "C++"
      ],
    },
    {
      id: "1",
      website_id:"0",
      website:"",
      name: "Face Recognition Using DLIB",
      url: " ",
      description: ["Face Recognition Using Dlib"],
      language: [
        "Python"
      ],
    },
    {
      id: "0",
      website_id:"0",
      website:"",
      name: "Drum Stick Music Generation",
      url: "https://github.com/ravindra579/drum-stick",
      description: ["A simple music generator website",],
      language: [
        "HTML",
        "CSS",
        "javascript"
      ],
    },
  ],
};

const Competetionss = {
    data: [
      {
        id: "0",
        website_id:"0",
        website:"",
        name: "Sales Prediction",
        url: "https://github.com/ravindra579/sales_prediction",
        description: [
            "Kaggle Competetion",
            "Stood in Top 10 %"
          ],
        language: [
        "Python"
        ],
      },
      {
        id: "0",
        website_id:"0",
        website:"",
        name: "Google Landmark Recognition",
        url: "https://github.com/ravindra579/google_landmak_recognition",
        description:[
          "Kaggle Competetion",
          "Stood in Top 90%"
        ],
        language: [
        "Python"
        ],
      },
      {
        id: "0",
        website_id:"0",
        website:"",
        name: "Hash Code Drone Delivery",
        url: "https://github.com/ravindra579/hash_code_kaggle",
        description:
          ["Kaggle Competetion",
        "Stood in Top 80%"],
        language: [
        "Python"
        ],
      },
      {
        id: "0",
        website_id:"0",
        website:"",
        name: "Friendship Goal",
        url: "https://github.com/ravindra579/friendship-goal",
        description:
          ["Hacker earth Machine Learning Competetion"],
        language: [
         "Python"
        ],
      },
      {
        id: "1",
        website_id:"0",
        website:"",
        name: "National Olympiad 4",
        url: " ",
        description:
          ["National Olympiad Aptitude Test"],
        language: [
         ""
        ],
      },
    ]};

export {
  settings,
  greeting,
  socialMediaLinks,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
  Volunteer,
  Competetionss,
};
