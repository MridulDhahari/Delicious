import React from 'react'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Searched = () => {
    
    const params = useParams();
    console.log("detail opened of:",params.name)
    const[searchedrec,setSearchedrec] = useState([])
    const getSearched = async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&query=${name}&number=12`)
        const rec  = await data.json();
        console.log(rec)
        setSearchedrec(rec.results)
        console.log(searchedrec);
      }
    useEffect(()=>{
        getSearched(params.search);
    },[params.search])  

    const Grid = styled(motion.div)`
    display : grid;
    grid-template-columns : repeat(auto-fit,minmax(20rem,1fr));
    grid-gap : 3rem;
  `;

  const Card = styled.div`
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
        {searchedrec.map((r)=>{
            return(
                <Card key={r.id}>
                    <Link to= {"/Recipe/" + r.id} >
                    <img src={r.image} alt={r.title} />
                    <h4>{r.title}</h4>
                    </Link>

                </Card>
            )
        })}

    </Grid>

  )
}

export default Searched