/**
 * @return array of tickers supported
 */
const getTickerList = async () => {
    const db = require('../util/admin').admin.firestore();
    const doc = await db.collection('tickers').doc('supportedTickers').get();

    if (!doc.exists)
        throw new Error('Document does not exist');

    console.log(doc.data()["s&p500"]);
    console.log("\n\n\n\n")
    return doc.data()["s&p500"];
};

exports.getTickerListTest = async (req, res) => {
    const a = await getTickerList();

    console.log(a)
}