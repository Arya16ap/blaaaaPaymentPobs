import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu from './CustomSidebarMenu';
import HomeScreen from '../screens/homescreen';
import QuizScreen from '../screens/quizScreen';
import {AppStackNavigator} from './AppStacknavigator'


export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:HomeScreen
        
    },
    QuizScreen:{
        screen:AppStackNavigator
    }
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
})