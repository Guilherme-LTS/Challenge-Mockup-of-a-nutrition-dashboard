import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from '../../../components/ProgressBar';
import { theme } from '../../../theme';

interface MacroRowProps {
  label: string;
  current: number;
  target: number;
  hideBar?: boolean;
}

export const MacroRow = ({ label, current, target, hideBar = false }: MacroRowProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textRow}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.values}>
          <Text style={styles.current}>{current}g</Text> / {target}g
        </Text>
      </View>
      {!hideBar && (
        <View style={styles.barContainer}>
           <ProgressBar current={current} target={target} height={6} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    width: 140, // Largura controlada para bater com o layout à direita do gauge
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  label: {
    fontSize: 13,
    color: theme.colors.textPrimary,
    fontWeight: '500',
  },
  values: {
    fontSize: 13,
    color: theme.colors.textSecondary,
  },
  current: {
    color: theme.colors.textPrimary,
    fontWeight: '600',
  },
  barContainer: {
    paddingLeft: 40, // Recuo visual para a barra como no design (alinha à direita do label)
  }
});
