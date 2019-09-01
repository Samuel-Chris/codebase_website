import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'


export default function Button(props) {
    const buttonColor = props.color ? props.color : "#693FAD";
    const color = props.color ? "#693FAD" : "#ffffff";
    const width = props.width ? props.width : "3.75rem";

    const Button = styled.button`
        padding: 0 3rem;
        min-width: ${width};
        background-color: ${buttonColor};
        border: 2px solid #693FAD;
        border-radius: 5rem;
        color: ${color};
        box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.25);
        font-size: 1.125rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 200ms ease-in-out;
        @media screen and (max-width: 360px){
            font-size: 0.85rem;
            height: 3rem;
        }
        &:hover{
            box-shadow: none;
        }
        &:active{
            border: ${props.color ? `2px solid #FFFFFF` : `2px solid #693FAD`};
            color: ${props.color ? `#FFFFFF`: '#693FAD'}
        }
    `

    return (
         <Button> 
            {props.children}
        </Button>
    )
}
