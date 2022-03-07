import { useEffect, useState } from 'react';

import WalletList from '../../components/wallet/walletList';
import MainHeader from '../../components/mainHeader/mainHeader';
import classes from './home.module.css';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedWallet, setLoadedWallet] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const data = localStorage.getItem(key);
      const parsedData = JSON.parse(data);
      const walletContent = {
        token: parsedData.token,
        balance: parsedData.balance,
      };
      items.push(walletContent);
    }
    items.sort((a,b) => {
      return b.balance - a.balance;
    });
    setLoadedWallet(items);
    setIsLoading(false);
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
    </section>
  );
}

export default HomePage;
