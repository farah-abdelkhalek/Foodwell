import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Loadingscreen from "./screens/Loadingscreen";


const Stack = createStackNavigator();

export default function App  ()  {
    return (
        <NavigationContainer>
            <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                <Stack.Screen name ="Loadingscreen" component ={Loadingscreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

