import React from 'react';
import styled from 'styled-components';
import '../../styles/typingAnimation.scss';

//first show typing animation
//then show message from props

export default function TypingAnimationBubble() {
	return (
		<div>
			<Wrapper>
				<div className="typing-indicator">
					<span />
					<span />
					<span />
				</div>
			</Wrapper>
		</div>
	);
}

const Wrapper = styled.div`margin: 10px;`;
