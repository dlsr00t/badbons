import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { CheckBox } from '@rneui/themed';



export const SettingsScreen = () => {

const [checked, setChecked] = useState(false);
const [checked2, setChecked2] = useState(false);
const styles = StyleSheet.create({
    overall: {
        flex: 1,
        backgroundColor: "#1c1c1e",
        paddingHorizontal: 16,
    },
    section: {
        marginBottom: 24,
        marginTop:70

    },
    sectionTitle: {
        color: "#888",
        fontSize: 12,
        // marginBottom: 8,
    },
    profile: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    email: {
        color: "#fff",
        fontSize: 16,
    },
    profileImage: {
        display:"flex",
        width: 50,
        height: 50,
        borderRadius: 25,
        tintColor:"white",
        flexDirection:"row",
        alignSelf:"center"
    },
    item: {
        display:"flex",
        paddingVertical: 12,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    itemText: {
        color: "#fff",
        fontSize: 16,
    },
    danger: {
        color: "#f55",
    },
    divisor: {
        height: 1,
        backgroundColor: "#333",
        marginVertical: 16,
    },





    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignItems:"center"

      },
      checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12, // Torna o checkbox circular
        borderWidth: 2,
        borderColor: "#888",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8,
      },
      checked: {
        borderColor: "rgb(29,0,158)", // Cor quando selecionado
        backgroundColor: "rgb(29,0,158)",
      },
      innerCircle: {
        width: 12,
        height: 12,
        borderRadius: 6, // Torna o centro circular
        backgroundColor: "#fff", // Cor do "check"
      },
      label: {
        fontSize: 16,
        color: "#000",
      },
});
  
    return (
        <ScrollView style={styles.overall}>

            <View style={styles.section}>

                <Text style={styles.sectionTitle}>CONTA</Text>

                <View style={styles.profile}>
                    <Text style={styles.email}>eusuez@gmail.com</Text>
                </View>
                
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Alterar foto do perfil</Text>
                    <Image
                    source={require("../../assets/user-circle-regular-48.png")}
                    style={styles.profileImage}
                    />

                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Mudar nome</Text>
                </TouchableOpacity>

                <View style={styles.divisor} />

                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Gerenciar minha conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Gerenciar minha assinatura</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <Text style={[styles.itemText, styles.danger]}>Excluir minha conta</Text>
                </TouchableOpacity>        
                </View>

                <View style={[styles.divisor, {marginVertical:0}]}/>


                <View style={[styles.section, {marginTop:36}]}>

                    <Text style={styles.sectionTitle}>Tema</Text>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>Modo Escuro</Text>
                        {/* <CheckBox
                        center
                        disabledStyle="true"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={check2}
                        onPress={() => setCheck2(!check2)}
                        /> */}
                        <View style={styles.container}>
                            <TouchableOpacity
                                style={[styles.checkbox, checked && styles.checked]}
                                onPress={() => setChecked(!checked)}
                            >
                                {checked && <View style={styles.innerCircle} />}
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

                <View style={[styles.divisor, {marginVertical:0}]}/>


                <View style={[styles.section, {marginTop:36}]}>
                    <Text style={styles.sectionTitle}>Notificação</Text>
                    <View style={styles.item}>
                        <View>
                            <Text style={styles.itemText}>Permitir</Text>
                        </View>
                        <View style={styles.container}>
                            <TouchableOpacity
                                style={[styles.checkbox, checked2 && styles.checked]}
                                onPress={() => setChecked2(!checked2)}
                            >
                                {checked2 && <View style={styles.innerCircle} />}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={[styles.divisor, {marginVertical:0}]}/>


                <View style={[styles.section, {marginTop:36}]}>
                    <Text style={styles.sectionTitle}>MAIS</Text>

                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemText}>Contate o suporte</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemText}>Centro de ajuda e suporte</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemText}>Notas da versão</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemText}>Termos e condições de uso</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemText}>Política de privacidade</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemText}>Sobre</Text>
                    </TouchableOpacity>
                </View>

        </ScrollView>
        );
    }
