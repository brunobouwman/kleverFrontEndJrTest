import axios from 'axios';

import classes from './transactionList.module.css';
import TransactionItem from './transactionItem/transactionItem';

async function TransactionList() {
  let dataList;
  const transactions = [];

  const response = await axios.get(
    'https://api.testnet.klever.finance/v1.0/transaction/list'
  );
  try {
    dataList = response;
  } catch (err) {
    console.log(err);
  }
  for (let i = 0; i < 10; i++) {
    const singleTransactionHash = dataList.data.data.transactions[i].hash;
    const singleTransactionSender = dataList.data.data.transactions[i].sender;
    const singleTransactionResultCode =
      dataList.data.data.transactions[i].resultCode;
    const transactionsObj = {
      transNum: i,
      hash: singleTransactionHash,
      sender: singleTransactionSender,
      resCode: singleTransactionResultCode,
    };
    transactions.push(transactionsObj);
  }

  console.log(transactions[0].hash);
  return (
    <div className={classes.list}>
      <ul>
        {transactions.map((transac) => {
          <TransactionItem
            // transNum={transac.transNum}
            hash={transac.hash}
            sender={transac.sender}
            res={transac.resCode}
          />;
        })}
      </ul>
    </div>
  );
}

export default TransactionList;
