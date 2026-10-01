# 🏗️ Blueprint de Arquitetura — NutriTrack Dashboard
**Projeto:** Nutrition Dashboard Mockup  
**Stack Principal:** React Native CLI + TypeScript  
**Nível de Entrega:** Sênior / Production-Grade  

---

## 1. 🎯 Objetivos do Desafio & Critérios de Avaliação

| Critério Avaliado | O que os avaliadores esperam | O que nós vamos entregar |
| :--- | :--- | :--- |
| **Clean Component Architecture** | Divisão lógica entre apresentação e regras, sem componentes gigantescos de 500 linhas. | **Container/Presenter** + **Atomic/Feature Design**: componentes atômicos puros e um custom hook (`useNutritionDashboard`) que encapsula a lógica e o estado. |
| **Accurate UI Layout** | Fidelidade ao design (cores, sombras, espaçamentos, progress bar circular e linear). | Sistema de **Design Tokens** (cores exatas extraídas do mockup, tipografia, elevações) e SVG nativo via `react-native-svg`. |
| **Correct TypeScript Usage** | Tipagem sólida em modelos de dados e propriedades de componentes. | Modelos de Domínio (`Meal`, `MacroNutrient`, `DailyNutritionGoal`, `DashboardState`), sem uso de `any`, com tipos imutáveis e inferência precisa. |
| **Profissionalismo & README** | Clareza de setup, boas práticas de engenharia e facilidade para rodar. | README estilo showcase com badges, screenshots comparativas, instruções para iOS/Android, trade-offs de engenharia e guia de arquitetura. |

---

## 2. 🧱 Arquitetura de Pastas (Feature-Driven / Clean Separation)

A organização recomendada para projetos escaláveis em React Native:

```plaintext
nutritrack-dashboard/
├── .github/                      # CI/CD workflows (lint, typecheck)
├── src/
│   ├── assets/                   # Ícones vetoriais / SVGs / Imagens estáticas
│   │   └── icons/                # LeafIcon, PlusIcon, FlameIcon, etc.
│   │
│   ├── theme/                    # 🎨 Design Tokens (Single Source of Truth)
│   │   ├── colors.ts             # Paleta extraída do mockup (tons de verde, neutros, sombras)
│   │   ├── typography.ts         # Tamanhos, pesos e lineHeights padronizados
│   │   ├── spacing.ts            # Escala de espaçamento (4, 8, 12, 16, 24, 32...)
│   │   ├── shadows.ts            # Sombras suaves para iOS e elevation para Android
│   │   └── index.ts              # Export unificado do tema
│   │
│   ├── types/                    # 📐 Interfaces TypeScript globais & de domínio
│   │   ├── nutrition.types.ts    # Entidades: Meal, Ingredient, MacroNutrients, CalorieSummary
│   │   └── theme.types.ts        # Tipagem estrita dos tokens de design
│   │
│   ├── components/               # 🧩 Componentes Reutilizáveis (UI Primitives)
│   │   ├── Card.tsx              # Card base com padding e sombra padronizados
│   │   ├── Button.tsx            # Botões (ex: "LOG FOOD" pill button com gradiente/sombra)
│   │   ├── ProgressBar.tsx       # Barra de progresso linear arredondada (Carbs, Fat)
│   │   └── CircularGauge.tsx     # Gráfico circular de calorias (SVG com arco e porcentagem)
│   │
│   ├── features/nutrition/       # 🚀 Feature Modular: Nutrition Dashboard
│   │   ├── components/
│   │   │   ├── DashboardHeader.tsx    # Header ("NutriTrack" + Data/Hora)
│   │   │   ├── CalorieOverview.tsx    # Seção combinada: Gráfico circular + Macros à direita
│   │   │   ├── MacroProgressBar.tsx   # Linhas individuais de macro (ex: Carbs 200g/250g)
│   │   │   ├── TabNavigation.tsx      # Abas superiores: TODAY, HISTORY, FOODS, SETTINGS
│   │   │   ├── MealsList.tsx          # Lista/Seção de refeições
│   │   │   ├── MealItemCard.tsx       # Card de item de refeição (Oatmeal, Salad...)
│   │   │   └── AddMealCard.tsx        # Card interativo de adicionar refeição (+)
│   │   ├── hooks/
│   │   │   └── useNutritionDashboard.ts # Custom hook para gerenciar dados, filtros e ações
│   │   └── mocks/
│   │       └── nutritionData.mock.ts  # Mock realista dos dados de teste
│   │
│   ├── screens/
│   │   └── NutritionDashboardScreen.tsx # Screen orquestradora (com ScrollView ou FlatList)
│   │
│   └── utils/                    # 🛠️ Funções utilitárias e formatadores
│       ├── calculations.ts       # Cálculos de porcentagens e calorias restantes
│       └── formatters.ts         # Formatação de gramas, calorias e datas
│
├── App.tsx                       # Entry point com SafeAreaProvider e StatusBar
├── tsconfig.json                 # Configuração de TypeScript estrito e Path Aliases
└── README.md                     # Documentação de alto impacto para os recrutadores
```

---

## 3. 🎨 Decomposição Visual do Mockup (Design System)

### Paleta de Cores e Tokens Identificados:
- **Header Background:** `#EAF5EE` (verde menta pastel suave e elegante)
- **Primary Brand / Active Accent:** `#34A853` / `#2E7D32` (verde folha saudável)
- **Track Progress (fundo das barras):** `#D2EBD9` (verde clarinho desbotado)
- **Body Background:** `#F8F9FA` ou `#F5F7F6` (cinza quase branco)
- **Card Background:** `#FFFFFF`
- **Text Primary:** `#1C1C1E` (quase preto, contraste perfeito)
- **Text Secondary / Subtitles:** `#737A80` (cinza neutro)
- **Card Shadow:** `rgba(0, 0, 0, 0.04)` com `blurRadius: 10`, `elevation: 2` (Android)
- **Border Radius:**
  - Cards: `16px`
  - Pill Buttons (Log Food): `28px`
  - Macro Progress Bars: `6px`

---

## 4. 📐 Modelagem de Tipos TypeScript (`src/types/nutrition.types.ts`)

```typescript
export interface MacroNutrientGoal {
  current: number; // em gramas (ex: 80)
  target: number;  // em gramas (ex: 120)
}

export interface MacroSummary {
  protein: MacroNutrientGoal;
  carbs: MacroNutrientGoal;
  fat: MacroNutrientGoal;
}

export interface CalorieData {
  dailyGoal: number;        // ex: 2000 kcal
  consumed: number;         // ex: 500 kcal
  remaining: number;        // ex: 1500 kcal
  percentCompleted: number; // ex: 75%
}

export interface MealItem {
  id: string;
  name: string;
  ingredients: string[];   // ex: ["2% Milk", "Almonds"]
  calories: number;        // ex: 380
}

export type DashboardTab = 'TODAY' | 'HISTORY' | 'FOODS' | 'SETTINGS';

export interface NutritionDashboardState {
  dateLabel: string;
  activeTab: DashboardTab;
  calories: CalorieData;
  macros: MacroSummary;
  meals: MealItem[];
}
```

---

## 5. ⚡ Pergunta da Entrevista: *"How fast can you create screens such as this?"*

> *"Para uma tela completa como essa em produção — incluindo criação do design system de tokens, componentes modulares (como o medidor circular em SVG e as barras de progresso), tipagem estrita com TypeScript, suporte responsivo a iOS/Android e mock data — eu levo cerca de **1 hora e meia a 2 horas e meia** do zero.*  
> *Se for apenas a composição visual direta já tendo uma biblioteca de componentes base existente, levo entre **30 e 45 minutos**."*
