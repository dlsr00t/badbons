import React from "react";
import { ScrollView, View, SafeAreaView, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';



const Card = ({ Height = 135, Title, Percentage, TitleAlign = false, children, }) =>{
    const styles = StyleSheet.create({
        cardStyle:{
            alignSelf: 'center',
            borderRadius: 25,
            height: Height,
            width: "90%",
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
        <View>
            <LinearGradient
                start={{x:0, y:0}}
                end={{x:1, y:0}}
                colors={["#010101", "#727272"]}
                style={styles.cardStyle}
            >
                <Text style={styles.cardTitle}>{ Title }</Text>
                { Percentage }

                <View>{ children }</View>
            </LinearGradient>
        </View>
    )
}

export default Card;