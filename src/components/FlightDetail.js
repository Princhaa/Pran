import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class FlightDetail extends Component {

    static propTypes = {
        date: PropTypes.string.isRequired,
        passengerClass: PropTypes.string.isRequired,
        timeDeparture: PropTypes.string.isRequired,
        timeArrival: PropTypes.string.isRequired,
        departureCode: PropTypes.string.isRequired,
        arrivalCode: PropTypes.string.isRequired
    }

    render() {
        const { date, passengerClass, timeArrival, timeDeparture, departureCode, arrivalCode } = this.props;
        return (
            <View style = {styles.container}>
                <View style = {styles.column}>
                    <View style = {styles.left}>
                        <Text>{date}</Text>
                    </View>
                    <View style = {styles.left}>
                        <Text>{passengerClass}</Text>
                    </View>
                </View>
                <View style = {styles.column}>
                    <View style = {styles.content}>
                        <View style = {styles.right}>
                            <View style = {styles.rightContent}>
                                <Text>{timeDeparture}</Text>
                            </View>
                            <View style = {styles.rightContent}>
                                <Text style = {styles.airportCode}>{departureCode}</Text>
                            </View>
                        </View>
                        <View style = {styles.right}>
                            <View style = {styles.rightContent}>
                                <View style = {{borderWidth: 1, borderColor: 'grey', marginHorizontal: 5, flex: 1}}/>
                            </View>
                            <View style = {styles.rightContent}>
                                <View style = {{borderWidth: 1, borderColor: 'grey', marginHorizontal: 5, flex: 1}}/>
                            </View>
                        </View>
                        <View style = {styles.right}>
                            <View style = {styles.rightContent}>
                                <Text>{timeArrival}</Text>
                            </View>
                            <View style = {styles.rightContent}>
                                <Text style = {styles.airportCode}>{arrivalCode}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5
    },

    column: {
        flex: 1
    },

    left: {
        flex: 1,
        justifyContent: 'center'
    },

    content: {
        flex: 1,
        flexDirection: 'row'
    },

    right: {
        flex: 1
    },

    rightContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    airportCode: {
        borderRadius: 3,
        paddingHorizontal: 5,
        backgroundColor: '#F0F0F0'
    }
})