import React from 'react'
import styled from 'styled-components'
import SvgLocation from '../Images/location.svg'
export default function Location  ()  {
  return (
    <LocationContainer>
        <h3>Persia Restaurant</h3>
        <a href='https://goo.gl/maps/Hk7aAqzn77GvAAij7' target="_blank"  rel="noreferrer">Keysers gate 7B, 0165 Oslo  <img src={SvgLocation} alt='web developer'></img></a>
        Location
    </LocationContainer>
  )
}

const LocationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    padding: 30px 0px;
    h3 {
        color: white;
        font-size: 3rem;
    }
    a {
        font-size: 1.75rem;
        color: #D4D0BA;
        display: flex;
        align-items: center;
        align-content: center;
        text-decoration: none;        
    }

`