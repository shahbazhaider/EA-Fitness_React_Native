import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {Dimensions, Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {Body, ListItem, Right, Text} from 'native-base';
import Strings from '../utils/Strings';
import {SimpleLineIcons} from '@expo/vector-icons';

var {height, width} = Dimensions.get('window');
var styles = require('../../assets/files/Styles');


class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
        });
        this.props.navigation.dispatch(navigateAction);
    }

    onLogout = () => {

    }

    render() {
        return (
            <View style={styles.container_menu}>
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FFF',
                    height: height * 0.30,
                    marginTop: 30,
                    padding: 30
                }}>
                    <Image
                        source={require('../../assets/images/logo_dark.png')}
                        style={{flex: 1, width: 120, height: 120}}
                        resizeMode='contain'/>
                </View>

                <ScrollView>

                    <ListItem style={styles.item_menu} onPress={this.navigateToScreen('WorkoutsScreen')}>
                        <Body>
                            <Text style={styles.text_menu}>{Strings.ST1}</Text>
                        </Body>
                        <Right>
                            <SimpleLineIcons name="arrow-right" style={styles.icon_menu}/>
                        </Right>
                    </ListItem>

                    <ListItem style={styles.item_menu} onPress={this.navigateToScreen('ExercisesScreen')}>
                        <Body>
                            <Text style={styles.text_menu}>{Strings.ST2}</Text>
                        </Body>
                        <Right>
                            <SimpleLineIcons name="arrow-right" style={styles.icon_menu}/>
                        </Right>
                    </ListItem>

                    {/*<ListItem style={styles.item_menu} onPress={this.navigateToScreen('DietsScreen')}>*/}
                    {/*    <Body>*/}
                    {/*        <Text style={styles.text_menu}>{Strings.ST3}</Text>*/}
                    {/*    </Body>*/}
                    {/*    <Right>*/}
                    {/*        <SimpleLineIcons name="arrow-right" style={styles.icon_menu}/>*/}
                    {/*    </Right>*/}
                    {/*</ListItem>*/}

                    {/*<ListItem style={styles.item_menu} onPress={this.navigateToScreen('PostsScreen')}>*/}
                    {/*    <Body>*/}
                    {/*        <Text style={styles.text_menu}>{Strings.ST4}</Text>*/}
                    {/*    </Body>*/}
                    {/*    <Right>*/}
                    {/*        <SimpleLineIcons name="arrow-right" style={styles.icon_menu}/>*/}
                    {/*    </Right>*/}
                    {/*</ListItem>*/}

                    {/*<ListItem style={styles.item_menu} onPress={this.navigateToScreen('QuotesScreen')}>*/}
                    {/*    <Body>*/}
                    {/*        <Text style={styles.text_menu}>{Strings.ST5}</Text>*/}
                    {/*    </Body>*/}
                    {/*    <Right>*/}
                    {/*        <SimpleLineIcons name="arrow-right" style={styles.icon_menu}/>*/}
                    {/*    </Right>*/}
                    {/*</ListItem>*/}

                    <ListItem style={styles.item_menu}
                              // onPress={this.navigateToScreen('ProfileScreen')}

                    >
                        <Body>
                            <Text style={styles.text_menu}>{Strings.ST6}</Text>
                        </Body>
                        <Right>
                            <SimpleLineIcons name="arrow-right" style={styles.icon_menu}/>
                        </Right>
                    </ListItem>


                    <ListItem style={styles.item_menu} onPress={this.navigateToScreen('SettingsScreen')}>
                        <Body>
                            <Text style={styles.text_menu}>{Strings.ST7}</Text>
                        </Body>
                        <Right>
                            <SimpleLineIcons name="arrow-right" style={styles.icon_menu}/>
                        </Right>
                    </ListItem>

                </ScrollView>
                <View style={styles.footer_menu}>
                    <TouchableOpacity onPress={this.onLogout}
                    >
                        <Text>{Strings.ST8}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;