import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SIZE = Dimensions.get('window').width

const data = {
    "time": "1 hour ago",
    "image": "https://dailypost.ng/wp-content/uploads/2023/12/IMG-20231213-WA0000.jpg",
    "preview": "A fire outbreak, which occurred on Tuesday evening",
    "body": "The fire outbreak occurred at Zion Overcomer, Opposite Duro Suleiman house, University of Ilorin Road, in Ilorin South Local Government Area of the State The incident was reported at about 17:50hours on Tuesday and was subdued by the firepower of the firefighters who prevented it from spreading to other facilities."
}

const RecentNews = () => {
  return (
        <ScrollView>
            <View 
            style={styles.top}
            >
                <Text style={styles.tit} >{data.preview}</Text>
                <View style={styles.txtrow} >
                <Text style={styles.time} >{data.time}</Text>
                </View>
            </View>

            <Image 
            style={styles.img}
            source={{ uri: data.image }}
            />

            <View style={styles.deschold} >
                <Text style={styles.desc} >{data.body}</Text>
            </View>

        </ScrollView>
  )
}

export default RecentNews

const styles = StyleSheet.create({
    top: {
        width: '90%',
        alignSelf: 'center',
        marginBottom: 16,
        marginTop: 5
      },
      tit: {
        fontSize: 22,
        fontWeight: '600'
      },
      txtrow: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: 7,
        gap: 6
      },
      src: {
        color: '#1E90FF',
        fontWeight: '500'
      },
      time: {
        fontSize: 13,
        color: 'gray'
      },
      img: {
        height: SIZE / 1.7, 
        width: SIZE / 1.09,
        borderRadius: 16,
        alignSelf: 'center'
      },
      deschold: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 16,
        marginBottom: 18
      },
      desc: {
        color: 'dimgray',
        fontSize: 17,
        lineHeight: 28
      }
})