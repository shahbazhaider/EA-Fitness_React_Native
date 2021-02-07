import React, {Component} from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class AppPreLoader extends Component {
    render() {
        return (
            <View style={[styles.preloader]}>
                <ActivityIndicator style={{height: 80}} size="large" color="#f39c12"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    preloader: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
        backgroundColor: '#FFFFFF',
    }
})
