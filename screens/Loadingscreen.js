import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

import * as images from "../components/images";
import {COLORS} from "../components";
import * as Font from "expo-font";
import Screen from "../components/Screen";

function Loadingscreen() {
    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                ABeeZee: require("../assets/fonts/ABeeZee/ABeeZee-Regular.ttf"),
                "ABeeZee-Italic": require("../assets/fonts/ABeeZee/ABeeZee-Italic.ttf"),
            });
        }
        loadFonts();
    }, []);

    return (
        <Screen style={styles.container}>
            <Image source={images.logo} style={styles.image} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        resizeMode: "contain",
        width: 600,
        height: 600,
    },
});

export default Loadingscreen;
