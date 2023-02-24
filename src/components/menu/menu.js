import React from 'react'
import styled from 'styled-components'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import Menulist from '../common/Data'

export default function menu  ()  {
  return (
    <Menucontainer>
        <h2>Meny</h2>
        {
            Menulist.map((Menu, index) =>
                <Accordion className='accordion' key={index}>
                    <AccordionSummary>
                        <Typography key={index}>{Menu.subject}</Typography>
                    </AccordionSummary>
                    {
                        Menu.courses.map((courses, index)=>
                            <AccordionDetails className='accordiondetails' key={index}>
                                <Typography>
                                    {index+1+' '+courses.name}
                                </Typography>
                                <Typography>
                                    Allergy: {courses.allergy}
                                </Typography>
                                <Typography>
                                    {courses.price}
                                </Typography>
                            </AccordionDetails>                     
                        )
                    }
                </Accordion>

            )
        }
    </Menucontainer>
  )
}
const Menucontainer = styled.div`
    margin-top: 50px;
    width: 100%;
    h2 {
        color: white;
    }
    p{
        color: rgb(212 208 186 );
    }
    .MuiAccordion-region {
        background-color: aqua;
        display:flex;
        justify-content: space-between;
    }
    .accordiondetails {
        background-color: red;
        width: 400px;
        height: 100px;
        border: 1px solid;
        margin: 5px;
        padding: 0px;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        
    }
    .MuiPaper-root {
        border-left: 8px solid  rgb(212 208 186 );

    }
`

// MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiAccordion-root MuiAccordion-rounded Mui-expanded MuiAccordion-gutters accordion css-1elwnq4-MuiPaper-root-MuiAccordion-root



