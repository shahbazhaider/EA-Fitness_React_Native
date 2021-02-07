import React from 'react';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {Root} from "native-base";
import {LogBox, StatusBar} from "react-native";
import AppPreLoader from "./application/components/AppPreLoader";


import GuestNavigation from './application/navigations/Guest';
import LoggedNavigation from './application/navigations/Logged';

LogBox.ignoreAllLogs();

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogged: false,
            loaded: true,
            isReady: false,
        }
    }

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
            require('./assets/images/bg.jpg'),
            require('./assets/images/goals.jpg'),
            require('./assets/images/levels.jpg'),
            require('./assets/images/header.jpg'),
            require('./assets/images/bodyparts.jpg'),
            require('./assets/images/equipments.jpg'),
            require('./assets/images/logo.png'),
            require('./assets/images/logo_dark.png'),
            require('./assets/images/workouts.png'),
            require('./assets/images/exercises.png'),
            require('./assets/images/calculator.png'),
            require('./assets/images/diets.png'),
            require('./assets/images/store.png'),
            require('./assets/images/chrono.png'),
            require('./assets/images/sets.png'),
            require('./assets/images/reps.png'),
            require('./assets/images/star.png'),
            require('./assets/images/avatar.png'),
            require('./assets/images/bookmarked.png'),
            require('./assets/images/emptylist.png'),
            require('./assets/images/avatar.jpg'),
            require('./assets/images/restday.png'),
            require('./assets/images/blog.png'),
            require('./assets/images/quotes.png'),
            require('./assets/images/checked.png'),
            require('./assets/images/nointernet.png'),
            require('./assets/images/empty-star.png'),
            require('./assets/images/half-star.png')
        ]);

        await Promise.all([...imageAssets]);
    }

    async componentDidMount() {
        LogBox.ignoreAllLogs();

        await Font.loadAsync({
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            anticon: require('react-native-vector-icons/Fonts/AntDesign.ttf'),
            'AntDesign': require('react-native-vector-icons/Fonts/AntDesign.ttf'),
            'Entypo': require('react-native-vector-icons/Fonts/Entypo.ttf'),
            'FontAwesome': require('react-native-vector-icons/Fonts/FontAwesome.ttf'),
            'Ionicons': require('react-native-vector-icons/Fonts/Ionicons.ttf'),
            'MaterialCommunityIcons': require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
            'SimpleLineIcons': require('react-native-vector-icons/Fonts/SimpleLineIcons.ttf'),
            'FontAwesome': require('react-native-vector-icons/Fonts/FontAwesome.ttf')
        });

        //
        //     this.setState({
        //         isLogged: true,
        //         loaded: true
        //     });
        // } else {
        // this.setState({
        //                   isLogged: false,
        //                   loaded: true
        //               });

    }

    render() {
        const {isLogged, loaded, isReady} = this.state;

        // if (!this.state.isReady) {
        //     return (
        //         <AppLoading
        //             startAsync={this._loadAssetsAsync}
        //             onFinish={() => this.setState({isReady: true})}
        //             onError={console.warn}
        //         />
        //     );
        // }
        //
        //
        // if (!loaded) {
        //     return (
        //         <AppPreLoader/>
        //     );
        // }

        if (true) {
            return (
                <Root>
                    <StatusBar barStyle="light-content" backgroundColor="#ce8512"/>
                    <LoggedNavigation/>
                </Root>
            );
        }
        // return (
        //     <Root>
        //         <StatusBar hidden/>
        //         <GuestNavigation/>
        //     </Root>
        // );

    }
}


