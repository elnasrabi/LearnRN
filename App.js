import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Cat from './MyComponent';
import { Dog } from './Dog-Screen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen
          name="Cat"
          component={Cat}
          options={{ CatName: 'Katttty' }}
        />
        <Stack.Screen name="Dog" component={Dog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;