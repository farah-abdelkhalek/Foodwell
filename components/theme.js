import { Dimensions } from "react-native";
import { useFonts, ABeeZee } from '@expo-google-fonts/inter';
const { width, height } = Dimensions.get("window");
import AppLoading from 'expo-app-loading';


export const COLORS = {
    // base colors
    primary:"#3b987e",
    primarybis: "#6bdea9",
    secondary: "#696969",

    //colors
    black: "#000000",
    white: "#f8f8ff",

    yellow: "#ffd700",
    lightyellow: "#f0e68c",
    blue: "#4169e1",
    lightblue: "#87ceeb",
    purple:"#9932cc",
    lightpurple: "#ba55d3",

};

export const SIZES = {

    //global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding12: 12,

    //font sizes
    "largeTitle": 50,
    "h1": 30,
    "h2": 22,
    "h3": 20,
    "h4": 14,
    "body1": 30,
    "body2": 20,
    "body3": 16,
    "body4": 14,
    "body5": 12,

    //app dimensions
    width,
    height
};

export function Loadingfont (){
    [fontsLoaded] = useFonts({
        ABeeZee,
    })

    if (!fontsLoaded) {
        return <AppLoading />;
    }
}
export const FONTS = {
    largeTitle: { fontFamily:"ABeeZee", fontSize: SIZES.largeTitle, lineHeight: 44},
    h1: { fontFamily:"ABeeZee", fontSize: SIZES.h1, lineHeight: 36},
    h2: { fontFamily:"ABeeZee", fontSize: SIZES.h2, lineHeight: 30},
    h3: { fontFamily:"ABeeZee", fontSize: SIZES.h3, lineHeight: 26},
    h4: { fontFamily:"ABeeZee", fontSize: SIZES.h4, lineHeight: 22},
    body1: { fontFamily:"ABeeZee", fontSize: SIZES.body1, lineHeight: 36},
    body2: { fontFamily:"ABeeZee", fontSize: SIZES.body2, lineHeight: 30},
    body3: { fontFamily:"ABeeZee", fontSize: SIZES.body3, lineHeight: 26},
    body4: { fontFamily:"ABeeZee", fontSize: SIZES.body4, lineHeight: 20},
    body5: { fontFamily:"ABeeZee", fontSize: SIZES.body5, lineHeight: 16},
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;