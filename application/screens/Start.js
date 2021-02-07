import React, {Component} from 'react';
import {Image} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import {Body, Button, Text, View} from 'native-base';
import {NavigationActions} from 'react-navigation';
import Strings from '../utils/Strings';

var styles = require('../../assets/files/Styles');

export default class Start extends Component {
    static navigationOptions = {
        headerShown: false
    };

    login() {
        const navigateAction = NavigationActions.navigate({
            routeName: 'Login'
        });
        this.props.navigation.dispatch(navigateAction);
    }

    register() {

        const navigateAction = NavigationActions.navigate({
            routeName: 'Register'
        });
        this.props.navigation.dispatch(navigateAction);

    }

    render() {

        return (

            <BackgroundImage source={require('../../assets/images/bg.jpg')}>
                <Body>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../../assets/images/logo.png')} style={styles.logo_start}
                               resizeMode="contain"/>
                        <View style={{height: 30}}/>
                        <Button rounded block onPress={this.login.bind(this)} style={styles.button_start}
                                activeOpacity={1}>
                            <Text style={{
                                color: '#FFFFFF',
                                fontWeight: 'bold',
                                fontSize: 14
                            }}>{Strings.ST26.toUpperCase()}</Text>
                        </Button>
                        <Button rounded block onPress={this.register.bind(this)} style={styles.button_start}
                                activeOpacity={1}>
                            <Text style={{
                                color: '#FFFFFF',
                                fontWeight: 'bold',
                                fontSize: 14
                            }}>{Strings.ST27.toUpperCase()}</Text>
                        </Button>

                    </View>


                </Body>
            </BackgroundImage>

        );
    }
}