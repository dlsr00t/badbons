import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from './constants';

// Salvar dados
export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('Dados salvos com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
  }
};

// Ler dados
export const readData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Erro ao ler dados:', error);
    return null;
  }
};

// Remover dados
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Dados removidos com sucesso!');
  } catch (error) {
    console.error('Erro ao remover dados:', error);
  }
};

// Exemplo de uso específico
export const saveUserToken = async (token) => {
  await saveData(STORAGE_KEYS.USER_TOKEN, token);
};

export const getUserToken = async () => {
  return await readData(STORAGE_KEYS.USER_TOKEN);
};