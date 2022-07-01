import React from 'react';
import Hello from './Hello';
import scrollDown from '../images/scrollDown.svg';
import ScrollDownArrow from './ScrollDownArrow';
import stars from '../images/stars.jpg';
import styled from 'styled-components';


function onScrolDownClick() {
	document.querySelector("#chat").scrollIntoView();
}


export default function HelloHolder() {
	return (
		<Wrapper id="top">
			<div id="hello">
				<Hello />
			</div>
			<div id="scrollDown" onClick={onScrolDownClick}>
				<ScrollDownArrow />
			</div>

			<ScrollToChat>
				<a href="#chat">Scroll down to chat</a>
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

	display: grid;
	grid-template-columns: 1fr 5fr 5fr 1fr;
	grid-template-rows: 5fr 2fr 4fr 1.5fr;
	grid-template-areas: '. . . .' '. hello hello .' '. scrollDown scrollDown .' '. . . .';

	#hello {
		grid-area: hello;
	}
	#scrollDown{
		grid-area: scrollDown;
		align-self: center;
		justify-self: center;
	}

	background-image: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.85) 100%),
		url(${stars});
	background-size: cover;
	background-position-x: center;
	background-position-y: center;
	width: 100%;
	height: 100vh;
`;

const ScrollToChat = styled.div`
	color: white;
	position: fixed;
	top: 13px;
	right: 20px;

	img {
		height: 12px;
		margin-left: 10px;
		margin-right: 10px;
	}

	a {
		color: white;
		text-decoration: none;
		:before {
			content: "";
			position: absolute;
			width: 0;
			height: 1px;
			bottom: 0;
			left: 0;
			background-color: #fff;
			visibility: hidden;
			transition: all 0.3s ease-in-out;
		}
		:hover:before {
			visibility: visible;
			width: 80%;
		}
	}
`;
