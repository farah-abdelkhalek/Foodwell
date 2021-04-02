import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
    AddDishScreen,
    Categories,
    FoodcoinsScreen,
    FoodMapScreen,
    HomeScreen,
    MenuScreen,
    SigninScreen,
    SignupScreen,
    Loadingscreen,
    OrderDeliveryScreen,
    PaymentScreen,
    ProfileScreen,
} from "./screens";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

// return <SafeAreaView>{renderHeader()}</SafeAreaView>; use <Screen></Screen> component
// index.js only ever used for screens

export default function App() {
    return (
        <NavigationContainer>
            <Tabs.Navigator
                screenOptions={
                    {
                        // headerShown: false,
                    }
                }
            >
                <Tabs.Screen name="Loading" component={Loadingscreen} />
                <Tabs.Screen name="Signin" component={SigninScreen} />
                <Tabs.Screen name="SignUp" component={SignupScreen} />
                <Tabs.Screen name="addDish" component={AddDishScreen} />
                <Tabs.Screen name="categories" component={Categories} />
                <Tabs.Screen name="foodCoins" component={FoodcoinsScreen} />
                <Tabs.Screen name="foodMap" component={FoodMapScreen} />
                <Tabs.Screen name="home" component={HomeScreen} />
                <Tabs.Screen name="menu" component={MenuScreen} />
                <Tabs.Screen name="orderDelivery" component={OrderDeliveryScreen} />
                <Tabs.Screen name="payment" component={PaymentScreen} />
                <Tabs.Screen name="profile" component={ProfileScreen} />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}
