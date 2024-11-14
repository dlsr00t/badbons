import React from "react";
import { ScrollView, View, SafeAreaView, Text, TouchableOpacity, TextInput } from "react-native";
import { HomeScreen } from "../../styles/stylesLoginScreens";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
    return (
        <SafeAreaView style={HomeScreen.background}>
            <View style={HomeScreen.BuscaConatainer}>
                <Icon style={HomeScreen.iconBuscar} name="search" size={14} color="#909090" />
                <TextInput
                    style={HomeScreen.input}
                    placeholder="Pesquisa"
                    placeholderTextColor={'#909090'}
                />
                <View style={HomeScreen.separator}></View>
                <Icon style={HomeScreen.iconLight} name="lightbulb" size={15} color="#909090" />
                <Icon style={HomeScreen.iconBell} name="bell" size={15} color="#909090" />
            </View>

            <View>
            <LinearGradient 
                        start={{ x: 0, y: 0 }} 
                        end={{ x: 1, y: 0 }} 
                        colors={['#010101', '#727272']} 
                        style={HomeScreen.linearGradientButton}
                    >
                        <Text style={HomeScreen.Subtext}>Minha semana</Text>
            </LinearGradient>
            </View>
        </SafeAreaView>
    );
};

export default Home;
