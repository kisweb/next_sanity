import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

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
    <section id='skill' className="snap-start">
      <Skills />
    </section>
    {/* Projects */}
    <section id='project' className="snap-start">
      <Projects />
    </section>
    {/* Contact */}
    <section id='contact' className="snap-start">
      <ContactMe />
    </section>
    </div>
  )
}

export default Home
