import React from 'react';
import styled from 'styled-components';
import replyBubbleTail from '../../images/replyBubbleTail.svg';

export default function ReplyBubble({ text }) {
	return (
		<Wrapper>
			<Bubble>
				{text}
				<img src={replyBubbleTail} alt="" />
			</Bubble>
		</Wrapper>
	);
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Bubble = styled.div`
  margin: 10px;
  max-width: 400px;

  font-family: 'Inter';
  font-weight: 400;
  position: relative;

	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 7px 12px;

	background: #e9e9eb;
	border-radius: 20px;

	img {
		position: absolute;
		width: 16.5px;
		height: 17px;
    left: -4px;
    bottom: -1px;
	}
`;
