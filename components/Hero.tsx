import React from 'react';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import avatar from "../public/taureau.png"
import Link from 'next/link';

type Props = {}

function Hero({ }: Props) {
  const [text] = useTypewriter({
    words: ['Hello', 'My name is IBRAHIMA SARR', 'Bienvenue dans l\'espace', 'EUTOU SOUNOUYE MAMES'],
    loop: true, // Infinit
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">

      <BackgroundCircles />
      <Image
        src={avatar}
        alt="avatar"
        width={150}
        height={150}
        className="relative mx-auto rounded-full object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[12px]">Enseignant en retrait</h2>
        <h1 className="text-3xl lg:text-5xl text-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor='#F7A88A' />
        </h1>

      </div>
      <div className="z-30 bg-[#404040] rounded-full p-8 mt-6">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Expérience</button>
        </Link>
        <Link href="#competences">
          <button className="heroButton">Compétences</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projets</button>
        </Link>
      </div>



    </div>
  )
}

export default Hero