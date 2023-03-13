import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './src/config/Navigation/AuthNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default App;
