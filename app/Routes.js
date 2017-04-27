/**
 *
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router, Scene} from 'react-native-router-flux';

import SplashScreen from './components/SplashScreen/SplashScreen';

const RouterWithRedux = connect()(Router);

class Routes extends Component {
    render() {
        return (
            <RouterWithRedux>
                <Scene
                    key="splashScreen"
                    component={SplashScreen}
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
