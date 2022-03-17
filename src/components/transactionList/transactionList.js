import classes from './transactionList.module.css';
import TransactionItem from './transactionItem/transactionItem';

function TransactionList(props) {
  const transactionList = [];
  for (let i = 0; i < 10; i++) {
    const transaction = {
      num: i,
      hash: props.transList[i].hash,
      sender: props.transList[i].sender,
      resCode: props.transList[i].resultCode,
    };
    transactionList.push(transaction);
  }
  return (
    <div className={classes.listDiv}>
      <ul className={classes.list}>
        {transactionList.map((transac) => (
          <TransactionItem
            transNum={transac.num}
            hash={transac.hash}
            sender={transac.sender}
            res={transac.resCode}
          />
         ))}
      </ul>
    </div>
  );
}

export default TransactionList;
