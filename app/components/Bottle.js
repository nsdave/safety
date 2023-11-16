import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const RAWSIZE = Dimensions.get('window').width
const SIZE = RAWSIZE / 2.35


const Bottle = ({ name, icon, onPress }) => {
  const [active, setActive] = useState(false)
  const [second, setSecond] = useState(false)
  const navigation = useNavigation()

  const tommy = () => {
    setSecond(true);
    setActive(false);
    setTimeout(() => setSecond(false), 2000)
  }

  return (
    <TouchableOpacity 
    activeOpacity={0.8}
    onPress={() => setActive((prev) => !prev)}
    style={styles.body} >
        <Text style={{ fontSize: 30}} >{icon}</Text>
        <Text style={styles.txt} >{name}</Text>


        <Modal
        transparent
        animationType='slide'
        visible={active}
        >
          <Pressable
          onPress={() => setActive((prev) => !prev)}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}
          >
            <View style={styles.hover} >
              <TouchableOpacity 
              onPress={() => tommy()}
              activeOpacity={0.6}
              style={styles.hoverbox} >
                <Text style={styles.hovertxt} >Prompt</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              onPress={() => {
                setActive(false);
                navigation.navigate('detail')
              }}
              activeOpacity={0.6}
              style={styles.hoverbox} >
                <Text style={styles.hovertxt} >Detailed</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>

        <Modal
        transparent
        visible={second}
        animationType='fade'
        >
          <View
          style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
          >
            <View style={styles.noti} >
              <Text style={styles.notitxt} >Your prompt alert has been sent</Text>
            </View>
          </View>
        </Modal>
    </TouchableOpacity>
  )
}

export default Bottle

const styles = StyleSheet.create({
    body: {
        width: SIZE,
        height: SIZE,
        paddingTop: 25,
        paddingBottom: 14,
        paddingHorizontal: 18,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'flex-start',
        // justifyContent: 'center',
        // backgroundColor: '#F6F5FD',
        backgroundColor: 'whitesmoke',
        elevation: 2,
    },
    txt: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 12,
        letterSpacing: 0.4
    },
    hover: {
      width: '85%', 
      height: '13%', 
      marginBottom: '6%',
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 24,
      backgroundColor: 'rgba(0,0,0,0.8)'
    },
    hoverbox: {
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 8,
      backgroundColor: 'rgba(255,255,255,0.3)'
    },
    hovertxt: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold'
    },
    noti: {
      width: '90%',
      height: 60,
      marginTop: '2%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      backgroundColor: '#50C878'
    },
    notitxt: {
      fontSize: 16.5,
      fontWeight: '500'
    }
})