import React from 'react';
import styled from 'styled-components';
import QuestionButton from './QuestionButton';

export default function QuestionsPanel() {
	return (<Wrapper>
        <QuestionButton/>
        <QuestionButton/>
        <QuestionButton/>
    </Wrapper>);
}

//Styles

const Wrapper = styled.div`
    background-color: #ffffffb4;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    width: 100%;
    height: 70px;
    bottom: 0;
    border-radius: 0px 0px 10px 10px;
    backdrop-filter: blur(5px);
    box-shadow: 0px 30px 30px 4px rgba(0,0,0,0.16) inset;
    box-shadow: 0px 1px 30px 4px rgba(0,0,0,0.08) inset;
    `;
