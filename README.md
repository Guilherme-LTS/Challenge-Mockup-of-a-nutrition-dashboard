# NutriTrack Dashboard - Nutrition App Challenge 🍃

Welcome to the **NutriTrack Dashboard**, a pixel-perfect React Native implementation of a nutrition tracking interface. This project was built as part of a technical challenge to demonstrate clean architecture, precise UI layout translation, and advanced TypeScript usage.

## 🎯 Architecture & Engineering Decisions

As requested, the focus of this implementation is on **code quality, maintainability, and scalability**. 

### 1. Clean Component Architecture
The project follows a **Feature-Driven Architecture** combined with the **Container-Presenter Pattern**:
- **UI Primitives (`src/components/`)**: Pure, atomic components (`Card`, `Button`, `ProgressBar`, `CircularGauge`).
- **Feature Modules (`src/features/nutrition/`)**: Domain-specific components that compose the dashboard.
- **Custom Hooks (`useNutritionDashboard`)**: Business logic, data fetching simulations, and state management are strictly separated from UI components.

### 2. Design System & Theming
Instead of hardcoding colors and spacing, the app uses a **Design Tokens System** (`src/theme/`):
- Consistent color palette matching the provided mockup.
- Standardized spacing and typography metrics.
- Centralized shadow and elevation tokens for cross-platform fidelity.

### 3. Strict TypeScript
- **No `any` types**. 
- Robust domain models in `src/types/nutrition.types.ts` (`MealItem`, `MacroNutrientGoal`, etc.).
- Strict typing for all component props to ensure self-documenting code and safe refactoring.

### 4. Pixel-Perfect UI Layout
- **SVG Circular Gauge**: Implemented natively using `react-native-svg` to ensure crisp rendering of the calorie arc on any screen density.
- Accurate paddings, rounded corners (`radii.md`), and soft shadows to match the modern aesthetic of the mockup.

---

## ⚠️ Important Note regarding Expo vs. Bare React Native CLI

The challenge requested: *"show this screen in React Native CLI using TypeScript"*.

However, **my development environment is Windows, and my testing device is an iPhone.**
Apple restricts the compilation of native iOS apps (Bare Workflow / React Native CLI) strictly to macOS environments. 

To ensure I could deliver the highest quality UI and show it to you running live on a physical device during our call, I chose to initialize the project using **Expo**. 

**However, the architecture was explicitly designed to be completely agnostic to Expo.** There are no proprietary Expo APIs used in the core components, meaning this code is 100% compatible with a Bare React Native CLI project.

---

## 🚀 Running the App

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Expo development server:
   ```bash
   npx expo start
   ```

3. Open the app:
   - Scan the QR code using the **Expo Go** app on your iPhone or Android.
   - Press `a` to open in Android Emulator (if installed).
   - Press `i` to open in iOS Simulator (Mac only).

---

## ⏱️ Development Time Estimate

**"How fast can you create screens such as this?"**
- To build this specific screen from absolute scratch (including defining the design system tokens, building SVG components, creating strict TypeScript interfaces, setting up a mock data layer, and handling cross-platform UI differences): **~1.5 to 2 hours**.
- If working within an already established codebase that has a robust UI component library (Design System already in place): **~30 to 45 minutes**.

---
*Developed with dedication by Guilherme.*