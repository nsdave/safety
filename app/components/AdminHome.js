import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RCard from './RCard'
import { MaterialIcons } from '@expo/vector-icons'

const AdminHome = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'whitesmoke' }} >
        <View style={styles.topstrip} >
            <MaterialIcons 
            name='logout' 
            size={25} 
            color={'white'} 
            onPress={() => navigation.goBack()}
            style={{ marginRight: '24.6%' }}
            />
            <Text style={styles.toptxt} >Dashboard</Text>
        </View>
        <View style={styles.secondlayer} > 
            <Text style={styles.secondtxt} >Reports</Text>
        </View>

        <View style={styles.cards} >
            <RCard 
            txt={"Lorem Ipsum is that it has a more-or-less normal distribution of letters"}
            />
            <RCard 
            txt={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"}
            />
        </View>

    </SafeAreaView>
  )
}

export default AdminHome

const styles = StyleSheet.create({
    topstrip: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingVertical: 20,
        paddingHorizontal: 15,
        flexDirection: 'row'
    },
    toptxt: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 1
    },
    secondlayer: {
        width: '100%',
        paddingTop: 21,
        paddingBottom: 14.5,
        paddingHorizontal: 14,
        alignItems: 'flex-start'
    },
    secondtxt: {
        fontSize: 20,
        fontWeight: '500'
    },
    cards: {
        gap: 15,
        paddingHorizontal: 10
    }
})