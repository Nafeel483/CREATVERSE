import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  backgroundWrapper: {
    width: '100%',
    height: "100%",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgba(205,206,219,0.60)'
  },
  mainWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  headerWrapper: {
    flex: 0.1,
  },
  backIcon: {
    marginTop: 20,
    marginLeft: 20,
    width: 100,
    height: 100
  },
  mainScreen: {
    flex: 0.9,
    justifyContent: 'center'
  },
  modelWrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.40)',
    height: 349
  },
  whishImage: {
    alignSelf: 'center',
    width: 213,
    height: 213,
    marginTop: '-25%'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textColor
  },
  description: {
    fontSize: 14,
    marginTop: 20,
    fontWeight: '500',
    color: '#9395A4',
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center'
  },
  description1: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '500',
    color: '#9395A4',
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center'
  }
});
export default styles;