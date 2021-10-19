import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import React from 'react';

import SplashScreen from '../Screens/Splash';
// import OnBoarding from '../Screens/Onboarding';
// import AuthNavigation from './AuthNavigation';

const AppNavigator = createAnimatedSwitchNavigator(
  {
    SplashScreen: SplashScreen,
    // AuthNavigation: AuthNavigation
  },
  {
    initialRouteName: 'SplashScreen',
    transition: (
      <Transition.Together>
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
);
export default createAppContainer(AppNavigator);
