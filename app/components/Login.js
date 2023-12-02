import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignButton from './SignButton'
import InputBody from './InputBody'

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }} >
      <View style={styles.top} >
        <Text 
        style={styles.toptxt} 
        >
        <Text style={[styles.toptxt, { fontSize: 46 }]} >S</Text>tudent Safety
        </Text>
      </View>

      <View style={styles.bottom} >
        <Text style={styles.bottomhtxt} >Login</Text>

        <View style={styles.inputcase} >
          <InputBody 
          title={'Email'}
          place={'Enter your email'}
          />
          <InputBody 
          title={'Password'}
          place={'Enter your password'}
          entry={true}
          />
        </View>

        <SignButton 
        name={'Login'}
        onPress={() => navigation.navigate('dash')}
        />
        <Text 
        onPress={() => navigation.navigate('sign')}
        style={styles.dont} >Don't have an account? Sign Up</Text>
        <Text
        onPress={() => navigation.navigate('logadmin')}
        style={styles.admintxt}
        >
          Admin login
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toptxt: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 36,
    color: 'white',
    letterSpacing: 0.6
  },
  bottom: {
    height: '70%',
    borderTopLeftRadius: 60,
    paddingHorizontal: 34,
    backgroundColor: 'white'
  },
  bottomhtxt: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '13%',
    marginBottom: '14%'
  },
  inputcase: {
    gap: 25,
    marginBottom: 46
  },
  dont: {
    marginTop: '15%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  admintxt: {
    marginTop: '8.5%',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
    color: 'gray'
  }
})