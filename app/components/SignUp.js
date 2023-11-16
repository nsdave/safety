import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import InputBody from './InputBody'
import SignButton from './SignButton'

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }} >
      <View style={styles.top} >
        <AntDesign 
        name='arrowleft' 
        size={30} 
        color={'white'} 
        style={{ marginLeft: 14, marginTop: 4 }}
        onPress={() => navigation.goBack()}
        />
        <Text 
        style={styles.toptxt} 
        ><Text style={[styles.toptxt, { fontSize: 42 }]} >S</Text>ign Up</Text>
      </View>

      <View style={styles.bottom} >
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
          <View style={styles.inputcase} >
            <InputBody 
            title={'Full Name'}
            place={'Enter your full name'}
            />
            <InputBody 
            title={'Phone Number'}
            place={"What's your phone number"}
            />
            <InputBody 
            title={'Email'}
            place={'Include your email'}
            />
            <InputBody 
            title={'Address'}
            place={'Please include your home address'}
            />
            <InputBody 
            title={'Matric Number'}
            place={'Enter your matric number'}
            />
            <InputBody 
            title={'Password'}
            place={'Enter your password'}
            entry={true}
            />
            <InputBody 
            title={'Confirm Password'}
            place={'Confirm your password'}
            entry={true}
            />
          </View>

          <SignButton 
          name={'Sign Up'}
          />
          <Text 
          onPress={() => navigation.goBack()}
          style={styles.dont} 
          >Already have an account ? Login</Text>

        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: '19%',
    alignItems: 'center',
    flexDirection: 'row'
  },
  toptxt: {
    fontSize: 38,
    width: '77%',
    textAlign: 'center',
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  bottom: {
    width: '100%',
    height: '81%',
    paddingTop: 50,
    // paddingBottom: 30,
    borderTopLeftRadius: 60,
    paddingHorizontal: 34,
    backgroundColor: 'white'
  },
  inputcase: {
    gap: 26,
    marginBottom: 52
  },
  dont: {
    marginTop: '15.4%',
    marginBottom: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  }
})