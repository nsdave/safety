import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const InputBody = ({ title, place, entry }) => {
    const [active, setActive] = useState(false)

  return (
    <View 
    style={[
        styles.body, 
        { borderColor: active ? 'black' : 'white' }
    ]} 
    >
      <Text style={styles.txt} >{title}</Text>
      <TextInput
      style={styles.input}
      cursorColor={'black'}
      placeholder={place}
      onFocus={() => setActive(true)}
      secureTextEntry={entry}
      placeholderTextColor={'gray'}
      />
    </View>
  )
}

export default InputBody

const styles = StyleSheet.create({
    body: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 17,
        flexDirection: 'column',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        // backgroundColor: '#F6F5FD'
        backgroundColor: 'white'
    },
    txt: {
        fontSize: 19,
        fontWeight: 'bold',
        letterSpacing: 0.,
        marginBottom: 2
    },
    input: {
        color: 'black',
        fontSize: 17
    }
})