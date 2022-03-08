import classes from './walletTotal.module.css';

function WalletTotal(props) {
  const TotalBalance = props.total.reduce(
    (total, curValue) => total + (parseInt(curValue.balance)*curValue.curPrice),
    0
  );

  // Assumindo um valor único por token de 3$
  const totalBalanceinDollars = TotalBalance * 3;

  return (
    <div className={classes.total}>
      <span>Total: </span>
      <span>{`$${totalBalanceinDollars.toFixed(2)}`}</span>
    </div>
  );
}

export default WalletTotal;
