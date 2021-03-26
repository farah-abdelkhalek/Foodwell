import React from "react";
import { Image, StyleSheet, View} from "react-native";
import {images} from "../../tash/Foodwell/components/constants/images";
import AppLoading from 'expo-app-loading';
import {Loadingfont} from "../../tash/Foodwell/components/constants/theme";
import {COLORS} from "../../tash/Foodwell/components/constants";


export default function Loadingscreen () {

    return (
        <View style={styles.container}>
            <Image
                source={images.logo}
                resizeMode="contain"
                style={{
                    width: 30,
                    height: 30
                }}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: "center",
        alignItems: "center",
    }

})