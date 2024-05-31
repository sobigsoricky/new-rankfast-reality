import React from 'react'
import { Grow, Head, Hero, OurClient, Section, Solution, Stat, Testimonial } from '@/sections'
import Styles from '@/styles/Home.module.css'

const Home = () => {
  const sections = [{ id: "home-section-1", children: <Hero />, cls: Styles.hero }, { id: "home-section-2", children: <OurClient />, cls: Styles.ourClientSection }, { id: "home-section-3", children: <Stat />, cls: 'sectionalMargin' }, { id: "home-section-4", children: <Testimonial />, cls: 'sectionalMargin' }, { id: "home-section-5", children: <Solution />, cls: 'sectionalMargin' },]
  return (
    <>
      <Head title="RankFast Realty: Elevating Your Real Estate SEO Game for Optimal Online Visibility" description="Unlock the full potential of your real estate business with RankFast Realty, the premier SEO agency specializing in real estate. Dominate search engine rankings, attract more leads, and boost your online presence with our tailored SEO solutions. Get ahead in the competitive real estate market today!" robots="index, follow" canonical="/" />
      {
        sections.map((section, index) => <Section key={index} children={section.children} cls={section.cls} />)
      }
    </>
  )
}

export default Home