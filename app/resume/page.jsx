"use client";

import { 
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaWordpressSimple,
    FaNodeJs,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiNextdotjs,
    SiPowerbi,
    SiTableau,
    SiMysql,
    SiPython,
    SiPostgresql,
    SiGithub,
    SiArcgis,
  } from "react-icons/si";


// ABOUT
const about = { 
    title: 'About me',
    description:
    `An upcoming data analyst with Geoinformatics background. I have used Python: Pandas, Seaborn, Scikit-Learn; SQL and Power BI 
     to clean, analyse and visualise complex data sets in both business related & GIS projects.
     In my previous work, I have built out interactive dashboards in Power BI to advise strategic decisions and 
     also effectively managed various databases using SQL Server, PostGIS & Microsoft Dynamics. Furthermore, 
     I design & develop UX-optimised landing pages & websites for start-ups and entrepreneurs.`,
    info: [
        {
            fieldName: "Name",
            fieldValue: "Polly Ramaselele",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+27) 60 883 3449",
        },
        {
            fieldName: "Experience",
            fieldValue: "3+ Years",
        },
        {
            fieldName: "Expertise",
            fieldValue: "Data Analysis",
        },
        {
            fieldName: "Nationality",
            fieldValue: "South African",
        },
        {
            fieldName: "Email",
            fieldValue: "pollyramaselele@gmail.com",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, SeSotho",
        },
    ],
};

// EXPERIENCE
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: "A description of my experience.",
    items: [
        {
            company: "Gordon Institute of Business Science",
            position: "Business Intelligence & Data Analyst Intern",
            duration: "2024 - Present",
        
        },
        {
            company: "Kartoza",
            position: "Geospatial Analyst Intern",
            duration: "Jan - April 2023",
        
        },
        {
            company: "Sales Consultant",
            position: "Smollan",
            duration: "2018 - 2022",
        
        },
    ],
};

// EDUCATION
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: "A description of my education.",
    items: [
        {
            institution: "University of Pretoria",
            degree: "BScHons Geoinformatics",
            graduation: "2024",
        
        },
        {
            institution: "University of Pretoria",
            degree: "BSc Geoinformatics",
            graduation: "2023",
        
        },
        {
            institution: "Sandown High School",
            degree: "National Senior Certificate",
            graduation: "2017",
        
        },
    ],
};

// SKILLS
const skills = {
    icon: '/assets/resume/cap.svg',
    title: 'My skills',
    description: 
    "A description of my skills. Analysing & visualising complex data. Database design, creation & management.",
    skillList: [
        {
            icon: <SiPowerbi />,
            name: "power BI",

        },
        {
            icon: <SiPython />,
            name: "NumPy, Pandas, Seaborn, Folium, Scikit, Tensorflow",

        },
        {
            icon: <SiTableau />,
            name: "tableau",

        },
        {
            icon: <SiPostgresql />,
            name: "postgreSQL",

        },
        {
            icon: <SiGithub />,
            name: "github",

        },
        {
            icon: <FaWordpressSimple />,
            name: "wordpress, Bootstrap",

        },
        {
            icon: <FaCss3 />,
            name: "Html 5, css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",

        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",

        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",

        },
        {
            icon: <SiArcgis />,
            name: "ArcGIS & QGIS",

        },
        
        
    ],

};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{
                opacity: 1, 
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w=full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index)=> {
                                            return ( 
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                            );

                                        })}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/* education */}
                        <TabsContent value="education" className="w=full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index)=> {
                                            return ( 
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.graduation}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                            );

                                        })}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>
                        

                        {/* skills */}
                        <TabsContent value="skills" className="w=full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map(( skill, index) => {
                                        return ( 
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            skills
                        </TabsContent>


                        {/* about */}
                        <TabsContent 
                            value="about" 
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index)=> {
                                        return (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs> 
            </div>
        </motion.div>
    );
};

export default Resume;

