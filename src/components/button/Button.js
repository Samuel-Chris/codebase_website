import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'


export default function Button(props) {
    const buttonColor = props.color ? props.color : "#693FAD";
    const color = props.color ? "#693FAD" : "#ffffff";

    const Button = styled.button`
        padding: 0 3rem;
        min-width: 3.75rem;
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
        &:hover{
            box-shadow: none;
        }
    `

    return (
         <Button> 
            {props.children}
        </Button>
    )
}
