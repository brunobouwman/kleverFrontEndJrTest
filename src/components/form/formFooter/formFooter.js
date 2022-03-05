import classes from './formFooter.module.css';

function FormFooter(props) {
  if (props.footerType === 'add') {
    return (
      <div className={classes.addFooterDiv}>
        <button className={classes.saveBtn} onClick={props.onAdd}>
          Save
        </button>
      </div>
    );
  } else
    return (
      <div className={classes.editFooterDiv}>
        <button className={classes.removeBtn} onClick={props.onRemove}>
          Remove
        </button>
        <button className={classes.saveBtn} onClick={props.onSave}>
          Save
        </button>
      </div>
    );
}

export default FormFooter;
