import React from "react";
import {View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet} from "react-native";
import {COLORS, FONTS, images, SIZES} from "../../tash/Foodwell/components/constants";

export default function PaymentScreen  ()  {
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
                        <Text style={{...FONTS.h3}}>Payment</Text>
                    </View>
                </View>

                <SafeAreaView style={styles.container}>
                    {renderHeader()}
                </SafeAreaView>

            </View>

    // à ce niveau insérer le reste de l'écran !! container !!
                );
                }

            }



                const styles = StyleSheet.create ({

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
                alignSelf: "center",
                textTransform: "uppercase"
            },
                image: {
                flex: 1,
                backgroundColor :'transparent',
                alignItems : 'center',
                width: 200,
                height: 220,
                justifyContent :'center',
            },

            });


