import { StackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';

import SearchFlight from './src/screens/SearchFlight';
import PickPlace from './src/screens/PickPlace';
import SearchResult from './src/screens/SearchResult';
import FillData from './src/screens/FillData';
import OrderReview from './src/screens/OrderReview';

const App = StackNavigator({ 
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

export default App;