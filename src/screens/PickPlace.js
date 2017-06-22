import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

import PlaceItem from '../components/PlaceItem';
import store from '../service/store';
import { setDeparture, setArrival } from '../service/action';

const items = [
    { key: 0, text: 'Bandar Udara Internasional Husein Sastranegara, Bandung (BDO)' },
    { key: 1, text: 'Bandar Udara Internasional Halim Perdanakusuma, Jakarta (HLP)' },
    { key: 2, text: 'Bandar Udara Internasional Soekarno-Hatta, Jakarta, Jakarta (CGK)' },
    { key: 3, text: 'Bandar Udara Internasional Adisutjipto, Sleman (JOG)' },
    { key: 4, text: 'Bandar Udara Internasional Adisumarmo, Boyolali (SOC)' },
    { key: 5, text: 'Bandar Udara Internasional Achmad Yani, Semarang (SRG)' },
    { key: 6, text: 'Bandar Udara Internasional Juanda, Surabaya (SUB)' },
    { key: 7, text: 'Bandar Udara Hang Nadim, Batam (BTH)' },
    { key: 8, text: 'Bandar Udara Internasional Sultan Iskandar Muda , Banda Aceh (BTJ)' },
    { key: 9, text: 'Bandar Udara Internasional Kualanamu, Deli Serdang (KNO)' },
    { key: 10, text: 'Bandar Udara Internasional Polonia, Medan (MES)' },
    { key: 11, text: 'Bandar Udara Internasional Minangkabau, Padang Pariaman (PDG)' },
    { key: 12, text: 'Bandar Udara Internasional Sultan Syarif Kasim II, Pekanbaru (PKU)' },
    { key: 13, text: 'Bandar Udara Internasional Sultan Mahmud Badaruddin II, Palembang (PLM)' },
    { key: 14, text: 'Bandar Udara Internasional Radin Inten II, Bandar Lampung (TKG)' },
    { key: 15, text: 'Bandar Udara Internasional Raja Haji Fisabilillah, Tanjungpinan (TNJ)' },
    { key: 16, text: 'Bandar Udara Abdul Rachman Saleh, Malang (MLG)' },
];

const backAction = NavigationActions.back();

export default class extends Component {

    static navigationOptions =  {
        title: 'Pilih bandara'
    }

    setPlace(place) {
        switch(this.props.navigation.state.params.type) {
            case 'departure' : {
                store.dispatch(setDeparture(place));
                this.props.navigation.dispatch(backAction);
                break;
            }
            case 'arrival' : {
                store.dispatch(setArrival(place));
                this.props.navigation.dispatch(backAction);
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    lightTheme
                    placeholder='Search' />

                <FlatList
                    data={items}
                    renderItem={(item) => {
                        return (
                            <PlaceItem
                                text={item.item.text}
                                onPress = {() => this.setPlace(item.item.text)}
                            />
                        )
                    }}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})