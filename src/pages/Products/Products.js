import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Searchbar from '../../components/SearchBar/Searchbar'
import styles from "./Products.module.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import ProductsCont from '../../components/Products Container/ProductsCont'
import {TbSquareRoundedChevronRightFilled} from "react-icons/tb"
const Products = () => {
  
  const[dataToShow,setDataToShow]=useState([])
  const[searchBarClicked,setIsSearhBarClicked]=useState(false)
  const[isExpanded,setIsExpanded]=useState(false)



  return (
    <>
    <Navbar/>
    <div className={styles.searchCont}><Searchbar setIsSearchBarClicked={setIsSearhBarClicked}/></div>
    <h1 className={styles.searchText}>Search Results</h1>
    <div className={styles.outerCont}>
    <Sidebar setDataToShow={setDataToShow} isExpanded={isExpanded}/>
    <TbSquareRoundedChevronRightFilled style={{transform:isExpanded?"translateX(0)":""}} onClick={()=>setIsExpanded(e=>!e)} className={styles.expandIcon}/>
    <ProductsCont products={dataToShow} isExpanded={isExpanded}/>

    </div>
    
    </>
  )
}

export default Products