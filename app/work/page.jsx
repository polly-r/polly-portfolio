"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@components/ui/tooltip';

import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'project',
        description: 'Lorem ipsum',
        stack: [
            {name: "HTML 5"},
            {name: "HTML"},
            {name: "CSS"},
            {name: "JavaScript"}
        ],
        image: '/assets/work/thumb1.png',
        live: '',
        github: "",
    },
    {
        num: '02',
        category: 'fullstack',
        title: 'project 2',
        description: 'Lorem ipsum',
        stack: [
            {name: "Next.js"},
            {name: "Power BI"},
            {name: "CSS"},
            {name: "JavaScript"}
        ],
        image: '/assets/work/thumb2.png',
        live: '',
        github: "",
    },
    {
        num: '03',
        category: 'machine learning',
        title: 'project 3',
        description: 'Lorem ipsum',
        stack: [
            {name: "Python"},
            {name: "Tableau"},
            {name: "Seaborn"},
            {name: "JavaScript"}
        ],
        image: '/assets/work/thumb3.png',
        live: '',
        github: "",
    },
];


const Work = () => {
    const [project, setProject] = useState(projects[0]);
    return (
        <motion.section 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}} 
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                projects
            </div>
        </motion.section>
    )    
};

export default Work;