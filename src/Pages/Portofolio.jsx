import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import Certificate from "../components/Certificate";
import CardExperience from "../components/CardExperience";
import AOS from "aos";
import "aos/dist/aos.css";
import { Briefcase, Award, Code } from "lucide-react";

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllLicenses, setShowAllLicenses] = useState(false);
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  // Data local
  const projects = [
    {
      id: "arcode",             // unik
      Title: "Arcode",
      Description: "The Ultimate Digital Game Top-Up Platform",
      Img: "/project/arcode.png",
      Link: "https://github.com/katsuku27/CRM",
      Github: "Private",             // atau bisa link langsung
      TechStack: ["Laravel", "React", "Filament", "MySQL", "Tailwind CSS"],
      Features: [
        "Digital Game Top-Up with Redeem Code",
        "Loyalty system with Bronze - Silver - Gold Tier",
        "Complaint Ticket System with Form and AI Integrated Bot",
        "Automatic Financial Report",
        "Price Discount System Based on Tier and Event",
        "Admin Dashboard with Laravel Filament"
      ]
    },
    {
      id: "projectpath",             // unik
      Title: "ProjectPath",
      Description: "A project management platform with built-in task automation and full user-role control.",
      Img: "/project/projectpath.png",
      Link: "https://github.com/jasmineaf22/projectPath-ERP",
      Github: "Private",             // atau bisa link langsung
      TechStack: ["Laravel", "React", "MySQL", "Inertia", "Tailwind CSS"],
      Features: [
        "Customizable Roles & Permissions for Client and Team Management",
        "Personalized “My Tasks” Dashboard",
        "Task Workflow System with Todo, QA, Done, and Deployed Stages",
        "Admin Dashboard with Project Activity and Access Control"
      ]
    },
    {
      id: "pmis-xl",             // unik
      Title: "PMIS XL Axiata",
      Description: "Internal Dashboard Web App for Project Progress Monitoring in XL Axiata",
      Img: "/project/pmis-xl.png",
      Link: "https://github.com/jasmineaf22/pmis-xl-web",
      Github: "Private",             // atau bisa link langsung
      TechStack: ["Laravel", "Firebase", "Tailwind CSS", "Javascript", "MySQL"],
      Features: [
        "Secure Login with Microsoft or Google Account and Admin Email Approval",
        "Interactive Dashboard with Project KPIs and Real-Time Progress Tracking",
        "Full Integration with Power BI Online for Dynamic Data Visualization",
        "Responsive Data Charts Built with JavaScript Libraries",
        "Used by Program Office Division to Monitor and Report Project Metrics"
      ]
    },
    {
      id: "skillgap",             // unik
      Title: "Indonesia Digital Skill Gap Analysis",
      Description: "A data mining project for the GEMASTIK competition to identify the gap between industry demand and workforce supply for digital skills in Indonesia.",
      Img: "/project/skillgap.png",
      // Link: ,
      Github: "Private",
      TechStack: ["Python, PowerBI"],
      Features: [
        "Analyzed thousands of job postings and professional profiles scraped from multiple online platforms.",
        "Engineered a hybrid NLP pipeline using dictionary-based methods and Transformer models for skill extraction.",
        "Quantified the skill gap, revealing key opportunities in high-demand, low-supply areas.",
        "Built an interactive Power BI dashboard to visualize real-time talent market trends."
      ]
    },
    {
      id: "victoria",             // unik
      Title: "Room Booking Apps for Bank Victoria",
      Description: "A secure internal web application for managing meeting room reservations.",
      Img: "/project/victoria.png",
      Link: "https://github.com/jasmineaf22/room-book-victoria",
      Github: "Private",
      TechStack: ["React JS"],
      Features: [
          "Role-based authentication connected to Bank Victoria’s database server",
          "Room reservation system with scheduling and availability tracking real-time",
          "Admin dashboard for managing rooms, schedules, and user permissions"
      ]
    },
    {
      id: "cipherlens",             // unik
      Title: "CipherLens",
      Description: "Social App with AR integrated Camera Filters, Chat Rooms, and Interactive Timeline",
      Img: "/project/cipherlens.png",
      Link: "https://github.com/katsuku27/pwmob.git",
      Github: "Private",             // atau bisa link langsung
      TechStack: ["Flutter", "DeepAR", "Firebase", "Dart"],
      Features: [
        "Face Filter Camera with DeepAR Integration and Real-Time Effects",
        "Interactive Timeline to Post Photos, Text Updates, Likes, and Comments",
        "Chat Room System with Photo Sharing and Real-Time Messaging",
        "Photo Saving and Sharing to Gallery, Timeline, or Private Chat",
        "Swipe-Based Navigation for Seamless Camera and Chat Access"
      ]
    },
    {
      id: "pandora",             // unik
      Title: "Pandora",
      Description: "Community Platform with Real-Time Chat and Group Management",
      Img: "/project/pandora.png",
      Link: "https://github.com/sharclen5/pandora",
      Github: "Private",             // atau bisa link langsung
      TechStack: ["Laravel", "Livewire", "SQL", "Pusher"],
      Features: [
        "Discover and Create Communities with Multiple User Roles (Admin, Member, etc.)",
        "Real-Time Group Chat Using WebSocket",
        "Role-Based Access for Community Features and Management Tools"
      ]
    },
    {
      id: "credit-analysis",             // unik
      Title: "Credit Card Fraud Analysis",
      Description: "Credit Card Fraud Detection Using Machine Learning with Imbalanced Data Handling and Model Comparison",
      Img: "/project/credit-analysis.png",
      // Link: "/404",
      Github: "Private",             // atau bisa link langsung
      TechStack: ["Python", "Colab"],
      Features: [
        "Utilized Kaggle dataset with 1M+ records and extreme class imbalance (~5% fraud)",
        "Built and evaluated Logistic Regression and XGBoost models",
        "Documented findings in a research paper comparing both models (not published yet)"
      ]
    },
    {
      id: "portofolio",             // unik
      Title: "Portofolio",
      Description: "Interactive Personal Portfolio Website Built with ReactJS",
      Img: "/project/portofolio.png",
      Link: "https://jasmineaf22.vercel.app/",
      Github: "Private",             // atau bisa link langsung
      TechStack: ["React", "Tailwind CSS"],
      Features: [
        "Static SPA Deployed on Vercel with Responsive Design",
        "Dedicated Sections for Projects, Experience, and Licenses",
        "Clean UI Built with React Components and Tailwind Styling"
      ]
    },
    {
      id: "sigizy",             // unik
      Title: "SIGIZY",
      Description: "MockUp Design for Fuzzy-Based Web Application for Early Detection of Child Stunting at Posyandu",
      Img: "/project/sigizy.png",
      // Link: "https://arcode.vercel.app",
      Github: "Private",             // atau bisa link langsung
      TechStack: ["Figma"],
      Features: [
        "Child Health Data Input (Age, Weight, Height) with Fuzzy Logic Classification",
        "Automatic Stunting Risk Categorization Based on Fuzzy Inference System",
        "Statistical Dashboard to Monitor Community Growth Trends"
      ]
    },
    {
      id: "freshtive",             // unik
      Title: "Freshtive",
      Description: "Online Marketplace for Fresh Fruits and Vegetables",
      Img: "/project/freshtive.png",
      // Link: "https://arcode.vercel.app",
      Github: "Private",             // atau bisa link langsung
      TechStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      Features: [
        "Built with WordPress and E-commerce Plugins for Seamless UX",
        "Shipping Cost Calculation and Purchase History in User Profile",
        "Product Categories with Integrated Discounts and Checkout Flow"
      ]
    },
    {
      id: "horrorflix",             // unik
      Title: "HorrorFlix",
      Description: "A Horror Movie Review Platform",
      Img: "/project/horrorflix.png",
      Link: "https://github.com/jasmineaf22/responsi-pemweb",
      Github: "Private",             // atau bisa link langsung
      TechStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      Features: [
        "Genre-Based Navigation for Horror Subcategories (e.g., Thriller, Supernatural, Slasher)",
        "User Reviews and Ratings System for Each Movie",
        "Comment and Like Features on Movie Pages and User Reviews"
      ]
    },
    {
      id: "perpusft",             // unik
      Title: "PerpusFT",
      Description: "Engineering Faculty Library Web App for Book Inventory, Borrowing, and Tracking",
      Img: "/project/perpusft.png",
      Link: "https://github.com/jasmineaf22/pbo-laravel-buku",
      Github: "Private",             // atau bisa link langsung
      TechStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      Features: [
        "Book Data Listing with Descriptions and Borrowing Status",
        "Searchable Book Catalog and Description"
      ]
    },
    {
      id: "room-booking",             // unik
      Title: "Room Booking",
      Description: "Room Reservation System for Engineering Faculty",
      Img: "/project/room-booking.png",
      Link: "https://github.com/jasmineaf22/project-pemweb",
      Github: "Private",             // atau bisa link langsung
      TechStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      Features: [
        "Online Room Booking with Form Upload and Schedule Availability Check",
        "User Authentication and Profile Management",
        "Room Data Overview Including Capacity and Facility Info"
      ]
    },
  {
      id: "marvel-wiki",             // unik
      Title: "Marvel-Wiki",
      Description: "Static Marvel Wiki Site Built with Vanilla HTML, CSS, and JavaScript",
      Img: "/project/marvel-wiki.png",
      // Link: "https://arcode.vercel.app",
      Github: "Private",             // atau bisa link langsung
      TechStack: ["HTML", "CSS", "JavaScript"],
      Features: [
        "Character and Movie Information Pages Styled with Custom CSS",
        "Search and Navigation Across Marvel Content"
      ]
    }
  ];

    useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, []);

  const licenses = [
    {
      id: 1,
      Img: "license/DET.png",
      Title: "Duolingo English Test (DET)",
      Description: "English language proficiency test. Achieved an overall score of 130/160, equivalent to a B2 level.",
    },
    {
      id: 2,
      Img: ["license/dc1.png", "license/dc2.png", "license/dc3.png", "license/dc4.png", "license/dc5.png", "license/dc6.png"],
      Title: "Associate Data Scientist with Python - DataCamp",
      Description: "Completed DataCamp's Data Scientist with Python track, covering data manipulation, visualization, and machine learning.",
    },
    // {
    //   id: 3,
    //   Img: "license/UiPath.png",
    //   Title: "UiPath RPA Developer Certification",
    //   Description: "Achieved UiPath RPA Developer Certification, demonstrating skills in robotic process automation and workflow design.",
    // },
    {
      id: 4,
      Img: ["license/web1.png", "license/web2.png", "license/web3.png", "license/web4.png"],
      Title: "Web Programming Course - Dicoding",
      Description: "Completed several Web Programming course on Dicoding.",
    },
    {
      id: 5,
      Img: ["license/mobile1.png", "license/mobile2.png"],
      Title: "Mobile Programming Course - Dicoding",
      Description: "Completed several Mobile Programming course on Dicoding.",
    },
    {
      id: 6,
      Img: ["license/softeng1.png", "license/softeng2.png", "license/softeng3.png", "license/softeng4.png", "license/softeng5.png", "license/softeng6.png"],
      Title: "Software Engineering Course - Dicoding",
      Description: "Completed several Software Engineering related courses from dicoding.",
    },
        {
      id: 7,
      Img: "license/sds.png",
      Title: "Data Analyst - Soedirman Digital School 2024",
      Description: "Achieved Data Analyst certification from Soedirman Digital School 2024, demonstrating skills in data analysis and visualization.",
    },
    {
      id: 8,
      Img: "license/prak-pemweb.png",
      Title: "Web Programming Course",
      Description: "Completed Web Programming Course in college.",
    },
    {
      id: 9,
      Img: ["license/softeng7.png", "license/softeng8.png", "license/softeng9.png", "license/softeng10.png", "license/softeng11.png", "license/softeng12.png", "license/softeng13.png"],
      Title: "IT related Course",
      Description: "Completed several IT related courses from various platforms, covering key topics such as Data Mining, Cybersecurity, and Programming",
    }
    // tambahkan data lain
  ];

  const experiences = [
      {
      id: 1,
      // image: "experience/exim.png",
      place: "Indonesia Eximbank",
      position: "IT System Development Intern",
      time: "Sept 2025 – Feb 2026",
      description: `Assisted in developing and maintaining internal web applications to support business operations.
Prepared Functional and Technical Documents for system development projects.
Collaborated with cross-functional teams to gather requirements and translate them into system design documentation.
Supported system testing, including UAT, and QA processes to ensure compliance with organizational standards.
Gained practical understanding of system development processes and business workflows in the banking sector.`,
    },
    {
      id: 2,
      image: "experience/victoria.png",
      place: "Bank Victoria International",
      position: "Digital Banking Intern",
      time: "July 2025 – August 2025",
      description: `Built automation workflows for core banking processes using Microsoft Power Automate
Developed a React-based front-end web integrated with internal APIs`,
    },
    {
      id: 3,
      image: "experience/XL.png",
      place: "XL Axiata",
      position: "Digitalization - Program Office Intern",
      time: "July 2024 – Sept 2024",
      description: `Developed a dashboard web app to provide project summaries using Laravel
Gained in-depth understanding of end-to-end project milestones in the telecommunications sector
Implemented various automation systems using Microsoft Power Automate and Power Apps, also built several PowerBI dashboard`,
    },
    {
      id: 4,
      image: ["experience/asprak1.png", "experience/asprak2.png", "experience/asprak3.png"],
      place: "Informatics Laboratory Assistant",
      position: "Artificial Intelligence Lab Assistant",
      time: "Feb 2025 – July 2025",
      description: `Conducted hands-on lab sessions and guided 40 students in understanding AI concepts and practical implementations.
Assisted in designing lab exercises, evaluating student assignments, and providing technical support during AI practicums.`,
    },
    {
      id: 5,
      image: "experience/hmif.png",
      place: "Himpunan Mahasiswa Informatika (HMIF) Unsoed",
      position: "Treasury Staff - Entrepreneurship Division",
      time: "Feb 2024 – Feb 2025",
      description: `Responsible for organizing a seminar and Monitoring the division’s finances
Involved in various events, both as a staff member and as a coordinator`},
    {
      id: 6,
      image: "experience/kkn.png",
      place: "International Community Service Unsoed 2025 at Kuala Lumpur, Malaysia",
      position: "PIC of Public Relations & Teaching Volunteer",
      time: "Jan 2025 – Feb 2025",
      description: `Taught early childhood and elementary school students literacy and basic subjects at KBRI Malaysia Learning Center for 30 days
Managed sponsorship and public relations initiatives to support the program’s operational needs`},
    {
      id: 7,
      place: "Jakarta Merdeka Community at Unsoed",
      position: "Staff of Publications and Public Relations",
      time: "Sept 2022 - Nov 2023",
      description: `Responsible for internal and external communications
Headed a division for a charity event`}
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === "projects") {
      setShowAllProjects((prev) => !prev);
    } else if (type === "licenses") {
      setShowAllLicenses((prev) => !prev);
    } else if (type === "experiences") {
      setShowAllExperiences((prev) => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedLicenses = showAllLicenses ? licenses : licenses.slice(0, initialItems);
  const displayedExperiences = showAllExperiences ? experiences : experiences.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, licenses, and professional experiences.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
          <Tab icon={<Briefcase className="mb-2 w-5 h-5 transition-all duration-300" />} label="Experience" {...a11yProps(0)} />
          <Tab icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />} label="Project" {...a11yProps(1)} />
          <Tab icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />} label="License" {...a11yProps(2)} />

          </Tabs>
        </AppBar>

        <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={setValue}>
          {/* Experience Tab */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden">
              {displayedExperiences.map((exp, index) => (
                <div
                  key={exp.id || index}
                  data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
                  data-aos-duration="1000"
                >
                  <CardExperience
                    image={exp.image}
                    position={exp.position}
                    place={exp.place}
                    time={exp.time}
                    description={exp.description}
                  />
                </div>
              ))}
            </div>
            {experiences.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton onClick={() => toggleShowMore("experiences")} isShowingMore={showAllExperiences} />
              </div>
            )}
          </TabPanel>

          {/* Project Tab */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden">
              {displayedProjects.map((project, index) => (
                <div key={project.id || index} data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"} data-aos-duration="1000">
                  <CardProject Img={project.Img} Title={project.Title} Description={project.Description} Link={project.Link} id={project.id} TechStack={project.TechStack} />
                </div>
              ))}
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton onClick={() => toggleShowMore('projects')} isShowingMore={showAllProjects} />
              </div>
            )}
          </TabPanel>

          {/* License Tab */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden">
              {displayedLicenses.map((license, index) => (
                <div key={license.id || index} data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"} data-aos-duration="1000">
                  <Certificate
                      Img={license.Img}
                      Title={license.Title}
                      Description={license.Description}
                    />
                </div>
              ))}
            </div>
            {licenses.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton onClick={() => toggleShowMore('licenses')} isShowingMore={showAllLicenses} />
              </div>
            )}
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
