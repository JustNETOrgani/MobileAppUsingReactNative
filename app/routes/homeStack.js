import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import Login from '../screens/login';
import signUp from '../screens/signUp';

const screens = {
  Home: {
    // This would be be screen shown by default when app runs.
    screen: Home,
  },
  Login: {
    screen: Login,
  },
  signUp: {
    screen: signUp,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
