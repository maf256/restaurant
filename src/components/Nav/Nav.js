import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'

export default function Nav () {
  return (
    <Navcontainer>
        <h1>Slm</h1>
        <Button variant='primary' size='small'>MENY</Button>
        <Button variant='primary' size='small'>BOOKING</Button>
        <Button variant='primary' size='small'>OM OSS</Button>
        <Button variant='primary' size='small'>KONTAkT</Button>
    </Navcontainer>
  )  
}


const Navcontainer = styled.nav`
    width: 100%;
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    @media (max-width: 650px) {
        flex-direction: column;
    }

`
