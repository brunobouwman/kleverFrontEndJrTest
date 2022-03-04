// import { type } from '@testing-library/user-event/dist/type';
import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import EditContext from '../editContext/editItemContext';
import classes from './form.module.css';
import FormFooter from './formFooter/formFooter';

function Form(props) {
  const history = useHistory();
  const tokenInputRef = useRef();
  const balanceInputRef = useRef();
//   const contextObj = useContext(EditContext);

  function addTokenHandler() {
    const enteredToken = tokenInputRef.current.value;
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
    const newTokenData = {
      token: enteredToken,
      balance: enteredBalance,
    };
    // console.log(newTokenData);
    localStorage.setItem(newTokenData.token, JSON.stringify(newTokenData));
    history.replace('/')
  }

  function removeTokenHandler() {
      props.onRemove();
  };

  function saveChangesHandler() {
    const editedToken = tokenInputRef.current.value;
    const editedBalance = balanceInputRef.current.value;
    // console.log(
    //   'edite->',
    //   editedToken,
    //   'state->',
    //   contextObj.itemToBeEdited.token
    // );

    // if((editedToken) && (localStorage.key(contextObj.itemToBeEdited.token))) {
    //   alert('A token with this name already exists in your walelt. Please try another one!');
    //   return;
    // }

    if (
      editedToken.length === 0 ||
      editedToken.trim('') === '' ||
      editedBalance.length === 0 ||
      editedBalance.trim('') === ''
    ) {
      alert('All fields are required, please check your inputs!');
      return;
    }
    const newTokenData = {
      token: editedToken,
      balance: editedBalance,
    };

    props.onEditToken(newTokenData);
    history.replace('/');
  }

  // const tokenHandler = contextObj.itemToBeEdited.token;

  // console.log(typeof(tokenHandler));
  // const tokenInputHandler = contextObj.itemToBeEdited.token.toString();
  // console.log(tokenInputHandler);

  return (
    <div className={classes.formContainer}>

      <form>
        <div className={classes.control}>
          <label htmlFor="token">Token</label>
          <input
            type="text"
            id="token"
            defaultValue={ ''
            //   props.formType === 'add' ? '' : contextObj.itemToBeEdited.token
            }
            ref={tokenInputRef}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="balance">Balance</label>
          <input
            type="number"
            id="balance"
            defaultValue={''
            //   props.formType === 'add' ? '' : contextObj.itemToBeEdited.balance
            }
            ref={balanceInputRef}
            required
          />
        </div>
      </form>
      <FormFooter footerType={props.type} onSave={saveChangesHandler} onRemove={removeTokenHandler} onAdd={addTokenHandler} />
      {/* {props.footerype === 'edit' ? (
        <WalletFooter
          footerType={props.footerType}
          onRemove={props.onRemove}
          onSave={saveChanges}
        />
      ) : (
        <WalletFooter
          footerType={props.footerType}
          formType={props.footerType}
          onAddToken={formSubmitHandler}
        />
      )} */}
    </div>
  );
}

export default Form;
