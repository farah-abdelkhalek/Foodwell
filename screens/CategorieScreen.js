import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import {COLORS, FONTS, images, SIZES} from "../../tash/Foodwell/components/constants";

export default function Signin  ()  {
    function renderHeader() {
        return (
            <View style={{flexDirection: 'row', height: 50}}>
                <TouchableOpacity style={{width: 50, paddingLeft: SIZES.padding *2, justifyContent: 'center'}}>
                    <Image source={images.leftarrow}
                           resizeMode="contain"
                           style={{
                               width: 30,
                               height: 30
                           }}
                    />
                </TouchableOpacity>

                <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                    <View style={{width:'70%', height:'100%', backgroundColor:COLORS.white, alignItems:'center', justifyContent: 'center', borderRadius:SIZES.radius}}>
                        <Text style={{...FONTS.h3}}>Categories</Text>
                    </View>
                </View>
            </View>

                )}


                }

