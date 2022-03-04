import { useState, useContext } from "react";

import Form from "../../components/form/form";
import Backdrop from "../../components/layout/backdrop/backdrop";
import Modal from "../../components/modal/modal";
import MainHeader from "../../components/mainHeader/mainHeader";
import classes from './editToken.module.css';

function EditTokenPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function showModalAndBackdropHandler() {
        setModalIsOpen(true)
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    function deleteTokenHandler() {};


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
