import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { theme } from '../theme';

interface ProgressBarProps {
  current: number;
  target: number;
  color?: string;
  height?: number;
}

export const ProgressBar = ({ 
  current, 
  target, 
  color = theme.colors.primary, 
  height = 8 
}: ProgressBarProps) => {
  const percentage = Math.min((current / target) * 100, 100);

  return (
    <View style={[styles.track, { height, borderRadius: height / 2 }]}>
      <View 
        style={[
          styles.fill, 
          { 
            width: `${percentage}%`, 
            backgroundColor: color,
            height,
            borderRadius: height / 2,
          }
        ]} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  track: {
    width: '100%',
    backgroundColor: theme.colors.trackLight,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
});
