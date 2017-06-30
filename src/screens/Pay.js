import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import config from '../config/config';

export default class Pay extends Component {

    static navigationOptions = {
        title: 'BRI'
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} />
                <View style={styles.text}>
                    <Text>Rincian biaya</Text>
                </View>
                <ScrollView style={styles.container}>
                    <View style={styles.passenger}>
                        <Text style={styles.content}>Batik Air (Dewasa) (1x)</Text>
                        <Text style={styles.price}>Rp. 523.000</Text>
                    </View>
                    <View style={styles.passenger}>
                        <Text style={styles.content}>Bagasi MLG - CGK</Text>
                        <Text style={styles.price}>Rp. 0</Text>
                    </View>
                    <View style={styles.passenger}>
                        <Text style={styles.content}>Garuda Indonesia (Dewasa) (1x)</Text>
                        <Text style={styles.price}>Rp. 489.000</Text>
                    </View>
                    <View style={styles.passenger}>
                        <Text style={styles.content}>Bagasi CGK - MLG</Text>
                        <Text style={styles.price}>Rp. 0</Text>
                    </View>
                    <View style={styles.passenger}>
                        <Text style={styles.content}>Biaya kemmudahan</Text>
                        <Text style={styles.price}>Rp. -173</Text>
                    </View>
                    <View style={styles.passenger}>
                        <Text style={styles.content}>Total Biaya</Text>
                        <Text style={styles.price}>Rp. 1.012.827</Text>
                    </View>
                    <View style={styles.passenger}>
                        <Button
                            title='Lanjutkan'
                            buttonStyle={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('finishPayment')}
                        />
                    </View>
                </ScrollView>
            </View>
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

    text: {
        height: 50,
        marginLeft: 20,
        justifyContent: 'center'
    },

    passenger: {
        backgroundColor: 'white',
        paddingLeft: 20,
        alignItems: 'center',
        height: 50,
        flexDirection: 'row'
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