import React from 'react';
import styled from 'styled-components';
import MacWindow from './MacWindow';

export default function ChatHolder() {
	return (
		<Background>
			<MacWindow />
		</Background>
	);
}

//Styles

const Background = styled.div`
	scroll-snap-align: start;
	background-color: white;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

