import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import config from '../config/config';

export default class PassengerNumber extends Component {

    state = {
        passengerNumber: 0
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    }

    render() {
        const { title, subtitle } = this.props;
        return (
            <View style = {styles.container}>
                <Text>{title}</Text>
                <Text style = {styles.subtitle}>{subtitle}</Text>
                <TouchableOpacity style = {styles.number} onPress = {() => this.setState({ passengerNumber: ++this.state.passengerNumber })}>
                    <Text>{this.state.passengerNumber}</Text>
                    <View style = {styles.plusButton}>
                        <Text style = {{ fontSize: 17 }}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    subtitle: {
        color: 'grey',
        marginTop: 10,
        fontSize: 10
    },

    number: {
        flexDirection: 'row',
        marginTop: 10,
        width: config.DEVICE_WIDTH / 4 - 20
    },

    plusButton: {
        flex: 1,
        alignItems: 'flex-end'
    }
})