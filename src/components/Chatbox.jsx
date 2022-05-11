import React from 'react';
import styled from 'styled-components';
// import BubbleTypingAnimation from './chatStuff/TypingAnimationBubble';
import ReplyBubble from './chatStuff/ReplyBubble';
import QuestionBubble from './chatStuff/QuestionBubble';

export default function Chatbox() {
	return (
		<Wrapper>
			<QuestionBubble paddingArray={[11, 15]} textArray={[
                "Hello Artem, I heard that you are looking for a coop placement for a fall semester.",
                "Could you please tell me a little bit about yourself?"
            ]}/>
			<ReplyBubble paddingArray={[11, 15]} textArray={[
                "Hello Artem, I heard that you are looking for a coop placement for a fall semester.",
                "Could you please tell me a little bit about yourself?"
            ]} />
		</Wrapper>
	);
}

//Styles

const WINDOW_HEADER_HEIGHT = 28;
const CHAT_PADDING = 20;

const Wrapper = styled.div`
	::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
	padding: ${intToStringWithPx(CHAT_PADDING)};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	overflow-y: scroll;
	width: calc(100% - ${intToStringWithPx(CHAT_PADDING) * 2});
	height: calc(
		100% - ${intToStringWithPx(addAllElementsInArray([ WINDOW_HEADER_HEIGHT, CHAT_PADDING, CHAT_PADDING ]))}
	);
	/* background-color: #fe00003d; */
`;

function intToStringWithPx(int) {
	return `${int}px`;
}
function addAllElementsInArray(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}
