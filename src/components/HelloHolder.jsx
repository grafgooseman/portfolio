import React from 'react';
import Hello from './Hello';
import scrollDown from '../images/scrollDown.svg';
import styled from 'styled-components';

export default function HelloHolder() {
	return (
		<Wrapper>
			<Hello />
			<ScrollToChat>
				<span>Scroll down to chat</span>
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
	background: linear-gradient(35.36deg, #000000 46.6%, #b07501 100%);
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
`;
