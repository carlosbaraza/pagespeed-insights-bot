const psi = require('psi');
const fromPairs = require('lodash.frompairs');

module.exports = (url) => {
    const strategies = [ 'mobile', 'desktop' ];

    const scorePromises = strategies.map(getScorePromise.bind(null, url));

    return Promise
        .all(scorePromises)
        .then(results => fromPairs(results));
}

function getScorePromise(url, strategy) {
    console.log('Getting score', url, strategy);

    const psiPromise = psi(
        url,
        {  nokey: 'true', strategy }
    );

    return psiPromise
        .then(({ ruleGroups }) => [ strategy, ruleGroups.SPEED.score ]);
}
