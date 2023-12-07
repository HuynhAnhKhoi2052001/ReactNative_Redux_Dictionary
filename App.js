import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
const Stack = createStackNavigator();
export default function App() {
  return (
<Provider store={store}>
  <NavigationContainer>
  <Stack.Navigator initialRouteName='Login'>
  <Stack.Screen name='Login' component={Login}/>
  <Stack.Screen name='Home' component={Home}/>
  </Stack.Navigator>
  </NavigationContainer>
</Provider>
  );
}

