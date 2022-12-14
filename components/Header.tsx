/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}


function Header({ }: Props) {
  return (
    <header className="sticky top-0 p-6 flex items-start justify-between max-w-4xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -30,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 2
        }}
        className='flex flex-row items-center'>

        {/* icons */}
        
        <SocialIcon url="https://github.com/kisweb" target='__blank' network="github" fgColor="gray" bgColor="transparent" />
        <SocialIcon network="youtube" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://twitter.com/kisarrweb" network="twitter" fgColor="gray" bgColor="transparent" />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{
            x: 50,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{ duration: 2 }}
          className='flex flex-row items-center cursor-pointer text-gray-300'>
          <SocialIcon className='cursor-pointer' network="email" fgColor="gray" bgColor="transparent" />
          <p className='uppercase hidden md:inline-flex text-gray-400 text-sm'>Get In Touch</p>
        </motion.div>
      </Link>
    </header>
  )
}

export default Header