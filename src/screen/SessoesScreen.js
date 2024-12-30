import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { estilo2 } from "../../styles/stylesLoginScreens";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SessoesScreenStyle } from "../../styles/stylesLoginScreens"
import Card from "../components/card";
const SessoesScreen = () => {
    return (
        
        <SafeAreaView style={SessoesScreenStyle.background}>
            <View>
                <Text style={SessoesScreenStyle.Title}>Sessões</Text>
            </View>
            
            <View style={SessoesScreenStyle.SubTitile} >
                <Text style={SessoesScreenStyle.SubTitile}>Iniciante</Text>
                <Text style={SessoesScreenStyle.SubTitile}>Intermediário</Text>
                <Text style={SessoesScreenStyle.SubTitile}>Avançado</Text>
            </View>

            <View>
                <Text style={SessoesScreenStyle.NormalText}>Escolha seu objetivo</Text>
                <View>
                    <Card></Card>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SessoesScreen;
