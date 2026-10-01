import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Plus } from 'lucide-react-native';
import { Card } from '../../../components/Card';
import { theme } from '../../../theme';

interface AddMealCardProps {
  onPress?: () => void;
}

export const AddMealCard = ({ onPress }: AddMealCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Card style={styles.cardLayout}>
        <View style={styles.iconContainer}>
          <Plus size={20} color={theme.colors.white} />
        </View>
        <Text style={styles.label}>Add Meal</Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    marginBottom: theme.spacing.xl, // Espaço extra antes do bottom CTA
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: theme.radii.circular,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    fontWeight: '500',
  },
});
