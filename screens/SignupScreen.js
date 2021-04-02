import React, { Component } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { colors, FONTS, images } from "../components";
import Screen from "../components/Screen";

export default function SignupScreen() {
    return (
        <Screen style={styles.maincontainer}>
            <View style={styles.container}>
                <Text style={FONTS.h3}>Create account</Text>
            </View>

            <View style={styles.container}>
                <Image
                    source={images.logoless}
                    resizeMode="contain"
                    style={{
                        backgroundColor: "transparent",
                        alignItems: "center",
                        width: 200,
                        height: 220,
                        justifyContent: "center",
                    }}
                />
            </View>

            <View style={styles.container}>
                <Text style={FONTS.h3}>email</Text>
                <TextInput style={FONTS.h3} keyboardType="email-address">
                    "email@eleve.isep.fr"
                </TextInput>
            </View>
            <View style={styles.container}>
                <Text style={FONTS.h3}>Password</Text>
                <TextInput style={FONTS.h3}>"Password"</TextInput>
            </View>

            <View>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={FONTS.h4}>{"Next"}</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
    },
    appButtonText: {
        color: colors.primary,
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
});
