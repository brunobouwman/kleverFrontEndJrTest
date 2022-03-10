import { useEffect, useState } from 'react';

import WalletList from '../../components/wallet/walletList/walletList';
import MainHeader from '../../components/mainHeader/mainHeader';
import classes from './home.module.css';
import TransactionList from '../../components/transactionList/transactionList';
import { fetchList } from '../../utilities/fetchList';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedWallet, setLoadedWallet] = useState([]);
  const [loadedList, setLoadedList] = useState([]);
  const URL = 'https://api.testnet.klever.finance/v1.0/transaction/list';

  useEffect(() => {
    setIsLoading(true);

    fetchList(URL)
      .then((response) => setLoadedList(response))
      .then(setIsLoading(false));

    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const data = localStorage.getItem(key);
      const parsedData = JSON.parse(data);
      const walletContent = {
        token: parsedData.token,
        balance: parsedData.balance,
        curPrice: Math.random(),
      };
      items.push(walletContent);
    }
    items.sort((a, b) => {
      return b.balance - a.balance;
    });
    setLoadedWallet(items);
  }, []);

  if (isLoading) {
    return (
      <section className={classes.homePageSection}>
        <div className={classes.homePageDiv}>
          <MainHeader type={'Home'} />
        </div>
        <section className={classes.loadingPage}>
          <div className={classes.skChase}>
            <div className={classes.skChaseDot}></div>
            <div className={classes.skChaseDot}></div>
            <div className={classes.skChaseDot}></div>
            <div className={classes.skChaseDot}></div>
            <div className={classes.skChaseDot}></div>
            <div className={classes.skChaseDot}></div>
          </div>
        </section>
      </section>
    );
  }
  return (
    <section className={classes.homePageSection}>
      <div className={classes.homePageDiv}>
        <MainHeader type={'Home'} />
      </div>
      <div className={classes.walletContent}>
        <WalletList wallet={loadedWallet} />
      </div>
      <div className={classes.walletList}>
        <TransactionList transList={loadedList} />
      </div>
    </section>
  );
}

export default HomePage;
