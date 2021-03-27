import { useFonts, ABeeZee } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';


export default function Loadingfont (){
    [fontsLoaded] = useFonts({
        ABeeZee,
    })

    if (!fontsLoaded) {
        return <AppLoading />;
    }
}