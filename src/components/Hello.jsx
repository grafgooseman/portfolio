import React from 'react';
import laptopImg from '../images/laptop.png';
import styled from 'styled-components';

export default function Hello() {
	return (
		<Wrapper>
			<HelloTextHolder>
				<h1>Hello</h1>
				<h3>My name is Artem Gusev</h3>
				<p>I am a student with computer science passion</p>
			</HelloTextHolder>
			<LaptopHolder>
				<Laptop src={laptopImg} alt="laptop" />
			</LaptopHolder>
		</Wrapper>
	);
}

//Styles
let breakpointWrap = '632px';

const Wrapper = styled.div`
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;

const HelloTextHolder = styled.div`

	margin-left: 0px;
	margin-bottom: 10px;
	@media (min-width: ${breakpointWrap}) {
		margin-left: 30px;
		margin-bottom: 30px;
	}

	height: 100%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;

	h1 {
		margin-top: 0;
		margin-bottom: 0px;
		@media (min-width: ${breakpointWrap}) {
			margin-bottom: 3px;
		}
		font-size: 4rem;
		/* needed cause h1 for some reason dont want to inherent font-weight */
		font-weight: 400;
	}

	h3 {
		margin-top: 0;
		margin-bottom: 0px;
		font-size: 1.3rem;
		@media (min-width: ${breakpointWrap}) {
			margin-bottom: 5px;
		}
		/* needed cause h3 for some reason dont want to inherent font-weight */
		font-weight: 400;
	}

	p {
		/* font-weight: 400; */
		font-size: 0.9rem;
	}
`;

const LaptopHolder = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Laptop = styled.img`
	@media (max-width: 330px) {
		width: 200px;
	}
	max-width: 300px;
	flex: 1 1 150px;
	margin: 0 20px 0 20px;
`;
