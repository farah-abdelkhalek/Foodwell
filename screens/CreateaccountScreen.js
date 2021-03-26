import React , {Component} from "react";
import {Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
import {COLORS, FONTS, images, SIZES} from "../../tash/Foodwell/components/constants";

export default function Creataccount () {
    return (
        <View style ={style.maincontainer}>
            <View style ={{flexDirection: 'row'}}>
                <Text style ={...FONTS.h3}>Create account</Text>
            </View>

            <TouchableOpacity style={{width: 50, paddingLeft: SIZES.padding *2, justifyContent: 'center'}}>
                <View style={{flexDirection: 'center'}}>
                    <Image source={images.profilevert}
                           resizeMode="contain"
                           style={{
                               width: 30,
                               height: 30
                           }}/>
                </View>
            </TouchableOpacity>

            <View>
                <Text style = {FONTS.h3}>Email</Text>
                <TextInput style ={FONTS.h3} keyboardType="email-address">"email@eleve.isep.fr"</TextInput>
            </View>

            <View>
                <Text style={FONTS.h3}>Password</Text>
                <TextInput style={FONTS.h3}>"Password"</TextInput>
            </View>

        </View>

    );
}