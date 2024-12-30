import React from "react";
import { ScrollView, View, SafeAreaView, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { HomeScreen } from "../../styles/stylesLoginScreens";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import CircularProgressBar from "../components/porcentagem";
import Card from "../components/card"
import Container from "../components/teste";
import { transform } from "@babel/core";

const Home = () => {
    const styles = StyleSheet.create({

      weekSection: {
        backgroundColor: "#1E1E1E",
        padding: 16,
        borderRadius: 8,
        margin: 16,
      },
      weekTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        marginLeft:10,
      },
      weekDays: {
        minWidth:"90%",
        alignSelf:"center",
        flexDirection: "row",
        justifyContent: "space-between",
        
      },
      weekDayItem: {
        alignItems: "center",
        flex: 1,
      },
      weekDayText: {
        color: "#888",
        fontSize: 14,
        marginBottom: 8,
      },
      dayBox: {
        width: 40,
        height: 40,
        backgroundColor: "#333",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
      },
      dayNumberText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
      },
      footer: {
        backgroundColor: "#1E1E1E",
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
      },
      footerText: {
        color: "#fff",
      },
      borda:{
        borderBlockColor:"red",
        borderColor:"yellow",
        borderWidth:"10"
      },
      text1:{
        color:"white",
        display:"block",
        position:"absolute",
        transform:[{translateX:222}, {translateY:-95}],
        fontWeight:"bold",
      },
      text2:{
        color:"white",
        display:"block",
        position:"absolute",
        transform:[{translateX:222}, {translateY:-55}],
      },
      text3:{
        color:"white",
        display:"block",
        position:"absolute",
        transform:[{translateX:275}, {translateY:-150}],

      }
    });
  
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
              start={{x:0, y:0}}
              end={{x:1, y:0}}
              colors={["#010101", "#727272"]}
              style={HomeScreen.linearGradientButton2}
              >
                {/* "Minha Semana" Section */}
                <View >
                  <Text style={styles.weekTitle}>Minha semana (treino/jogos)</Text>
                  <View style={styles.weekDays}>
                    {["S", "T", "Q", "Q", "S", "S", "D"].map((day, index) => (
                      <View key={index} style={styles.weekDayItem}>
                        <Text style={styles.weekDayText}>{day}</Text>
                        <TouchableOpacity style={styles.dayBox}>
                          <Text style={styles.dayNumberText}>
                            {index < 3 ? 28 + index : index - 3 + 1}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                </View>
              </LinearGradient>
            </View>

            <View>
              <Card style={styles.borda} Title= "Progresso Atual" Percentage={<CircularProgressBar percentage={40}/>} Height= {170} >
                 <Text style={styles.text1}>nível iniciante</Text> 
                 <Text style={styles.text2}>Sessões: 0/11</Text>
                 <Text style={styles.text3}>Ver mais</Text>
              </Card>
            </View>
            
            {/*
            <Container>
              <Text style={{color:"red"}}>Hello, World</Text>
            </Container>
             */}
        </SafeAreaView>
    );
};

export default Home;
