import { createStackNavigator } from 'react-navigation-stack';

import LoginRegister from '../Screens/Authentication/LoginRegister';
import Login from '../Screens/Authentication/Login';
import Signup from '../Screens/Authentication/Signup';

const AuthNavigation = createStackNavigator(
  {
    LoginRegister: { screen: LoginRegister },
    Login: { screen: Login },
    Signup: { screen: Signup },

  },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
      cardStack: { gesturesEnabled: false },
    },
    headerMode: 'none',
    mode: 'modal',

  },
);
export default AuthNavigation;
