//#region Imports
import React from 'react';
import styled from 'styled-components';
import ReplyBubble from './chatStuff/ReplyBubble';
import QuestionBubble from './chatStuff/QuestionBubble';
import getMessages, {newMessageArray} from './chatStuff/messages';

//#endregion

export default function Chatbox() {
	const paddingArray = [ 13, 16 ];
	const messagesArray = getMessages();

	let returnArray = [];

	

	// let previousType = 'question';

	//Renderer from the "messages.js" file
	// for (let i = 0; i < messagesArray.length; i++) {
	// 	if (messagesArray[i].type !== previousType) {
	// 		returnArray.push(<Spacer key={i + 's'} />);
	// 	}
	// 	if (messagesArray[i].type === 'reply') {
	// 		returnArray.push(<ReplyBubble key={i} paddingArray={paddingArray} text={messagesArray[i].text} />);
	// 		previousType = 'reply';
	// 	} else if (messagesArray[i].type === 'question') {
	// 		returnArray.push(<QuestionBubble key={i} paddingArray={paddingArray} text={messagesArray[i].text} />);
	// 		previousType = 'question';
	// 	}
	// }
	return <Wrapper>{returnArray}</Wrapper>;
}

//#region Functions


//#endregion

//#region CSS Functions

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

//#endregion

//#region Styles

const PADDING_BREAKPOINT = '632px';

const WINDOW_HEADER_HEIGHT = 28;
const CHAT_PADDING = 40;
const CHAT_PADDING_SMALL = 5;

const Wrapper = styled.div`
	align-self: center;

	::-webkit-scrollbar {
		width: 6px;
		height: 10px;
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	overflow-y: scroll;

	padding: ${intToStringWithPx(CHAT_PADDING_SMALL)};
	width: calc(100% - ${intToStringWithPx(CHAT_PADDING_SMALL) * 2});
	height: calc(
		100% -
			${intToStringWithPx(
				addAllElementsInArray([ WINDOW_HEADER_HEIGHT, CHAT_PADDING_SMALL, CHAT_PADDING_SMALL ])
			)}
	);

	@media (min-width: ${PADDING_BREAKPOINT}) {
		padding: ${intToStringWithPx(CHAT_PADDING)};
		width: calc(100% - ${intToStringWithPx(CHAT_PADDING) * 2});
		height: calc(
			100% - ${intToStringWithPx(addAllElementsInArray([ WINDOW_HEADER_HEIGHT, CHAT_PADDING, CHAT_PADDING ]))}
		);
	}

	a {
		color: #342d2d;
	}
	a:hover {
		color: #989898;
	}
	a:active {
		color: #000000;
	}
`;

const Spacer = styled.div`min-height: 15px;`;

//#endregion
