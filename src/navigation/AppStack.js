import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chat from '../screens/AppScreens/Chat';
import Contact from '../screens/AppScreens/Contact';
import ContactInfo from '../screens/AppScreens/ContactInfo';
import Setting from '../screens/AppScreens/Setting';
import BlockedList from '../screens/AppScreens/BlockedList';
import Profile from '../screens/AppScreens/Profile/Profile';
import ChangePassword from '../screens/AppScreens/ChangePassword';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="ContactInfo" component={ContactInfo} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Blocked" component={BlockedList} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

export default AppStack;
