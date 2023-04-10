import React, { useState } from 'react'
import styles from "./Home.module.css"
import Navbar from '../../components/Navbar/Navbar'
import Searchbar from '../../components/SearchBar/Searchbar'
import LatestTrends from '../../components/Latest Trends/LatestTrends'

const Home = () => {
const[isSearchBarClicked,setIsSearchBarClicked]=useState(false)
  return (
    <section className={styles.outerCont}>
    <div className={styles.overlay}>
       <Navbar/>
       <div className={styles.searchbarCont}>
        <Searchbar setIsSearchBarClicked={setIsSearchBarClicked}/>
       </div> 
       {isSearchBarClicked&&<div className={styles.latestTrendCont}>
        <LatestTrends/>
       </div>}
    </div>
    </section>
  )
}

export default Home