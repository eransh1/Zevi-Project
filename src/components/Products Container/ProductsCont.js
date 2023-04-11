import React, { useState } from 'react'
import styles from "./ProductsCont.module.css"
import Card from './Card/Card'
import ProductsSkeleton from '../Skeleton/Products Skeleton/ProductsSkeleton'

const ProductsCont = ({products,isExpanded}) => {
    const[favCont,setFavCont]=useState([])

    const handleFavContClick=(id)=>{
        let tempFav=favCont
        if(tempFav.includes(id)){
            let arr=tempFav.filter((data)=>{return data!==id})
            setFavCont(arr)
            return
        }
        setFavCont((p)=>{return [...p,id]})
    }
  return (
    <section style={{left:isExpanded?"10rem":"",width:isExpanded&&"55%"}} className={styles.outerCont}>
    {products.length===0&&<ProductsSkeleton cards={4}/>

    }
    {products.map((card)=>{
        return <Card data={card} favCont={favCont} handleLikeIconClick={handleFavContClick}/>
    })}
    </section>
  )
}

export default ProductsCont