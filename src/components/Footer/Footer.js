import React from 'react'
import styled from 'styled-components'
import Instagram from '../Images/instagram.svg'
import Facebook from '../Images/facebook.png'

export default function  Footer  ()  {
  return (
    <FooterContainer>
        <div>
            <h3>Kontakt Oss:</h3>
            <p>+47 40 000 744</p>
            <p>persiaoslo@gmail.com</p>
        </div>
        <div>
            <h3>Åpningstider:</h3>
            <p>Matservering: Man- Søn 11.00 - 21.30</p>
            <p>Bar & Lounge: Man- Søn 11.00 - 00.30</p>
        </div>
        <div>
            <h3>Sosiale Medier:</h3>
            <a><img src={Instagram}></img></a>
            <a><img src={Facebook}></img></a>
        </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
    color: white;
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    @media (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
        padding: 0 10px;
        div {
            width: 100%;
            margin-top: 3%; 
            margin-bottom: 3%;
            padding-top: 10px;
            border-top : 1px solid  white;
        }
    }
    h3 {
        font-size: 1.5rem;
    }
    p, a {
        margin-left: 10px;
        font-size: 1.25rem;
        color: #D4D0BA;
    }
    img {
        width: 35px;
        height: auto;
    }
`