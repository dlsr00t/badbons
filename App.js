import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // alterado
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MaterialIcons } from '@expo/vector-icons';  // Importando o ícone do MaterialIcons


// Importação correta dos componentes com exportação default
import LoginScreen from './src/screen/LoginScreen';
import Home from './src/screen/HomeScreen';
import InitialScreen from './src/screen/InitAppScreen';
import SessoesScreen from './src/screen/SessoesScreen';
import RankingScreen from './src/screen/RankingScreen';
import DesafiosScreen from './src/screen/DesafiosScreen';
import PerfilScreen from './src/screen/PerfilScreen';
import SmashScreen from './src/screen/SmashScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Navegação por abas
export const TabNavigate = () => {
    return (
        <Tab.Navigator
            initialRouteName='Desafios'
            screenOptions={{
                tabBarActiveTintColor: "#ccc",
                tabBarStyle: { backgroundColor: 'rgb(28,28,30)' },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: () => <Icon name="home" size={20} color="#909090" />,
                }}
            />

            <Tab.Screen
                name='Sessões'
                component={SessoesScreen}
                options={{
                    tabBarIcon: () => <Icon name="calendar" size={20} color="#909090" />,
                }}
            />

            <Tab.Screen
                name='Ranking'
                component={RankingScreen}
                options={{
                    tabBarIcon: () => <Icon name="trophy" size={20} color="#909090" />,
                }}
            />

            <Tab.Screen
                name='Desafios'
                component={DesafiosScreen}
                options={{
                    tabBarIcon: () => <Icon name="fire" size={20} color="#909090" />,
                }}
            />

            <Tab.Screen
                name='Perfil'
                component={PerfilScreen}
                options={{
                    tabBarIcon: () => <Icon name="user" size={20} color="#909090" />,
                }}
            />
        </Tab.Navigator>
    );
};

// Navegação por pilha (Stack)
export const StackNavigate = () => {
    return (
        //!Switch the initialRouteName to "Initial" tô get things back to normal.
        <Stack.Navigator initialRouteName='HomeTabs'>
            <Stack.Screen
                name='Initial'
                component={InitialScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Login'
                component={LoginScreen}  // Uso correto de LoginScreen
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='HomeTabs'
                component={TabNavigate}  // Navegação por abas
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Smash"
                component={SmashScreen}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    );
};

// Componente App para envolver tudo em um NavigationContainer
export default function App() {
    return (
        <NavigationContainer>
            <StackNavigate />  {/* Chamando a navegação por pilha */}
        </NavigationContainer>
    );
}
