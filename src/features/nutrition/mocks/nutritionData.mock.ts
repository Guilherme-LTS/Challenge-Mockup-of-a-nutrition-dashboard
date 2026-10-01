import { NutritionDashboardState } from '../../../types/nutrition.types';

export const mockDashboardData: NutritionDashboardState = {
  dateLabel: 'MON, FEB 2',
  activeTab: 'TODAY',
  calories: {
    dailyGoal: 2200,
    consumed: 1650,
    remaining: 550,
    percentCompleted: 75, // 1650/2200 = 75%
  },
  macros: {
    protein: { current: 130, target: 160 },
    carbs: { current: 150, target: 200 },
    fat: { current: 45, target: 60 },
  },
  meals: [
    {
      id: '1',
      name: 'Greek Yogurt Bowl',
      ingredients: ['Greek Yogurt', 'Honey', 'Chia Seeds', 'Blueberries'],
      calories: 320,
    },
    {
      id: '2',
      name: 'Salmon & Quinoa',
      ingredients: ['Wild Salmon', 'Quinoa', 'Asparagus', 'Lemon'],
      calories: 580,
    },
    {
      id: '3',
      name: 'Protein Shake',
      ingredients: ['Whey Isolate', 'Almond Milk', 'Peanut Butter'],
      calories: 250,
    },
    {
      id: '4',
      name: 'Avocado Toast',
      ingredients: ['Sourdough', 'Avocado', 'Poached Egg'],
      calories: 500,
    },
  ],
  userProfile: {
    name: 'Guilherme',
    email: 'gui@example.com',
    age: 28,
    weight: 78.5,
    targetWeight: 75.0,
    plan: 'Muscle Gain & Tone',
  },
  history: [
    { date: 'Sun, Feb 1', consumed: 2100, goal: 2200, status: 'perfect' },
    { date: 'Sat, Jan 31', consumed: 2500, goal: 2200, status: 'over' },
    { date: 'Fri, Jan 30', consumed: 1950, goal: 2200, status: 'under' },
    { date: 'Thu, Jan 29', consumed: 2210, goal: 2200, status: 'perfect' },
  ],
  favoriteFoods: [
    'Oatmeal', 'Chicken Breast', 'Broccoli', 'Sweet Potato', 'Olive Oil', 'Whey Protein'
  ]
};
