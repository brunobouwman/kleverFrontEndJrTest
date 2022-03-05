// import { type } from '@testing-library/user-event/dist/type';
import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import EditContext from '../../edit-context/editContext';
import classes from './form.module.css';
import FormFooter from './formFooter/formFooter';

function Form(props) {
  const history = useHistory();
  const tokenInputRef = useRef();
  const balanceInputRef = useRef();
  const contextObj = useContext(EditContext);

  function addTokenHandler() {
    const enteredToken = tokenInputRef.current.value.toUpperCase();
    const enteredBalance = balanceInputRef.current.value;
    if (
      enteredToken.length === 0 ||
      enteredToken.trim('') === '' ||
      enteredBalance.length === 0 ||
      enteredBalance.trim('') === ''
    ) {
      alert('All fields are required, please check your inputs!');
      return;
    }
    if (enteredToken.length !== 3) {
      alert('All Tokens must have 3 letters!');
      return;
    }
    const newTokenData = {
      token: enteredToken,
      balance: enteredBalance,
    };
    if (localStorage.getItem(newTokenData.token)) {
      alert(
        'A token with this name already exists in your wallet. Try another name!'
      );
      return;
    }
    localStorage.setItem(newTokenData.token, JSON.stringify(newTokenData));
    history.replace('/');
  }

  function removeTokenHandler() {
    props.onRemove();
  }

  function saveChangesHandler() {
    const editedToken = tokenInputRef.current.value.toUpperCase();
    const editedBalance = balanceInputRef.current.value;

    console.log(
      'newToken->',
      editedToken,
      'nameBefore->',
      contextObj.toBeEdited
    );
    if (
      editedToken.length === 0 ||
      editedToken.trim('') === '' ||
      editedBalance.length === 0 ||
      editedBalance.trim('') === ''
    ) {
      alert('All fields are required, please check your inputs!');
      return;
    }
    if (localStorage.getItem(editedToken)) {
      alert(
        'A token with this name already exists in your wallet. Try another name!'
      );
      return;
    }
    const newTokenData = {
      token: editedToken,
      balance: editedBalance,
    };
    localStorage.removeItem(contextObj.toBeEdited.token);
    localStorage.setItem(editedToken, JSON.stringify(newTokenData));
    history.replace('/');
  }
  return (
    <div className={classes.formContainer}>
      <form>
        <div className={classes.control}>
          <label htmlFor="token">Token</label>
          <input
            type="text"
            id="token"
            step={0.0001}
            defaultValue={
              props.type === 'add' ? '' : contextObj.toBeEdited.token
            }
            ref={tokenInputRef}
            maxLength={3}
            // autocapitalize='characters'
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="balance">Balance</label>
          <input
            type="number"
            id="balance"
            defaultValue={
              props.type === 'add' ? '' : contextObj.toBeEdited.balance
            }
            ref={balanceInputRef}
            required
          />
        </div>
      </form>
      <FormFooter
        footerType={props.type}
        onSave={saveChangesHandler}
        onRemove={removeTokenHandler}
        onAdd={addTokenHandler}
      />
    </div>
  );
}

export default Form;
