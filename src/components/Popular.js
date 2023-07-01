import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { Link } from 'react-router-dom';
const Popular = () => {

    const [popular,setpopular]= useState('');
   
    useEffect(()=>{
        getPopular();
    },[]);

    const getPopular = async() => {
        
        const check = localStorage.getItem("popular");
        //const check=null;

        if(check){
            setpopular(JSON.parse(check));

        }
        else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=12`)
            const data = await api.json();
            // console.log(data);
            localStorage.setItem("popular",JSON.stringify(data.recipes));
            setpopular(data.recipes);
        }
        
    } 

  return (
    <div>
        <Wrapper>
            <h3>Popular Picks</h3>
            <Splide options={{
                perPage :4,
                arrows : false,
                pagination : false,
                drag : 'free',
                gap : '3rem',
            }}>
                {popular && popular.map((recipe)=>{
                    return(
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to= {"/Recipe/" + recipe.id} >
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title}/>
                                </Link>
                                <Gradient />
                            </Card>
                        </SplideSlide>

                    );
                })}
            </Splide>
            

        </Wrapper>
        
    </div>
  )
}

const Wrapper = styled.div`
 margin : 5rem 0rem;
`;
const Card = styled.div`
//  height : 15rem;
//  width  : 20rem;
 min-height : 15rem;
//  min-width  : 20rem;
 border-radius : 2rem;
 overflow : hidden;
 position : relative;
 img{
    border-radius : 2rem;
    position : absolute;
    left : 0;
    height : 100%;
    width : 100%;
    object-fit : cover;
 }
 p{
    position : absolute;
    z-index : 10;
    left : 50%;
    bottom : 0%;
    transform : translate(-50%,0%);
    width : 100%;
    text-align : center;
    font-weight : 700;
    font-size : 1rem;
    color : white;
    height : 40%;
    display : flex;
    justify-content : center;
    align-items : center;
 }
`;
const Gradient = styled.div`
 z-index : 3;
 position : absolute;
 height  : 100%;
 width : 100%;
 background : linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5) );
` 

export default Popular