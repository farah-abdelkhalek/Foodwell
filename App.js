import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {Loadingscreen} from "./screens/Loadingscreen";
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";

const Stack = createStackNavigator ();

const App = () => {
    return (
        <NavigationContainer>
            <StackNavigator
                screenOptions={{
                    headerShown : false
                }}/>
            <View>Loadingscreen</View>
        </NavigationContainer>
    )
}

export default App