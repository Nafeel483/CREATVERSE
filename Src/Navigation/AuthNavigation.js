import { createStackNavigator } from 'react-navigation-stack';

import Register from '../Screens/Register';
import WaitList from '../Screens/WaitList';

const AuthNavigation = createStackNavigator(
  {
    Register: { screen: Register },
    WaitList: { screen: WaitList },

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
