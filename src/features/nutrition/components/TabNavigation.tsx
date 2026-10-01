import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DashboardTab } from '../../../types/nutrition.types';
import { theme } from '../../../theme';

interface TabNavigationProps {
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
}

const TABS: DashboardTab[] = ['TODAY', 'HISTORY', 'FOODS', 'SETTINGS'];

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <TouchableOpacity 
            key={tab} 
            style={[styles.tab, isActive && styles.activeTab]}
            onPress={() => onTabChange(tab)}
            activeOpacity={0.7}
          >
            <Text style={[styles.text, isActive && styles.activeText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.primaryLight,
    paddingHorizontal: theme.spacing.md,
  },
  tab: {
    paddingVertical: 16,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: theme.colors.primary,
  },
  text: {
    fontSize: 13,
    fontWeight: '500',
    color: theme.colors.textMuted,
    letterSpacing: 0.5,
  },
  activeText: {
    color: theme.colors.primary,
    fontWeight: '600',
  },
});
