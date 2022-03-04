import shootingStar from '../../svgImages/shooting-star.svg';

import classes from './waterMark.module.css';

function WaterMark() {
    return (
        <div className={classes.waterMark} >
        <img src={shootingStar} alt="shooting-start" />
        <h2>Wish Wallet</h2>
        </div>
    );
}

export default WaterMark;