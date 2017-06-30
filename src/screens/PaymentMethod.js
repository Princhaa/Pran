import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class PaymentMethod extends Component {

    static navigationOptions = {
        title: 'Pilih Metode Pembayaran'
    }

    render(){
        return (
            <View style = {styles.container}>
                <View style = {styles.header}/>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('transfer')}>
                    <View style = {styles.item}>
                        <Text style = {styles.content}>Transfer</Text>
                        <Text style = {styles.detail}>3j 59mnt</Text>
                    </View>
                </TouchableOpacity>
                <View style = {styles.item}>
                    <Icon name = 'credit-card'/>
                    <Icon name = 'credit-card'/>
                    <Icon name = 'credit-card'/>                        
                </View>
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

    item: {
        backgroundColor: 'white',
        paddingLeft: 20,
        alignItems: 'center',
        height: 50,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'grey'
    },

    content: {
        flex: 5
    },

    detail: {
        flex: 3,
        textAlign: 'right',
        marginRight: 20
    },
})