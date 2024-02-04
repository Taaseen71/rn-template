import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';


function App(): JSX.Element {
 
  return (
      <NavigationContainer>
            <Navigation />
      </NavigationContainer>
  );
}


export default App;
