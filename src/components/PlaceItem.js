import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import config from '../config/config';

export default class PlaceItem extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func
    }

    render() {
        const { text, onPress, ...otherProps } = this.props;
        return (
            <TouchableOpacity style = {styles.container} {...otherProps} onPress = {onPress}>
                <Text>{text}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: config.DEVICE_WIDTH,
        backgroundColor: 'white',
        height: 50,
        paddingLeft: 20,
        justifyContent: 'center'
    }
})