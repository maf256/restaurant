import React from 'react'
import styled from 'styled-components'
import SvgLocation from '../Images/location.svg'
export default function Location  ()  {
  return (
    <LocationContainer>
        <h3>Persia Restaurant</h3>
        <a href='https://goo.gl/maps/Hk7aAqzn77GvAAij7'>Keysers gate 7B, 0165 Oslo  <img src={SvgLocation}></img></a>
        Location
    </LocationContainer>
  )
}

const LocationContainer = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
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