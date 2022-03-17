import classes from './transactionItem.module.css';

function TransactionItem(props) {
  return (
    <section>
      <li>
        <div className={classes.transactionItem}>
          <span>{props.transNum + 1} -</span>
          <span>{props.hash}</span>
          <span>{props.sender}</span>
          <span>{props.res}</span>
        </div>
      </li>
    </section>
  );
}
export default TransactionItem;
