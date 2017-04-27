/**
 *
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router, Scene} from 'react-native-router-flux';

import Splash from './components/SplashScreen/SplashScreen';

const RouterWithRedux = connect()(Router);

class Routes extends Component {
    render() {
        return (
            <RouterWithRedux>
                <Scene
                    key="splash"
                    component={Splash}
                    initial
                    type="replace"
                    hideNavBar
                    sceneStyle={styles.sceneStyle}
                />
            </RouterWithRedux>
        );
    }
}

const styles = {
    sceneStyle: {}
};


export default Routes;
