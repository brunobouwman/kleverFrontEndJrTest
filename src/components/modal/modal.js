import classes from './modal.module.css';

function Modal(props) {
  return (
    <div className={classes.modal}>
      <p>Are you Sure?</p>
      <div className={classes.modalActions}>
        <button className={classes.cancelBtn} onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.confirmBtn} onClick={props.onConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Modal;
