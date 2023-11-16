import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './app/components/Dashboard';
import NavigationTree from './app/components/NavigationTree';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTree />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
