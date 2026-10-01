import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Leaf } from 'lucide-react-native';
import { theme } from '../../../theme';

interface DashboardHeaderProps {
  dateLabel: string;
}

export const DashboardHeader = ({ dateLabel }: DashboardHeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top || theme.spacing.lg }]}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{dateLabel}</Text>
      </View>
      <View style={styles.brandContainer}>
        <Text style={styles.brandName}>NutriTrack</Text>
        <Leaf size={24} color={theme.colors.primary} fill={theme.colors.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
  dateContainer: {
    marginBottom: theme.spacing.xl,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.textPrimary,
    letterSpacing: 0.5,
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  brandName: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    letterSpacing: -0.5,
  },
});
