import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width-10 : height-10;
const SCREEN_HEIGHT = height > width ? height-10 : width-10;

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    padding: 8,
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 1,
  }
});

export default styles;
