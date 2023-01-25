import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import { Context } from '../context/Context'

const Navigation = () => {
    const {token} = useContext(Context)
  return (
    <NavigationContainer>
      {token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Navigation