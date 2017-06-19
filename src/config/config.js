import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const itemsPergi = [
    {
        airline: 'Sriwijaya',
        time: '06.00 - 07.30',
        detail: '1j30mnt, langsung',
        price: 'Rp. 522.000/org',
        key: 0
    },
    {
        airline: 'Citilink',
        time: '06.10 - 07.40',
        detail: '1j30mnt, langsung',
        price: 'Rp. 523.000/org',
        key: 1
    },
    {
        airline: 'Batik Air',
        time: '06.20 - 07.50',
        detail: '1j30mnt, langsung',
        price: 'Rp. 523.000/org',
        key: 2
    },
    {
        airline: 'Garuda',
        time: '06.20 - 07.50',
        detail: '1j30mnt, langsung',
        price: 'Rp. 524.000/org',
        key: 3
    },
    {
        airline: 'Sriwijaya',
        time: '06.00 - 07.30',
        detail: '1j30mnt, langsung',
        price: 'Rp. 522.000/org',
        key: 4
    },
    {
        airline: 'Citilink',
        time: '06.10 - 07.40',
        detail: '1j30mnt, langsung',
        price: 'Rp. 523.000/org',
        key: 5
    },
    {
        airline: 'Batik Air',
        time: '06.20 - 07.50',
        detail: '1j30mnt, langsung',
        price: 'Rp. 523.000/org',
        key: 6
    },
    {
        airline: 'Garuda',
        time: '06.20 - 07.50',
        detail: '1j30mnt, langsung',
        price: 'Rp. 524.000/org',
        key: 7
    },
]


export default {
    DEVICE_WIDTH: width,
    DEVICE_HEIGHT: height,
    ITEMS_PERGI: itemsPergi
}