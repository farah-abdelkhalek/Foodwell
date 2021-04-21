import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS, FONTS, images, SIZES } from "../components";
import Screen from "../components/Screen";

export default function HomeScreen() {
    return (
        <Screen style={{ flexDirection: "row", height: 50 }}>
            <TouchableOpacity
                style={{ width: 50, paddingLeft: SIZES.padding * 2, justifyContent: "center" }}
            >
                <Image
                    source={images.menu}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                    }}
                />
            </TouchableOpacity>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View>
                    style={{
                        width: "70%",
                        height: "100%",
                        backgroundColor: COLORS.white,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: SIZES.radius,
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>Home</Text>
                </View>
                <TouchableOpacity
                    style={{ width: 50, paddingRight: SIZES.padding * 2, justifyContent: "center" }}
                >
                    <Image
                        source={images.greenprofile}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primarybis,
    },
    shadow: {
        shadowColor: "#0000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
});
