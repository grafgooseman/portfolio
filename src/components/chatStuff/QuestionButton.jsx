import React from 'react';
import styled from 'styled-components';
import panelQuestionTail from '../../images/panelQuestionTail.svg';
import panelQuestionTailBlue from '../../images/panelQuestionTailBlue.svg';
import '../../styles/rippleAnimation.css';

export default function QuestionButton({ text }) {
	let [ currentTail, setCurrentTail ] = React.useState(panelQuestionTail);

	function handleEvent(event) {
		//Omg, because I change out the SVGs, the animation transition: all looks terrible, tail is still instant
		if (event.type === 'mousedown') {
			setCurrentTail(panelQuestionTailBlue)
		} else {
			setCurrentTail(panelQuestionTail)
		}
	}

	// function handleClickEvent(event) {
	// 	console.log(event);
	// 	setCurrentTail(panelQuestionTailBlue);
	// }

	return (
		<Wrapper>
			<MiddleWrapper onMouseDown={handleEvent} onMouseUp={handleEvent}>
				<Bubble>
					<p>{text}</p>
					<img src={currentTail} alt="" />
				</Bubble>
			</MiddleWrapper>
		</Wrapper>
	);
}

//Functions
// function createRipple(event) {
// 	const button = event.currentTarget;

// 	const circle = document.createElement('span');
// 	const diameter = Math.max(button.clientWidth, button.clientHeight);
// 	const radius = diameter / 2;

// 	circle.style.width = circle.style.height = `${diameter}px`;
// 	circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
// 	circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
// 	circle.classList.add('ripple');

// 	console.table({ button, circle, diameter, radius });
// 	console.table(circle.style.left, circle.style.top);

// 	const ripple = button.getElementsByClassName('ripple')[0];

// 	if (ripple) {
// 		ripple.remove();
// 	}

// 	button.appendChild(circle);
// }

//Styles
const BUTTON_COLOR = '#0078FF';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
`;

const MiddleWrapper = styled.button`
	margin: 1px 10px 1px 10px;
	border-radius: 20px;
	border: 1.3px solid ${BUTTON_COLOR};
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${BUTTON_COLOR};

	background-color: transparent;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;

	:active {
		background-color: ${BUTTON_COLOR};
		color: white;
	}
	/* transition: all 100ms; */
	/* transition: background 400ms; */

	-webkit-user-select: none; /* Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
`;

const Bubble = styled.div`
	margin: 1px 10px 1px 10px;
	max-width: 200px;

	display: flex;
	align-items: center;
	justify-content: center;

	height: 30px;

	font-family: 'Inter';
	font-weight: 400;
	position: relative;

	padding: 1px 1px;

	/* background: #e9e9eb; */
	border-radius: 20px;

	polyline,
	path {
		fill: inherit;
		stroke: inherit;
	}

	img {
		position: absolute;
		width: 16.5px;
		height: 17px;
		right: -18.5px;
		bottom: -4px;

		fill: ${BUTTON_COLOR};
	}

	p {
		margin: 0;
	}
`;
