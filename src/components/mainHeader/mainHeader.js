import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import WaterMark from '../layout/waterMark/waterMark';

import classes from './mainHeader.module.css';
function MainHeader(props) {
  const history = useHistory();
  const [headerType, setHeaderType] = useState([]);

  function addTokenHandler() {
    history.replace('/add-token');
  }

  function returnHomeHandler() {
    history.replace('/');
  }

  useEffect(() => {
    if (props.type === 'Home') {
      setHeaderType(0);
    }
    if (props.type === 'Edit Token' || props.type === 'Add Token') {
      setHeaderType(1);
    }
  }, []);

  if (headerType === 0) {
    return (
      <section className={classes.mainHeader}>
        <WaterMark />
        <div>
          <button onClick={addTokenHandler}>Add Token</button>
        </div>
      </section>
    );
  } else {
    return (
      <section className={classes.altHeader}>
        <div className={classes.auxDiv}>
          <div>
            <WaterMark />
          </div>
          <div className={classes.buttonPlaceAux}></div>
        </div>
        <div className={classes.altActions}>
          <p>{props.type}</p>
          <button onClick={returnHomeHandler}>Back</button>
        </div>
      </section>
    );
  }
}

export default MainHeader;
