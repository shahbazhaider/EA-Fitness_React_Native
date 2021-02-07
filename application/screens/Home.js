import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {Dimensions, ImageBackground, ScrollView, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Body, Container, List, ListItem, Right, Text, Thumbnail} from 'native-base';

import Strings from '../utils/Strings';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Home extends Component {
    static navigationOptions = {
        title: `${Strings.ST0}`,
        headerLeft: () => <Ionicons name={'md-menu'} onPress={() => this.props.navigation.openDrawer()}
                                    style={styles.lightarrowbackicon}/>,
    };

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (

            <Container style={styles.background_general}>

                <ScrollView>

                    <View style={{flexDirection: 'column', backgroundColor: '#000000', height: height * 0.25}}>
                        <ImageBackground
                            source={require('../../assets/images/header.jpg')}
                            style={{flex: 1, width: null, height: null}}>
                        </ImageBackground>
                    </View>


                    <View style={{padding: 10, paddingTop: 10, backgroundColor: '#FFF'}}>
                        <List>
                            <ListItem style={styles.listitem_home} onPress={this.navigateToScreen('WorkoutsScreen')}>
                                <Thumbnail square size={80} source={require('../../assets/images/workouts.png')}
                                           style={{marginRight: 10}}/>
                                <Body>
                                    <Text>{Strings.ST1}</Text>
                                    <Text numberOfLines={1} note style={styles.note_home}>{Strings.ST60}</Text>
                                </Body>
                                <Right>
                                    <Ionicons name="ios-arrow-forward" style={styles.icon_home}/>
                                </Right>
                            </ListItem>

                            <ListItem style={styles.listitem_home} onPress={this.navigateToScreen('ExercisesScreen')}>
                                <Thumbnail square size={80} source={require('../../assets/images/exercises.png')}
                                           style={{marginRight: 10}}/>
                                <Body>
                                    <Text>{Strings.ST2}</Text>
                                    <Text numberOfLines={1} note style={styles.note_home}>{Strings.ST61}</Text>
                                </Body>
                                <Right>
                                    <Ionicons name="ios-arrow-forward" style={styles.icon_home}/>
                                </Right>
                            </ListItem>

                            {/*<ListItem style={styles.listitem_home} onPress={this.navigateToScreen('DietsScreen')}>*/}
                            {/*    <Thumbnail square size={80} source={require('../../assets/images/diets.png')}*/}
                            {/*               style={{marginRight: 10}}/>*/}
                            {/*    <Body>*/}
                            {/*        <Text>{Strings.ST3}</Text>*/}
                            {/*        <Text numberOfLines={1} note style={styles.note_home}>{Strings.ST62}</Text>*/}
                            {/*    </Body>*/}
                            {/*    <Right>*/}
                            {/*        <Ionicons name="ios-arrow-forward" style={styles.icon_home}/>*/}
                            {/*    </Right>*/}
                            {/*</ListItem>*/}

                            {/*<ListItem style={styles.listitem_home} onPress={this.navigateToScreen('PostsScreen')}>*/}
                            {/*    <Thumbnail square size={80} source={require('../../assets/images/blog.png')}*/}
                            {/*               style={{marginRight: 10}}/>*/}
                            {/*    <Body>*/}
                            {/*        <Text>{Strings.ST4}</Text>*/}
                            {/*        <Text numberOfLines={1} note style={styles.note_home}>{Strings.ST63}</Text>*/}
                            {/*    </Body>*/}
                            {/*    <Right>*/}
                            {/*        <Ionicons name="ios-arrow-forward" style={styles.icon_home}/>*/}
                            {/*    </Right>*/}
                            {/*</ListItem>*/}

                            {/*<ListItem style={styles.listitem_home} onPress={this.navigateToScreen('QuotesScreen')}>*/}
                            {/*    <Thumbnail square size={80} source={require('../../assets/images/quotes.png')}*/}
                            {/*               style={{marginRight: 10}}/>*/}
                            {/*    <Body>*/}
                            {/*        <Text>{Strings.ST5}</Text>*/}
                            {/*        <Text numberOfLines={1} note style={styles.note_home}>{Strings.ST64}</Text>*/}
                            {/*    </Body>*/}
                            {/*    <Right>*/}
                            {/*        <Ionicons name="ios-arrow-forward" style={styles.icon_home}/>*/}
                            {/*    </Right>*/}
                            {/*</ListItem>*/}


                        </List>
                    </View>


                </ScrollView>

            </Container>


        )
    }
}