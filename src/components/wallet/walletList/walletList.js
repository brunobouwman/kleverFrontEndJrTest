import WalletItem from '../walletItem/walletItem';
import classes from './walletList.module.css'

function WalletList(props) {
  return (
    <section className={classes.walletSection}>
      <div className={classes.walletHeader}>
        <p>Tokens</p>
        <p>Balance</p>
      </div>
      <div className={classes.walletContent}>
        <ul>
          {props.wallet.map((walletItem) => (
            <WalletItem
              key={props.token}
              token={walletItem.token}
              balance={walletItem.balance}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WalletList;
