import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {Dimensions, ImageBackground} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Ionicons} from '@expo/vector-icons';
import {Grid, Row} from 'react-native-easy-grid';
import {Container, Text} from 'native-base';
import Strings from '../utils/Strings';


var styles = require('../../assets/files/Styles');

export default class Workouts extends Component {
    static navigationOptions = ({navigation}) => ({
        title: `${Strings.ST1}`,
        headerLeft: () => <Ionicons name={'md-arrow-back'} onPress={() => {
            navigation.goBack()
        }} style={styles.lightarrowbackicon}/>,
        headerRight: () => <Ionicons name={'md-search'} onPress={() => navigation.navigate('WorkoutSearchScreen')}
                                     style={styles.lightarrowbackiconRight}/>
    });

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {

        return (

            <Container style={styles.background_general}>
                <Grid>

                    <Row onPress={this.navigateToScreen('WGoalsScreen')} activeOpacity={1}>
                        <ImageBackground source={require('../../assets/images/goals.jpg')} style={styles.card_general}>
                            <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.9)']}
                                            style={styles.gradient_general}>
                                <Text style={styles.title_general}>{Strings.ST10}</Text>
                                <Text style={styles.subtitle_general}>{Strings.ST12}</Text>
                            </LinearGradient>
                        </ImageBackground>
                    </Row>

                    <Row onPress={this.navigateToScreen('WLevelsScreen')} activeOpacity={1}>

                        <ImageBackground source={require('../../assets/images/levels.jpg')} style={styles.card_general}>
                            <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.9)']}
                                            style={styles.gradient_general}>
                                <Text style={styles.title_general}>{Strings.ST11}</Text>
                                <Text style={styles.subtitle_general}>{Strings.ST13}</Text>
                            </LinearGradient>
                        </ImageBackground>
                    </Row>

                </Grid>
            </Container>

        );
    }
}
