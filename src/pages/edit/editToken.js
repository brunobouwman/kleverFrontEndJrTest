import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Form from "../../components/form/form";
import Backdrop from "../../components/layout/backdrop/backdrop";
import Modal from "../../components/modal/modal";
import MainHeader from "../../components/mainHeader/mainHeader";
import classes from './editToken.module.css';
import EditContext from "../../edit-context/editContext";

function EditTokenPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const contextObj = useContext(EditContext);
    const history = useHistory();

    function showModalAndBackdropHandler() {
        setModalIsOpen(true)
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    function deleteTokenHandler() {
      console.log('storageBefore->', localStorage, 'contextItem->', contextObj.toBeEdited)
      localStorage.removeItem(contextObj.toBeEdited.token);
      history.replace('/');
      console.log('storageAfer->', localStorage, 'contextItem->', contextObj.toBeEdited);
      // contextObj.toggleState(null);
      console.log('contextItem->', contextObj.toBeEdited);
    };


  return (
    <div>
      <MainHeader type="Edit Token"/>
      <Form type={"edit"} onRemove={showModalAndBackdropHandler}/>
      <section className={classes.modal} >
          {modalIsOpen && <Backdrop onRemoveBackdrop={closeModalHandler} />}
          {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={deleteTokenHandler} />}
          </section>
    </div>
  );
}

export default EditTokenPage;
