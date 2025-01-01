import React from "react";
import { ScrollView, View, SafeAreaView, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';



const Card = ({ Height = 135, Width="90%", Title, Percentage, customStyle, children}) =>{
    const styles = StyleSheet.create({
        cardStyle:{
            display:"flex",
            alignSelf: 'center',
            borderRadius: 25,
            height: Height,
            width: Width,
            justifyContent: 'space-around',

        },
        cardTitle:{
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 10,
            marginLeft:15,
            
        },

    });
    
    return(
        <View style={{display:"flex"}}>
            <LinearGradient
                start={{x:0, y:0}}
                end={{x:1, y:0}}
                colors={["#010101", "#727272"]}
                style={styles.cardStyle}
            >
                <Text style={[styles.cardTitle, customStyle]}>{ Title }</Text>
                { Percentage }

                <View>{ children }</View>
            </LinearGradient>
        </View>
    )
}

export default Card;