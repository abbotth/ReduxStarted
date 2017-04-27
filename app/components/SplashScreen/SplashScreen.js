/**
 *
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SplashScreen</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SplashScreen;
