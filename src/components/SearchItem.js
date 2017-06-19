import React, { Component, PropTypes } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import config from '../config/config';

export default class extends Component {

    static propTypes = {
        airline: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        detail: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        onPress: PropTypes.func
    }

    state = {
        active: false
    }

    componentWillReceiveProps(nextProps){
        this.setState({ active: nextProps.active })
    }

    render() {
        const { airline, time, detail, price, onPress } = this.props;
        return (
            <TouchableOpacity style={this.state.active ? styles.containerActive : styles.containerInactive} onPress = {onPress}>
                <View style = {styles.content}>
                    <Text style = {styles.text}>{airline}</Text>
                    <Text style = {styles.text}>{time}</Text>
                    <Text style = {styles.text}>{detail}</Text>
                    <Text style = {styles.price}>{price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    containerInactive: {
        width: config.DEVICE_WIDTH / 2 - 20,
        height: 120,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'grey',
    },

    containerActive: {
        width: config.DEVICE_WIDTH / 2 - 20,
        height: 120,
        backgroundColor: '#F0F0F0',
        borderWidth: 1,
        borderColor: 'grey',
    },

    content: {
        flex: 1,
        padding: 10,
        justifyContent: 'center'
    },

    text: {
        marginTop: 5,
    },

    price: {
        alignSelf: 'flex-end',
        marginHorizontal: 5
    }
})