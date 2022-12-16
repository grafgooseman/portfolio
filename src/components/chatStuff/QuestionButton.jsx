import React from 'react';
import styled from 'styled-components';
import panelQuestionTail from '../../images/panelQuestionTail.svg';

export default function QuestionButton() {
	return (
		<Wrapper>
			<Bubble>
				<p>Experience</p>
				<img src={panelQuestionTail} alt="" />
			</Bubble>
		</Wrapper>
	);
}

//Styles
const BUTTON_COLOR = '#0078FF';

const Wrapper = styled.div`
	border-radius: 20px;
	border: 1.3px solid ${BUTTON_COLOR};
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${BUTTON_COLOR};

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

	img {
		position: absolute;
		width: 16.5px;
		height: 17px;
		right: -18px;
		bottom: -4px;
	}

	p {
		margin: 0;
	}
`;
