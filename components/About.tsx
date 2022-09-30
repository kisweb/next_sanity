import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'

type Props = {}

function About({ }: Props) {
    return (
        <div  className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center">
            <h3
                className="absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl">
                About
            </h3>
            <motion.img
                initial={{
                    x: -600,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{ once: true }}
                src="typeu.jpg"
                className="w-56 h-56 rounded-full mt-16 object-cover md:rounded-lg md:mb-0 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]"
            />
            <div className="space-y-6 mt-10 px-0 md:px-10 overflow-scroll">
                <h4 className="text-3xl text-semibold">
                    Here is a little background
                </h4>
                <div className="overflow-scroll pr-14 text-justify max-h-64">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellat cumque reiciendis omnis? Molestias rerum neque numquam id. Minus ratione laboriosam excepturi sunt. Iusto rerum officia at, quasi iure earum excepturi</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque tempore sit nihil praesentium officiis temporibus cum soluta dolore quibusdam ullam, fugit qui facere in! Quas sequi illo repellendus atque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fuga tempore harum earum quia architecto nostrum. Neque porro laudantium temporibus magnam, quaerat, iure a corporis, asperiores maxime quos mollitia. Incidunt!</p>
                </div>
            </div>
        </div>
    )
}

export default About