import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CircularGauge } from '../../../components/CircularGauge';
import { MacroRow } from './MacroRow';
import { CalorieData, MacroSummary } from '../../../types/nutrition.types';
import { theme } from '../../../theme';

interface CalorieOverviewProps {
  calories: CalorieData;
  macros: MacroSummary;
}

export const CalorieOverview = ({ calories, macros }: CalorieOverviewProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.gaugeContainer}>
        <CircularGauge 
          percentage={calories.percentCompleted} 
          caloriesLeft={calories.remaining} 
        />
      </View>
      
      <View style={styles.macrosContainer}>
        <MacroRow 
          label="Protein" 
          current={macros.protein.current} 
          target={macros.protein.target} 
          hideBar // No design, protein appears without a progress bar, or maybe it just looks like text
        />
        <MacroRow 
          label="Carbs" 
          current={macros.carbs.current} 
          target={macros.carbs.target} 
        />
        <MacroRow 
          label="Fat" 
          current={macros.fat.current} 
          target={macros.fat.target} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
  gaugeContainer: {
    flex: 1,
    alignItems: 'center',
  },
  macrosContainer: {
    flex: 1,
    paddingLeft: theme.spacing.md,
    justifyContent: 'center',
  },
});
