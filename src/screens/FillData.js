import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

import FlightDetail from '../components/FlightDetail';
import config from '../config/config';

export default class FillData extends Component {

    state = {
        addToPassenger: false,
        insurance: false
    }

    static navigationOptions = {
        title: 'Isi Data'
    }

    render(){ 
        return (
            <ScrollView style = {styles.container}>
                <View style = {styles.header}/>
                <View style = {styles.divider}>
                    <Text>Penerbangan Anda</Text>
                </View>
                <View style = {styles.items}>
                    <Text>JAKARTA - MALANG</Text>
                </View>
                <View style = {styles.items}>
                    <FlightDetail 
                        date = 'Sel, 23 Mei 2017'
                        passengerClass = 'Ekonomi'
                        timeDeparture = '06.20'
                        timeArrival = '07.50'
                        departureCode = 'CGK'
                        arrivalCode = 'MLG'
                    />
                </View>
                <View style = {styles.itemsEnd}>
                    <FlightDetail 
                        date = 'Kam, 25 Mei 2017'
                        passengerClass = 'Ekonomi'
                        timeDeparture = '08.30'
                        timeArrival = '09.50'
                        departureCode = 'MLG'
                        arrivalCode = 'CGK'
                    />
                </View>
                <View style = {styles.divider}>
                    <Text>Data Pemesanan</Text>
                </View>
                <View style = {styles.items}>
                    <TextInput 
                        placeholder = 'Nama'
                        underlineColorAndroid = 'transparent'
                        style = {styles.textInput}
                    />
                </View>
                <View style = {styles.items}>
                    <TextInput 
                        placeholder = 'No. handphone'
                        underlineColorAndroid = 'transparent'
                        keyboardType = 'phone-pad'
                        style = {styles.textInput}
                    />
                </View>
                <View style = {styles.itemsEnd}>
                    <TextInput 
                        placeholder = 'Email'
                        underlineColorAndroid = 'transparent'
                        keyboardType = 'email-address'
                        style = {styles.textInput}
                    />
                </View>
                <View style = {styles.divider}>
                    <Text>Data Penumpang</Text>
                </View>
                <View style = {styles.items}>
                    <CheckBox 
                        title = 'Tambahkan ke daftar penumpang'
                        checked = {this.state.addToPassenger}
                        checkedColor = 'rgb(49,161,206)'
                        onPress = {() => this.setState({ addToPassenger: !this.state.addToPassenger })}
                        containerStyle = {{ backgroundColor: 'white', borderWidth: 0 }}
                    />
                </View>
                <TouchableOpacity style = {styles.itemsEnd}>
                    <Text>ISI DATA PENUMPANG DEWASA</Text>
                </TouchableOpacity>
                <View style = {styles.divider}>
                    <Text>Asuransi Perjalanan</Text>
                </View>
                <View style = {styles.itemsEnd}>
                    <CheckBox 
                        title = 'Tambahkan asuransi perjalanan CERIA Rp. 31.700/org'
                        checked = {this.state.insurance}
                        checkedColor = 'rgb(49,161,206)'
                        onPress = {() => this.setState({ insurance: !this.state.insurance })}
                        containerStyle = {{ backgroundColor: 'white', borderWidth: 0 }}
                    />
                </View>
                <View style = {{ height: 20 }}/>
                <View style = {styles.totalPriceContainer}>
                    <View style = {styles.totalPrice}>
                        <Text style = {styles.title}>Total harga</Text>
                        <Text style = {styles.total}>Rp. 1.013.000</Text>
                    </View>
                    <View style = {styles.buttonContainer}>
                        <Button 
                            title = 'Lanjutkan'
                            buttonStyle = {styles.buttonStyle}
                            onPress = {() => this.props.navigation.navigate('orderReview')}
                        />
                    </View>
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

    items: {
        height: 60,
        justifyContent: 'center',
        paddingLeft: 20,
        padding: 5,
        borderTopWidth: 1,
        borderColor: 'grey',
        backgroundColor: 'white'
    },

    itemsEnd: {
        height: 60,
        justifyContent: 'center',
        paddingLeft: 20,
        padding: 5,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'grey',
        backgroundColor: 'white'
    },

    textInput: {
        flex: 1
    },

    totalPriceContainer: {
        height: 110, 
        justifyContent: 'center', 
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: 'grey',
        padding: 5,
        paddingBottom: 10
    },

    totalPrice: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20
    },

    title: {
        flex: 2
    },

    total: {
        flex: 1
    },

    buttonContainer: {
        flex: 1
    },

    buttonStyle: {
        alignSelf: 'center',
        backgroundColor: 'rgb(49,161,206)',
        borderRadius: 5,
        width: config.DEVICE_WIDTH*0.8,
    }
})