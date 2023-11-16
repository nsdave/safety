import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import SignButton from './SignButton'

const Detailed = () => {
  return (
    <View
    style={styles.body}
    >
        <View style={styles.inputbox} >
            <Text style={styles.inputtxt} >What is the address</Text>
            <TextInput 
            style={styles.input}
            multiline
            cursorColor={'black'}
            />
        </View>

        <View style={styles.inputbox} >
            <Text style={styles.inputtxt} >Describe the incident</Text>
            <TextInput 
            style={[styles.input]}
            multiline
            cursorColor={'black'}
            />
        </View>

        <SignButton 
        name={'Submit'}
        />
    </View>
  )
}

export default Detailed

const styles = StyleSheet.create({
    body: {
        flex: 1, 
        gap: 45,
        paddingVertical: 27,
        paddingHorizontal: 24,
        backgroundColor: 'white'
    },
    inputbox: {
        width: '100%'
    },
    inputtxt: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 2
    },
    input: {
        fontSize: 17,
        borderBottomWidth: 1,
        borderColor: 'black',
    }
})