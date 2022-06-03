import React from 'react';
import Hello from './Hello';
import scrollDown from '../images/scrollDown.svg';
import stars from '../images/stars.jpg';
import styled from 'styled-components';

export default function HelloHolder() {
	return (
		<Wrapper>
			<Hello />
			<ScrollToChat>
				<a href='#chatHolder'>Scroll down to chat</a>
				<img src={scrollDown} alt="scrollDown small logo" />
			</ScrollToChat>
		</Wrapper>
	);
}

//Styles

const Wrapper = styled.div`
	scroll-snap-align: start;
	font-family: 'M PLUS 1', sans-serif;
	font-style: normal;
	font-weight: 400;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image:radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.85) 100%), url(${stars});
  	background-size: cover;
	background-position-x: center;
  	background-position-y: center;
	width: 100%;
	height: 100vh;
`;

const ScrollToChat = styled.div`
	color: white;
	position: absolute;
	top: 10px;
	right: 10px;

	img {
		height: 12px;
		margin-left: 10px;
		margin-right: 10px;
	}

	a {
		color: white;
		text-decoration: none;
	}
	a:hover{
		text-decoration: underline;
		text-underline-offset: 5px;
	}
	
`;
