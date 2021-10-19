import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  backgroundWrapper: {
    width: '100%',
    height: "100%",
    justifyContent: 'flex-end',
  },
  bottomWrapper: {
    backgroundColor: Colors.brown,
    borderTopRightRadius: 50,
    width: '90%'
  },
  innerWrapper: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 25
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
    marginTop: 30
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
    width: '70%',
    marginTop: 15
  },
  dotWrapper: {
    flexDirection: 'row'
  },
  first: {
    width: 16,
    height: 8,
    backgroundColor: '#FDD590',
    borderRadius: 15
  },
  second: {
    width: 32,
    height: 8,
    backgroundColor: '#FFB129',
    borderRadius: 15,
    marginLeft: 5
  },
  third: {
    width: 16,
    height: 8,
    backgroundColor: '#FDD590',
    borderRadius: 15,
    marginLeft: 5
  },
  buttonWrapper: {
    width: 145,
    height: 50,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.blue,
  }
});
export default styles;