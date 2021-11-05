import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shopping from './components/shop';
import CartList from './components/cart';
import Homepage from './components/welcome';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{
            title: " ",
            headerStyle: {
              backgroundColor: "white",
              headerShown:false,
              headerTintColor:'white',

            },
          }}
        />
        <Stack.Screen name="Shop" component={Shopping}  options={{ headerTintColor:'white', headerShown:false}} />

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

