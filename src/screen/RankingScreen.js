import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Card from "../components/card";
import { RankingScreenStyle } from "../../styles/stylesLoginScreens";
import { StraightProgressBar } from "../components/porcentagem";
import { transform } from "@babel/core";
import User from "../../assets/user-circle-regular-72.png";
import { Button, Badge } from "react-native-elements"


{/*
    //!THIS COMMENT IS JUST A TO-DO SECTION.
    
    //TODO - Turn "MARCAR JOGO" into a clickable button
*/}


const RankingScreen = () => {
    const style = StyleSheet.create({
        position:{
            color:"#fff",
            fontSize:20,
            marginLeft:20,
            marginTop:10

        },
        userPhoto:{
            tintColor:"white",
            marginLeft:40,
            transform:[{scale:0.7}, {translateY:-90}, {translateX:-15}]
        },
        username:{
            color:"#fff",
            transform:[{translateY:-115}],
            marginLeft:100,
        },
        points:{
            color:"#fff",
            transform:[{translateY:-125}],
            marginLeft:260,
        },
        gameSchedule:{
            color:"#fff",
            fontWeight:"bold",
            fontSize:15,
            textAlign:"center",
            transform:[{translateY:-6}]
        }

        
    })
    return (
        <SafeAreaView style={RankingScreenStyle.background}>
            <View>
                <Text style={RankingScreenStyle.Title}>Ranking</Text>
                <View style={{marginBottom:26}}>
                    <Card Title={"Player"} customStyle={{marginTop:5, fontWeight:"100", fontSize:18, marginLeft:20}} Height={150}>
                        <View style={RankingScreenStyle.FlexingStats}>
                            <Text style={RankingScreenStyle.NormalText} customStyle={{color:"red"}}>0 Jogos</Text>
                            <Text style={[RankingScreenStyle.NormalText, {marginLeft:10}]} customStyle={{color:"red"}}>100 Pontos</Text>
                            <Text style={RankingScreenStyle.SubTitle}>PROXIMO JOGO</Text>
                            {/*<Text style={[RankingScreenStyle.Title, {transform:[{translateX:-70}]}]}>10/11</Text>*/}
                            <Text style={[RankingScreenStyle.Title, {position:"absolute", color:"rgb(0, 150, 200)", transform:[{translateX:213}, {translateY:-25}]} ]}>10/11</Text>

                        </View>

                    </Card>
                </View>

                <View style={{marginBottom:5}}>
                    <Card Height={60}>
                        <Text style={style.position}>1˚</Text>
                        <StraightProgressBar customStyle={{transform:[{translateY:-7}, {translateX:-30}]}} percentage={70}/>
                        <Image style={style.userPhoto} source={User}></Image>
                        <Text style={style.username}>Player</Text>
                        <Text style={style.points}>100Pontos</Text>
                    </Card>
                </View>
 
                <View style={{marginBottom:5}}>
                    <Card Height={60}>
                        <Text style={style.position}>2˚</Text>
                        <StraightProgressBar customStyle={{transform:[{translateY:-7}, {translateX:-30}]}} percentage={70}/>
                        <Image style={style.userPhoto} source={User}></Image>
                        <Text style={style.username}>Player</Text>
                        <Text style={style.points}>100Pontos</Text>
                    </Card>
                </View>

                <View style={{marginBottom:5}}>
                    <Card Height={60}>
                        <Text style={style.position}>3˚</Text>
                        <StraightProgressBar customStyle={{transform:[{translateY:-7}, {translateX:-30}]}} percentage={70}/>
                        <Image style={style.userPhoto} source={User}></Image>
                        <Text style={style.username}>Player</Text>
                        <Text style={style.points}>100Pontos</Text>
                    </Card>
                </View>

                <View style={{marginBottom:5}}>
                    <Card Height={60}>
                        <Text style={style.position}>4˚</Text>
                        <StraightProgressBar customStyle={{transform:[{translateY:-7}, {translateX:-30}]}} percentage={70}/>
                        <Image style={style.userPhoto} source={User}></Image>
                        <Text style={style.username}>Player</Text>
                        <Text style={style.points}>100Pontos</Text>
                    </Card>
                </View>
 
                <View style={{marginBottom:10}}>
                    <Card Height={60}>
                        <Text style={style.position}>5˚</Text>
                        <StraightProgressBar customStyle={{transform:[{translateY:-7}, {translateX:-30}]}} percentage={70}/>
                        <Image style={style.userPhoto} source={User}></Image>
                        <Text style={style.username}>Player</Text>
                        <Text style={style.points}>100Pontos</Text>
                    </Card>
                </View>
 

                <View>
                    <Card Height={30} Width="45%">
                        <Text style={style.gameSchedule}>MARCAR JOGO</Text>
                        <Badge
                        value="2"
                        status="primary"
                        containerStyle={{ position: 'absolute', top: -15, right: 0 }}
                        />
                        {/* 
                        <View style={RankingScreenStyle.FloatingDot}>
                            <Text style={{display:"flex"}}>3</Text>
                        </View> 
                        */}
                    </Card>
                </View>


                {/* 
                <View>
                    <Button title="MARCAR JOGO" />
                    <Badge
                        value="2"
                        status="primary"
                        containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                    />
                </View>
                */}

            </View> 
        </SafeAreaView>
    );
};

export default RankingScreen;
