import { Pressable, StyleSheet, Text, TouchableOpacity, View, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo, Ionicons } from '@expo/vector-icons'
import Bottle from './Bottle'

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }} >
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.case} 
        >
            <View style={styles.top} >
                <Text style={styles.toptxt} >Hello, Alex</Text>
                <Pressable onPress={() => navigation.goBack()} >
                    <Ionicons name='person' size={28} color={'black'} />
                </Pressable>
            </View>

            <Text style={styles.dashtxt} >Dashboard</Text>

            <Pressable style={styles.recent} >
                <View style={styles.recenttxtcase} >
                    <Text 
                    style={styles.recenttxt} 
                    >Recent News</Text>
                    <Entypo name='chevron-right' color={'whitesmoke'} size={21} />
                </View>
            </Pressable>

            <Text style={styles.destxt} >What troubles you ?</Text>
            <View style={styles.middle} >
                <Bottle
                name={'Robbery'} 
                icon={'🥷🏾'}
                />
                <Bottle
                name={'Health'} 
                icon={'❤'}
                />
                <Bottle
                name={'Life threatening'} 
                icon={'🔪'}
                />
                <Bottle
                name={'Fire'} 
                icon={'🔥'}
                />
                <Bottle
                name={'Sexual abuse'} 
                icon={'🧍🏽‍♀'}
                />
            </View>

            <View style={styles.bottom} >
                <View style={styles.sharecase} >
                    <TouchableOpacity
                    style={styles.share}
                    activeOpacity={0.6}
                    >
                        <Entypo name='location' size={36} color={'black'} />
                        {/* <MaterialIcons name='location-history' size={36} color={'white'} /> */}
                    </TouchableOpacity>
                    <Text style={styles.sharetxt} >Share Location</Text>
                </View>
            </View>

            <Text style={styles.lasttxt} >Stay Safe</Text>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    case: {
        flex: 1,
        paddingHorizontal: 20
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 22
    },
    toptxt: {
        fontSize: 16
    },
    dashtxt: {
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 0.8,
        marginTop: 8
    },
    recent: {
        width: '100%',
        height: 100,
        marginTop: 27,
        marginBottom: 27,
        borderRadius: 6,
        paddingHorizontal: 14,
        paddingVertical: 8,
        overflow: 'hidden',
        elevation: 2,
        backgroundColor: '#0f0f0f'
    },
    recentbg: {
        flex: 1
    },
    recenttxtcase: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    recenttxt: {
        fontSize: 19,
        fontWeight: '600',
        color: 'white'
    },
    destxt: {
        color: 'gray',
        marginBottom: 15
    },
    middle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 14
    },
    bottom: {
        width: '100%',
        marginTop: 38,
        flexDirection: 'row'
    },
    share: {
        width: 77,
        height: 77,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },
    sharecase: {
        alignItems: 'center',
        gap: 8
    },
    sharetxt: {
        fontWeight: 'bold'
    },
    lasttxt: {
        marginTop: 28,
        marginBottom: 25,
        color: 'gray',
        textAlign: 'center'
    }
})