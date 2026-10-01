import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NutritionDashboardScreen } from './src/screens/NutritionDashboardScreen';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#EAF5EE" />
      <NutritionDashboardScreen />
    </SafeAreaProvider>
  );
}
