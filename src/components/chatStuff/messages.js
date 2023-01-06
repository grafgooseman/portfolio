// This file contains the messages that will be displayed in the chat

const messages = {
    greeting: {
        triggerButtonText: 'Start the chat',
        messages: [
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
                    'Love coding, engineering and building stuff 🏗️ Have excellent interpersonal skills and am constantly interested in new technologies.',
            },
            {
                type: 'reply',
                text: 'For example, right now learning on-chain development on the side.',
            }
        ]
    },
    technicalSkills: {
        triggerButtonText: 'Technical skills',
        messages: [
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
        ]
    },
    workExperience: {
        triggerButtonText: 'Work experience',
        messages: [
            {
                type: 'question',
                text: 'Good, thanks. Any work experience?',
            },
            {
                type: 'reply',
                text:
                    "I had an internship at :Root where I did " +
                    'a very complex paid chrome extension to help people buy exclusive sneakers.<br><br>' +
                    "Extention was an instant success and the company's sales skyrocketed that month 🚀",
            },
            {
                type: 'reply',
                text:
                    'Also I had a coop placement at $$SIRT$$ where I and a small team ' +
                    'together maintained and expanded a complex VR meeting app for $$Bell$$<br><br>' +
                    'In addition, during the same coop, I created a web scraper to investigate the feasibility ' +
                    'of a new Image to Website AI model for $$Designware$$ 🤖',
            },
            {
                type: 'reply',
                text:
                    'I had two coops with SIRT. They invited me back after the first one.'
            },
            {
                type: 'reply',
                text: 'There were other positions but these are the most relevant',
            },
        ]
    },
    personalProjects: {
        triggerButtonText: 'Personal projects',
        messages: [
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
                    '🌟$$ShopifyFrontChallenge$$ ' +
                    'where users can ask any question to different AI engines from ' +
                    '$$OpenAI$$ <br><br>' +
                    'Website build on React and utilises async requests to interact with ' +
                    '$$OpenAiAPI$$'
            },
            {
                type: 'reply',
                text:
                    'Also, I made and ' +
                    '🕹️ $$PlayStoreGame$$' +
                    ' my own mobile game using the Unity game engine and C#'
            },
            {
                type: 'reply',
                text:
                    'Participated in Game James the most recent one is the 2021 ' +
                    '$$Gmtk2021$$<br><br>' +
                    'Playable in the Browser with this $$GmtkGame$$✨'
            },
            {
                type: 'reply',
                text:
                    'And made a few freelance 💻 websites'
            },
            {
                type: 'reply',
                text:
                    '🎥 $$Vankelly$$'
            },
            {
                type: 'reply',
                text:
                    '🚁 $$WestWindDrone$$'
            },
            {
                type: 'reply',
                text:
                    'This website could also be considered as a React practice project '
            },
            {
                type: 'reply',
                text: 'And my GitHub that I regularly push to is $$Github$$ 🐈'
            },
        ]
    },
    contacts: {
        triggerButtonText: 'Contacts',
        messages: [
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
                    '$$LinkedIn$$, ' +
                    ' in addition I can be reached via emal: <br>' +
                    '$$SheridanMail$$'
            },
            {
                type: 'reply',
                text:
                    'And this is my general ' +
                    '$$Resume$$'
            },
        ]
    },
    goodbye: {
        triggerButtonText: 'Goodbye',
        messages: [
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
        ]
    }

};

const messageArrayOld = [
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
            "I had an internship at :Root where I did " +
            'a very complex paid chrome extension to help people buy exclusive sneakers.<br><br>' +
            "Extention was an instant success and the company's sales skyrocketed that month 🚀",
    },
    {
        type: 'reply',
        text:
            'Also I had a coop placement at $$SIRT$$ where I and a small team ' +
            'together maintained and expanded a complex VR meeting app for $$Bell$$<br><br>' +
            'In addition, during the same coop, I created a web scraper to investigate the feasibility ' +
            'of a new Image to Website AI model for $$Designware$$ 🤖',
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
            '🌟$$ShopifyFrontChallenge$$ ' +
            'where users can ask any question to different AI engines from ' +
            '$$OpenAI$$ <br><br>' +
            'Website build on React and utilises async requests to interact with ' +
            '$$OpenAiAPI$$'
    },
    {
        type: 'reply',
        text:
            'Also, I made and ' +
            '🕹️ $$PlayStoreGame$$' +
            ' my own mobile game using the Unity game engine and C#'
    },
    {
        type: 'reply',
        text:
            'Participated in Game James the most recent one is the 2021 ' +
            '$$Gmtk2021$$<br><br>' +
            'Playable in the Browser with this $$GmtkGame$$✨'
    },
    {
        type: 'reply',
        text:
            'And made a few freelance 💻 websites'
    },
    {
        type: 'reply',
        text:
            '🎥 $$Vankelly$$'
    },
    {
        type: 'reply',
        text:
            '🚁 $$WestWindDrone$$'
    },
    {
        type: 'reply',
        text:
            'This website could also be considered as a React practice project '
    },
    {
        type: 'reply',
        text: 'And my GitHub that I regularly push to is $$Github$$ 🐈'
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
            '$$LinkedIn$$, ' +
            ' in addition I can be reached via emal: <br>' +
            '$$SheridanMail$$'
    },
    {
        type: 'reply',
        text:
            'And this is my general ' +
            '$$Resume$$'
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

//Only the first letter of the Links are capital
const linksReferencer = {
    SIRT: {
        text: "SIRT",
        url: "https://www.sirtcentre.com/"
    },
    Bell: {
        text: "Bell Canada",
        url: "https://www.bell.ca/"
    },
    Designware: {
        text: "Designware",
        url: "https://www.designware.io/"
    },
    ShopifyFrontChallenge: {
        text: "website",
        url: "https://shopify-front-challenge.pages.dev/"
    },
    OpenAI: {
        text: "OpenAI",
        url: "https://openai.com/about/"
    },
    OpenAiAPI: {
        text: "OpenAI API",
        url: "https://openai.com/api/"
    },
    PlayStoreGame: {
        text: "published",
        url: "https://play.google.com/store/apps/details?id=com.PotatoJuice.GunnyGranny&hl=en&gl=US"
    },
    Gmtk2021: {
        text: "Game Makers Toolkit",
        url: "https://itch.io/jam/gmtk-2021"
    },
    GmtkGame: {
        text: "link",
        url: "https://grafgooseman.itch.io/no-control"
    },
    WestWindDrone: {
        text: "Drone Filming Landing Page",
        url: "https://grafgooseman.github.io/west-wind-drone-website/"
    },
    Vankelly: {
        text: "Film Director Portfolio",
        url: "https://grafgooseman.github.io/vankellyWebsite/index.html"
    },
    Github: {
        text: "here",
        url: "https://github.com/grafgooseman"
    },
    LinkedIn: {
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/gusev-artem/"
    },
    SheridanMail: {
        text: "gusev@sheridancollege.ca",
        url: "mailto:gusev@sheridancollege.ca"
    },
    Resume: {
        text: "Resume",
        url: "https://docs.google.com/document/d/1s42rtLqTcQHcgdMoueHmS7KIjvMR01FV/edit?usp=sharing&ouid=100985831291466163407&rtpof=true&sd=true"
    }
}


//#region exports 

export default function getMessageBlock(messageBlockName) {
    return linkifyMessageArray(messages[messageBlockName].messages);
}

function linkifyMessageArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        const re = /\$\$.*?\$\$/g;
        arr[i].text = arr[i].text.replace(re, (match) => {
            match = match.replace(/\$\$/g, '');
            const link = linksReferencer[match];
            return `<a href="${link.url}">${link.text}</a>`;
        });
    }
    return arr;
};

export function getTriggerButtonTextMappings() {
    const keys = Object.keys(messages);
    return keys.reduce((acc, key) => {
      acc[key] = messages[key].triggerButtonText;
      return acc;
    }, {});
}
  

//#endregion