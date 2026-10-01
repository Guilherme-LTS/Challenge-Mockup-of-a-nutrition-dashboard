import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

interface TabFadeContainerProps {
  children: React.ReactNode;
  activeKey: string;
}

export const TabFadeContainer = ({ children, activeKey }: TabFadeContainerProps) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(15)).current;

  useEffect(() => {
    // Reseta os valores para o início da animação
    opacity.setValue(0);
    translateY.setValue(15);

    // Inicia a animação de fade in + slide up
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }),
    ]).start();
  }, [activeKey, opacity, translateY]);

  return (
    <Animated.View style={[styles.container, { opacity, transform: [{ translateY }] }]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
