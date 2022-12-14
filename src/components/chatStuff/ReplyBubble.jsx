import React from 'react';
import styled from 'styled-components';
import replyBubbleTail from '../../images/replyBubbleTail.svg';
import DOMPurify from 'dompurify';

export default function ReplyBubble({ text, paddingArray }) {
	//DOMPurify.sanitize sanitises out target="_blank"
	//Not good

	//Add logic here to add to all links target="_blank" post sanitization

	return (
		<Wrapper>
			<Bubble pa={[ paddingArray[0], paddingArray[1] ]}>
				<div className="content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
				<img src={replyBubbleTail} alt="" />
			</Bubble>
			{/* <Bubble pa={[ paddingArray[0], paddingArray[1] ]}>
				{textArray.map((text, index) => <p key={index}>{text}</p>)}
				<img src={replyBubbleTail} alt="" />
			</Bubble> */}
		</Wrapper>
	);
}

const PADDING_BREAKPOINT = '632px';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
`;

const Bubble = styled.div`
	margin: 1px 10px 1px 10px;
	max-width: 200px;
	@media (min-width: ${PADDING_BREAKPOINT}) {
		max-width: 400px;
	}

	font-family: 'Inter';
	font-weight: 400;
	position: relative;

	padding: ${(props) => props.pa[0]}px ${(props) => props.pa[1]}px;

	background: #e9e9eb;
	border-radius: 20px;

	img {
		position: absolute;
		width: 16.5px;
		height: 17px;
		left: -4px;
		bottom: -1px;
	}

	p {
		margin: 0;
	}
`;
