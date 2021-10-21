import { StyleSheet, Dimensions } from 'react-native';
import Metrics from '../../Styles/Metrices';
import Colors from '../../Styles/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    // backgroundColor: 'white',
  },
  backgroundWrapper: {
    width: '100%',
    height: '100%'
  },
  introFirstImage: {
    width: hp(50),
    height: hp(50),
    alignSelf: 'center',
    marginTop: '20%',
  },
  mainContainerWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  ineerWrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
  },
  skipText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textColor,
  },
  titleText: {
    fontSize: 40,
    fontWeight: '700',
    color: Colors.textColor,
    textAlign: 'center',
    marginTop: 20
  },
  titleText1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.textColor,
    marginTop: 10
  },
  descriptionText: {
    fontSize: 17,
    fontWeight: '400',
    color: Colors.desColor,
    marginTop: 15,
    textAlign: 'center'
  },
  descriptionText1: {
    fontSize: 17,
    fontWeight: '400',
    color: Colors.desColor,
    marginTop: 3,
    textAlign: 'center'
  },
  bottomDotWrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 30
  },
  dot: {
    width: 12,
    height: 4,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  buttonWrapper: {
    width: 145,
    height: 50,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15
  },
  buttonWrapper1: {
    width: 145,
    height: 50,
    backgroundColor: Colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: widthScreen / 1.2,
  },
  skipWrapper: {
    backgroundColor: Colors.dotColor,
    borderRadius: 25,
    width: 62,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  bottomButtonWrapper: {
    width: 154,
    alignSelf: 'center',
    height: 64,
    backgroundColor: Colors.white,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '15%'
  },
  buttonInner: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  seperator: {
    width: 2,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E6E8EC'
  }
});
export default styles;
