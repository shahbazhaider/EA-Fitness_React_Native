import React, {Component} from 'react';
import AppPreLoader from '../components/AppPreLoader';
import {Dimensions, FlatList, ImageBackground, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import {Container, Text} from 'native-base';

import ConfigApp from '../utils/ConfigApp';
import Strings from '../utils/Strings';
import {APIS} from "../ApiCaller/APIs";

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class WGoals extends Component {
    static navigationOptions = ({navigation}) => ({
        title: `${Strings.ST10}`,
        headerLeft: () => <Ionicons name={'md-arrow-back'} onPress={() => {
            navigation.goBack()
        }} style={styles.lightarrowbackicon}/>,
        headerRight: () => <Ionicons name={'md-search'} onPress={() => navigation.navigate('WorkoutSearchScreen')}
                                     style={styles.lightarrowbackiconRight}/>

    });

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: []
        };
    }

    componentDidMount() {
        fetch(ConfigApp.URL + APIS.GOAL_API)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    isLoading: false,
                    dataSource: responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    ListWorkoutsByGoal = (goal_id, goal_title) => {
        this.props.navigation.navigate('WorkoutsByGoalScreen', {IdGoal: goal_id, TitleGoal: goal_title});
    }

    render() {
        if (this.state.isLoading) {
            return (
                <AppPreLoader/>
            );
        }

        return (

            <Container style={styles.background_general}>

                <FlatList
                    data={this.state.dataSource}
                    refreshing="false"
                    renderItem={({item}) =>
                        <TouchableOpacity onPress={this.ListWorkoutsByGoal.bind(this, item.goal_id, item.goal_title)}
                                          activeOpacity={1}>
                            <ImageBackground source={{uri: ConfigApp.URL + 'images/' + item.goal_image}}
                                             style={styles.background_categories}>
                                <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)']}
                                                style={styles.gradient_categories}>
                                    <View style={styles.title_categories_border}></View>
                                    <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)']}
                                                    style={styles.title_categories_background}>
                                        <Text style={styles.title_categories}>{item.goal_title}</Text>
                                    </LinearGradient>
                                </LinearGradient>
                            </ImageBackground>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item, index) => index.toString()}

                />

            </Container>
        );
    }
}
