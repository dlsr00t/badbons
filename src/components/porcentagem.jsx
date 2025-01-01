import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

export const CircularProgressBar = ({ percentage }) => {
  const radius = 50; // Raio do círculo
  const strokeWidth = 10; // Largura do traço
  const normalizedRadius = radius - strokeWidth / 2; // Raio ajustado
  const circumference = normalizedRadius * 2 * Math.PI; // Circunferência do círculo

  // Cálculo correto do deslocamento com ponto inicial no topo
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 120,
      width: 120,
    },
  });

  return (
    <View style={styles.container}>
      <Svg height={radius * 2} width={radius * 2}>
        {/* Círculo de Fundo */}
        <Circle
          stroke="#e6e6e6"
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
        />
        {/* Círculo de Progresso */}
        <Circle
          stroke="#646464" // Cor do progresso
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius} ${radius})`} // Ajuste para começar no topo
        />
        {/* Texto de Percentagem */}
        <SvgText
          fill="#646464"
          fontSize="20"
          x={radius}
          y={radius + 7} // Alinhamento vertical
          textAnchor="middle"
        >
          {`${percentage}%`}
        </SvgText>
      </Svg>
    </View>
  );
};



export const StraightProgressBar = ({ percentage, customStyle }) => {

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',

    },
    backgroundBar: {
      width: 100, // Width of the progress bar
      height: 15, // Height of the progress bar
      backgroundColor: '#e6e6e6',
      borderRadius: 10,
      overflow: 'hidden', // Ensures progress bar doesn't overflow
    },
    progressBar: {
      height: '100%',
      backgroundColor: '#646464',
      borderRadius: 10,
    },
    percentageText: {
      marginTop: 10,
      fontSize: 16,
      color: '#646464',
    },
  });
  return (
    <View style={[styles.container, customStyle]}>
      {/* Background Bar */}
      <View style={styles.backgroundBar}>
        {/* Progress Bar */}
        <View style={[styles.progressBar, { width: `${percentage}%` }]} />
      </View>
      {/* //! Percentage Text 
      <Text style={styles.percentageText}>{`${percentage}%`}</Text>
      */}
    </View>
  );
};


