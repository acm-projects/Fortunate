let db_schema =
{
    users :
    {
        "{username}" :
        {
            username : "",
            userID : "",
            first_name : "",
            last_name : "",
            email : "",
            createdAt : ""

        }

        //... usernames
    },

    userdata : 
    {
        "{username}" : 
        {
            portfolio : 
            {
                cash : 69420,
                securities: 
                {
                    GME : 99999,
                    TSLA : 1234,

                    //... security symbols
                }
            },
            transactions : 
            {
                "{transactionid}" : 
                {
                    symbol : "GME",
                    type : "buy",
                    quantity : 99999,
                    price : 1
                },

                //... transaction IDs
            },
            endofday :
            {
                "[timestamp]" : 
                {
                    start : 12345,
                    end   : 123456
                }

                //... timestamps
            }
        }

        //... usernames
    },

    tickers :
    {
        "supportedTickers" : 
        {
            "s&p500" : [
                "{symbol}",
                // ...
            ]
        },
        "{symbol}" :
        {
            dataGranularity : "1m",   // Could have values of [1m, 5m, 15m, 1d, 1wk, 1mo]
            range : "1d",    // Could have values of [1d, 5d, 3mo, 6mo, 1y, 5y, 10y, ytd, max]
            timestamp : [/* timestamps */],  // relate to indicators by the index
            indicators :
            {
                open : [/* prices */],
                close : [/* prices */],
                high : [/* prices */],
                low : [/* prices */],
                volume : [/* volumes */]
            }
        }

        //... symbols
    }
}