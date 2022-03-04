import classes from './backdrop.module.css';

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onRemoveBackdrop} />;
}

export default Backdrop;
