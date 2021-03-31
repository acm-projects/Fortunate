/**
 * @return array of tickers supported
 */
exports.getTickerList = async () => {
    const db = require('../util/admin').admin.firestore();
    const doc = await db.collection('tickers').doc('supportedTickers').get();

    if (!doc.exists)
        throw new Error('Document does not exist');

    return doc.data()["s&p500"];
};