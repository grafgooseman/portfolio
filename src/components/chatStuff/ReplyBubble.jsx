import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import replyBubbleTail from '../../images/replyBubbleTail.svg';
import TypingAnimationBubble from './TypingAnimationBubble';
import DOMPurify from 'dompurify';

export default function ReplyBubble({ text, paddingArray }) {
	
	const typingAnimationLength = 2500;
	const [renderTypingAnimation, setRenderTypingAnimation] = React.useState(true);

	useEffect(() => {
		setTimeout(() => {
			setRenderTypingAnimation(false);
			addTargetBlankAndRelBack();
		}, typingAnimationLength);
	}, []);


	if(renderTypingAnimation){
		return (
			<Wrapper>
				<TypingAnimationBubble/>
			</Wrapper>
		);
	} else {
		return (
			<Wrapper>
				<Bubble pa={[ paddingArray[0], paddingArray[1] ]}>
					<div className="content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
					<img src={replyBubbleTail} alt="" />
				</Bubble>
			</Wrapper>
		);
	}
}

//#region Functions 



function addTargetBlankAndRelBack() {
	const links = document.querySelectorAll('.content a');
	console.log(links);
	links.forEach((link) => {
		link.setAttribute('target', '_blank');
		link.setAttribute('rel', 'noopener noreferrer');
	});
}

//#endregion


//#region Styles 

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

//#endregion
