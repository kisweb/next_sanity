/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {motion} from "framer-motion"

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[700px] md:w-[700px] xl:w-[1000px] snap-center bg-[#292929] p-5 mt-20">
        <motion.img 
        initial={{ y:-100, opacity:0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        className="w-16 h-16 rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center" 
        src="taureau.png" alt="logo" />

        <div className="px-0 md:px-10">
            <h4 className="text-3xl font-light">Principal de collège moyen</h4>
            <p className="font-bold text-2xl mt-1">CEM Ahoune Sané</p>
            <div className="flex space-x-2 my-1">
                <img 
                className="w-10 h-10 rounded-full"
                src="taureau.png" alt="" />
                <img 
                className="w-10 h-10 rounded-full"
                src="taureau.png" alt="" />
                <img 
                className="w-10 h-10 rounded-full"
                src="taureau.png" alt="" />
            </div>
            <p className="uppercase py-3 text-gray-300">Started work... - Ended...</p>
            <ul className="list-disc space-y-2 ml-5 text-md">
                <li>Summery points</li>
                <li>Summery points</li>
                <li>Summery points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard