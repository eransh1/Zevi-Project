import React, { useEffect, useState } from 'react'
import styles from "./LatestTrends.module.css"
import Card from './Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setProducts } from '../../redux/productsSlice'
import PopularSkeleton from '../Skeleton/Popular Skeleton/PopularSkeleton'
import SuggestionSkeleton from '../Skeleton/Suggestions Skeleton/SuggestionSkeleton'

const LatestTrends = () => {
    const navigate=useNavigate()
    const[latestTrendData,setLatestTrendData]=useState([])
    const [dataToShow,setDataToShow]=useState([])
    const searchData=useSelector((state)=>state.search)
    const dispatch=useDispatch()
console.log("latestTrendData",latestTrendData)
    useEffect(()=>{
        const fetchTrendData=async()=>{
            try {
                const data=await fetch("https://fakestoreapi.com/products/")
                const res=await data.json()
                setLatestTrendData(res)
                dispatch(setProducts(res))
            } catch (error) {
                console.log("error",error.messages)
            }
        }
fetchTrendData()
// eslint-disable-next-line
    },[])

    useEffect(()=>{
        
        if(searchData===""){setDataToShow(latestTrendData)}
        if(searchData!==""){
            let timerId
            if(timerId){clearTimeout(timerId)}
          
                timerId=setTimeout(()=>{
                    handleSearch()
                },1000)
            
        }
        // eslint-disable-next-line
    },[searchData,latestTrendData])

function handleSearch(){
    const newData=latestTrendData.filter((data)=>{return data.title.toLowerCase().includes(searchData.toLowerCase())})
    setDataToShow(newData)
}

  return (
    <section className={styles.outerCont}>
        <h1 className={styles.title}>Latest Trends</h1>
        <div className={styles.cardCont}>
        {latestTrendData.length===0&&<PopularSkeleton cards={5}/>}
        {
            dataToShow.filter((dat)=>{return dat.category==="women's clothing"}).slice(0,5).map((data)=>{
        return <>
            <Card data={data}/>
        </>
    })
    }
        </div>

        <h1 className={styles.text}>Popular suggestions</h1>
        <div className={styles.suggestionCont}>
        {latestTrendData.length===0&&<SuggestionSkeleton cards={5}/>}
        {latestTrendData.slice(0,5).map((item)=>{
            return <p onClick={()=>navigate("/products")} key={item.id} className={styles.desc}>{item?.title}</p>
        })}
        </div>
    </section>
  )
}

export default LatestTrends