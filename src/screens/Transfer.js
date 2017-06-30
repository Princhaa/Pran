import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Transfer extends Component {

    static navigationOptions = {
        title: 'Transfer'
    }

    render(){
        return(
            <View style = {styles.container}>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('pay')}>
                    <View style = {styles.item}>
                        <Text style = {styles.content}>BCA</Text>
                        <View style = {styles.detail}>
                            <Icon name = 'keyboard-arrow-right' style = {styles.detail}/>                        
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('pay')}>
                    <View style = {styles.item}>
                        <Text style = {styles.content}>BRI</Text>
                        <View style = {styles.detail}>
                            <Icon name = 'keyboard-arrow-right' style = {styles.detail}/>                        
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('pay')}>
                    <View style = {styles.item}>
                        <Text style = {styles.content}>BNI</Text>
                        <View style = {styles.detail}>
                            <Icon name = 'keyboard-arrow-right' style = {styles.detail}/>                        
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 10
    },
})