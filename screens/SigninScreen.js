import React, { Component } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { colors, FONTS, images } from "../components";

export default function SigninScreen() {
    return (
        <View style={styles.maincontainer}>
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
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ ...FONTS.h3 }}>Sign in</Text>
            </View>
            <View style={styles.container}>
                <Text style={FONTS.h3}>email</Text>
                <TextInput style={FONTS.h3} keyboardType="email-address">
                    placeholder : {"prenom.nom@eleve.isep.fr"}
                </TextInput>
            </View>
            <View style={styles.container}>
                <Text style={FONTS.h3}>Password</Text>
                <TextInput style={FONTS.h3} keyboardType="Password">
                    placeholder : {"Password"}
                    secureTextEntry : {true}
                </TextInput>
            </View>
            <View>
                <TouchableOpacity onPress={() => {}} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>{"Sign in"}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => {}} style={FONTS.h3}>
                    <Text style={colors.primary}>{"Create account"}</Text>
                </TouchableOpacity>
            </View>
        </View>
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
        borderRadius: 25,
        height : 31,
        alignItems: "center",
        justifyContent: "center",
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: colors.primary,
        borderRadius: 10,
        height : 31,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    appButtonText: {
        fontSize: 18,
        color: colors.white,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
});
