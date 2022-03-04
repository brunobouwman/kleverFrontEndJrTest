import WalletItem from './walletItem';
import classes from './walletList.module.css';

function WalletList(props) {

    // if(!props.wallet) {
    //     return <div className={classes.emptyWallet}><h1>No Tokens</h1></div>
    // }
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
          balance={walletItem.balance} />
        ))}
        </ul>
      </div>
    </section>
  );
}

export default WalletList;