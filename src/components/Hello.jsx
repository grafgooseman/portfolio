import React from 'react'
import laptopImg from '../images/laptop.png'
import styled from "styled-components";

export default function Hello() {
    return (
        <Wrapper>
            <HelloTextHolder>
                <h1>Hello</h1>
                <h3>My name is Artem Gusev</h3>
                <p>I am a student with computer science pashion</p>
            </HelloTextHolder>
            <LaptopHolder>
                <Laptop src={laptopImg} alt="laptop" />
            </LaptopHolder>
        </Wrapper>
    )
}


//Styles

const Wrapper = styled.div`
        color: white;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
    `;

const HelloTextHolder = styled.div`
        height: 100%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;

        h1 {
            margin-top: 0;
            margin-bottom: 5px;
            font-size: 5rem;
        }

        h3 {
            margin-top: 0;
            margin-bottom: 5px;
        }
    `;

const LaptopHolder = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `;

const Laptop = styled.img`
        width: 300px;
        flex: 1 1 150px;
    `;

