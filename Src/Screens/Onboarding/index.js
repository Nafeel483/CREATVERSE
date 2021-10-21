import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';
import Styles from './Styles';

const widthScreen = Dimensions.get('window').width;


const slides = [
  {
    key: 1,
    title: Constants.ONBOARD_FIRST_TITLE,
    description: Constants.ONBOARD_FIRST_DES,
    // description1: Constants.ONBOARD_FIRST_DES1,
    image: Images.illustration_1,
    background: Images.Onboarding_1,
  },
  {
    key: 2,
    title: Constants.ONBOARD_SECOND_TITLE,
    description: Constants.ONBOARD_SECOND_DES,
    // description1: Constants.ONBOARD_FIRST_DES1,
    image: Images.illustration_2,
    background: Images.Onboarding_2,
  },
  {
    key: 3,
    title: Constants.ONBOARD_THIRD_TITLE,
    description: Constants.ONBOARD_THIRD_DES,
    // description1: Constants.ONBOARD_FIRST_DES1,
    image: Images.illustration_3,
    background: Images.Onboarding_3,
  },
];

export default class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      showRealApp: false,
      next: 0,
    };
  }
  _keyExtractor = (item) => item.key;
  _renderItem = ({ item, index }) => {
    return (
      <>

        <ImageBackground source={item.background} style={Styles.backgroundWrapper}>
          <View style={Styles.mainConatiner}>
            <View style={Styles.mainContainerWrapper}>
              <View style={Styles.ineerWrapper}>
                {/* Header */}
                <View style={Styles.headerWrapper}>

                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register') }}
                  style={Styles.skipWrapper}>
                    <Text style={Styles.skipText}>{Constants.SKIP}</Text>
                  </TouchableOpacity>

                  <View style={Styles.paginationDots}>
                    {slides.length > 1 &&
                      slides.map((_, i) => (
                        <TouchableOpacity
                          key={i}
                          style={[
                            Styles.dot,
                            i === index
                              ? { backgroundColor: Colors.blue, width: 24, }
                              : { backgroundColor: Colors.dotColor },
                          ]}
                          onPress={() => this.slider?.goToSlide(i, true)}
                        />
                      ))}
                  </View>
                </View>
                {/* Header End */}

                <Image source={item.image} style={Styles.introFirstImage} />
                <Text style={Styles.titleText}>{item.title}</Text>
                <Text style={Styles.descriptionText}>{item.description}</Text>
                {
                  item.key == 1 ?
                    <Text style={Styles.descriptionText1}>{Constants.ONBOARD_FIRST_DES1}</Text> :
                    null
                }

                {
                  item.key == 1 ?
                    <View style={Styles.bottomButtonWrapper}>
                      <View style={Styles.buttonInner}>
                        <TouchableOpacity>
                          <Image source={Images.left} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                        <View style={Styles.seperator} />
                        <TouchableOpacity onPress={this.goNext}>
                          <Image source={Images.right} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                      </View>
                    </View> :
                    item.key == 2 ?
                      <View style={Styles.bottomButtonWrapper}>
                        <View style={Styles.buttonInner}>
                          <TouchableOpacity onPress={this.goPrevious}>
                            <Image source={Images.left1} style={{ width: 24, height: 24, }} />
                          </TouchableOpacity>
                          <View style={Styles.seperator} />
                          <TouchableOpacity onPress={this.goNext}>
                            <Image source={Images.right} style={{ width: 24, height: 24 }} />
                          </TouchableOpacity>
                        </View>
                      </View> :
                      <View style={Styles.bottomButtonWrapper}>
                        <View style={Styles.buttonInner}>
                          <TouchableOpacity onPress={this.goPrevious}>
                            <Image source={Images.left1} style={{ width: 24, height: 24, }} />
                          </TouchableOpacity>
                          <View style={Styles.seperator} />
                          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register') }}>
                            <Image source={Images.right} style={{ width: 24, height: 24 }} />
                          </TouchableOpacity>
                        </View>
                      </View>
                }
              </View>
            </View>
          </View>
        </ImageBackground>
      </>
    );
  };
  goNext = () => {
    this.setState({ next: this.state.next + 1 });
    this.slider?.goToSlide(this.state.next + 1, true);
  };

  goPrevious = () => {
    this.setState({ next: this.state.next - 1 });
    this.slider?.goToSlide(this.state.next - 1, true);
  };

  changeSlide = (e) => {
    this.setState({ next: e });
  };

  _renderPagination = (activeIndex) => {
    return (
      <>

        {/* <View style={Styles.bottomDotWrapper}>
          <View style={Styles.paginationDots}>
            {slides.length > 1 &&
              slides.map((_, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    Styles.dot,
                    i === activeIndex
                      ? { backgroundColor: Colors.purple, width: 34, }
                      : { backgroundColor: Colors.lightGrey },
                  ]}
                  onPress={() => this.slider?.goToSlide(i, true)}
                />
              ))}
          </View>

        </View> */}

      </>
    )
  }

  render() {
    return (
      <AppIntroSlider
        keyExtractor={this._keyExtractor}
        ref={(ref) => (this.slider = ref)}
        onSlideChange={(e) => this.changeSlide(e)}
        renderItem={this._renderItem}
        data={slides}
        bottomButton={true}
        renderPagination={this._renderPagination}
      />
    );
  }
}

