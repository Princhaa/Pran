import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-elements';

import SearchItem from '../components/SearchItem';
import config from '../config/config';

export default class SearchResult extends Component {

    static navigationOptions = {
        title: 'Jakarta (CGK) - Malang (MLG)'
    }

    state = {
        activePergi: null,
        activePulang: null
    }

    handlePergi(index) {
        this.setState({ activePergi: index })
    }

    handlePulang(index) {
        this.setState({ activePulang: index })
    }

    render(){
        return (
            <View style = {styles.container}>
                <View style = {styles.categoryContainer}>
                    <View style = {styles.category}>
                        <Text style = {styles.categoryText}>PERGI</Text>
                    </View>
                    <View style = {styles.category}>
                        <Text style = {styles.categoryText}>PULANG</Text>
                    </View>
                </View>
                <View style = {styles.listContainer}>
                    <FlatList style = {styles.column} 
                        data = {config.ITEMS_PERGI}
                        extraData = {this.state.activePergi}
                        renderItem = {(item) => (
                            <SearchItem 
                                airline = {item.item.airline}
                                time = {item.item.time}
                                detail = {item.item.detail}
                                price = {item.item.price}
                                active = {this.state.activePergi == item.index}
                                onPress = {() => this.handlePergi(item.index)}
                            />
                        )}
                    />
                    <FlatList style = {styles.column} 
                        data = {config.ITEMS_PERGI}
                        extraData = {this.state.activePulang}
                        renderItem = {(item) => (
                            <SearchItem 
                                airline = {item.item.airline}
                                time = {item.item.time}
                                detail = {item.item.detail}
                                price = {item.item.price}
                                active = {this.state.activePulang == item.index}
                                onPress = {() =>{() => this.hanldePulang(item.index)}}
                            />
                        )}
                    />
                </View>
                <View style = {styles.footer}>
                    <View style = {styles.footerTextContainer}>
                        <Text>Total</Text>
                        <Text style = {styles.price}>Rp. 1.013.000</Text>
                    </View>
                    <View style = {styles.footerButtonContainer}>
                        <Button 
                            title = 'Pesan'
                            buttonStyle = {styles.buttonStyle}
                            onPress = {() => this.props.navigation.navigate('fillData')}
                        />
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    categoryContainer: {
        width: config.DEVICE_WIDTH,
        height: 50,
        flexDirection: 'row'
    },

    category: {
        flex: 1,
        backgroundColor: 'rgb(49,161,206)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    categoryText: {
        color: 'white'
    },

    listContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    column: {
        flex: 1,
        marginBottom: 70
    },

    footer: {
        position: 'absolute',
        bottom: 1,
        width: config.DEVICE_WIDTH,
        height: 70,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: 'grey'
    },

    footerTextContainer: {
        flex: 5,
        padding: 20,
        justifyContent: 'center'
    },

    footerButtonContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    price: {
        fontWeight: 'bold',
        fontSize: 20
    },

    buttonStyle: {
        backgroundColor: 'rgb(49,161,206)',
        width: 70,
        borderRadius: 5
    }
})