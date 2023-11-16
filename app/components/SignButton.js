import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const SignButton = ({ name, onPress }) => {
  return (
    <TouchableOpacity
    style={styles.case}
    activeOpacity={0.8}
    onPress={onPress}
    >
      <Text style={styles.txt} >{name}</Text>
    </TouchableOpacity>
  )
}

export default SignButton

const styles = StyleSheet.create({
    case: {
        width: '100%',
        height: 60,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    txt: {
        fontSize: 19,
        color: 'white',
        letterSpacing: 0.8
    }
})