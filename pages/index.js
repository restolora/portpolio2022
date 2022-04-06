import React from 'react'
import styles from '../styles/Home.module.scss'

import About from '../components/About'
import Services from '../components/Services'
import Tools from '../components/Tools'
import GetInTouch from '../components/GetInTouch'

const Home = () => {
  return (
    <>
      <div className={styles.banner} id={'Home'}>
        <div className={styles.intro}>
          <h1 className={styles.name}>Hi, I'm Rey</h1>
          <h1 className={styles.skills}>Full Stack Developer,</h1>
          <h1 className={styles.skills}>Designer & Build Solutions.</h1>
        </div>
      </div>
      <About />
      <Services />
      <Tools />
      <GetInTouch />
    </>
  )
}

export default Home
