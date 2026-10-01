import React from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { DashboardHeader } from '../features/nutrition/components/DashboardHeader';
import { CalorieOverview } from '../features/nutrition/components/CalorieOverview';
import { TabNavigation } from '../features/nutrition/components/TabNavigation';
import { MealItemCard } from '../features/nutrition/components/MealItemCard';
import { AddMealCard } from '../features/nutrition/components/AddMealCard';
import { Button } from '../components/Button';
import { useNutritionDashboard } from '../features/nutrition/hooks/useNutritionDashboard';
import { theme } from '../theme';

import { HistoryTabContent } from '../features/nutrition/components/HistoryTabContent';
import { FoodsTabContent } from '../features/nutrition/components/FoodsTabContent';
import { SettingsTabContent } from '../features/nutrition/components/SettingsTabContent';

import { TabFadeContainer } from '../components/TabFadeContainer';

export const NutritionDashboardScreen = () => {
  const { data, isLoading, changeTab } = useNutritionDashboard();

  if (isLoading || !data) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  const renderTabContent = () => {
    switch (data.activeTab) {
      case 'TODAY':
        return (
          <View style={styles.bodySection}>
            <Text style={styles.sectionTitle}>MEALS</Text>
            {data.meals.map((meal) => (
              <MealItemCard key={meal.id} meal={meal} />
            ))}
            <AddMealCard onPress={() => console.log('Add meal pressed')} />
          </View>
        );
      case 'HISTORY':
        return <HistoryTabContent history={data.history} />;
      case 'FOODS':
        return <FoodsTabContent favoriteFoods={data.favoriteFoods} />;
      case 'SETTINGS':
        return <SettingsTabContent profile={data.userProfile} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
      >
        {/* Top Section - Light Mint Background */}
        <View style={styles.topSection}>
          <DashboardHeader dateLabel={data.dateLabel} />
          <CalorieOverview calories={data.calories} macros={data.macros} />
          <TabNavigation activeTab={data.activeTab} onTabChange={changeTab} />
        </View>

        {/* Body Section - Dynamic Tab Content with Animation */}
        <TabFadeContainer activeKey={data.activeTab}>
          {renderTabContent()}
        </TabFadeContainer>
      </ScrollView>

      {/* Floating Log Food Button */}
      <View style={styles.floatingButtonContainer}>
        <Button 
          title="LOG FOOD" 
          onPress={() => console.log('Log food')} 
          style={styles.logButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingBottom: 100, // Espaço para o botão flutuante
  },
  topSection: {
    backgroundColor: theme.colors.primaryLight,
  },
  bodySection: {
    padding: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.textPrimary,
    letterSpacing: 0.5,
    marginBottom: theme.spacing.md,
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: theme.spacing.xl,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logButton: {
    paddingHorizontal: 48,
  },
});
