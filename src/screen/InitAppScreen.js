import React, { useEffect } from "react";
import { View, Text, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from 'expo-linear-gradient';
import { estilo } from '../../styles/stylesLoginScreens';

export const InitialScreen = ({ navigation }) => {

    // Função para verificar o status de login ao iniciar o Dashboard
    const checkLoginStatus = async () => {
        try {
            navigation.navigate('HomeTabs')
            const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");

            // Se o usuário já está logado, redireciona para a tela "Home"
            if (isLoggedIn === "true") {
                navigation.replace("HomeTabs");
            }
        } catch (error) {
            console.log("Erro ao verificar o status de login:", error);
        }
    };

    useEffect(() => {
        checkLoginStatus();
    }, []);

    return (
        <View style={estilo.container}>
            <ImageBackground 
                source={require('../components/iniimage.png')} 
                resizeMode="cover"
                style={estilo.background}> 
                <View style={estilo.titleContainer}>
                    <Text style={estilo.titulo}>APLICATIVO {'\n'}BADBONS</Text>
                </View>
                <SafeAreaView style={estilo.buttonContainer}>
                    <LinearGradient 
                        start={{ x: 0, y: 0 }} 
                        end={{ x: 1, y: 0 }} 
                        colors={['#4376e6', '#0233a1']} 
                        style={estilo.linearGradientButton}
                    >
                        <TouchableOpacity 
                            style={estilo.button}
                            onPress={() => navigation.navigate('HomeTabs')} // Navegar para a tela de Login
                        >
                            <Text style={estilo.buttonText}>Inicie seus treinos</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}

export default InitialScreen;
