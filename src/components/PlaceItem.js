import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import config from '../config/config';

export default class PlaceItem extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired
    }

    render() {
        const { text, ...otherProps } = this.props;
        return (
            <View style = {styles.container} {...otherProps}>
                <Text>{text}</Text>
            </View>
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