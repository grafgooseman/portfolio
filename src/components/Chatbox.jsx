import React from 'react';
import styled from 'styled-components';
// import BubbleTypingAnimation from './chatStuff/TypingAnimationBubble';
import ReplyBubble from './chatStuff/ReplyBubble';
import QuestionBubble from './chatStuff/QuestionBubble';

export default function Chatbox() {
	const paddingArray = [ 13, 16 ];

	return (
		//I know, I know how this code might look.
		//I will fix this in a very near future.
		//I will make an actual chat box, might even with AI.
		//Everything below here is temporary.

		<Wrapper>
			<QuestionBubble
				paddingArray={paddingArray}
				text={"Hello Artem, I heard that you are looking for a coop placement for the fall semester."}
			/>
			<QuestionBubble
				paddingArray={paddingArray}
				text={"Could you please tell me a little bit about yourself?"}
			/>
			<Spacer />
			<ReplyBubble
				paddingArray={paddingArray}
				text={"Yes, absolutely! In short, I am a Software Development student at Sheridan College."}
			/>
			<ReplyBubble
				paddingArray={paddingArray}
				text={"Love coding, engineering and flying ✈️ Have excellent interpersonal skills and am constantly interested in new technologies."}
			/>
			<ReplyBubble
				paddingArray={paddingArray}
				text={"For example, right now learning Web3 on the side."}
			/>
			<Spacer />
			<QuestionBubble
				paddingArray={paddingArray}
				text={"Ok, that's great, but what are your technical skills?"}
			/>
			<Spacer />
			<ReplyBubble
				paddingArray={paddingArray}
				text={"I know React and Vue.js (+ JS, HTML, CSS), C# from my Unity game engine passion, Java from college courses and Git"}
			/>
			<ReplyBubble
				paddingArray={paddingArray}
				text={"These are the major ones"}
			/>
			<Spacer />

			<QuestionBubble paddingArray={paddingArray} text={"Good, thanks. And work experience?"} />
			<Spacer />
			
			<ReplyBubble
				paddingArray={paddingArray}
				text={"I had an internship at <a rel=\"noopener noreferrer\" target='_blank' href='https://cmd-root.com/'>:Root</a> where I did " + 
				"a very complex paid chrome extension to help people buy exclusive sneakers.<br><br>" +
				"Extention was an instant success and the company's sales skyrocketed that month."}
			/>
			<ReplyBubble
				paddingArray={paddingArray}
				text={"Also I had a coop placement at <a rel=\"noopener noreferrer\" target=\"_blank\" href='https://www.sirtcentre.com/'>SIRT</a> where I and a small team " + 
				"together maintained and expanded a complex VR meeting app for <a href='https://www.bell.ca/' rel=\"noopener noreferrer\" target=\"_blank\">Bell Canada</a><br><br>" +
				"In addition, during the same coop, I created a web scraper to investigate the feasibility " +
				"of a new Image to Website AI model for <a href='https://www.designware.io/' rel=\"noopener noreferrer\" target=\"_blank\">Designware</a> 🤖"}
			/>
			<ReplyBubble
				paddingArray={paddingArray}
				text={"I had other positions but these are the most relevant"}
			/>
			<Spacer />

			<QuestionBubble paddingArray={paddingArray} text={"Hmm, interesting..."} />
			<QuestionBubble paddingArray={paddingArray} text={"Also, do you have any personal projects to show?"} />
			<Spacer />

			<ReplyBubble
				paddingArray={paddingArray}
				text={"Yes, I made and " + 
				"🕹️ <a href='https://play.google.com/store/apps/details?id=com.PotatoJuice.GunnyGranny&hl=en&gl=US' rel=\"noopener noreferrer\" target=\"_blank\">published</a>" + 
				" my own mobile game using the Unity game engine and C#"}
			/>
			<ReplyBubble
				paddingArray={paddingArray}
				text={"Participated in Game James the most recent one is the 2021 " + 
					"<a href='https://itch.io/jam/gmtk-2021' rel=\"noopener noreferrer\" target=\"_blank\">Game Makers Toolkit</a><br><br>" +
						"Playable in the Browser with this <a href='https://grafgooseman.itch.io/no-control' rel=\"noopener noreferrer\" target=\"_blank\">link</a>✨"}
			/>
			<ReplyBubble
				paddingArray={paddingArray}
				text={"And made a few 💻 websites"}
			/>
			<ReplyBubble
				paddingArray={paddingArray}
				text={"🎥 <a href='https://grafgooseman.github.io/vankellyWebsite/index.html' rel=\"noopener noreferrer\" target=\"_blank\">Film Director Portfolio</a>"}
			/>
			<ReplyBubble
				paddingArray={paddingArray}
				text={"🚁 <a href='https://grafgooseman.github.io/west-wind-drone-website/' rel=\"noopener noreferrer\" target=\"_blank\">Drone Filming Landing Page</a>"}
			/>
			<ReplyBubble
				paddingArray={paddingArray}
				text={"This website could also be considered as a React practice project "}
			/>
			<Spacer />

			<QuestionBubble paddingArray={paddingArray} text={"Thats great)"} />
			<QuestionBubble paddingArray={paddingArray} text={"Ok, thank you Artem"} />
			<Spacer />

			<ReplyBubble
				paddingArray={paddingArray}
				text={"Thank you too"}
			/>
			<ReplyBubble
				paddingArray={paddingArray}
				text={"Have a great rest of your day 👋"}
			/>
			<Spacer />

		</Wrapper>
	);
}

//Styles

const WINDOW_HEADER_HEIGHT = 28;
const CHAT_PADDING = 40;

const Wrapper = styled.div`
	align-self: center;

	::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
	padding: ${intToStringWithPx(CHAT_PADDING)};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	overflow-y: scroll;

	width: calc(100% - ${intToStringWithPx(CHAT_PADDING) * 2});
	height: calc(
		100% - ${intToStringWithPx(addAllElementsInArray([ WINDOW_HEADER_HEIGHT, CHAT_PADDING, CHAT_PADDING ]))}
	);
	a {
		color: #342d2d;
	}
	a:hover {
		color: #989898;
	}
	a:active {
		color: #000000;
	}
`;

const Spacer = styled.div`
	min-height: 15px;
	`;

function intToStringWithPx(int) {
	return `${int}px`;
}
function addAllElementsInArray(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}
