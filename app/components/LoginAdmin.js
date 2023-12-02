import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import InputBody from './InputBody'
import SignButton from './SignButton'

const LoginAdmin = ({ navigation }) => {
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
        ><Text style={[styles.toptxt, { fontSize: 42 }]} >A</Text>dmin</Text>
      </View>

      <View style={styles.bottom} >
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
          <View style={styles.inputcase} >
            <InputBody 
            title={'Id'}
            place={'Enter your id'}
            />
            <InputBody 
            title={'Password'}
            place={'Enter your password'}
            entry={true}
            />
          </View>

          <SignButton 
          onPress={() => navigation.navigate('admin')}
          name={'Log in'}
          />

        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

export default LoginAdmin

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