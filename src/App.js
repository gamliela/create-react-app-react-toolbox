import React, {Component} from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Button } from 'react-toolbox/lib/button';

class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <AppBar>That's app bar</AppBar>
                <Button label="Hello World!" />
                <div className={styles.appHeader}>
                    <img src={logo} className={styles.appLogo} alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className={styles.appIntro}>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
