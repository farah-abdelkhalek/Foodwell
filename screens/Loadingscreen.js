import React from "react";
import { Image, StyleSheet, View} from "react-native";

import images from "../components/images";
import {COLORS} from "../components";

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
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
    }

})