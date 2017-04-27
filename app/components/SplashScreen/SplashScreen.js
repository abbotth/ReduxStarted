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

class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={ require('../../assets/img/ic_laucher.png') } style={styles.imgLaunch}/>
                <ActivityIndicator
                    animating
                    color="#eeeeee"
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
            backgroundColor: '#07888e',
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
        }
    })
;

export default SplashScreen;
