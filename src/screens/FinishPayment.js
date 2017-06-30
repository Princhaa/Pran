import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

import config from '../config/config';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'searchFlight' })
    ]
})

export default class FinishPayment extends Component {

    static navigationOptions = {
        title: 'Pesanan #MG14517'
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} />
                <View style={styles.text}>
                    <Text>Transfer ke</Text>
                </View>
                <View style={styles.content}>
                    <Text>Nomor Rekening</Text>
                    <Text>1345.04.009879.56.5</Text>
                </View>
                <View style={styles.text}>
                    <Text>Sudah membayar?</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.detail}>Setelah pembayaran Anda dikonfirmasi, kami</Text>
                    <Text style={styles.detail}>akan mengirim bukti pembelian dan e-tiket</Text>
                    <Text style={styles.detail}>penerbangan ke email Anda</Text>
                </View>
                <Button
                    title='Lanjutkan'
                    buttonStyle={styles.buttonStyle}
                    onPress = {() => this.props.navigation.dispatch(resetAction)}
                />
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

    content: {
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20
    },

    detail: {
        alignSelf: 'center'
    },

    buttonStyle: {
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: 'rgb(49,161,206)',
        borderRadius: 5,
        width: config.DEVICE_WIDTH*0.8,
        marginBottom: 15
    }
})