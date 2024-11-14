import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { estilo2 } from "../../styles/stylesLoginScreens";
import Icon from 'react-native-vector-icons/FontAwesome5';

const SessoesScreen = () => {
    return (
        <SafeAreaView style={estilo2.background}>
            <View style={estilo2.BuscaConatainer}>
                <Icon style={estilo2.iconLight} name="calendar" size={20} color="#909090" />
            </View>
        </SafeAreaView>
    );
};

export default SessoesScreen;
