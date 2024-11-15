import { StyleSheet } from "react-native"

export const estilo = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    linearGradientBackground: {
        flex: 1,
        justifyContent: 'center',
        width: 'auto',
        height: 'auto'
    },
    logo: {
        flex: 1,
        justifyContent: 'center'
    },
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    container_pg2:{
        flex: 1,
        alignSelf: "center",
        width: "85%",
        top: 200
    },
    container2:{
        justifyContent: 'center',
    },
    linearGradientButton: {
        alignSelf: 'center',
        borderRadius: 35,
        height: 43,
        width: 300,
        justifyContent: 'center',
        top: 220
    },
    linearGradientButton_pg2: {
        alignSelf: 'center',
        borderRadius: 35,
        height: 43,
        width: 300,
        justifyContent: 'center',
        top: 200
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: 35,
        borderColor: 'transparent',
        alignItems: 'center',
        alignSelf: 'center',
        height: 45,
        width: 300,
        padding: 10
    },
    button_pg2: {
        backgroundColor: 'transparent',
        borderRadius: 35,
        borderColor: 'transparent',
        alignItems: 'center',
        alignSelf: 'center',
        height: 45,
        width: 300,
        padding: 10
    },
    buttonText: {
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'white',
        fontSize: 18,
    },
    titulo:{
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        top: 190
    },
    titulo_pg2:{
        fontWeight: 'bold',
        alignItems: 'left',
        color: 'white',
        fontSize: 25,
        textAlign: 'left',
        marginBottom: 10
    },
    input:{
        fontSize: 12,
        marginBottom: 15,
        marginTop: 15,
        borderBottomWidth: 1,
        borderColor: "white",
        paddingBottom: 10,
        color: 'white',
        textTransform: 'capitalize'
    }
    
})

export const loginScreen = StyleSheet.create({
    overall:{
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgb(27,27,27)",
    },
    titulo:{
        color:"white",
        fontWeight:"bold",
        fontSize:30,
        marginBottom:50,
    },
    entrada:{
        color:"white",
        borderBottomColor:"white",
        borderBottomWidth:1,
        paddingBottom:7,
        paddingTop:7,
        paddingRight:50,
        paddingLeft:50,
        fontSize:17,
        marginBottom:40,
    },

    linearGradient: {
        alignSelf: 'center',
        borderRadius: 35,
        height: 43,
        width: 300,
        justifyContent: 'center',
    },

    button:{
        display:"flex",
        backgroundColor: 'transparent',
        borderRadius: 35,
        borderColor: 'transparent',
        alignItems: 'center',
        alignSelf: 'center',
        height: 50,
        width: 300,
        padding: 6,

    }
})

export const HomeScreen = StyleSheet.create({
        Subtext: {
            paddingLeft: 10,
            fontSize: 15,
            color: 'white'

        },
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:"rgb(28,28,30)",
            color:"rgb(144,144,144)"
        },
        background: {
            backgroundColor: '#1c1c1e',
            flex: 1,
            width: 'auto',
            height: 'auto'
        },
        BuscaConatainer:{
            flexDirection: 'row',
            alignSelf: "center",
            height: 34,
            width: '90%',
            backgroundColor: '#272727',
            borderRadius: 10,
            alignItems: 'center',
            top: 27

        },
        input:{
            alignSelf: 'center',
            color: '#909090',
            width: "70%",
            height: 'auto',
            fontSize: 15,
            top: 2,
            paddingLeft: 5
        },
        iconBuscar:{
            paddingLeft: 15
        },
        separator:{
            backgroundColor: '#343434',
            width: 1,
            height: 34

        },
        iconLight:{
            paddingLeft: 15
        },
        iconBell:{
            alignself: 'right',
            paddingLeft: 20
        },
        font:{
          color:"rgb(144,144,144)",
        },
        linearGradientButton: {
            alignSelf: 'center',
            borderRadius: 25,
            height: 120,
            width: '90%',
            justifyContent: 'center',
            top: 50
        },

})