// This file contains the messages that will be displayed in the chat

const messages = {
    greeting: {
        triggerButtonText: 'Click here to start',
        messages: [
            {
                "type": "question",
                "text": "Hello Artem, I heard that you are looking for a job right?"
              },
              {
                "type": "question",
                "text": "Could you please tell me a little bit about yourself?"
              },
              {
                "type": "reply",
                "text": "Yes, absolutely! In short, I am a Software Developer with 3+ years of experience and a track record of delivering results 💼✨"
              },
              {
                "type": "reply",
                "text": "Love coding, engineering and 🏗️ building stuff. 🤝 Strong communication skills and always exploring new technologies 💡"
              },
              {
                "type": "reply",
                "text": "For example, right now exploring agentic apps 🤖 — amazing for business automation and cutting down on manual effort ⚙️📉"
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
                    'I know React, Next.js and Node.js (+ JS/TS, HTML, CSS), C# from my Unity game engine passion, Java from college courses, Python from working as a researcher and Git',
            },
            {
                type: 'reply',
                text: 'These are the major ones',
            },
        ]
    },
    workExperience: {
        triggerButtonText: "Work experience",
        messages: [
          {
            type: "question",
            text: "Good, thanks. Any work experience?"
          },
          {
            type: "reply",
            text:
              "Yep! At :Root I led development on a complex Vue.js Chrome extension that let users queue virtually to buy limited-edition items 🛒<br><br>" +
              "It boosted paid subscriptions by 21% in just three months 🚀"
          },
          {
            type: "reply",
            text:
              "Later, I joined $$SIRT$$ as a Junior Software Engineer where I helped maintain and expand a VR meeting app for $$Bell$$ 🧑‍💻🕶️<br><br>" +
              "I engineered an intuitive wrist-menu system that 97% of users preferred in A/B testing, and also built a character animation tool that saved ~$50K in production costs 💸"
          },
          {
            type: "reply",
            text:
              "Actually, I had two co-ops with $$SIRT$$—they invited me back after the first one 🤝"
          },
          {
            type: "reply",
            text:
              "As a Data Analyst at $$CAAI$$, I built a bone fracture prediction model in collaboration with Osteoporosis Canada 🧠📊<br><br>" +
              "Our model hit 89% accuracy and was featured at an international medical conference in Oslo 🇳🇴"
          },
          {
            type: "reply",
            text:
              "Most recently, I worked at $$GNOTechnology$$ and $$Lutendi$$ as a Full Stack Developer ⚙️<br><br>" +
              "At $$GNOTechnology$$, I built an interactive display system with QR codes that increased local business conversions by 12%, and designed a reusable Next.js template system to accelerate SaaS launches 🚀<br><br>" +
              "At $$Lutendi$$, I rebuilt a broken rental portal in React from the ground up in just 2 weeks, and automated parts of Metro 2 report generation with Python—cutting analyst workload by 80% ⏱️📉"
          },
          {
            type: "reply",
            text:
              "This is what my last employer, $$Lutendi$$, said about me 💬<br><br>" +
              "$$RecommendationLetterLutendi$$ 📝"
          }
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
                    'Yes, for example before ChatGPT was even a thing and access to OpenAI was limited, I made a ' +
                    '🌟$$ShopifyFrontChallenge$$ ' +
                    'where users can ask any question to different AI engines from ' +
                    '$$OpenAI$$ simular to ChatGPT nowadays<br><br>' +
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
                    'But Google took it down because of new privacy policies 🙁'
            },
            {
                type: 'reply',
                text:
                    'Participated in Game James and Hackathons:'
            },
            {
                type: 'reply',
                text:
                    'From Game Jams I can show this game:<br><br>' +
                    'Playable in the Browser with this $$GmtkGame$$✨'
            },
            {
                type: 'reply',
                text:
                    'And as for Hackathons, I am most proud of this one:<br><br>' +
                    '$$MondaycomHackathon$$'
            },
            {
                type: 'reply',
                text:
                    'I also made a few freelance 💻 websites'
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
                    'This website you are on right now is my React practice project. Everything here is custom-made'
            },
            {
                type: 'reply',
                text: 'And my GitHub that I push to is $$Github$$ 🐈'
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
                    '$$MainEmail$$'
            }
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
    GNOTechnology: {
        text: "GNO Technology",
        url: "https://www.gnotechnology.com/"
    },
    RecommendationLetterLutendi: {
        text: "Read the recommendation letter",
        url: "https://drive.google.com/file/d/1DFPrBq1gSlKMlPlrw9eMOny4SHreYpzj/view?usp=sharing"
    },
    Lutendi: {
        text: "Lutendi",
        url: "https://www.lutendi.com/"
    },
    CAAI: {
        text: "CAAI",
        url: "https://www.sheridancollege.ca/research/centres/applied-ai"
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
    MondaycomHackathon: {
        text: "Hackathon Results (2nd place worldwide)",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7082101069375299585/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7082101069375299585%29"
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
    MainEmail: {
        text: "artemgusev2100@gmail.com",
        url: "mailto:artemgusev2100@gmail.com"
    },
    BuilderEmail: {
        text: "artem@artembuilds.com",
        url: "mailto:artem@artembuilds.com"
    },
    Resume: {
        text: "Resume",
        url: "https://www.linkedin.com/in/gusev-artem/"
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
