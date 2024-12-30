import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Card from "../components/card";
import { RankingScreenStyle } from "../../styles/stylesLoginScreens"
import { transform } from "@babel/core";

const RankingScreen = () => {
    return (
        <SafeAreaView style={RankingScreenStyle.background}>
            <View>
                <Text style={RankingScreenStyle.Title}>Ranking</Text>
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
        </SafeAreaView>
    );
};

export default RankingScreen;
