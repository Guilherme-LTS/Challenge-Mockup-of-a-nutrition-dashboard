import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../../../components/Card';
import { theme } from '../../../theme';
import { Heart } from 'lucide-react-native';

interface FoodsTabContentProps {
  favoriteFoods: string[];
}

export const FoodsTabContent = ({ favoriteFoods }: FoodsTabContentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>FAVORITE FOODS</Text>
      
      <View style={styles.grid}>
        {favoriteFoods.map((food, index) => (
          <Card key={index} style={styles.foodCard}>
            <Heart size={20} color="#EF4444" fill="#EF4444" style={styles.icon} />
            <Text style={styles.foodName}>{food}</Text>
          </Card>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.textPrimary,
    letterSpacing: 0.5,
    marginBottom: theme.spacing.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  foodCard: {
    width: '48%',
    alignItems: 'center',
    paddingVertical: 24,
    marginBottom: theme.spacing.md,
  },
  icon: {
    marginBottom: 12,
  },
  foodName: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.textPrimary,
    textAlign: 'center',
  }
});
