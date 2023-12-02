import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const RCard = ({ txt }) => {
  return (
    <TouchableOpacity 
    activeOpacity={0.6}
    style={styles.body} >
      <Text style={styles.txt} >
        {txt}
      </Text>
    </TouchableOpacity>
  )
}

export default RCard

const styles = StyleSheet.create({
    body: {
        minHeight: 100,
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 18,
        backgroundColor: '#DCDCDC'
    },
    txt: {
        fontSize: 17,
        fontWeight: '400'
    }
})