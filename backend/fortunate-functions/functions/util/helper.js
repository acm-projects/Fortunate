/**
 * @return array of tickers supported
 */
exports.getTickerList = () => {
    return require('../s&p500.json');
};
// console.log(exports.getTickerList());