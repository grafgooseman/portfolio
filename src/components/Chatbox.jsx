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
	const ChatboxRef = useRef();
	const [ returnArray, setReturnArray ] = useState([]);
	const mappingOfTopics = getTriggerButtonTextMappings();
	const usedMappings = [];
	let isAwaitsReply = false;
	let isInitialRender = true;

	const returnArrayCopyRef = useRef(null);

	useEffect(() => {
		if (isAwaitsReply === false && isInitialRender) {
			renderQuestionButtons();
		}
	}, []);

	useEffect(
		() => {
			returnArrayCopyRef.current = returnArray;
		},
		[ returnArray ]
	);

	//#region JSX functions

	async function renderElement(element, delay) {
		// returnArrayCopy.push(element)
		// returnArrayCopy = returnArray.slice();
		return new Promise((resolve) => {
			setTimeout(() => {
				setReturnArray((returnArray) => [ ...returnArray, element ]);
				console.log('---returnArray---');
				console.log(returnArray);
				const chatbox = ChatboxRef.current;
				const paddingTop = parseInt(getComputedStyle(chatbox).paddingTop, 10);
				const paddingBottom = parseInt(getComputedStyle(chatbox).paddingBottom, 10);
				const scrollbarHeight = chatbox.offsetHeight - chatbox.clientHeight;
				const targetPosition =
					chatbox.scrollHeight - chatbox.clientHeight - scrollbarHeight + paddingTop + paddingBottom;

				// TODO: scroll to bottom including padding (current implementation doesnt scroll all the way to the bottom)
				
				chatbox.scrollTo({
					top: targetPosition,
					behavior: 'smooth'
				});

				resolve();
			}, delay);
		});
	}

	async function renderQuestionButtons() {
		if (usedMappings.length === 0) {
			isInitialRender = false;
			await renderElement(
				<QuestionButton
					text={mappingOfTopics.greeting}
					callBack={questionButtonPressed}
					key={'btn-' + uid()}
				/>,
				0
			);
		} else {
			let firstElement = true;
			for (let i = 1; i < Object.keys(mappingOfTopics).length; i++) {
				const key = Object.keys(mappingOfTopics)[i];
				if (mappingOfTopics.hasOwnProperty(key)) {
					const element = mappingOfTopics[key];

					if (!usedMappings.includes(element)) {
						let delay = 0;
						if (firstElement) {
							delay = replyDelay + 100;
							firstElement = false;
						} else {
							delay = 0;
						}

						await renderElement(
							<QuestionButton text={element} callBack={questionButtonPressed} key={'btn-' + uid()} />,
							delay
						);
					}
				}
			}
		}
		isAwaitsReply = true;
	}

	function questionButtonPressed(btnText) {
		const msgSection = Object.entries(mappingOfTopics).find((entry) => entry[1] === btnText)[0];
		usedMappings.push(btnText);

		//TODO: Add new elemnt to copyRetunArray
		// returnArrayCopy = returnArray.slice();

		pergeOldButtons();
		renderQuestionAnswerBlock(getMessageBlock(msgSection));
	}


	async function renderQuestionAnswerBlock(messagesArray) {
		let previousType = 'question';
		let firstElement = true;
		for (let i = 0; i < messagesArray.length; i++) {
			if (messagesArray[i].type !== previousType) {
				await renderElement(<Spacer key={uid()} />, 0);
			}
			if (messagesArray[i].type === 'reply') {
				await renderElement(
					<ReplyBubble key={'message-' + uid()} paddingArray={paddingArray} text={messagesArray[i].text} />,
					replyDelay
				);
				previousType = 'reply';
			} else if (messagesArray[i].type === 'question') {
				let delay = 0;
				if (firstElement) {
					delay = 0;
					firstElement = false;
				} else {
					delay = questionDelay;
				}

				await renderElement(
					<QuestionBubble
						key={'message-' + uid()}
						paddingArray={paddingArray}
						text={messagesArray[i].text}
					/>,
					delay
				);
				previousType = 'question';
			}
		}
		renderQuestionButtons();
	}

	function pergeOldButtons() {
		console.log('purgeOldButtons');
		// console.log(returnArrayCopy);
		console.log(returnArrayCopyRef.current);
		console.log(returnArrayCopyRef.current.map((element) => element.key.includes('btn-')));
		const filteredArray = returnArrayCopyRef.current.filter((element) => element && element.key.includes('btn-') === false);
		console.log(filteredArray);
		setReturnArray([ ...filteredArray]);
	}

	//#endregion

	return <Wrapper ref={ChatboxRef}>{returnArray}</Wrapper>;
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
