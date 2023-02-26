import React, { useState } from 'react'
import styled from 'styled-components'
import Menulist from '../common/Data'

export default function Menu()  {
    const [accordionState, setAccordionState] = useState({})
    console.log("accordionState ", accordionState);
    
    const handleAccordionClick = (subject) => {
        const key = subject.split(' ').join('')
        const value = accordionState[key] ? false : true
        setAccordionState({
            ...accordionState,
            ...{[key]: value}
        })
    }
    
  return (
    <MenuContainer>
        <h2>Meny</h2>
        <Accordioncontainer>
        {
            Menulist.map((Menu, index) =>
            <Accordion key={index}>
                <AccordionSummary onClick={() => handleAccordionClick(Menu.subject)}>
                    <Typography key={index}>{Menu.subject}</Typography>
                </AccordionSummary>
                <AccordionDetails isSelected={accordionState[Menu.subject.split(' ').join('')]} >
                    {Menu.courses.map((courses, index)=>
                        <Course key={index}>
                            <Typography>{index+1+' '+courses.name}</Typography>
                            <Typography>Allergy: {courses.allergy}</Typography>
                            <Typography>{courses.price}</Typography>
                        </Course>
                    )}
                </AccordionDetails>                     
            </Accordion>
            )
        }
        </Accordioncontainer>
    </MenuContainer>
  )
}
const MenuContainer = styled.div`
    margin-top: 50px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        color: white;
        width: 100%;
    }
    p{
        color: rgb(212 208 186 );
    }

`
const Accordioncontainer = styled.div`
    width: 100%;
`
const Accordion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`
const AccordionSummary = styled.div`
    
`
const AccordionDetails = styled.div`
    display: ${({isSelected}) => isSelected ? 'flex' : 'none'};
    flex-direction: row;
`
const Typography = styled.p`

`
const Course = styled.div`
    margin: 10px;
`
