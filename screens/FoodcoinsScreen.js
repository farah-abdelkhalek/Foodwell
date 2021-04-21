import React from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";

import {COLORS, FONTS, images, SIZES} from "../components";
import Screen from "../components/Screen";

export default function FoodcoinsScreen() {
    function renderHeader() {
        return (
            <Screen style={{ flexDirection: "row", height: 50 }}>
                <TouchableOpacity
                    style={{ width: 50, paddingLeft: SIZES.padding * 2, justifyContent: "center" }}
                >
                    <Image
                        source={images.leftarrow}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <View
                        style={{
                            width: "70%",
                            height: "100%",
                            backgroundColor: COLORS.white,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: SIZES.radius,
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>Foodcoins</Text>
                    </View>
                </View>
            </Screen>
        );
    }

    return <SafeAreaView>{renderHeader()}</SafeAreaView>;
    return (
        <View>
            style={styles.container}
            <Image
                source={images.foodcoingreen}
                resizeMode="contain"
                style={{
                    width: 30,
                    height: 30,
                }}
            />
        </View>
    );
}
