import React from 'react'
import styles from "./Searchbar.module.css"
import search from "../../images/searchicon.svg"
import { setSearch } from '../../redux/searchSlice'
import { useDispatch } from 'react-redux'

const Searchbar = ({setIsSearchBarClicked}) => {
  const dispatch=useDispatch()
  return (
    <>
        <section className={styles.outerCont}>
           <input onClick={()=>setIsSearchBarClicked(true)} onChange={(e)=>dispatch(setSearch(e.target.value))} className={styles.inputSearch} type="text" placeholder='Search'/> 
           <img className={styles.searchIcon} src={search} alt="search" />
        </section>
    </>
  )
}

export default Searchbar