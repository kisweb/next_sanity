import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'

type Props = {}

function WorkExperience({ }: Props) {
    return (
        <motion.div 
        initial={{ 
            opacity:0
         }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <h3
                className="absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl">
                Experience
            </h3>
        
        <div className="absolute mt-5 w-full flex space-x-12 overflow-x-scroll p-10 snap snap-mandatory" >
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
            
        </motion.div>
    )
}

export default WorkExperience