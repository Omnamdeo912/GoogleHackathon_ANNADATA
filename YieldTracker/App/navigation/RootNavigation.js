import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../Auth/Landing';
// import SignIn from '../Auth/SignIn';
// import SignUp from '../Auth/SignUp';
import Dashboard from '../Screens/Dashboard';
// import Engaged from '../Screens/Engaged';
// import NewUser from '../Screens/NewUser';
import Login from '../Auth/Login';
import OTP from '../Auth/OTP';
import LandSize from '../Screens/landSize';
import DetailScreen from '../Screens/DetailScreen';
import ShowMore from '../Screens/ShowMore';
const stack=createStackNavigator()
export default class RootNavigation extends React.Component{
    render(){
        return(
            <stack.Navigator initialRouteName="Landing" screenOptions={{headerShown:false}}>
                <stack.Screen name="Landing" component={Landing}></stack.Screen>
                <stack.Screen name="Login" component={Login}></stack.Screen>
                {/* <stack.Screen name="SignIn" component={SignIn}></stack.Screen> */}
                <stack.Screen name="Dashboard" component={Dashboard}></stack.Screen>
                {/* <stack.Screen name="SignUp" component={SignUp}></stack.Screen>
                <stack.Screen name="Engaged" component={Engaged}></stack.Screen>
                <stack.Screen name="NewUser" component={NewUser}></stack.Screen> */}
                <stack.Screen name="OTP" component={OTP}></stack.Screen>
                <stack.Screen name="LandSize" component={LandSize}></stack.Screen>
                <stack.Screen name="DetailScreen" component={DetailScreen}></stack.Screen>
                <stack.Screen name="ShowMore" component={ShowMore}></stack.Screen>
            </stack.Navigator>
        )
    }
}