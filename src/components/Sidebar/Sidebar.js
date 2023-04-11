import React, { useEffect, useState } from 'react'
import styles from "./Sidebar.module.css"
import {MdKeyboardArrowDown} from "react-icons/md"
import { useSelector } from 'react-redux'
import a5 from "../../images/5.svg"
import a4 from "../../images/4.svg"
import a3 from "../../images/3.svg"
import a2 from "../../images/2.svg"
import a1 from "../../images/1.svg"


const ratingData=[
    {id:5,img:a5,value:"5"},
    {id:4,img:a4,value:"4"},
    {id:3,img:a3,value:"3"},
    {id:2,img:a2,value:"2"},
    {id:1,img:a1,value:"1"},
]
const Sidebar = ({setDataToShow,isExpanded}) => {
    const [uniqueCategory,setUniqueCategory]=useState([])
    const products=useSelector((state)=>state.products)
    const[isCatClick,setIsCatClick]=useState(true)
    const[isPriceClick,setIsPriceClick]=useState(true)
    const[isRatClick,setIsRatClick]=useState(true)
    const[filterData,setFilterData]=useState({category:[],price:[],rating:[]})
    const searchData=useSelector((state)=>state.search)
    // console.log("searchData",searchData)
    // console.log(filterData)


    //FILTER ON BASIS OF SEARCH
    useEffect(()=>{
        if(searchData===""){setDataToShow(products)}
        if(searchData!==""){
          let timerId
          if(timerId){clearTimeout(timerId)}
        
              timerId=setTimeout(()=>{
                  handleSearch()
              },1000)
          
        }
        // eslint-disable-next-line
          },[searchData])
        
          function handleSearch(){
            const newData=products.filter((data)=>{return data.title.toLowerCase().includes(searchData.toLowerCase())})
            setDataToShow(newData)
        }



 //HANDLE DATA TO SHOW ON BASIS OF FILTER
 useEffect(()=>{
if(filterData.category.length===0&&filterData.price.length===0&&filterData.rating.length===0){
    setDataToShow(products);return}

    if(filterData.category.length!==0&&filterData.price.length===0&&filterData.rating.length===0)
    {let filter=products.filter((data)=>{return filterData.category.includes(data.category)})
    setDataToShow(filter)
    }

    if(filterData.category.length===0&&filterData.price.length!==0&&filterData.rating.length===0)
    {let secondFilter
        if(filterData.price.includes('<100')&&filterData.price.includes('100-500')&&filterData.price.includes('>500')){
         secondFilter=products
        }
        else if(filterData.price.includes('<100')&&filterData.price.includes('100-500')){
         secondFilter=products.filter((data)=>{return Math.ceil((data.price)*10)<=500})
        }
        else if(filterData.price.includes('<100')&&filterData.price.includes('>500')){
         secondFilter=products.filter((data)=>{return Math.ceil((data.price)*10)<=100&&Math.ceil((data.price)*10)>=500})
        }
        else if(filterData.price.includes('100-500')&&filterData.price.includes('>500')){
         secondFilter=products.filter((data)=>{return Math.ceil((data.price)*10)>=100})
        }
        else if(filterData.price.includes('<100')){
         secondFilter=products.filter((data)=>{return Math.ceil((data.price)*10)<=100})
        }
        else if(filterData.price.includes('100-500')){
         secondFilter=products.filter((data)=>{return Math.ceil((data.price)*10)>=100&&Math.ceil((data.price)*10)<=500})
        }
        else if(filterData.price.includes('>500')){
         secondFilter=products.filter((data)=>{return Math.ceil((data.price)*10)>=500})
        }
        setDataToShow(secondFilter)
        
    }

    if(filterData.category.length===0&&filterData.price.length===0&&filterData.rating.length!==0){
        let filter=products.filter((data)=>{return filterData.rating.includes(Math.ceil(data.rating.rate).toString())})
   setDataToShow(filter)
    }

    if(filterData.category.length!==0&&filterData.price.length!==0&&filterData.rating.length===0){
        let firstFilter=products.filter((data)=>{return filterData.category.includes(data.category)})

   let secondFilter
   if(filterData.price.includes('<100')&&filterData.price.includes('100-500')&&filterData.price.includes('>500')){
    secondFilter=firstFilter
   }
   else if(filterData.price.includes('<100')&&filterData.price.includes('100-500')){
    secondFilter=firstFilter.filter((data)=>{return Math.ceil((data.price)*10)<=500})
   }
   else if(filterData.price.includes('<100')&&filterData.price.includes('>500')){
    secondFilter=firstFilter.filter((data)=>{return Math.ceil((data.price)*10)<=100&&Math.ceil((data.price)*10)>=500})
   }
   else if(filterData.price.includes('100-500')&&filterData.price.includes('>500')){
    secondFilter=firstFilter.filter((data)=>{return Math.ceil((data.price)*10)>=100})
   }
   else if(filterData.price.includes('<100')){
    secondFilter=firstFilter.filter((data)=>{return Math.ceil((data.price)*10)<=100})
   }
   else if(filterData.price.includes('100-500')){
    secondFilter=firstFilter.filter((data)=>{return Math.ceil((data.price)*10)>=100&&Math.ceil((data.price)*10)<=500})
   }
   else if(filterData.price.includes('>500')){
    secondFilter=firstFilter.filter((data)=>{return Math.ceil((data.price)*10)>=500})
   }
   setDataToShow(secondFilter)
    }

    if(filterData.category.length!==0&&filterData.price.length===0&&filterData.rating.length!==0){

        let firstFilter=products.filter((data)=>{return filterData.category.includes(data.category)})
        let thirdFilterData=firstFilter.filter((data)=>{return filterData.rating.includes(Math.ceil(data.rating.rate).toString())})
        setDataToShow(thirdFilterData)
    }

    if(filterData.category.length===0&&filterData.price.length!==0&&filterData.rating.length!==0)
    {let secondFilter
        if(filterData.price.includes('<100')&&filterData.price.includes('100-500')&&filterData.price.includes('>500')){
         secondFilter=products
        }
        else if(filterData.price.includes('<100')&&filterData.price.includes('100-500')){
         secondFilter=products.filter((data)=>{return Math.ceil((data.price)*10)<=500})
        }
        else if(filterData.price.includes('<100')&&filterData.price.includes('>500')){
         secondFilter=products.filter((data)=>{return Math.ceil((data.price)*10)<=100&&Math.ceil((data.price)*10)>=500})
        }
        else if(filterData.price.includes('100-500')&&filterData.price.includes('>500')){
         secondFilter=products.filter((data)=>{return Math.ceil((data.price)*10)>=100})
        }
        else if(filterData.price.includes('<100')){
         secondFilter=products.filter((data)=>{return Math.ceil((data.price)*10)<=100})
        }
        else if(filterData.price.includes('100-500')){
         secondFilter=products.filter((data)=>{return Math.ceil((data.price)*10)>=100&&Math.ceil((data.price)*10)<=500})
        }
        else if(filterData.price.includes('>500')){
         secondFilter=products.filter((data)=>{return Math.ceil((data.price)*10)>=500})
        }
     
     
        let thirdFilterData=secondFilter.filter((data)=>{return filterData.rating.includes(Math.ceil(data.rating.rate).toString())})
        setDataToShow(thirdFilterData)

    }





if(filterData.category.length!==0&&filterData.price.length!==0&&filterData.rating.length!==0){

   let firstFilter=products.filter((data)=>{return filterData.category.includes(data.category)})

   let secondFilter
   if(filterData.price.includes('<100')&&filterData.price.includes('100-500')&&filterData.price.includes('>500')){
    secondFilter=firstFilter
   }
   else if(filterData.price.includes('<100')&&filterData.price.includes('100-500')){
    secondFilter=firstFilter.filter((data)=>{return Math.ceil((data.price)*10)<=500})
   }
   else if(filterData.price.includes('<100')&&filterData.price.includes('>500')){
    secondFilter=firstFilter.filter((data)=>{return Math.ceil((data.price)*10)<=100&&Math.ceil((data.price)*10)>=500})
   }
   else if(filterData.price.includes('100-500')&&filterData.price.includes('>500')){
    secondFilter=firstFilter.filter((data)=>{return Math.ceil((data.price)*10)>=100})
   }
   else if(filterData.price.includes('<100')){
    secondFilter=firstFilter.filter((data)=>{return Math.ceil((data.price)*10)<=100})
   }
   else if(filterData.price.includes('100-500')){
    secondFilter=firstFilter.filter((data)=>{return Math.ceil((data.price)*10)>=100&&Math.ceil((data.price)*10)<=500})
   }
   else if(filterData.price.includes('>500')){
    secondFilter=firstFilter.filter((data)=>{return Math.ceil((data.price)*10)>=500})
   }


   let thirdFilterData=secondFilter.filter((data)=>{return filterData.rating.includes(Math.ceil(data.rating.rate).toString())})
   setDataToShow(thirdFilterData)
   return
}
// eslint-disable-next-line
 },[filterData])   

    //GET UNIQUE LIST OF CATEGORY
    useEffect(()=>{
        let category=[]
        products.forEach((data)=>{
            category.push(data.category)
        })
        setUniqueCategory([...new Set(category)])
    },[products])


//HANDLE CATEGORY SELECTED    
const handleCategoryChange=(e)=>{
    let cat=e.target.value
    const tempData=filterData.category
    if(tempData.includes(cat)){
        const neew=tempData.filter((arr)=>{return arr!==cat})
        setFilterData((p)=>{return {...p,category:neew}})
        return
    }
    setFilterData((p)=>{return {...p,category:[...tempData,cat]}})
}

//HANDLE RATING SELECTED
const handleRatingChange=(e)=>{
    let rat=e.target.value
    const tempData=filterData.rating
    if(tempData.includes(rat)){
        const neew=tempData.filter((arr)=>{return arr!==rat})
        setFilterData((p)=>{return {...p,rating:neew}})
        return
    }
    setFilterData((p)=>{return {...p,rating:[...tempData,rat]}})
}

//HANDLE PRICE SELECTED
const handlePriceChange=(e)=>{
    let pric=e.target.value
    const tempData=filterData.price
    if(tempData.includes(pric)){
        const neew=tempData.filter((arr)=>{return arr!==pric})
        setFilterData((p)=>{return {...p,price:neew}})
        return
    }
    setFilterData((p)=>{return {...p,price:[...tempData,pric]}})
}


  return (
   <>
    <section style={{transform:isExpanded?"translateX(0)":""}} className={styles.outerCont}>
   
        <div className={styles.categoryCont}>
            <div onClick={()=>setIsCatClick(e=>!e)} className={styles.categoryTextCont}>
                <h1>Category</h1>
                <MdKeyboardArrowDown style={{transform:isCatClick?"rotate(180deg)":""}} className={styles.catIcon}/>
            </div>
            {isCatClick&&<div className={styles.optionCont}>
            {uniqueCategory?.map((data)=>{
                return <div key={data} className={styles.option}>
                <input onChange={handleCategoryChange} className={styles.checkbox} type="checkbox" value={data} />
                <p className={styles.listItem}>{data}</p>
                </div>
            })}
                
            </div>}
        </div>

        <div className={styles.priceCont}>
            <div onClick={()=>setIsPriceClick(e=>!e)} className={styles.categoryTextCont}>
                <h1>Price range</h1>
                <MdKeyboardArrowDown style={{transform:isPriceClick?"rotate(180deg)":""}}  className={styles.catIcon}/>
            </div>
            {isPriceClick&&<div className={styles.optionCont}>
            
            <div className={styles.option}>
                <input onChange={handlePriceChange} className={styles.checkbox} type="checkbox" value={"<100"} />
                <p className={styles.listItem}>Under 100</p>
            </div>

            <div className={styles.option}>
                <input onChange={handlePriceChange} className={styles.checkbox} type="checkbox" value={"100-500"} />
                <p className={styles.listItem}>100 To 500</p>
            </div>
          
            <div className={styles.option}>
                <input onChange={handlePriceChange} className={styles.checkbox} type="checkbox" value={">500"} />
                <p className={styles.listItem}>More Than 500</p>
            </div>
                
            </div>}
        </div>  

        <div className={styles.ratingCont}>
            <div onClick={()=>setIsRatClick(e=>!e)} className={styles.categoryTextCont}>
                <h1>Rating</h1>
                <MdKeyboardArrowDown style={{transform:isRatClick?"rotate(180deg)":""}} className={styles.catIcon}/>
            </div>
            {isRatClick&&<div className={styles.optionCont}>
            {ratingData.map((rating)=>{
                return <div key={rating.id} className={styles.option}>
                <input onChange={handleRatingChange} className={styles.checkbox} type="checkbox" value={rating.value} />
                <img src={rating.img} alt="ratingIm" />
                </div>                         
            })}
            </div>}
        </div>
    </section>
   </>
  )
}

export default Sidebar