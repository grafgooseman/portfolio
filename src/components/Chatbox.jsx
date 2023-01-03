//#region Imports
import React, { useState, useEffect, useRef } from 'react';
import { v4 as uid } from 'uuid';
import styled from 'styled-components';
import ReplyBubble from './chatStuff/ReplyBubble';
import QuestionBubble from './chatStuff/QuestionBubble';
import QuestionButton from './chatStuff/QuestionButton';
import getMessageBlock, { getTriggerButtonTextMappings } from './chatStuff/messages';

//#endregion

const paddingArray = [ 13, 16 ];
const replyDelay = 1700;
const questionDelay = 800;

export default function Chatbox() {
	const [ returnArray, setReturnArray ] = useState([]);
	const mappingOfTopics = getTriggerButtonTextMappings();
	const usedMappings = [];
	let isAwaitsReply = false;

	useEffect(() => {
		if (isAwaitsReply === false) {
			renderQuestionButtons();
		}
	}, []);

	//#region JSX functions

	function renderQuestionButtons(dontSetArray) {
		const localArr = [];

		if (usedMappings.length === 0) {
			localArr.push(
				<QuestionButton text={mappingOfTopics.greeting} callBack={questionButtonPressed} key={'btn-' + uid()} />
			);
		} else {
			for (let i = 1; i < Object.keys(mappingOfTopics).length; i++) {
				const key = Object.keys(mappingOfTopics)[i];
				if (mappingOfTopics.hasOwnProperty(key)) {
					const element = mappingOfTopics[key];
					if (!usedMappings.includes(element)) {
						localArr.push(
							<QuestionButton key={'btn-' + uid()} callBack={questionButtonPressed} text={element} />
						);
					}
				}
			}
		}
		if (!dontSetArray) {
			setReturnArray([ ...returnArray, ...localArr ]);
		}
		console.log(returnArray);
		isAwaitsReply = true;
		return localArr;
	}

	async function questionButtonPressed(btnText) {
		const msgSection = Object.entries(mappingOfTopics).find((entry) => entry[1] === btnText)[0];
		usedMappings.push(btnText);

		const localArr = [];
		localArr.push(await renderQuestionAnswerBlock(getMessageBlock(msgSection)));
		setReturnArray([ ...returnArray, ...localArr ]);
		
		pergeOldButtons();
	}

	async function renderQuestionAnswerBlock(messagesArray) {
		// const localArr = [];

		let previousType = 'question';
		for (let i = 0; i < messagesArray.length; i++) {
			if (messagesArray[i].type !== previousType) {
				returnArray.push(<Spacer key={uid()} />);
			}
			if (messagesArray[i].type === 'reply') {
				returnArray.push(
					<ReplyBubble key={'message-' + uid()} paddingArray={paddingArray} text={messagesArray[i].text} />
				);
				previousType = 'reply';
				await delayedElementRender(replyDelay);
			} else if (messagesArray[i].type === 'question') {
				returnArray.push(
					<QuestionBubble key={'message-' + uid()} paddingArray={paddingArray} text={messagesArray[i].text} />
				);
				previousType = 'question';
				await delayedElementRender(questionDelay);
			}
		}
		returnArray.push(<Spacer key={uid()} />);
		setReturnArray(returnArray);
		// setReturnArray([...returnArray, ...localArr]); //why this doesnt work idk
	}

	function pergeOldButtons() {
		const filteredArray = returnArray.filter((element) => element && element.key.includes('btn-') === false);
		setReturnArray([ ...filteredArray, renderQuestionButtons() ]);
	}

	async function delayedElementRender(delay) {
		await new Promise((resolve) => setTimeout(resolve, delay));
		setReturnArray([...returnArray]);
	}

	//#endregion

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
