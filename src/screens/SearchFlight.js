import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Button, FormLabel, FormInput, CheckBox, Icon } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';

import config from '../config/config';
import FormItem from '../components/FormItem';
import PassengerNumber from '../components/PassengerNumber';

class SearchFlight extends Component {

    static navigationOptions = {
        title: 'Search Flight'
    }

    state = {
        passengerModal: false,
        classModal: false,
        calendarModal: false,
        passengerClass: 'Kelas Penerbangan',
        departure: 'Kota Asal',
        arrival: 'Kota Tujuan',
        passenger: 'Penumpang',
    }

    handlePassengerModal() {
        this.setState({ passengerModal: !this.state.passengerModal })
    }

    handleClassModal() {
        this.setState({ classModal: !this.state.classModal })
    }

    handleCalendarModal() {
        this.setState({ calendarModal: !this.state.calendarModal })
    }

    onDayPress(day) {
        this.setState({ markedDay: day.dateString })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.departure) {
            this.setState({ departure: nextProps.departure });
        }
        if (nextProps.arrival) {
            this.setState({ arrival: nextProps.arrival });
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.formContainer}>
                        <FormItem
                            icon='flight-takeoff'
                            label='Kota Asal'
                            value={this.state.departure}
                            onPress={() => navigation.navigate('pickPlace', { type: 'departure' })}
                        />
                        <FormItem
                            icon='flight-land'
                            label='Kota Tujuan'
                            value={this.state.arrival}
                            onPress={() => navigation.navigate('pickPlace', { type: 'arrival' })}
                        />
                        <FormItem
                            icon='people'
                            label='Penumpang'
                            value={this.state.passenger}
                            onPress={() => this.handlePassengerModal()}
                        />
                        <FormItem
                            icon='airline-seat-recline-normal'
                            label = 'Kelas Penerbangan'
                            value={this.state.passengerClass}
                            onPress={() => this.handleClassModal()}
                        />
                        <View style = {styles.calendarContainer}>
                            <View style = {styles.calendar}>
                                <TouchableOpacity style = {styles.calendarTitle} onPress = {() => this.handleCalendarModal()}>
                                    <Icon name = 'today'/>
                                    <View style = {{marginLeft: 10}}>
                                        <Text>Pergi</Text>
                                        <Text>23 Mei 2017</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style = {styles.calendar}>
                                <TouchableOpacity style = {styles.calendarTitle} onPress = {() => this.handleCalendarModal()}>
                                    <Icon name = 'today'/>
                                    <View style = {{marginLeft: 10}}>
                                        <Text>Pulang</Text>
                                        <Text>25 Mei 2017</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Button
                        title='Cari'
                        buttonStyle={styles.buttonStyle}
                        onPress={() => t=navigation.navigate('searchResult')}
                    />
                </ScrollView>
                <TouchableWithoutFeedback onPress={() => this.handlePassengerModal()}>
                    <Modal isVisible={this.state.passengerModal} style={styles.bottomModal}>
                        <View style={styles.modalContent}>
                            <View style={styles.modalTitle}>
                                <Text>Tambahkan penumpang</Text>
                            </View>
                            <View style = {styles.passengerNumber}>
                                <PassengerNumber 
                                    title = 'Dewasa'
                                    subtitle = '12 tahun keatas'
                                />
                                <PassengerNumber 
                                    title = 'Anak'
                                    subtitle = '2 - 11 tahun'
                                />
                                <PassengerNumber 
                                    title = 'Bayi'
                                    subtitle = '0 - 2 tahun'
                                />
                            </View>
                            <Button
                                title='Submit'
                                buttonStyle={styles.buttonStyle}
                                onPress={() => this.handlePassengerModal()}
                            />
                        </View>
                    </Modal>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.handleClassModal()}>
                    <Modal isVisible={this.state.classModal} style={styles.bottomModal}>
                        <View style={styles.modalContent}>
                            <View style={styles.modalTitle}>
                                <Text>Pilih kelas penerbangan</Text>
                            </View>
                            <View style = {{ width: config.DEVICE_WIDTH-20, marginBottom: 10 }}>
                                <CheckBox
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checked={this.state.passengerClass == 'Ekonomi'}
                                    onPress={() => this.setState({ passengerClass: 'Ekonomi' })}
                                    title='Ekonomi'
                                />
                                <CheckBox
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checked={this.state.passengerClass == 'Bisnis'}
                                    onPress={() => this.setState({ passengerClass: 'Bisnis' })}
                                    title='Bisnis'
                                />
                                <CheckBox
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checked={this.state.passengerClass == 'Premium'}
                                    onPress={() => this.setState({ passengerClass: 'Premium' })}
                                    title='Ekonomi Premium'
                                />
                            </View>
                            <Button
                                title='Pilih'
                                buttonStyle={styles.buttonStyle}
                                onPress={() => this.handleClassModal()}
                            />
                        </View>
                    </Modal>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Modal isVisible={this.state.calendarModal}>
                        <View style={styles.calendarModal}>
                            <Calendar
                                onDayPress={(day) => this.onDayPress(day)}
                                markedDates={{ [this.state.markedDay]: { selected: true } }}
                            />
                            <Button
                                title='Pilih tanggal'
                                buttonStyle={styles.buttonStyle}
                                onPress={() => {
                                    this.handleCalendarModal();
                                }}
                            />
                        </View>
                    </Modal>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    contentContainer: {
        flex: 1,
        alignItems: 'center'
    },

    formContainer: {
        marginBottom: 20
    },

    buttonStyle: {
        backgroundColor: 'rgb(49,161,206)',
        width: config.DEVICE_WIDTH * 0.8,
        borderRadius: 5
    },

    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0
    },

    modalContent: {
        backgroundColor: 'white',
        paddingBottom: 20,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },

    modalTitle: {
        width: config.DEVICE_WIDTH,
        paddingLeft: 30,
        marginBottom: 10
    },

    calendarModal: {
        backgroundColor: 'white',
        padding: 22,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        height: 400
    },

    passengerNumber: {
        width: config.DEVICE_WIDTH,
        height: 150,
        flexDirection: 'row'
    },

    calendarContainer: {
        flexDirection: 'row',
        padding: 20,
    },

    calendar: {
        flex: 1
    },

    calendarTitle: {
        flexDirection: 'row',
        marginBottom: 10
    }
})

const mapStateToProps = (state) => {
    console.log(state);
    return {
        departure: state.setDeparture.departure,
        arrival: state.setArrival.arrival
    }
}

export default connect(mapStateToProps)(SearchFlight);