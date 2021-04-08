import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import Login from '../screens/login';
import SignUp from '../screens/signUp';

const screens = {
  Home: {
    // This would be be screen shown by default when app runs.
    screen: Home,
  },
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
