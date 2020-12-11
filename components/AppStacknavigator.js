import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import friendsScreen from '../screens/friendsScreen';
import quizScreen from '../screens/quizScreen';

export const AppStackNavigator = createStackNavigator({
    quiz:{
        screen:quizScreen,
        navigationOptions:{
            headerShown:false
        }
        
    },
    friends:{
        screen:friendsScreen,
        navigationOptions:{
            headerShown:false
        }

    },

    },
{
    initialRouteName:'quiz'
})