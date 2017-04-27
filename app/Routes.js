/**
 *
 */
import React, {Component} from 'react';
import {} from 'react-native';
import {connect} from 'react-redux';
import {Router, Scene} from 'react-native-router-flux';

import SplashScreen from './components/SplashScreen/SplashScreen';

const ReduxRouter = connect()(Router);
class Routes extends Component {
    render() {
        return (
            <ReduxRouter>
                <Scene
                    key="splashScreen"
                    component={SplashScreen}
                    initial
                    type="replace"
                    hideNavBar
                />
            </ReduxRouter>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Routes;
