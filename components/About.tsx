import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'

type Props = {}

function About({ }: Props) {
    return (
        <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl">About</h3>
            <motion.img 
                initial={{ 
                    x: -600,
                    opacity:0,
                }}
                transition={{ 
                    duration: 1.2,
                }}
                whileInView={{ 
                    x:0,
                    opacity:1
                 }}
                viewport={{ once:true }}
                src="https://avatars.githubusercontent.com/u/91768858?s=400&u=696bf2721c863065c28eaac8cf6a0c882b8f6881&v=4"
                className="mt-24 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-60 md:h-90 xl:w-auto xl:h-auto"
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-3xl text-semibold">
                    Here is a little background
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellat cumque reiciendis omnis? Molestias rerum neque numquam id. Minus ratione laboriosam excepturi sunt. Iusto rerum officia at, quasi iure earum excepturi</p>
            </div>
            <Link href="/">Top</Link>
        </div>
    )
}

export default About