import React from 'react'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Search = () => {
   const [rec,setRec] = useState("");
   const navigate = useNavigate();
   const submitHandle = (e) => {
      e.preventDefault();
      console.log("rec :",rec);
      navigate('/Searched/' + rec)  ;
   }

  return (
    <Formstyle onSubmit={submitHandle}>
        <div>
         <FaSearch/>
        <input onChange={(e)=>setRec(e.target.value)} type="text" value={rec}></input>
        </div>
        
    </Formstyle>
  )
}
const Formstyle = styled.form`
 margin: 0rem 20rem;
 
 div{
    position : relative;
    width : 100%;
 }
 input{
    border : none;
    background: linear-gradient(35deg,#494949,#313131);
    color: white;
    font-size: 1.5rem;
    padding : 1rem 3rem;
    border-radius: 1rem;
    outline : none;
    width : 100%;
 }
 svg{
    position: absolute;
    top: 50%;
    left : 0%;
    transform : translate(100%,-50%);
    color: white;
 }
`

export default Search