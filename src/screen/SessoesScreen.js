import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { estilo2 } from "../../styles/stylesLoginScreens";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SessoesScreenStyle } from "../../styles/stylesLoginScreens"
import Card from "../components/card";
import { FullStar } from "../../assets/star-solid-24.png";


{/*
    //!THIS COMMENT IS JUST A TO-DO SECTION.
    
    //TODO - Turn Sessions levels into clickable buttons []
    //TODO - Change Sessions css cards to look like Challenge cards []
*/}


const SessoesScreen = () => {
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
        <SafeAreaView style={SessoesScreenStyle.background}>
            <View>
                <Text style={SessoesScreenStyle.Title}>Sessões</Text>
            </View>
            
            <View style={SessoesScreenStyle.SubTitile} >
                <TouchableOpacity>
                    <Text style={SessoesScreenStyle.SubTitile}>Iniciante</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={SessoesScreenStyle.SubTitile}>Intermediário</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={SessoesScreenStyle.SubTitile}>Avançado</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerSessions}>
                <Text style={SessoesScreenStyle.NormalText}>Escolha seu objetivo</Text>
                <View style={{display:"flex", gap:30,alignContent:"space-between", marginTop:10}}>
                    <TouchableOpacity>
                        <Card Title={"EMPUNHADURAS BÁSICAS"} customStyle={{marginTop:35}}>
                            <Image style={styles.star1condition} source={require("../../assets/star-solid-24.png")}></Image>
                            
                            <Image style={styles.star2condition} source={require("../../assets/star-regular-24.png")}></Image>
                            <Image style={styles.star3condition} source={require("../../assets/star-regular-24.png")}></Image>
                            <Text style={[SessoesScreenStyle.NormalText, {transform:[{translateY:-20}]}]}>5 EXERCICIOS</Text>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Card Title={"SAQUES BÁSICOS"} customStyle={{marginTop:35}}>
                            <Image style={styles.star1condition} source={require("../../assets/star-solid-24.png")}></Image>
                            <Image style={styles.star2condition} source={require("../../assets/star-regular-24.png")}></Image>
                            <Image style={styles.star3condition} source={require("../../assets/star-regular-24.png")}></Image>
                            <Text style={[SessoesScreenStyle.NormalText, {transform:[{translateY:-20}]}]}>2 EXERCICIOS</Text>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Card Title={"GOLPES BÁSICOS"} customStyle={{marginTop:35}}>
                            <Image style={styles.star1condition} source={require("../../assets/star-solid-24.png")}></Image>
                            
                            <Image style={styles.star2condition} source={require("../../assets/star-regular-24.png")}></Image>
                            <Image style={styles.star3condition} source={require("../../assets/star-regular-24.png")}></Image>
                            <Text style={[SessoesScreenStyle.NormalText, {transform:[{translateY:-20}]}]}>4 EXERCICIOS</Text>
                        </Card>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SessoesScreen;
