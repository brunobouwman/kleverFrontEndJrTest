import { useHistory } from 'react-router-dom'
// import { useContext } from 'react';

import editIcon from '../../svgImages/edit-icon.svg'
// import  EditContext  from '../../editContext/editItemContext';
import classes from './walletItem.module.css';

function WalletItem(props) {
  const history = useHistory();
  // const editContextObj = useContext(EditContext);

  console.log('walletItem', props.token, props.balance);

  // const [item, setItem] = useContext(EditContext);

  //   function editItemHandler() {
  //     editContextObj.editItem(props.token);
  //     history.replace('/edit-token');
  //   };

  function editTokenHandler() {
      history.replace('/edit-token');
  }

  return (
    <li>
      <div className={classes.item}>
        <div className={classes.iconAndToken}>
        <button onClick={editTokenHandler}><img src={editIcon} alt="edit"/></button>
          <p>{props.token}</p>
        </div>
        <p>{props.balance}</p>
      </div>
    </li>
  );
}

export default WalletItem;
