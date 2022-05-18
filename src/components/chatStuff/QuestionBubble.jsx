import React from 'react';
import styled from 'styled-components';
import questionBubbleTail from '../../images/questionBubbleTail.svg';
import DOMPurify from 'dompurify';

export default function QuestionBubble({ text, paddingArray }) {
	return (
		<Wrapper>
			<Bubble pa={[ paddingArray[0], paddingArray[1] ]}>
				<div className="content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
				<img src={questionBubbleTail} alt="" />
			</Bubble>
		</Wrapper>
	);
}

//Styles
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
`;

const Bubble = styled.div`
	margin: 1px 10px 1px 10px;
	max-width: 400px;

	font-family: 'Inter';
	font-weight: 400;
	color: white;
	position: relative;

	/* display: flex;
	flex-direction: row;
	align-items: center; */
	padding: ${(props) => props.pa[0]}px ${(props) => props.pa[1]}px;

	background: #0078ff;
	border-radius: 20px;

	img {
		position: absolute;
		width: 16.5px;
		height: 17px;
		right: -4px;
		bottom: -1px;
	}

	p {
		margin: 0;
	}
`;
