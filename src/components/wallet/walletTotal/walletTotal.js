import classes from './walletTotal.module.css';

function WalletTotal(props) {
  const TotalBalance = props.total.reduce(
    (total, curValue) => total + parseInt(curValue.balance) * curValue.curPrice,
    0
  );

  return (
    <div className={classes.total}>
      <span>Total: </span>
      <span>{`$${TotalBalance.toFixed(2)}`}</span>
    </div>
  );
}

export default WalletTotal;
