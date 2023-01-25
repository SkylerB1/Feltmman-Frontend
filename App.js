import { StyleSheet,Text} from 'react-native'
import React from 'react'
import { ContextProvider } from './src/context/Context';
import Navigation from './src/navigation/Navigation';


const App = () => {
  return (
    <ContextProvider>
      <Navigation/>
    </ContextProvider>
  );
}

export default App

const styles = StyleSheet.create({})