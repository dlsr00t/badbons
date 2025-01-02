import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { PerfilScreenStyle } from "../../styles/stylesLoginScreens";
import Icon from 'react-native-vector-icons/FontAwesome5';
import User from "../../assets/user-circle-regular-132.png";
import { CircularStats } from "../components/porcentagem";


{/*
    //!THIS COMMENT IS JUST A TO-DO SECTION.
    
    //TODO - Make the Settings button
    //TODO - Make the Share Profile button
*/}


const PerfilScreen = () => {
    const stats = [
        { value: 0, label: 'vitórias' },
        { value: 0, label: 'derrotas' },
        { value: 0, label: 'jogos' },
        { value: 100, label: 'Pontos' },
      ];
    
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            backgroundColor: '#0F4C75', // Dark blue background
            
            padding: 10,
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
        statContainer: {
            alignItems: 'center',
            flexDirection: 'column',
        },
        value: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginRight: 5,
        },
        label: {
            fontSize: 12,
            color: '#FFFFFF',
        },
        separator: {
            height: '100%',
            width: 1,
            backgroundColor: '#FFFFFF',
            marginHorizontal: 10,
        },
    });
      
    return (
        <SafeAreaView style={[PerfilScreenStyle.background, {display:"flex", alignItems:"center"}]}>
            <View style={{display:"flex", justifyContent:"space-between", alignContent:"space-between"}}>
                <View style={{display:"flex", alignItems:"center"}}>
                    <Image style={{display:"flex",tintColor:"#fff"}} source={User}/>
                
                    <Text style={{display:"flex",color:"#fff", justifyContent:"center", fontSize:20, fontWeight:"bold", marginTop:10}}>Player</Text>
                </View>
                <View style={{display:"flex", flexDirection:"row", flexWrap:"nowrap", gap:40, marginTop:40}}>
                    <View >
                        <Text style={{display:"flex",color:"#fff", fontWeight:"bold"}}>Idade</Text>
                        <Text style={{textAlign:"center", color:"#fff"}}>20</Text>
                    </View>

                    <View >
                        <Text style={{display:"flex",color:"#fff", fontWeight:"bold"}}>Altura</Text>
                        <Text style={{textAlign:"center", color:"#fff"}}>1,70</Text>
                    </View>

                    <View >
                        <Text style={{display:"flex",color:"#fff", fontWeight:"bold"}}>Ranking</Text>
                        <Text style={{textAlign:"center", color:"#fff"}}>5˚</Text>
                    </View>

                    <View >
                        <Text style={{display:"flex",color:"#fff", fontWeight:"bold"}}>Pontos</Text>
                        <Text style={{textAlign:"center", color:"#fff"}}>100</Text>
                    </View>
                </View>

                <View style={{display:"flex", flexDirection:"row", justifyContent:"space-around", marginTop:40, marginBottom:80}}>
                    <CircularStats stats1={"100"} stats2={"ATAQUE"}/>
                    <CircularStats stats1={"100"} stats2={"DEFESA"}/>
                </View>

                <View>
                    <View style={styles.container}>
                        {stats.map((stat, index) => (
                            <View key={index} style={styles.statContainer}>
                            <Text style={styles.value}>{stat.value}</Text>
                            <Text style={styles.label}>{stat.label}</Text>
                            {index < stats.length - 1 && <View style={styles.separator} />}
                            </View>
                        ))}
                    </View>

                </View>
            </View>
        </SafeAreaView>
    );
};

export default PerfilScreen;
