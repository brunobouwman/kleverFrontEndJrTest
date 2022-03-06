import classes from './walletTotal.module.css';

function TotalBalance(props) {
  let total = 0;
  props.balance.map((balanceAmount) => {
    total += balanceAmount.balance;
  });
  return (
    <div className={classes.totalAmount}>
      <span>{total}</span>
    </div>
  );
}

export default TotalBalance;
