import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { COLORS, FONTS, images } from "../components";
import Screen from "../components/Screen";

export default function SigninScreen() {
    return (
        <Screen style={styles.maincontainer}>
            <View style={styles.container}>
                <Image
                    source={images.logoless}
                    resizeMode="contain"
                    style={{
                        backgroundColor: "transparent",
                        alignItems: "center",
                        width: 700,
                        height: 700,
                    }}
                />
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ ...FONTS.h2 }}>Sign in</Text>
            </View>
            <View style={styles.container}>
                <Text style={FONTS.h4}>email</Text>
                <TextInput style={FONTS.h4} keyboardType="email-address">
                    placeholder : {"prenom.nom@eleve.isep.fr"}
                </TextInput>
            </View>
            <View style={styles.container}>
                <Text style={FONTS.h4}>password</Text>
                <TextInput style={FONTS.h4} keyboardType="Password">
                    placeholder='prenom.nom@eleve.isep.fr'
                </TextInput>
            </View>
            <View>
                <TouchableOpacity onPress={() => {}} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>{"Sign in"}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => {}} style={FONTS.h3}>
                    <Text style={COLORS.primary}>{"Create account"}</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        borderTopWidth : 110,
    },
    container: {
        flex : 1,
        backgroundColor: COLORS.white,
        borderRadius: 25,
        height : 31,
        alignItems: "center",
        justifyContent: "center",
    },
    appButtonContainer: {
        flex : 3,
        elevation: 8,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        height : 31,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    appButtonText: {
        fontSize: 18,
        color: COLORS.white,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
});
