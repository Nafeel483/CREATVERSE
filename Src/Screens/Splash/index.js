import React, { Component } from 'react';
import {
  Image,
  View,
  ImageBackground,
  Text,
  TouchableOpacity
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import * as Constants from '../../Constants';
import MyStatusBar from '../../Components/HeaderStatusBar'

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }
  componentDidMount = () => {
    setTimeout(() => {
      if (!this.moved) {
        this.props.navigation.navigate('OnBoarding')
      }
    }, 3000);
  }
  render() {
    return (
      <>

        <ImageBackground source={Images.splash}
          style={Styles.backgroundWrapper}>
          <MyStatusBar backgroundColor={"transparent"} barStyle="light-content" />
        </ImageBackground>

      </>
    );
  }
}
export default SplashScreen;