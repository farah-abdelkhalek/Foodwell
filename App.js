import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {StackNavigator} from "@react-navigation/stack/src/navigators/createStackNavigator";
import {Loadingscreen} from "./screens/Loadingscreen";
import {View} from "react-native";


const App = () => {
    return (
        <NavigationContainer>
            <View>
                <StackNavigator
                    screenOptions={{
                        headerShown: false
                    }}/>
                <View>Loadingscreen</View>
            </View>
        </NavigationContainer>
    )
}

export default App;
