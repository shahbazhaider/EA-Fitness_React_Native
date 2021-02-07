import React, {Component} from 'react';
import {ActivityIndicator, Dimensions, Image, TouchableOpacity} from 'react-native';
import {Body, Button, Container, Form, Header, Input, Item, Left, Right, Text, Title, Toast, View} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Strings from '../utils/Strings';
import {Ionicons, SimpleLineIcons} from '@expo/vector-icons';
import {onResetPassword} from "../ApiCaller";

var styles = require('../../assets/files/Styles');
var width = Dimensions.get('window').width;

export default class ForgetPass extends Component {
    static navigationOptions = {
        headerShown: false
    };

    constructor() {
        super();
        ;
        this.state = {
            email: ''
        }
    }

    onResetPassword = async () => {
        const {email} = this.state;
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!emailRegex?.test(email)) {
            return Toast.show({text: `${Strings.ST108}`, position: 'bottom', buttonText: `${Strings.ST33}`})
        }

        //this.onToggleLoading()

        const formData = new FormData();
        formData.append('email', email);
       // const response = await onResetPassword(formData)
        //this.onToggleLoading()

    }

    onToggleLoading = () => {
        const {isLoading} = this.state
        this.setState({
            isLoading: !isLoading
        })
    }


    render() {
        const {isLoading} = this.state
        return (
            <Container style={{backgroundColor: '#fff'}}>
                <Header style={{backgroundColor: '#fff', borderBottomWidth: 0, shadowOpacity: 0, elevation: 0,}}>
                    <Left style={{flex: 1}}>
                        <Button transparent>
                            <SimpleLineIcons name='arrow-left' style={{fontSize: 18}}
                                             onPress={() => this.props.navigation.goBack()}/>
                        </Button>
                    </Left>
                    <Body style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                        <Title style={{color: '#000000'}}>{Strings.ST29}</Title>
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
                            <Image source={require('../../assets/images/icondark.png')} style={styles.logo_start}
                                   resizeMode="contain"/>

                            <Form ref="formId">

                                <Item rounded style={styles.inputLogin}>
                                    <Ionicons name="md-mail"
                                              style={{fontSize: 18, marginLeft: 18, marginRight: 5, color: '#a4a4a4'}}/>
                                    <Input onChangeText={email => this.setState({email})}
                                           placeholder={Strings.ST104}
                                           placeholderTextColor="#a4a4a4"
                                           style={{fontSize: 16, color: '#a4a4a4'}}
                                           autoCapitalize="none"/>
                                </Item>

                            </Form>

                            <Button rounded block onPress={this.onResetPassword} style={styles.button_auth}>
                                <Text>{Strings.ST28}</Text>
                            </Button>

                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.text_auth}
                                              activeOpacity={1}>
                                <Text style={styles.text_auth}>{Strings.ST35}</Text>
                            </TouchableOpacity>


                        </View>

                    </KeyboardAwareScrollView>
                    {isLoading && (<ActivityIndicator style={{height: 80}} size="large" color="#f39c12"/>)}

                </Body>
            </Container>
        );
    }
}