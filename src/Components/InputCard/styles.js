import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width-10 : height-10;
const SCREEN_HEIGHT = height > width ? height-10 : width-10;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 8,
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    borderBottomWidth:5,
    borderBottomColor:'green',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  logo: {
    width:SCREEN_WIDTH-30,
    height: 47,
    padding: 10,
  },
});

export default styles;
