import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';
import Styles from './Styles';


class WaitList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.mainContainer} forceInset={{ bottom: 'never' }}>
            <ImageBackground source={Images.WaitlistBackground} style={Styles.backgroundWrapper}>

              <View style={Styles.headerWrapper}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Register") }}>
                  <Image source={Images.back} style={Styles.backIcon} />
                </TouchableOpacity>
              </View>

              <View style={Styles.mainScreen}>

                <View style={Styles.modelWrapper}>
                  <Image source={Images.thanksIcon} style={Styles.whishImage} />
                  <Text style={Styles.headerText}>{Constants.THANKS_HEADER}</Text>
                  <Text style={Styles.description}>{Constants.THANKS_DES}</Text>
                  <Text style={Styles.description1}>{Constants.THANKS_DES_1}</Text>

                </View>

              </View>

            </ImageBackground>
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
}

export default WaitList;
