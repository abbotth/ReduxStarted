/**
 *
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator,
    Text,
    Image
} from 'react-native';

class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={ require('../../assets/img/ic_launcher.png') } style={styles.imgLaunch}/>
                <ActivityIndicator
                    animating
                    color={['#FFFFFF']}
                    style={[styles.centering, styles.gray]}
                    size="small"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C71162',
        flexDirection: 'column'
    },
    imgLaunch: {
        width: 80,
        height: 80,
        marginBottom: 5
    },
    title: {
        color: '#ffffff'
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        marginBottom: 30
    }
});

export default SplashScreen;
