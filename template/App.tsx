import React from 'react';
import Navigation from 'src/navigation';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {
 
  return (
    <ErrorBoundary fallback={'There was an error'}>
      <NavigationContainer>
            <Navigation />
      </NavigationContainer>
    </ErrorBoundary>
  );
}


export default App;
