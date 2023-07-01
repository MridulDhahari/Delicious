import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link,useParams } from 'react-router-dom'
const Cuisine = () => {

  const[cuisine,setCuisine] = useState('')
  let params = useParams()
  

  const getCuisine = async (name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&cuisine=${name}&number=12`)
    const rec  = await data.json();
    // console.log(rec)
    setCuisine(rec.results)
    // console.log(cuisine);
  }
  useEffect(()=>{
    console.log(params.type)
    getCuisine(params.type)
  },[params.type])

  const Grid = styled(motion.div)`
    display : grid;
    grid-template-columns : repeat(auto-fit,minmax(20rem,1fr));
    grid-gap : 3rem;
  `;

  const Card = styled(motion.div)`
    img{
      width : 100%;
      border-radius: 2rem;
    }
    a{
      text-decoration: none;
    }
    h4{
      text-align : center;
      padding : 1rem;
    }
  `
  return (
    <Grid 
      animate = {{opacity:1}}
      initial = {{opacity:0}}
      exit    = {{opacity:0}}
      transition = {{duration:0.5}}
    >
      {cuisine && cuisine.map((recipe)=>{
        return (
          <Card key={recipe.id}>
            <Link to= {"/Recipe/" + recipe.id} >
            <img src= {recipe.image} alt="" />
            <h4>{recipe.title}</h4>
            </Link>
          </Card>
        )
      })}
      
    </Grid>
  )
  
  
}


export default Cuisine