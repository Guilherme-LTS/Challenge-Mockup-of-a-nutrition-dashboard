import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../../../components/Card';
import { MealItem } from '../../../types/nutrition.types';
import { theme } from '../../../theme';

interface MealItemCardProps {
  meal: MealItem;
}

export const MealItemCard = ({ meal }: MealItemCardProps) => {
  return (
    <Card style={styles.cardLayout}>
      <View style={styles.leftContent}>
        <Text style={styles.title}>{meal.name}</Text>
        {meal.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>
            {ingredient}
          </Text>
        ))}
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.calories}>{meal.calories} kcal</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20, // Pouco mais de respiro como no mockup
  },
  leftContent: {
    flex: 1,
    justifyContent: 'center',
  },
  rightContent: {
    justifyContent: 'flex-end',
    paddingBottom: 2, // Alinhar texto de calorias com a base
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: theme.colors.textPrimary,
    marginBottom: 6,
  },
  ingredient: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    marginBottom: 2,
  },
  calories: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.textPrimary,
  },
});
