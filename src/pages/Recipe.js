import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
const Recipe = () => {
    const params = useParams();
   
    const[details,setDetails] = useState([]);
    const[activetab,setActivetab] = useState("instructions");

    const fetchDetail = async() => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_KEY}`)
        const det =  await data.json();
        setDetails(det);
    }
    useEffect(()=>{
        fetchDetail()
    },[params.name])
  return (
    <DetailWrapper
        animate = {{opacity:1}}
        initial = {{opacity:0}}
        exit    = {{opacity:0}}
        transition = {{duration:0.5}}
    >
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt=""/>
        </div>
        <Info>
            <Button className={activetab === "instructions" ? 'active' : ''} onClick={()=>setActivetab("instructions")}>Instructions</Button>
            <Button className={activetab === "ingredients" ? 'active' : ''} onClick={()=>setActivetab("ingredients")}>Ingredients</Button>
            {activetab==="instructions" && (
                <div>
                    <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
                    <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
                </div>
            )}
            {activetab==="ingredients" && (
                
                <ul>
                    {details.extendedIngredients.map((x)=>{
                        return(
                            <li key={x.id}>{x.original}</li>
                        )
                    })}
                </ul>
            )}
            
        </Info>
    </DetailWrapper>
  )
}
const DetailWrapper = styled(motion.div)`
 margin-top: 10rem;
 margin-bottom: 5rem;
 display : flex;
 .active{
    background: linear-gradient(35deg,#494949,#313131);
    color: white;
 }
 h2{
    margin-bottom: 2rem;
 }
 li{
    font-size: 1.2rem;
    line-height: 2.5rem;
 }
 ul{
    margin-top: 2rem;
 }
`
const Button = styled.button`
 padding: 1rem 2rem;
 color: #313131;
 background: white;
 border: 2px solid black;
 margin-right: 2rem;
 font-weight: 600;
`
const Info = styled.div`
 margin-left : 10rem;

`
export default Recipe