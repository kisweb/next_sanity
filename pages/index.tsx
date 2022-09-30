/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(50,49,49)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>KisarrWeb</title>
      </Head>
      <Header />
      {/* Hero */}
      <section id='hero' className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id='about' className="snap-center">
        <About />
      </section>
      {/* WorgExperience */}
      <section id='experience' className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id='skill' className="snap-center">
        <Skills />
      </section>
      {/* Projects */}
      <section id='project' className="snap-center">
        <Projects />
      </section>
      {/* Contact */}
      <section id='contact' className="snap-center">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-4 w-full cursor-pointer">
          <div className=" flex items-center justify-center ">
            <img src="7070690.jpg" alt="logo" className="bg-gray-500 w-8 h-8 rounded-2xl " />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home
