import React from 'react';
import Chatbox from './Chatbox';
import styled from 'styled-components';

export default function MacWindow() {
	return (
		<Window>
			<WindowHeader>
				<TrafficLights>
					<a href="#top">
						<div className="red" />
						<div className="yellow" />
						<div className="green" />
					</a>
				</TrafficLights>
				<span>Artem Gusev - Job Candidate</span>
			</WindowHeader>
			<Chatbox />
		</Window>
	);
}

//Styles
const Window = styled.div`
	font-size: 0.8rem;
	box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5), inset 0px 0.5px 1px #ffffff;
	filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.15)) drop-shadow(0px 25px 30px rgba(0, 0, 0, 0.35));
	border-radius: 10px;
	background: #ffffff;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);

	width: 97%;
	height: 97%;
	@media (min-width: 800px) {
		font-size: 1rem;
		max-width: 780px;
		width: 70%;
		height: 70vh;
	}
`;

const WindowHeader = styled.div`
	width: 100%;
	height: 28px;
	background: #ffffff;
	box-shadow: 0px 0.5px 0px rgba(0, 0, 0, 0.15), inset 0px -0.5px 0px rgba(0, 0, 0, 0.05);
	border-radius: 10px 10px 0px 0px;
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		display: none;
		@media (min-width: 900px) {
			display: flex;
			font-family: 'Inter';
			font-style: normal;
			font-weight: 700;
			font-size: 13px;
			line-height: 16px;
			/* identical to box height */

			display: flex;
			align-items: center;
			text-align: center;
			letter-spacing: -0.004em;

			color: #3d3d3d;
		}
	}
`;

const TrafficLights = styled.div`
	.red {
		box-sizing: border-box;

		position: absolute;
		width: 12px;
		height: 12px;
		left: 8px;
		top: 8px;

		background: #ec6a5e;
		border: 0.5px solid rgba(0, 0, 0, 0.12);
		border-radius: 50%;
	}

	.yellow {
		box-sizing: border-box;

		position: absolute;
		width: 12px;
		height: 12px;
		left: 28px;
		top: 8px;

		background: #f5bf4f;
		border: 0.5px solid rgba(0, 0, 0, 0.12);
		border-radius: 50%;
	}

	.green {
		box-sizing: border-box;

		position: absolute;
		width: 12px;
		height: 12px;
		left: 48px;
		top: 8px;

		background: #61c554;
		border: 0.5px solid rgba(0, 0, 0, 0.12);
		border-radius: 50%;
	}
`;
