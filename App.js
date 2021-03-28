import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Loadingscreen} from "./screens/Loadingscreen";


const AppStack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <AppStack.navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                <AppStack.Screen name ="Loadingscreen" component ={Loadingscreen} />
            </AppStack.navigator>
        </NavigationContainer>
    );
};

export default App;
