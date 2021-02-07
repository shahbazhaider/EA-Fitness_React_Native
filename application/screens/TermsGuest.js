import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import { Container, Body, Footer, Header, Input, Item, Left, Text, Title, Right, View, Button, Toast, Label, Form} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from "react-native";
import AppPreLoader from '../components/AppPreLoader'; 
import Strings from '../utils/Strings';
import ConfigApp from '../utils/ConfigApp';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import HTML from 'react-native-render-html';

export default class TermsGuest extends Component {
	static navigationOptions = {
	headerShown: false
};

constructor(props) {

    super(props);

    this.state = {
      isLoading: true
    }

  }

  componentDidMount() {
    
       return fetch(ConfigApp.URL+'json/data_strings.php')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson[0]
           }, function() {
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }


	render() {

    const item = this.state.dataSource;

      if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }

		return (
      <Container style={{backgroundColor: '#fff'}}>
      <Header style={{backgroundColor: '#fff', borderBottomWidth: 0, shadowOpacity: 0, elevation: 0,}}>
      <Left style={{ flex: 1 }}>
            <Button transparent>
              <SimpleLineIcons name='arrow-left' style={{fontSize: 18}} onPress={() => this.props.navigation.goBack()} />
            </Button>
          </Left>
          <Body style={{ flex: 4,  justifyContent: 'center', alignItems: 'center'  }}>
            <Title style={{color: '#000000'}}>{Strings.ST82}</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
    <Body>

<ScrollView showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false}>

<View style={{padding: 20}}>

<HTML html={item.st_termsofservice} />    
<HTML html={item.st_privacypolicy} />      

</View>
</ScrollView>

      </Body>
    </Container>
			);
	}
}