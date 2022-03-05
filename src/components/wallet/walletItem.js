import { useHistory } from 'react-router-dom'
import { useContext } from 'react';

import editIcon from '../../svgImages/edit-icon.svg'
import classes from './walletItem.module.css';
import EditContext from '../../edit-context/editContext';

function WalletItem(props) {
  const history = useHistory();
  const editContextObj = useContext(EditContext);
  // const [item, setItem] = useContext(EditContext);
  // console.log('walletItem', props.token, props.balance);

    function editTokenHandler() {
      editContextObj.editItem(props.token);
      history.replace('/edit-token');
  }

  return (
    <li>
      <div className={classes.item}>
        <div className={classes.iconAndToken}>
        <button onClick={editTokenHandler}><img src={editIcon} alt="edit"/></button>
          <p>{props.token}</p>
        </div>
        <div className={classes.balance}>
        <span>{props.balance}</span>
        </div>
      </div>
    </li>
  );
}

export default WalletItem;
