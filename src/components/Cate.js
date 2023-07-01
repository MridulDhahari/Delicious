import React from 'react'
import {GiHamburger,GiNoodles,GiSushis,GiCroissant,GiBowlOfRice} from 'react-icons/gi'
import{FaPizzaSlice} from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const Cate = () => {
  return (
    <List>
        <SLink to={'/Cuisine/American'}>
            <GiHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/Cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/Cuisine/Korean'}>
            <GiNoodles />
            <h4>Korean</h4>
        </SLink>

        <SLink to={'/Cuisine/Japanese'}>
            <GiSushis />
            <h4>Japanese</h4>
        </SLink>
        <SLink to={'/Cuisine/French'}>
            <GiCroissant />
            <h4>French</h4>
        </SLink>
        <SLink to={'/Cuisine/Indian'}>
            <GiBowlOfRice />
            <h4>Indian</h4>
        </SLink>
    </List>
  )
}
const List = styled.div`
 display : flex;
 justify-content : center;
 margin : 2rem 0rem;
`
const SLink = styled(NavLink)`
 display : flex;
 flex-direction : column;
 justify-content : center;
 align-items : center;
 border-radius : 50%; 
 text-decoration : none;
 background : linear-gradient(35deg, #494949, #313131);
 width : 6rem;
 height : 6rem;
 cursor: pointer;
 transform: scale(0.8);
 h4{
    color: white;
    font-size: 0.8rem;
 }
 svg{
    color: white;
    font-size: 1.5rem; 
 }
 &.active{
    background: linear-gradient(to right,#f27121,#e94057);
    svg{
        color: white;
    }
    h4{
        color: white;
    }
 }
`
export default Cate