import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class FlightItem extends Component {

    static propTypes = {
        airline: PropTypes.string.isRequired,
        passengerClass: PropTypes.string.isRequired,
        departure: PropTypes.string.isRequired,
        departureCode: PropTypes.string.isRequired,
        departureAirport: PropTypes.string.isRequired,
        departureTime: PropTypes.string.isRequired,
        departureDate: PropTypes.string.isRequired,
        arrival: PropTypes.string.isRequired,
        arrivalCode: PropTypes.string.isRequired,
        arrivalAirport: PropTypes.string.isRequired,
        arrivalTime: PropTypes.string.isRequired,
        arrivalDate: PropTypes.string.isRequired
    }

    render(){
        const { airline, passengerClass, departure, departureAirport, departureCode, departureTime, departureDate, arrival, arrivalCode, arrivalAirport, arrivalTime, arrivalDate } = this.props;
        return(
            <View style = {styles.container}>
                <Text style = {styles.airline}>{airline}</Text>
                <Text style = {styles.passengerClass}>{passengerClass}</Text>
                <View style = {styles.rows}>
                    <View style = {styles.imageContainer}>
                        <Icon name = 'flight-takeoff'/>
                    </View>
                    <View style = {styles.locationContainer}>
                        <View style = {styles.locationContent}>
                            <Text style = {styles.airportCode}>{departureCode}</Text>
                            <Text style = {styles.city}>{departure}</Text>                            
                        </View>    
                        <View style = {styles.locationContent}>
                            <Text style = {styles.airport}>{departureAirport}</Text>
                        </View>                
                    </View>
                    <View style = {styles.timeContainer}>
                        <View style = {styles.timeContent}>
                            <Text>{departureTime}</Text>
                        </View>
                        <View style = {styles.timeContent}>
                            <Text>{departureDate}</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.rows}>
                    <View style = {styles.imageContainer}>
                        <View style = {{ flex: 1, borderColor: 'grey', borderWidth: 1, height: 30 }}/>
                    </View>
                    <View style = {styles.locationContainer}/>
                    <View style = {styles.timeContainer}/>
                </View>
                <View style = {styles.rows}>
                    <View style = {styles.imageContainer}>
                        <Icon name = 'flight-land'/>
                    </View>
                    <View style = {styles.locationContainer}>
                        <View style = {styles.locationContent}>
                            <Text style = {styles.airportCode}>{arrivalCode}</Text>
                            <Text style = {styles.city}>{arrival}</Text>                            
                        </View>    
                        <View style = {styles.locationContent}>
                            <Text style = {styles.airport}>{arrivalAirport}</Text>
                        </View>                
                    </View>
                    <View style = {styles.timeContainer}>
                        <View style = {styles.timeContent}>
                            <Text>{arrivalTime}</Text>
                        </View>
                        <View style = {styles.timeContent}>
                            <Text>{arrivalDate}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingLeft: 10,
        padding: 5
    },

    rows: {
        flex: 1,
        flexDirection: 'row'
    },

    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    locationContainer: {
        flex: 4
    },

    timeContainer: {
        flex: 1
    },

    airportCode: {
        borderRadius: 3,
        paddingHorizontal: 5,
        marginRight: 5,
        backgroundColor: '#F0F0F0'
    },

    airline: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5
    },

    passengerClass: {
        marginLeft: 5,
        marginTop: 5
    },

    locationContent: {
        flex: 1,
        padding: 5,
        flexDirection: 'row'
    },

    airport: {
        color: '#505050',
        fontSize: 10
    },

    city: {
        fontWeight: 'bold'
    },

    timeContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})