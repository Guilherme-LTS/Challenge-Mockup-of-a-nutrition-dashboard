import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../../../components/Card';
import { HistoryDay } from '../../../types/nutrition.types';
import { theme } from '../../../theme';
import { CheckCircle2, AlertCircle, ArrowDownCircle } from 'lucide-react-native';

interface HistoryTabContentProps {
  history: HistoryDay[];
}

export const HistoryTabContent = ({ history }: HistoryTabContentProps) => {
  
  const getStatusIcon = (status: HistoryDay['status']) => {
    switch(status) {
      case 'perfect': return <CheckCircle2 size={24} color={theme.colors.primary} />;
      case 'over': return <AlertCircle size={24} color="#EF4444" />; // Red
      case 'under': return <ArrowDownCircle size={24} color="#F59E0B" />; // Orange/Yellow
    }
  };

  const getStatusText = (status: HistoryDay['status']) => {
    switch(status) {
      case 'perfect': return 'On Goal';
      case 'over': return 'Over Goal';
      case 'under': return 'Under Goal';
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>PAST 7 DAYS</Text>
      
      {history.map((day, index) => (
        <Card key={index} style={styles.card}>
          <View style={styles.left}>
            {getStatusIcon(day.status)}
            <View style={styles.dateInfo}>
              <Text style={styles.date}>{day.date}</Text>
              <Text style={styles.status}>{getStatusText(day.status)}</Text>
            </View>
          </View>
          <View style={styles.right}>
            <Text style={styles.consumed}>{day.consumed} kcal</Text>
            <Text style={styles.goal}>/ {day.goal}</Text>
          </View>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.textPrimary,
    letterSpacing: 0.5,
    marginBottom: theme.spacing.md,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateInfo: {
    marginLeft: 12,
  },
  date: {
    fontSize: 15,
    fontWeight: '500',
    color: theme.colors.textPrimary,
    marginBottom: 4,
  },
  status: {
    fontSize: 13,
    color: theme.colors.textSecondary,
  },
  right: {
    alignItems: 'flex-end',
  },
  consumed: {
    fontSize: 15,
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  goal: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    marginTop: 2,
  }
});
