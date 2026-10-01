import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../../../components/Card';
import { UserProfile } from '../../../types/nutrition.types';
import { theme } from '../../../theme';
import { User, Mail, Target, Award } from 'lucide-react-native';

interface SettingsTabContentProps {
  profile: UserProfile;
}

export const SettingsTabContent = ({ profile }: SettingsTabContentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>MY PROFILE</Text>
      
      <Card style={styles.card}>
        <View style={styles.row}>
          <User size={20} color={theme.colors.primary} />
          <View style={styles.info}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{profile.name} ({profile.age} yrs)</Text>
          </View>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.row}>
          <Mail size={20} color={theme.colors.primary} />
          <View style={styles.info}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{profile.email}</Text>
          </View>
        </View>

        <View style={styles.divider} />
        
        <View style={styles.row}>
          <Target size={20} color={theme.colors.primary} />
          <View style={styles.info}>
            <Text style={styles.label}>Weight Goal</Text>
            <Text style={styles.value}>Current: {profile.weight}kg ➔ Target: {profile.targetWeight}kg</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Award size={20} color={theme.colors.primary} />
          <View style={styles.info}>
            <Text style={styles.label}>Active Plan</Text>
            <Text style={styles.value}>{profile.plan}</Text>
          </View>
        </View>
      </Card>
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
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  info: {
    marginLeft: 16,
  },
  label: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    marginBottom: 4,
  },
  value: {
    fontSize: 15,
    fontWeight: '500',
    color: theme.colors.textPrimary,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.trackLight,
    marginHorizontal: 8,
  }
});
