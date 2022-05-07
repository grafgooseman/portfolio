import React from 'react'
import Hello from './Hello'
import styled from "styled-components";

export default function HelloHolder() {
  return (
    <Wrapper>
        <Hello />
    </Wrapper>
  )
}

//Styles

const Wrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000000;
        width: 100%;
        height: 100vh;
    `;
