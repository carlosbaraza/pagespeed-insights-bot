if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

const Botkit = require('botkit/lib/Botkit.js');
const os = require('os');
const { answerWithScore } = require('./lib/responses/answer-with-score');

const controller = Botkit.slackbot({
    debug: true,
});

const bot = controller.spawn({
    token: process.env.token
}).startRTM();

controller.hears(
    [ '(.*)' ],
    'direct_message,direct_mention,mention',
    answerWithScore
);
