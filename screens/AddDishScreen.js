import React from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import * as images from "../components/images";
import { colors, FONTS, SIZES } from "../components";
import Screen from "../components/Screen";

function AddDishScreen() {
    return (
        <Screen>
            <ScrollView>
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
                            backgroundColor: colors.white,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: SIZES.radius,
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>Add</Text>
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}

export default AddDishScreen;
