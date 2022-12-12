// This file contains the messages that will be displayed in the chat

const messageArray = [
    {
        type: 'question',
        text: 'Hello Artem, I heard that you are looking for a coop placement for the summer 2023, right?',
    },
    {
        type: 'question',
        text: 'Could you please tell me a little bit about yourself?',
    },
    {
        type: 'reply',
        text: 'Yes, absolutely! In short, I am a Software Development student at Sheridan College.',
    },
    {
        type: 'reply',
        text:
            'Love coding, engineering and flying ✈️ Have excellent interpersonal skills and am constantly interested in new technologies.',
    },
    {
        type: 'reply',
        text: 'For example, right now learning Web3 on the side.',
    },
    {
        type: 'question',
        text: "Ok, that's great, but what are your technical skills?",
    },
    {
        type: 'reply',
        text:
            'I know React and Vue.js (+ JS, HTML, CSS), C# from my Unity game engine passion, Java from college courses and Git',
    },
    {
        type: 'reply',
        text: 'These are the major ones',
    },
    {
        type: 'question',
        text: 'Good, thanks. And work experience?',
    },
    {
        type: 'reply',
        text:
            "I had an internship at <a rel=\"noopener noreferrer\" target='_blank' href='https://cmd-root.com/'>:Root</a> where I did " +
            'a very complex paid chrome extension to help people buy exclusive sneakers.<br><br>' +
            "Extention was an instant success and the company's sales skyrocketed that month 🚀",
    },
    {
        type: 'reply',
        text:
            'Also I had a coop placement at <a rel="noopener noreferrer" target="_blank" href=\'https://www.sirtcentre.com/\'>SIRT</a> where I and a small team ' +
            'together maintained and expanded a complex VR meeting app for <a href=\'https://www.bell.ca/\' rel="noopener noreferrer" target="_blank">Bell Canada</a><br><br>' +
            'In addition, during the same coop, I created a web scraper to investigate the feasibility ' +
            'of a new Image to Website AI model for <a href=\'https://www.designware.io/\' rel="noopener noreferrer" target="_blank">Designware</a> 🤖',
    },
    {
        type: 'reply',
        text: 'I had other positions but these are the most relevant',
    },
    {
        type: 'question',
        text: 'Hmm, interesting...',
    },
    {
        type: 'question',
        text: 'Also, do you have any personal projects to show?',
    },
    {
        type: 'reply',
        text:
            'Yes, recently, as a challenge from Shopify, I made a ' +
            '🌟<a href=\'https://shopify-front-challenge.pages.dev/\' rel="noopener noreferrer" target="_blank">website</a> ' +
            'where users can ask any question to different AI engines from ' +
            '<a href=\'https://openai.com/about/\' rel="noopener noreferrer" target="_blank">OpenAI</a> <br><br>' +
            'Website build on React and utilises async requests to interact with ' +
            '<a href=\'https://openai.com/api/\' rel="noopener noreferrer" target="_blank">OpenAI API</a>'
    },
    {
        type: 'reply',
        text:
            'Also, I made and ' +
            '🕹️ <a href=\'https://play.google.com/store/apps/details?id=com.PotatoJuice.GunnyGranny&hl=en&gl=US\' rel="noopener noreferrer" target="_blank">published</a>' +
            ' my own mobile game using the Unity game engine and C#'
    },
    {
        type: 'reply',
        text:
            'Participated in Game James the most recent one is the 2021 ' +
            '<a href=\'https://itch.io/jam/gmtk-2021\' rel="noopener noreferrer" target="_blank">Game Makers Toolkit</a><br><br>' +
            'Playable in the Browser with this <a href=\'https://grafgooseman.itch.io/no-control\' rel="noopener noreferrer" target="_blank">link</a>✨'
    },
    {
        type: 'reply',
        text:
            'And made a few freelance 💻 websites'
    },
    {
        type: 'reply',
        text:
            '🎥 <a href=\'https://grafgooseman.github.io/vankellyWebsite/index.html\' rel="noopener noreferrer" target="_blank">Film Director Portfolio</a>'
    },
    {
        type: 'reply',
        text:
            '🚁 <a href=\'https://grafgooseman.github.io/west-wind-drone-website/\' rel="noopener noreferrer" target="_blank">Drone Filming Landing Page</a>'
    },
    {
        type: 'reply',
        text:
            'This website could also be considered as a React practice project '
    },
    {
        type: 'reply',
        text: '<a href=\'https://github.com/grafgooseman\' rel="noopener noreferrer" target="_blank">here</a> 🐈'
    },
    {
        type: 'question',
        text: 'Thats great',
    },
    {
        type: 'question',
        text: 'Do you want to leave any contact links?',
    },
    {
        type: 'reply',
        text:
            'Sure, here is my ' +
            '<a href=\'https://www.linkedin.com/in/gusev-artem/\' rel="noopener noreferrer" target="_blank">LinkedIn</a>, ' +
            ' in addition I can be reached via emal: <br>' +
            '<a href=\'mailto:gusev@sheridancollege.ca\' rel="noopener noreferrer" target="_blank">gusev@sheridancollege.ca</a>'
    },
    {
        type: 'reply',
        text:
            'And this is my general ' +
            '<a href=\'https://docs.google.com/document/d/1s42rtLqTcQHcgdMoueHmS7KIjvMR01FV/edit?usp=sharing&ouid=100985831291466163407&rtpof=true&sd=true\' rel="noopener noreferrer" target="_blank">Resume</a>'
    },
    {
        type: 'question',
        text: 'Ok, thank you Artem'
    },
    {
        type: 'reply',
        text: 'Thank you too'
    },
    {
        type: 'reply',
        text: 'Have a great rest of your day 👋'
    },
];


// 	<QuestionBubble paddingArray={paddingArray} text={'Ok, thank you Artem'} />
// 	<Spacer />

// 	<ReplyBubble paddingArray={paddingArray} text={'Thank you too'} />
// 	<ReplyBubble paddingArray={paddingArray} text={'Have a great rest of your day 👋'} />
// 	<Spacer />
// </Wrapper>

export default messageArray;