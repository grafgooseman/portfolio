import React from 'react';
import styled from 'styled-components';

export default function ScrollDownArrow() {
	return (
		<div>
			<Wrapper>
				<div className="content">
					<svg id="more-arrows">
						<polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
						<polygon
							className="arrow-middle"
							points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
						/>
						<polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " />
					</svg>
				</div>
			</Wrapper>
		</div>
	);
}

const Wrapper = styled.div`
	/* Arrow & Hover Animation */
	.content {
		height: 100%;
		display: grid;
		place-items: center;
	}

	#more-arrows {
		width: 75px;
		height: 65px;

		//temprary hover effect for phones removed
		@media (hover: hover) {
			&:hover {
				polygon {
					fill: #fff;
					transition: all .2s ease-out;

					&.arrow-bottom {
						transform: translateY(-18px);
					}

					&.arrow-top {
						transform: translateY(18px);
					}
				}
			}
		}
	}

	polygon {
		fill: #fff;
		transition: all .2s ease-out;

		&.arrow-middle {
			opacity: 0.75;
		}

		&.arrow-top {
			opacity: 0.5;
		}
	}
`;
