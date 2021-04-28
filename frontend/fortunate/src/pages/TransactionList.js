import React, {useState, useEffect} from 'react'
import Transaction from './Transaction'
import axios from 'axios'

function TransactionList() {
    const [list, setList] = useState([]);

    const populateTodo = () => {
        let newList = 
        setList(newList);
    }

    var v = [{price : 0, quantity : 100, symbol: 'AAPL', type: 'buy', id:0}]
    axios.defaults.headers.common[
        "Authorization"
    ] = localStorage.getItem('FBIdToken');
    
    const tlist = () => {
        axios.get('/transactions').then(res => {
            let transactions = [];
            let resdata = res.data;
            //console.log(res.data);
            Object.entries(resdata).forEach(([key, value]) => {
                value.id = key;
                //console.log(value);
                transactions.push(value);
            });
            setList(transactions);
        }).catch(err => {
            console.error(err); 
        })
    }
    useEffect(() => {
        tlist();
    }, []);

    return (
        <div>
            <Transaction transactions={list}/>
        </div>
    )
}

export default TransactionList
