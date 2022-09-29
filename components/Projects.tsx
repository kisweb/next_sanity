/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5]
    return (
        <motion.div

            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 1.5 }}

            className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">Projets</h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
                {projects.map((project, i) =>
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-24 md:p-44 h-screen " key={i}>
                        <motion.img

                            initial={{ opacity: 0, y: -300, }}
                            transition={{ duration: 1.2, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            viewport={{ once: true }}

                            src="Typeu.jpg" alt="" className="w-80 h-56" />
                        <div className="space-y-4 px-0 md:px-10 max-w-6xl ">
                            <h4 className="text-xl font-semibold text-center md:text-2xl">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case study {i + 1} of {projects.length} :
                                </span> { }
                                UPS clone
                            </h4>
                            <p className="text-sm text-center md:text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptas explicabo ducimus placeat. Tempore nam, officiis, beatae tempora dolor maxime iusto culpa, dolore asperiores recusandae sint veritatis fugit soluta excepturi!
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12 " />
        </motion.div>
    )
}

export default Projects