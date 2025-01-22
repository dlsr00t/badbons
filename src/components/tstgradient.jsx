import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const TestComponent = () => {
  return(
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['red', 'blue']}
        style={{ flex: 1 }}
      />
      
    </View>
  );
}

