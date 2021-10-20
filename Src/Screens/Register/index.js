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


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      phone: '',
      email: '',
      password: ''
    };
  }
  render() {
    const { userName, phone, email, password } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.mainContainer} forceInset={{ bottom: 'never' }}>

            <ImageBackground source={Images.RegisterBackground} style={Styles.backgroundWrapper}>
              <View style={Styles.mainWrapper}>
                <Image source={Images.registerIcon} style={Styles.headerImage} />
                <Text style={Styles.registerText}>{Constants.REGISTER}</Text>

                <View style={Styles.emailWrapper}>
                  <Image source={Images.user} style={Styles.imageIcons} />
                  <TextInput
                    style={Styles.emailInput}
                    value={userName}
                    placeholder={"Username"}
                    placeholderTextColor={"39395A4"}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.setState({ userName: value })
                    }}
                  />
                </View>

                <View style={Styles.emailWrapper1}>
                  <Image source={Images.Phone} style={Styles.imageIcons} />
                  <TextInput
                    style={Styles.emailInput}
                    value={phone}
                    placeholder={"Phone Number"}
                    keyboardType={'phone-pad'}
                    placeholderTextColor={"39395A4"}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.setState({ phone: value })
                    }}
                  />
                </View>

                <View style={Styles.emailWrapper1}>
                  <Image source={Images.email} style={Styles.imageIcons} />
                  <TextInput
                    style={Styles.emailInput}
                    value={email}
                    placeholder={"Email"}
                    placeholderTextColor={"39395A4"}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.setState({ email: value })
                    }}
                  />
                </View>


                <View style={Styles.emailWrapper1}>
                  <Image source={Images.password} style={Styles.imageIcons} />
                  <TextInput
                    style={Styles.emailInput}
                    value={password}
                    placeholder={"Password"}
                    placeholderTextColor={"39395A4"}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.setState({ password: value })
                    }}
                  />
                </View>


                <TouchableOpacity onPress={() => { this.props.navigation.navigate("WaitList") }}
                  style={Styles.createButton}>
                  <Text style={Styles.buttonText}>{Constants.JOIN}</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
}

export default Register;

