import * as images from "../components/images";
import Screen from "../components/Screen";

export default function FoodMapScreen() {
    //find way to insert a map for free
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
                        backgroundColor: colors.white,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: SIZES.radius,
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>FoodMap</Text>
                </View>
            </View>
        </Screen>
    );
}
