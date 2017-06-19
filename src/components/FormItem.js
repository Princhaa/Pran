import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { FormLabel, FormInput, Icon } from 'react-native-elements';

import config from '../config/config';

export default class FormItem extends Component {

    static propTypes = {
        icon: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onPress: PropTypes.func
    }

    render(){
        const { icon, label, onPress, ...otherProps } = this.props;
        return (
            <TouchableWithoutFeedback onPress = {onPress}>
                <View style = {styles.container} {...otherProps}>
                    <View style = {styles.iconContainer}>
                        <Icon 
                            name = {icon}
                        />
                    </View>
                    <View style = {styles.formContainer}>
                        <FormLabel>{label}</FormLabel>
                        <FormInput value = {label}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: config.DEVICE_WIDTH,
        flexDirection: 'row'
    },

    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },

    formContainer: {
        flex: 10
    }
})