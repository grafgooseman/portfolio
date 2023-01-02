//#region Imports
import React, { useState, useEffect, useRef } from 'react';
import { v4 as uid } from 'uuid';
import styled from 'styled-components';
import ReplyBubble from './chatStuff/ReplyBubble';
import QuestionBubble from './chatStuff/QuestionBubble';
import QuestionButton from './chatStuff/QuestionButton';
import getMessageBlock, { getTriggerButtonTextMapping } from './chatStuff/messages';

//#endregion

const paddingArray = [ 13, 16 ];

export default function Chatbox() {
	const [ returnArray, setReturnArray ] = useState([]);
	const mappingOfTopics = getTriggerButtonTextMapping();
	const usedmappings = [];

	useEffect(() => {
		renderQuestionButtons();
	}, []);

	//#region JSX functions

	function renderQuestionButtons() {
		if (usedmappings.length === 0) {
			returnArray.push(<QuestionButton text={mappingOfTopics.greeting} callBack={questionButtonPressed} key={uid()} />);
		} else {
			for (const key in mappingOfTopics) {
				if (mappingOfTopics.hasOwnProperty(key)) {
					const element = mappingOfTopics[key];
					if (!usedmappings.includes(element)) {
						returnArray.push(<QuestionButton key={uid()} text={element} />);
					}
				}
			}
		}
		console.log(returnArray);
		setReturnArray([...returnArray]);
	}

	function questionButtonPressed(btnText) {
		const msgSection = Object.entries(mappingOfTopics).find((entry) => entry[1] === btnText)[0];
		console.log(msgSection);
		setReturnArray([ 
			...returnArray, 
			renderQuestionAnswerBlock(getMessageBlock(msgSection)),
			renderQuestionButtons()
		]);
		returnArray.push(renderQuestionAnswerBlock(getMessageBlock(msgSection)));
		returnArray.push(renderQuestionButtons());
		usedmappings.push(btnText);
		console.log(returnArray);
	}

	function renderQuestionAnswerBlock(messagesArray) {
	
		let previousType = 'question';
		for (let i = 0; i < messagesArray.length; i++) {
			if (messagesArray[i].type !== previousType) {
				returnArray.push(<Spacer key={uid()} />);
			}
			if (messagesArray[i].type === 'reply') {
				returnArray.push(<ReplyBubble key={uid()} paddingArray={paddingArray} text={messagesArray[i].text} />);
				previousType = 'reply';
			} else if (messagesArray[i].type === 'question') {
				returnArray.push(<QuestionBubble key={uid()} paddingArray={paddingArray} text={messagesArray[i].text} />);
				previousType = 'question';
			}
		}
		returnArray.push(<Spacer key={uid()} />);
		setReturnArray(returnArray);
	}
	

	//#endregion

	//Now the return array is just one of the questions answers.
	//A new system must be implemented here
	// returnArray.push(renderQuestionAnswerBlock(getMessageBlock('greeting')));
	// returnArray.push(renderQuestionAnswerBlock(getMessageBlock('workExperience')));
	// returnArray.push(<QuestionButton key={uid()} text={"Experience"} msgBlock={'workExperience'}/>);
	// returnArray.push(<QuestionButton key={uid()} text={"Start the chat"} msgBlock={'greeting'}/>);

	return <Wrapper>{returnArray}</Wrapper>;
}

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
