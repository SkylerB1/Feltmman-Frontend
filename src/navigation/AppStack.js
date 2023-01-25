import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chat from '../screens/AppScreens/Chat';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default AppStack;
