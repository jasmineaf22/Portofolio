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
      id: "arcode-2024",             // unik
      Title: "Arcode Top-up Platform",
      Description: "Web top-up digital dengan fitur loyalty tier, keluhan pelanggan, dan notifikasi email.",
      Img: "/images/arcode.png",
      Link: "https://arcode.vercel.app",
      Github: "Private",             // atau bisa link langsung
      TechStack: ["Laravel", "Filament", "MySQL", "Tailwind CSS"],
      Features: [
        "Top-up otomatis dengan redeem code acak",
        "Sistem loyalty Bronze - Silver - Gold",
        "Keluhan pelanggan sebagai tiket chat",
        "Notifikasi email realtime",
        "Dashboard admin Laravel Filament"
      ]
    },
    // tambahkan data lain sesuai kebutuhan
  ];

    useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, []);

  const licenses = [
    {
      id: 1,
      Img: "license/DET.png",
      Title: "Duolingo English Test (DET) - English Proficiency",
      Description: "Test of English language proficiency.",
    },
    // tambahkan data lain
  ];

  const experiences = [
    {
      id: 1,
      image: "experience/XL.png",
      place: "XL Axiata",
      position: "Digitalization - Program Office Intern",
      time: "July 2024 – Sept 2024",
      description: `• Developed a dashboard web app to provide project summaries using Laravel
  • Gained in-depth understanding of end-to-end project milestones in the telecommunications sector
  • Created PowerBI dashboards
  • Designed and implemented various automation systems using Microsoft Power Automate and Power Apps`,
    },
    {
      id: 2,
      image: "/assets/images/ai_lab.jpg",
      place: "Informatics Laboratory Assistant",
      position: "Artificial Intelligence Lab Assistant",
      time: "Feb 2025 – July 2025",
      description: `• Guided students in understanding and implementing AI concepts
  • Supervised practical lab sessions and ensured smooth module delivery
  • Assisted in grading and feedback for AI projects`,
    },
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
          Explore my journey through projects, licenses, and professional experiences. Each section represents a milestone in my learning path.
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
            <Tab icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />} label="License" {...a11yProps(1)} />
            <Tab icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />} label="Project" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={setValue}>
          {/* Experience Tab */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden">
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


          {/* License Tab */}
          <TabPanel value={value} index={1} dir={theme.direction}>
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

          {/* Project Tab */}
          <TabPanel value={value} index={2} dir={theme.direction}>
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
        </SwipeableViews>
      </Box>
    </div>
  );
}
