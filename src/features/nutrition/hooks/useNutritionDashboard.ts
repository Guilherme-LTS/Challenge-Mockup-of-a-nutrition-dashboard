import { useState, useEffect } from 'react';
import { DashboardTab, NutritionDashboardState } from '../../../types/nutrition.types';
import { mockDashboardData } from '../mocks/nutritionData.mock';

export const useNutritionDashboard = () => {
  const [data, setData] = useState<NutritionDashboardState | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulating an API fetch
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Here would be your real API call
        // const response = await api.get('/dashboard');
        
        // Simulating network delay
        setTimeout(() => {
          setData(mockDashboardData);
          setIsLoading(false);
        }, 300);
      } catch (error) {
        console.error('Failed to fetch dashboard data', error);
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const changeTab = (tab: DashboardTab) => {
    if (data) {
      setData({ ...data, activeTab: tab });
    }
  };

  return {
    data,
    isLoading,
    changeTab,
  };
};
