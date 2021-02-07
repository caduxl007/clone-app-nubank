import React, { useEffect, useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Loading from '../pages/Loading';
import Settings from '../pages/Settings';

const App = createStackNavigator();

const Routes: React.FC = () => {
  const [cont, setCont] = useState(4);

  useEffect(() => {
    const loading = setTimeout(() => {
      setCont(2);
    }, 2000);

    return () => clearTimeout(loading);
  }, []);

  return (
    <>
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
        </App.Navigator>
      )}
    </>
  );
};

export default Routes;
