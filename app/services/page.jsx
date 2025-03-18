"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    { 
        num: '01',
        title: 'Database Management & Optimisation',
        description: 'I design and optimize databases, helping to streamline data retrieval processes and improve overall system performance. This ensures that your data is stored efficiently and is easily accessible across the organisation. ',
        href:"",
    },
    { 
        num: '02',
        title: 'Data Visualisation & Reporting',
        description: 'Creating compelling and easy-to-understand visualizations that communicate key insights. I make use of tools such as Tableau, Power BI, IBM Cognos & custom visualisations to craft dashboards and reports that make data come to life.',
        href:""
    },
    { 
        num: '03',
        title: 'Statistical Analysis & Predictive Modeling',
        description: 'Applying advanced statistical methods and machine learning models to identify trends, forecast future outcomes and support decision-making. I help businesses gain deeper insights through regression analysis, classification & time-series forecasting.',
        href:""
    },
    { 
        num: '04',
        title: 'Web Development & Data Integration',
        description: 'Demonstrating my web development expertise through this very portfolio, built with Next.js, I also leverage no-code/low-code platforms to integrate data and create dynamic, user-friendly web solutions. I combine my data analysis skills with web development to deliver seamless data-driven applications that support business goals.',
        href:""
    },
    { 
        num: '05',
        title: 'Geospatial Data Analysis',
        description: "I specialise in analysing geographic data to uncover insights that can inform decision-making. Whether it's environmental monitoring, urban planning, site selection or resource management, I use popular open-source GIS tools to derive meaningful conclusions from geospatial data. In addition to this, I am able to leverage satellite imagery and remote sensing techniques, providing analysis for a range of industries, including agriculture, forestry and urban development assisting in change detection.",
        href:""
    },
    { 
        num: '06',
        title: 'Creative Design for Small Businesses',
        description: 'In addition to my work as a data analyst, I am a freelance designer specializing in mid-century vintage-inspired posters, logos, and brand creation. I dedicate my free time to helping entrepreneurs and small businesses craft distinctive, visually compelling brands that capture their essence and engage their target audience. Whether it’s designing a unique logo or building a full brand identity, my goal is to create designs that stand the test of time and make a lasting impact.',
        href:""
    },
]

const Services = () => {
    return ( 
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"> 
        <div className="container mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
            
                {services.map((service, index) => {
                    return (
                    <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                        {/* top */}
                        <div className="w-full flex justify-between items-center">
                            <div className="text-5xl font-extrabold text-outline text-outline text-transparent
                            group-hover:text-outline-hover transition-all">{service.num}</div>
                            <Link 
                            href={service.href} 
                            className="w-[70px] h-[70px] rounded-full bg-white group-hover bg-accent
                            transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                            >
                                <BsArrowDownRight className="text-primary text-3xl"/>
                            </Link>
                        </div>
                        {/* title */}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                            {service.title}</h2>
                        {/* description */}
                        <p className="text-white/60">{service.description}</p>
                        {/* border */}
                        <div className="border-b border-white/20 w-full"></div>
                    </div>);
                })}

            </motion.div>
        </div>
    </section>

    )
};

import { motion } from "framer-motion";


export default Services;