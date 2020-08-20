import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;
const SCREEN_HEIGHT = height > width ? height : width;

const styles = StyleSheet.create({
  basecontainer: {
    width: '100%',
    height: '90%',
    // marginTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    // marginTop: Constants.statusBarHeight,
  },
  title: {
    fontSize: 12,
    color: 'black',
  },
  backgroundImageStyle: {
    flex: 1,
  },
});

export default styles;
