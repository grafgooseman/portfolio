import React from 'react'
import styled from 'styled-components';

export default function Chatbox() {
  return (
    <Wrapper> 
        Chatbox
    </Wrapper>
  )
}

//Styles

const Wrapper = styled.div`
    display: flex;
	width: 100%;
    height: calc(100% - 28px);
    background-color: #fe00003d;
`;