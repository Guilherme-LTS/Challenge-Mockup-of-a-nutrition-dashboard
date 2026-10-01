export interface MacroNutrientGoal {
  current: number;
  target: number;
}

export interface MacroSummary {
  protein: MacroNutrientGoal;
  carbs: MacroNutrientGoal;
  fat: MacroNutrientGoal;
}

export interface CalorieData {
  dailyGoal: number;
  consumed: number;
  remaining: number;
  percentCompleted: number;
}

export interface MealItem {
  id: string;
  name: string;
  ingredients: string[];
  calories: number;
}

export interface UserProfile {
  name: string;
  email: string;
  age: number;
  weight: number;
  targetWeight: number;
  plan: string;
}

export interface HistoryDay {
  date: string;
  consumed: number;
  goal: number;
  status: 'under' | 'over' | 'perfect';
}

export type DashboardTab = 'TODAY' | 'HISTORY' | 'FOODS' | 'SETTINGS';

export interface NutritionDashboardState {
  dateLabel: string;
  activeTab: DashboardTab;
  calories: CalorieData;
  macros: MacroSummary;
  meals: MealItem[];
  userProfile: UserProfile;
  history: HistoryDay[];
  favoriteFoods: string[];
}
