import React, {Component} from 'react';
import {ActivityIndicator, AsyncStorage, Dimensions, Image, StatusBar, TouchableOpacity} from 'react-native';
import {
    Body,
    Button,
    Container,
    Form,
    Header,
    Input,
    Item,
    Left,
    Right,
    Root,
    Text,
    Title,
    Toast,
    View
} from 'native-base';
import {NavigationActions} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Ionicons, SimpleLineIcons} from '@expo/vector-icons';

import Strings from '../utils/Strings';
import {onLogin} from "../ApiCaller";
import LoggedNavigation from "../navigations/Logged";


var styles = require('../../assets/files/Styles');

var width = Dimensions.get('window').width;

export default class Login extends Component {
    static navigationOptions = {
        headerShown: false
    };

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            isLoading: false,
            isLogged: false,
        }
    }


    onValidateData = () => {
        const {email, password} = this.state;
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!emailRegex?.test(email)) {
            return Toast.show({text: `${Strings.ST108}`, position: 'bottom', buttonText: `${Strings.ST33}`})
        }

        if (password?.length < 6) {
            return Toast.show({text: `${Strings.ST109}`, position: 'bottom', buttonText: `${Strings.ST33}`});
        }

        return this.onLogin()
    }

    onLogin = async () => {
        const {email, password} = this.state;
        this.onToggleLoading()

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        const {records = {}} = await onLogin(formData)
        const {user_id} = records || {}
        this.onToggleLoading()


        if (user_id) {
            await AsyncStorage.setItem('@USER_ID', user_id)
            this.setState({
                isLogged: true
            })

        } else {
            alert("invalid user")
        }
    }

    forgetpass() {
        const navigateAction = NavigationActions.navigate({routeName: 'ForgetPass'});
        this?.props?.navigation?.dispatch(navigateAction);
    }

    onToggleLoading = () => {
        const {isLoading} = this.state
        this.setState({
            isLoading: !isLoading
        })
    }

    render() {
        const {isLoading, isLogged} = this.state

        if (isLogged) {
            return (
                <Root>
                    <StatusBar barStyle="light-content" backgroundColor="#ce8512"/>
                    <LoggedNavigation/>
                </Root>
            );
        }

        return (
            <Container style={{backgroundColor: '#fff'}}>
                <Header
                    style={{backgroundColor: '#fff', borderBottomWidth: 0, shadowOpacity: 0, elevation: 0,}}>

                    <Left style={{flex: 1}}>
                        <Button transparent>
                            <SimpleLineIcons
                                name='arrow-left' style={{fontSize: 18}}
                                onPress={() => this.props.navigation.goBack()}/>
                        </Button>
                    </Left>

                    <Body style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                        <Title style={{color: '#000000'}}>{Strings.ST26}</Title>
                    </Body>
                    <Right style={{flex: 1}}/>
                </Header>


                <Body>
                    <KeyboardAwareScrollView>
                        <View style={{
                            flex: 0.8,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 20,
                            marginTop: 30
                        }}>
                            <Image
                                source={require('../../assets/images/icondark.png')}
                                style={styles.logo_start}
                                resizeMode="contain"/>

                            <Form ref="formId">

                                <Item rounded style={styles.inputLogin}>
                                    <Ionicons name="md-mail"
                                              style={{fontSize: 18, marginLeft: 18, marginRight: 5, color: '#a4a4a4'}}/>
                                    <Input
                                        onChangeText={email => this.setState({email})}
                                        placeholder={Strings.ST104} placeholderTextColor="#a4a4a4"
                                        style={{fontSize: 16, color: '#a4a4a4'}}
                                        autoCapitalize="none"/>
                                </Item>

                                <Item rounded style={styles.inputLogin}>
                                    <Ionicons name="md-lock-closed"
                                              style={{fontSize: 18, marginLeft: 18, marginRight: 5, color: '#a4a4a4'}}/>
                                    <Input
                                        onChangeText={password => this.setState({password})}
                                        placeholder={Strings.ST105}
                                        placeholderTextColor="#a4a4a4"
                                        style={{fontSize: 16, color: '#a4a4a4'}}
                                        secureTextEntry={true}
                                        autoCapitalize="none"/>
                                </Item>
                            </Form>

                            <Button rounded block onPress={this.onValidateData} style={styles.button_auth}>
                                <Text>{Strings.ST28}</Text>
                            </Button>

                            <TouchableOpacity
                                onPress={this.forgetpass.bind(this)}
                                style={styles.text_auth} activeOpacity={1}>
                                <Text style={styles.text_auth}>{Strings.ST29}</Text>
                            </TouchableOpacity>
                        </View>

                        {isLoading && (<ActivityIndicator style={{height: 80}} size="large" color="#f39c12"/>)}

                    </KeyboardAwareScrollView>
                </Body>
            </Container>

        )
    }
}