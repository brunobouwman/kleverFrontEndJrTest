import logo from '../../svgImages/klever-logo.svg';

import classes from './layout.module.css';
import WaterMark from './waterMark/waterMark';

function Layout(props) {
  return <section className={classes.layout}>
        <section className={classes.header} >
            <img src={logo} className={classes.logo} alt="klever-logo" />
            {/* <WaterMark /> */}
            </section>
            <main>
                {props.children}
            </main>
      </section>;
}

export default Layout;
