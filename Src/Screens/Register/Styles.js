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
    backgroundColor: '#F3F5F6'
  },
  mainWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  headerImage: {
    width: 287,
    height: 287,
    alignSelf: 'center',
    marginTop: 10
  },
  registerText: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30
  },
  emailWrapper: {
    marginTop: 40,
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.white,
    width: widthScreen / 1.2,
    flexDirection: 'row'
  },
  emailWrapper1: {
    marginTop: 20,
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.white,
    width: widthScreen / 1.2,
    flexDirection: 'row'
  },
  emailInput: {
    marginLeft: 20,
    flex: 1,
    fontSize: 16,
    fontWeight: '300',
    color: "#9395A4"
  },
  imageIcons: {
    width: 32,
    height: 32,
    marginLeft: 15,
  },
  createButton: {
    marginTop: '10%',
    width: 145,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: Colors.black
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.white
  }
});
export default styles;