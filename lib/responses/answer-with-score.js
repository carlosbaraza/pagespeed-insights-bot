const psi = require('../page-speed');

module.exports = {
    answerWithScore(bot, message) {
        const url = message.match[1].match(/<(.*)>/)[1];

        const thresholds = { mobile: 90, desktop: 95 };

        const icons = {
            mobile: ':iphone:',
            desktop: ':desktop_computer:'
        };

        const statusIcon = (score, threshold) =>
            score >= threshold ?
                ':white_check_mark:' :
                ':warning:';

        psi(url)
            .then((scores) => {
                const statuses = Object.keys(thresholds).map(key =>
                    `${icons[key]} ${scores[key]} ${statusIcon(scores[key], thresholds[key])}`
                );

                bot.reply(message, statuses.join('    '));
            });
    }
}
