import React, { useEffect } from 'react'
import styled from 'styled-components'
import Slider1 from '../Images/slider1.jpg'
import Slider2 from '../Images/slider2.jpg'
import Slider3 from '../Images/slider3.jpg'
import Slider4 from '../Images/slider4.jpg'


const images = [
    Slider1, Slider2, Slider3, Slider4
  ];

export default function Slider() {
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        return v === 3 ? 0 : v + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Slidercontainer >
        <Img url={images[value]} ></Img>
    </Slidercontainer>
  );
}


const Slidercontainer = styled.div`
    width: 100%;
    height: 77vh;
    display: flex;
    justify-content: center;
    @media (max-width: 1000px) {
      img {
            width: 100%;
      }
    }
    @media (max-width: 750px) {
      height: 33vh;
    }

`

const Img = styled.div`
    width: 80%;
    height: auto;
    background-image: url(${({ url }) => url });
    transition: all 0.6s linear;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;




`
