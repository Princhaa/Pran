import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/service/store';

import SearchFlight from './src/screens/SearchFlight';
import PickPlace from './src/screens/PickPlace';
import SearchResult from './src/screens/SearchResult';
import FillData from './src/screens/FillData';
import OrderReview from './src/screens/OrderReview';

const Pran = StackNavigator({ 
  searchFlight: { screen: SearchFlight },
  pickPlace: { screen: PickPlace },
  searchResult: { screen: SearchResult },
  fillData: { screen: FillData },
  orderReview: { screen: OrderReview }
},
{
  cardStyle: {
    paddingTop: Platform.OS == 'ios' ? 0 : StatusBar.currentHeight
  }
})

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Pran />
      </Provider>
    )
  }
}

export default App;