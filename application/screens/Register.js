import React, {Component} from 'react';
import {ActivityIndicator, Dimensions, Image, TouchableOpacity} from 'react-native';
import {Body, Button, Container, Form, Header, Input, Item, Left, Right, Text, Title, Toast, View} from 'native-base';
import {NavigationActions} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Strings from '../utils/Strings';
import {Ionicons, SimpleLineIcons} from '@expo/vector-icons';
import {onRegister} from "../ApiCaller";

var styles = require('../../assets/files/Styles');
var width = Dimensions.get('window').width;

export default class Register extends Component {
    static navigationOptions = {
        headerShown: false
    };

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            isLoading: false
        };

    }

    onValidateData = () => {
        const {name, email, password} = this.state;
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (String(name) === '') {
            return Toast.show({text: `${Strings.ST200}`, position: 'bottom', buttonText: `${Strings.ST33}`})
        }

        if (!emailRegex?.test(email)) {
            return Toast.show({text: `${Strings.ST108}`, position: 'bottom', buttonText: `${Strings.ST33}`})
        }

        if (password?.length < 6) {
            return Toast.show({text: `${Strings.ST109}`, position: 'bottom', buttonText: `${Strings.ST33}`});
        }

        return this.onRegister()
    }

    onRegister = async () => {
        const {name, email, password} = this.state;
        this.onToggleLoading()

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        const {message, status} = await onRegister(formData)

        this.onToggleLoading()
        if (String(status) === '200') {
            const navigateAction = NavigationActions.navigate({routeName: 'Login'});
            return this?.props?.navigation?.dispatch(navigateAction);
        }

        return Toast.show({text: String(message), position: 'bottom', buttonText: `${Strings.ST33}`});
    }

    onToggleLoading = () => {
        const {isLoading} = this.state
        this.setState({
            isLoading: !isLoading
        })
    }

    terms() {
        const navigateAction = NavigationActions.navigate({routeName: 'TermsGuest'});
        this?.props?.navigation?.dispatch(navigateAction);
    }

    render() {
        const {isLoading} = this.state
        return (
            <Container style={{backgroundColor: '#fff'}}>
                <Header style={{backgroundColor: '#fff', borderBottomWidth: 0, shadowOpacity: 0, elevation: 0,}}>
                    <Left style={{flex: 1}}>
                        <Button transparent>
                            <SimpleLineIcons
                                name='arrow-left' style={{fontSize: 18}}
                                onPress={() => this.props.navigation.goBack()}/>
                        </Button>
                    </Left>

                    <Body style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                        <Title style={{color: '#000000'}}>{Strings.ST27}</Title>
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
                                    <Ionicons name="md-person"
                                              style={{fontSize: 18, marginLeft: 18, marginRight: 5, color: '#a4a4a4'}}/>

                                    <Input onChangeText={(name) => this.setState({name})}
                                           placeholder={Strings.ST106}
                                           placeholderTextColor="#a4a4a4"
                                           style={{fontSize: 16, color: '#a4a4a4'}}/>
                                </Item>

                                <Item rounded style={styles.inputLogin}>
                                    <Ionicons name="md-mail"
                                              style={{fontSize: 18, marginLeft: 18, marginRight: 5, color: '#a4a4a4'}}/>

                                    <Input
                                        onChangeText={(email) => this.setState({email})}
                                        value={this.state.email}
                                        placeholder={Strings.ST104}
                                        placeholderTextColor="#a4a4a4"
                                        style={{fontSize: 16, color: '#a4a4a4'}}
                                        autoCapitalize="none"/>
                                </Item>


                                <Item rounded style={styles.inputLogin}>
                                    <Ionicons name="md-lock-closed"
                                              style={{fontSize: 18, marginLeft: 18, marginRight: 5, color: '#a4a4a4'}}/>
                                    <Input
                                        onChangeText={(password) => this.setState({password})}
                                        value={this.state.password}
                                        placeholder={Strings.ST105}
                                        placeholderTextColor="#a4a4a4" style={{fontSize: 16, color: '#a4a4a4'}}
                                        secureTextEntry={true}
                                        autoCapitalize="none"/>
                                </Item>
                            </Form>


                            <Button
                                rounded
                                block
                                onPress={this.onValidateData}
                                style={styles.button_auth}>
                                <Text>{Strings.ST28}</Text>
                            </Button>

                            <TouchableOpacity
                                onPress={this.terms.bind(this)}
                                style={styles.text_auth}
                                activeOpacity={1}>
                                <Text style={styles.text_auth}>{Strings.ST82}</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAwareScrollView>
                    {isLoading && (<ActivityIndicator style={{height: 80}} size="large" color="#f39c12"/>)}
                </Body>
            </Container>
        )
    }
}