import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'

export default function Nav () {
  return (
    <Navcontainer>
        <Button variant='primary' size='medium'>MENY</Button>
        <Button variant='primary' size='medium'>BOOKING</Button>
        <Button variant='primary' size='medium'>OM OSS</Button>
        <Button variant='primary' size='medium'>KONTAkT</Button>
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
