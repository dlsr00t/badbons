import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { estilo2 } from "../../styles/stylesLoginScreens";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DesafiosScreenStyle } from "../../styles/stylesLoginScreens";
import Card from "../components/card";
import { FullStar } from "../../assets/star-solid-24.png";


{/*
    //!THIS COMMENT IS JUST A TO-DO SECTION.

    //TODO - Turn Challenge levels into clickable buttons []
    
*/}



const DesafiosScreen = ({navigation}) => {
    const styles = StyleSheet.create({
        star1condition:{
            transform:[{translateX:10}, {translateY:-90}, {scale:0.5}],
            tintColor:"white",

            display:"flex",
            position:"absolute",
        },
        star2condition:{
            transform:[{translateX:40}, {translateY:-90}, {scale:0.5}],
            tintColor:"white",

            display:"flex",
            position:"absolute",

        },
        star3condition:{
            transform:[{translateX:70}, {translateY:-90}, {scale:0.5}],
            tintColor:"white",

            display:"flex",
            position:"absolute",
        },
        containerSessions:{
            display:'flex', 
            

            flex:1,

        }, 
        teste:{
            fontSize:40
        },
        teste2:{
            fontSize:10
        }
    })
    return (
        <SafeAreaView style={DesafiosScreenStyle.background}>
            <View>
                <Text style={DesafiosScreenStyle.Title}>Desafios</Text>
            </View>
            
            <View style={DesafiosScreenStyle.SubTitile} >

                <TouchableOpacity>
                    <Text style={DesafiosScreenStyle.SubTitile}>Iniciante</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={DesafiosScreenStyle.SubTitile}>Intermediário</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={DesafiosScreenStyle.SubTitile}>Avançado</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.containerSessions}>
                <Text style={DesafiosScreenStyle.NormalText}>Escolha seu Desafio</Text>
                <View style={{display:"flex", gap:30,alignContent:"space-between", marginTop:10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Smash')}>
                        <Card Title={"Smash"} customStyle={{marginTop:35}}>
                            <Image style={styles.star1condition} source={require("../../assets/star-solid-24.png")}></Image>
                            <Image style={styles.star2condition} source={require("../../assets/star-regular-24.png")}></Image>
                            <Image style={styles.star3condition} source={require("../../assets/star-regular-24.png")}></Image>
                            <Text style={[DesafiosScreenStyle.NormalText, {transform:[{translateY:-20}]}]}>1 ponto</Text>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Card Title={"Drive"} customStyle={{marginTop:35}}>
                            <Image style={styles.star1condition} source={require("../../assets/star-solid-24.png")}></Image>
                            <Image style={styles.star2condition} source={require("../../assets/star-regular-24.png")}></Image>
                            <Image style={styles.star3condition} source={require("../../assets/star-regular-24.png")}></Image>
                            <Text style={[DesafiosScreenStyle.NormalText, {transform:[{translateY:-20}]}]}>2 pontos</Text>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Card Title={"Drop"} customStyle={{marginTop:35}}>
                            <Image style={styles.star1condition} source={require("../../assets/star-solid-24.png")}></Image>
                            
                            <Image style={styles.star2condition} source={require("../../assets/star-regular-24.png")}></Image>
                            <Image style={styles.star3condition} source={require("../../assets/star-regular-24.png")}></Image>
                            <Text style={[DesafiosScreenStyle.NormalText, {transform:[{translateY:-20}]}]}>3 pontos</Text>
                        </Card>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DesafiosScreen;
