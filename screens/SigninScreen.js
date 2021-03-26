import React , {Component} from "react";
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
import {COLORS, FONTS, images} from "../../tash/Foodwell/components/constants";


export default function SigninScreen  ()  {
        return (
            <View style ={style.maincontainer}>
                <View style = {style.container}>
                    <Image source={images.logoless}
                           resizeMode="contain"
                           style = {{
                               backgroundColor :'transparent',
                               alignItems : 'center',
                               width: 200,
                               height: 220,
                               justifyContent :'center'
                           }}/>
                </View>
                <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{...FONTS.h3}}>Sign in</Text>
                </View>
                <View style = {styles.container}>
                    <Text style = {FONTS.h3}>email</Text>
                    <TextInput style ={FONTS.h3} keyboardType="email-address">"email@eleve.isep.fr"</TextInput>
                </View>
                <View style = {styles.container}>
                    <Text style={FONTS.h3}>Password</Text>
                    <TextInput style={FONTS.h3}>"Password"</TextInput>
                </View>
                <View>
                    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
                        <Text style={styles.appButtonText}>{"Sign in"}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={{onPress}} style = {FONTS.h3}>
                    <Text style={COLORS.primary}>{"Create account"}</Text>
                    </TouchableOpacity>
                </View>

            </View>

        );

}

const styles = StyleSheet.create ({
                maincontainer: {
                flex: 1,
                backgroundColor: COLORS.white,

            },
                container: {
                flex: 1,
                backgroundColor: COLORS.white,
                alignItems: 'center',
                justifyContent: 'center',

            },
                appButtonContainer: {
                elevation: 8,
                backgroundColor: COLORS.primary,
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12
            },
                appButtonText: {
                fontSize: 18,
                color: COLORS.white,
                fontWeight: "bold",
                alignSelf: "center",
                textTransform: "uppercase"
            }
                });

