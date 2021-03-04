const fs = require('fs');
let key;

fs.readFile('config.json', function(error, data) {
    if (error) {
        console.log(error);
        throw error;
    }
    key = JSON.parse(data).rapidapi;//['rapidapi'];
    console.log(key);
});
var unirest = require("unirest");

exports.getQuote = ticker => {
    var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile");

    req.query({
        "symbol": ticker,
        "region": "US"
    });

    req.headers({
        "x-rapidapi-key": "6a7ac12fa3mshf6023315c3a449bp1044b8jsn23cd53a21411",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "useQueryString": true
    });


    req.end(function (res) {
        if (res.error) throw new Error(res.error);

        console.log(res.body.price);
        return res.body.price;
    });
};