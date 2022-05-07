import React from 'react';
import styled from 'styled-components';

export default function MacWindow() {
	return (
		<Window>
			<WindowHeader>
				<TrafficLights>
                    <div className='red'></div>
                    <div className='yellow'></div>
                    <div className='green'></div>
                </TrafficLights>
				<span>Artem Gusev - Job Candidate</span>
			</WindowHeader>
		</Window>
	);
}

//Styles
const Window = styled.div`
	box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5), inset 0px 0.5px 1px #ffffff;
	filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.15)) drop-shadow(0px 25px 30px rgba(0, 0, 0, 0.35));
	border-radius: 10px;
	background: #ffffff;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);

	width: 70%;
	height: 70vh;
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
`;

const TrafficLights = styled.div``;
