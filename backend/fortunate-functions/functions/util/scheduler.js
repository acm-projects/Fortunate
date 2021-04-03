const { updateTickers } = require('../handlers/users');

exports.scheduledFunction = functions.pubsub.schedule('* * * * *').onRun(updateTickers);