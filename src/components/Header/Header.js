import React from 'react'
import styled from 'styled-components'
import Logofile from '../Images/Logo.png'


export default function Header  () {
  return (
    <Logocontainer>
      <h1>this is </h1>
      <img src={Logofile} alt='logo'></img>
    </Logocontainer>
  )
}

const Logocontainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h1 {
    visibility: hidden;
    font-size: 2px;
  }
  
  img {
    width: 200px;
    height: auto;
  }
  
  @media (max-width: 750px) {
    height: 100px;
    img {
    width: 100px;
    height: auto;
    }
  }

`
