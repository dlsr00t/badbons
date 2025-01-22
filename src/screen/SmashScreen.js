import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from "react-native";
// import { LinearGradient } from 'expo-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { estilo2 } from "../../styles/stylesLoginScreens";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SmashScreenStyle } from "../../styles/stylesLoginScreens";
import Card from "../components/card";
import { FullStar } from "../../assets/star-solid-24.png";
import Foto from "../../assets/Badminton_Peter_Gade.png";
import { transform } from "@babel/core";
import { color } from "react-native-elements/dist/helpers";
import { InfoIcon } from "../../assets/info-circle-regular-36.png";
import { FasesIcon } from "../../assets/infinite-regular-36.png";

import Bullseye from "../../assets/bullseye-solid-24.png"
import Backpack from "../../assets/backpack-solid-24.png"
import Cone from "../../assets/traffic-cone-solid-24.png"
import Bookmark from "../../assets/bookmark-regular-36.png"
{/*
    //!THIS COMMENT IS JUST A TO-DO SECTION.
    //TODO - Turn Challenge levels into clickable buttons []
*/}


const SmashScreen = () => {
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
            fontSize:40,

        },
        teste2:{
            fontSize:10,

        },
        gradient: {
            ...StyleSheet.absoluteFillObject, // Faz o gradiente cobrir toda a área do container
        },
        gradientOverlay: {
            ...StyleSheet.absoluteFillObject, // Faz o degradê cobrir toda a área do ImageBackground
          },
        
    })

    return (
        <SafeAreaView style={SmashScreenStyle.background}>
            <ImageBackground source={Foto} style={[{overflow: 'hidden',maxHeight:210, width:390, height:585, }, ]} resizeMode="contain">
                <LinearGradient  
                colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.1)', 'transparent']}
                start={{ x: 0.5, y: 1 }} // Start at the bottom-center
                end={{ x: 0.5, y: 0 }}   // End at the top-center
                style={styles.gradient}
                />

                <View>
                    <Text style={[SmashScreenStyle.SubTitile, ]}>10 MINUTOS</Text>
                </View>

                <View>
                    <Text style={[SmashScreenStyle.Title, ]}>TREINAMENTO DE SMASH AVANÇADO</Text>
                </View>
            
                <View style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
                    <TouchableOpacity>
                        <Image style={{tintColor:"white", transform:[{translateX:-35}, {translateY:-8}, {scale:0.7}], position:"absolute"}} source={require("../../assets/info-circle-regular-36.png")}></Image>
                        <Text style={{color:"#fff", fontSize:18, fontWeight:"bold"}}>Info</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={{tintColor:"white", transform:[{translateX:-35}, {translateY:-8}, {scale:0.7}], position:"absolute"}} source={require("../../assets/infinite-regular-36.png")}></Image>
                        <Text style={{color:"#fff", fontSize:18, fontWeight:"bold"}}>Fases</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>



            <View style={styles.containerSessions}>
                
                <View>
                    <Text style={[SmashScreenStyle.NormalText, {marginTop:30}]}>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem, lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </Text>
                </View>
            
                <View style={SmashScreenStyle.Apendice}>
                    <Image source={Bullseye} style={{tintColor:"rgb(29,0,158)", marginLeft:15}}></Image>
                    <Text style={[SmashScreenStyle.NormalText]}>Objetivo do treinamento</Text>
                    <Text style={[SmashScreenStyle.NormalText]}>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</Text>
                </View>

                <View style={[SmashScreenStyle.Apendice, {maxWidth:300}]}>
                    <Image source={Backpack} style={{tintColor:"rgb(29,0,158)", marginLeft:15}}></Image>
                    <Text style={[SmashScreenStyle.NormalText]}>Equipamentos necessário</Text>
                    <View style={{display:"flex", flexDirection:"row", backgroundColor:"rgb(60,60,60)", borderRadius:25, padding:15, marginLeft:15, marginTop:5, alignContent:"center", alignItems:"center"}}>
                        <Image source={Cone} style={{tintColor:"rgb(29,0,158)"}}></Image>
                        <Text style={{color:"white"}}>Cones</Text>
                    </View>
                </View>

                <View style={SmashScreenStyle.finalButtons}>
                    <View style={{display:"flex",borderRadius:20, flexGrow:2}}>
                        <TouchableOpacity style={SmashScreenStyle.startButton}><Text style={{color:"white", fontWeight:"bold", fontSize:18, maxWidth:"auto", textAlign:"center"}}>COMECAR TREINO</Text></TouchableOpacity>
                    </View>

                    <View style={{borderRadius:20}}>
                        <TouchableOpacity style={SmashScreenStyle.favoriteButton}><Image source={Bookmark} style={{tintColor:"white"}}></Image></TouchableOpacity>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default SmashScreen;


