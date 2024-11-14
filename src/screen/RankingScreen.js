import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { estilo2 } from "../../styles/stylesLoginScreens";
import Icon from 'react-native-vector-icons/FontAwesome5';

const RankingScreen = () => {
    return (
        <SafeAreaView style={estilo2.background}>
            <View style={estilo2.BuscaConatainer}>
                <Text style={estilo2.title}>Ranking</Text>
                <TouchableOpacity style={estilo2.button}>
                    <Text style={estilo2.buttonText}>Ver Ranking</Text>
                </TouchableOpacity>
                <Icon style={estilo2.iconLight} name="trophy" size={20} color="#909090" />
            </View>
        </SafeAreaView>
    );
};

export default RankingScreen;
