import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Path, Text as SvgText, Defs, Path as DefPath, TextPath } from 'react-native-svg';
import { theme } from '../theme';

interface CircularGaugeProps {
  percentage: number; 
  caloriesLeft: number;
  radius?: number;
  strokeWidth?: number;
}

export const CircularGauge = ({ 
  percentage, 
  caloriesLeft, 
  radius = 65, 
  strokeWidth = 10 
}: CircularGaugeProps) => {
  
  // O espaço extra para o texto flutuar fora do raio do arco
  const textOffset = 22; 
  
  // O centro perfeito do SVG
  const center = radius + strokeWidth + textOffset; 
  const size = center * 2; 
  
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={styles.container}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background Track */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={theme.colors.trackLight}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        
        {/* Progress Arc */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={theme.colors.primary}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          originX={center}
          originY={center}
        />
        
        {/* Curved Text Arc Definition */}
        <Defs>
          <DefPath
            id="curvedTextPath"
            d={`
              M ${center - (radius + 18)},${center}
              a ${radius + 18},${radius + 18} 0 0,1 ${(radius + 18) * 2},0
            `}
          />
        </Defs>
        <SvgText fill={theme.colors.textPrimary} fontSize="12" fontWeight="500">
          <TextPath href="#curvedTextPath" startOffset="50%" textAnchor="middle" >
            {`${percentage}% of daily goal`}
          </TextPath>
        </SvgText>
      </Svg>
      
      {/* Center Labels */}
      <View style={styles.centerTextContainer}>
        <Text style={styles.caloriesText}>{caloriesLeft}</Text>
        <Text style={styles.subtitleText}>kcal left</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  centerTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // Sem padding para ficar exato no centro do círculo (o viewBox já está balanceado)
  },
  caloriesText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
  },
  subtitleText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: -2,
  },
});
