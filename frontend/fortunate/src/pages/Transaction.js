import React from 'react'

function Transaction({transactions}) {
    return transactions.map((transaction, index) => 
        <div key={index}>
            <div key={transaction.id} className="transaction" style={{color:"gainsboro", font:"Roboto"}}>
                {(transaction.type === 'buy') ? 'Bought ': 'Sold '} <b style={{color:"rgba(255, 215, 0, 1)"}}>{('' + transaction.quantity + ' ')}</b> shares of <b style={{color:"rgba(255, 215, 0, 1)"}}>{transaction.symbol}</b> at ${transaction.price}
            </div>
        </div>
    )
}

export default Transaction
