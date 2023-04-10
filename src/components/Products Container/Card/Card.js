import React from 'react'
import styles from "./Card.module.css"
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"

import a5 from "../../../images/5.svg"
import a4 from "../../../images/4.svg"
import a3 from "../../../images/3.svg"
import a2 from "../../../images/2.svg"
import a1 from "../../../images/1.svg"

const Card = ({data,favCont,handleLikeIconClick}) => {
  
  return (
   <section key={data.id} className={styles.outerCont}>
   <div className={styles.imageCont}>
   <img className={styles.imageCard} src={data.image} alt="img" />
   {!favCont.includes(data.id)&&<AiOutlineHeart onClick={()=>handleLikeIconClick(data.id)} className={styles.heartIcon}/>}
   {favCont.includes(data.id)&&<AiFillHeart onClick={()=>handleLikeIconClick(data.id)} className={styles.heartLikedIcon}/>}
   <p className={styles.viewProdText}>View Products</p>
   </div>
<h3 className={styles.name}>{data.title.slice(0,50)}</h3>
<div className={styles.priceCont}>
  <h3 className={styles.tempPrice}>Rs.{Math.ceil((data.price)*10)+200}</h3>
  <h3 className={styles.actualPrice}>Rs.{Math.ceil((data.price)*10)}</h3>
</div>
<div className={styles.ratingCont}>
  {Math.ceil(data.rating.rate)===1&&<img src={a1} alt="rating" />}
  {Math.ceil(data.rating.rate)===2&&<img src={a2} alt="rating" />}
  {Math.ceil(data.rating.rate)===3&&<img src={a3} alt="rating" />}
  {Math.ceil(data.rating.rate)===4&&<img src={a4} alt="rating" />}
  {Math.ceil(data.rating.rate)===5&&<img src={a5} alt="rating" />}
  <h3 className={styles.count}>({data.rating.count})</h3>
</div>
    
   </section>
  )
}

export default Card