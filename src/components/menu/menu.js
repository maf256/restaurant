import React, { useState } from 'react'
import styled from 'styled-components'
import Menulist from '../common/Data'

export default function Menu()  {
    const [accordionState, setAccordionState] = useState({})
    
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
                    <h3 key={index}>{Menu.subject}</h3>
                </AccordionSummary>
                <AccordionDetails isSelected={accordionState[Menu.subject.split(' ').join('')]} >
                    {Menu.courses.map((courses, index)=>
                        <Course key={index}>
                            <h4>{index+1+'. '+courses.name}</h4>
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
    margin: 100px auto;
    h2,h3 {
        background-color: rgb(8 31 49 / 0%);
        font-size: 3rem;
        color: rgb(212 208 186 );
        margin-bottom: 3rem;
        border-bottom: 5px solid #D4D0BA;
        display: inline;
        width: 130px;

    }
    h3 {
        font-size: 2rem;
    }
    h4 {
        background-color: rgb(8 31 49 / 0%);
        color: rgb(212 208 186 );
        font-size: 1.75rem;
    }
    p{
        display: inline;
        color: #D4D0BA;
        background-color: rgb(8 31 49 / 0%);
        font-size: 1.875rem;
        ::marker {
            unicode-bidi: isolate;
            font-variant-numeric: tabular-nums;
            text-transform: none;
            text-indent: 0px !important;
            text-align: start !important;
            text-align-last: start !important;
        }
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
    min-height: 1rem;
    border-left: 5px solid #D4D0BA;
    padding: 1rem;
    margin-bottom: 2rem;
`
const AccordionSummary = styled.div`
    margin-bottom: 10px;
    cursor: pointer;
    
`
const AccordionDetails = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    display: ${({isSelected}) => isSelected ? 'flex' : 'none'};
`
const Typography = styled.p`

`
const Course = styled.div`
    margin: 10px;
    width: 350px;
    height: 200px;
    background-color: rgb(8,31, 49 );
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 10px;
    p {
        margin: 2px 0px;
    }
`
