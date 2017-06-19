import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

import FlightItem from '../components/FlightItem';
import config from '../config/config';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'searchFlight' })
    ]
})

export default class OrderReview extends Component {

    static navigationOptions = {
        title: 'Review Pemesanan'
    }

    render() {
        return (
            <ScrollView style = {styles.container}>
                <View style = {styles.header}/>
                <View style = {styles.divider}>
                    <Text>Penerbangan Pergi</Text>
                </View>
                <FlightItem 
                    airline = 'Batik Air'
                    passengerClass = 'Ekonomi'
                    departure = 'Jakarta'
                    departureCode = 'CGK'
                    departureAirport = 'Soekarno Hatta Intl Airport'
                    departureTime = '06.20'
                    departureDate = '23 Mei'
                    arrival = 'Malang'
                    arrivalCode = 'MLG'
                    arrivalAirport = 'Abdul Rachman Saleh'
                    arrivalTime = '07.50'
                    arrivalDate = '23 Mei'
                />
                <View style = {styles.divider}>
                    <Text>Penerbangan Pulang</Text>
                </View>
                <FlightItem 
                    airline = 'Garuda Indonesia'
                    passengerClass = 'Ekonomi'
                    departure = 'Malang'
                    departureCode = 'MLG'
                    departureAirport = 'Abdul Rachman Saleh'
                    departureTime = '08.30'
                    departureDate = '25 Mei'
                    arrival = 'Jakarta'
                    arrivalCode = 'CGK'
                    arrivalAirport = 'Soekarno Hatta Intl Airport'
                    arrivalTime = '09.50'
                    arrivalDate = '25 Mei'
                />
                <View style = {styles.divider}>
                    <Text>Penumpang</Text>
                </View>
                <View style = {styles.passenger}>
                    <Text>Nn. ANANDHI TRISTIARATRI</Text>
                </View>
                <View style = {styles.passenger}>
                    <Text style = {styles.luggage}>Bagasi CGK-MLG</Text>
                    <Text style = {styles.luggageWeight}>20 kg</Text>
                </View>
                <View style = {styles.passenger}>
                    <Text style = {styles.luggage}>Bagasi MLG-CGK</Text>
                    <Text style = {styles.luggageWeight}>20 kg</Text>
                </View>
                <View style = {styles.divider}>
                    <Text>Rincian Biaya</Text>
                </View>
                <View style = {styles.passenger}>
                    <Text style = {styles.content}>Batik Air (Dewasa) (1x)</Text>
                    <Text style = {styles.price}>Rp. 523.000</Text>
                </View>
                <View style = {styles.passenger}>
                    <Text style = {styles.content}>Bagasi MLG - CGK</Text>
                    <Text style = {styles.price}>Rp. 0</Text>
                </View>
                <View style = {styles.passenger}>
                    <Text style = {styles.content}>Garuda Indonesia (Dewasa) (1x)</Text>
                    <Text style = {styles.price}>Rp. 489.000</Text>
                </View>
                <View style = {styles.passenger}>
                    <Text style = {styles.content}>Bagasi CGK - MLG</Text>
                    <Text style = {styles.price}>Rp. 0</Text>
                </View>
                <View style = {styles.passenger}>
                    <Text style = {styles.content}>Biaya kemmudahan</Text>
                    <Text style = {styles.price}>Rp. -173</Text>
                </View>
                <View style = {styles.passenger}>
                    <Text style = {styles.content}>Total Biaya</Text>
                    <Text style = {styles.price}>Rp. 1.012.827</Text>
                </View>
                <View style = {styles.passenger}>
                    <Button 
                        title = 'Lanjutkan'
                        buttonStyle = {styles.buttonStyle}
                        onPress = {() => this.props.navigation.dispatch(resetAction)}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        height: 30,
        backgroundColor: 'rgb(49,161,206)'
    },

    divider: {
        height: 50,
        paddingLeft: 20,
        padding: 5,
        justifyContent: 'center'
    },

    passenger: {
        backgroundColor: 'white',
        paddingLeft: 20,
        alignItems: 'center',
        height: 50,
        flexDirection: 'row'
    },

    luggage: {
        flex: 5
    },

    luggageWeight: {
        flex: 1,
        color: 'grey'
    },

    content: {
        flex: 5
    },

    price: {
        flex: 3,
        textAlign: 'right',
        marginRight: 20
    },

    buttonStyle: {
        alignSelf: 'center',
        backgroundColor: 'rgb(49,161,206)',
        borderRadius: 5,
        width: config.DEVICE_WIDTH*0.8,
        marginBottom: 15
    }
})