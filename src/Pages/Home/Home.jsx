import React from 'react'
import { Menu } from '../../Components/Menu/Menu'
import { Cover } from './Cover'
import AboutH from './AboutH'
import Footer from '../../Components/Footer/Footer'
import Skills from '../../Components/Skills/Skills'
import WorkH from './WorkH'

const Home = () => {
  return (
    <>
      <Menu />
      <Cover />
      <AboutH />
      <WorkH />
      <Footer />
    </>
  )
}

export default Home