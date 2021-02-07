import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#8a05be"
      />
      <View style={{ flex: 1, backgroundColor: '#8a05be' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
