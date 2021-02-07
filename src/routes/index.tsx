import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from '../hooks/theme';

import Dashboard from '../pages/Dashboard';
import Loading from '../pages/Loading';
import Settings from '../pages/Settings';
import CreditCard from '../pages/CreditCard';

const App = createStackNavigator();

const Routes: React.FC = () => {
  const [cont, setCont] = useState(0);

  const { theme } = useTheme();

  useEffect(() => {
    const loading = setTimeout(() => {
      setCont(2);
    }, 2000);

    return () => clearTimeout(loading);
  }, []);

  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={theme === 'light' ? '#8a05be' : 'black'}
      />
      <View style={{ flex: 1, backgroundColor: '#8a05be' }}>
        {cont < 1 ? (
          <Loading />
        ) : (
          <App.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <App.Screen name="dashboard" component={Dashboard} />
            <App.Screen name="settings" component={Settings} />
            <App.Screen name="credit-card" component={CreditCard} />
          </App.Navigator>
        )}
      </View>
    </>
  );
};

export default Routes;
