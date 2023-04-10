import React from 'react'
import styles from "./Navbar.module.css"
import img from "../../images/brandLogo.svg"

const Navbar = () => {
  return (
    <section className={styles.outerCont}>
       <img className={styles.brandImage} src={img} alt="image" /> 
    </section>
  )
}

export default Navbar