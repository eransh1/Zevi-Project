import React from 'react'
import styles from "./Card.module.css"
import { useNavigate } from 'react-router-dom'

const Card = ({data}) => {
  const navigate=useNavigate()
  return (
   <section onClick={()=>navigate("/products")} key={data.id} className={styles.outerCont}>
    <img className={styles.cardImage} src={data?.image} alt="card" />
    <p className={styles.info}>{data?.title}</p>
   </section>
  )
}

export default Card