import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from './Dashboard'
import Login from './Login'
import SignUp from './SignUp'
import Detailed from './Detailed'
import LoginAdmin from './LoginAdmin'
import AdminHome from './AdminHome'
import RecentNews from './RecentNews'

const Stack = createNativeStackNavigator()

const NavigationTree = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false, animation: 'slide_from_right'
    }} 
    >
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='dash' component={Dashboard} />
        <Stack.Screen name='sign' component={SignUp} />
        <Stack.Screen name='logadmin' component={LoginAdmin} />
        <Stack.Screen name='admin' component={AdminHome} />
        <Stack.Screen name='detail' component={Detailed} 
        options={{ headerShown: true, headerTitle: '' }} />
        <Stack.Screen name='news' component={RecentNews}
        options={{ headerShown: true, title: '' }} 
        />
    </Stack.Navigator>
  )
}

export default NavigationTree

const styles = StyleSheet.create({})