import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import contactImg from '../Images/contact.jpg'

export default function Contact  () {
  return (
    <About>
        slm
        <Img url={contactImg}>
            <Content>
                <h1>MER OM OSS</h1>
                <p>
                    Panorama restaurant er lokalisert perfekt på Sørenga, med utsikt fra Barcode til Langkaia og ut i Oslo fjorden. Vi serverer hovedsakelig mediterranean grill og -sjømat.
                </p>
                <p>Vi har ett eksotisk preg på restauranten som gir deg en luksuriøs ferie følelse med palmer, flammer og hav utsikt!</p>
                <p>Vi har en luksuriøs innredning og god varm atmosfære. Her kan du sette deg tilbake å nyte god mat og utsikt til en hver anledning!</p>
                <Button variant='primary' size='large'>BOOK BORD NÅ</Button>
            </Content>
        </Img>
    </About>
  )
}


const About = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`
const Img = styled.div`
    width: 80%;
    height: 100vh;
    background-color: lightblue;
    background-image: url(${({ url }) => url });
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: right;
    align-items: center;
    @media (max-width: 650px) {
        justify-content: center;
        width: 100%;
        div {
            width: 100%;
        }
    }
`
const Content = styled.div`
    width: 450px;
    height: 500px;
    background-color: #00000087;
    color: white;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 5px;
    position: absolute;
    h1 {
        background-color: #00000003;
    }
    p {
        background-color: #00000003;
    }

`