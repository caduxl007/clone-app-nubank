import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent />
      <Dashboard />
    </NavigationContainer>
  );
};

export default App;
