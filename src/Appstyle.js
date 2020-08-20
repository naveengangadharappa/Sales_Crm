import {StyleSheet, Dimensions} from 'react-native';

// screen sizing
const {width, height} = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 3;
// item size
const RECIPE_ITEM_HEIGHT = 50;
const RECIPE_ITEM_MARGIN = 10;

// 2 photos per width
const commonstyles = StyleSheet.create({
  container: {
    backgroundColor: '#E7E6E1',
    /*flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 60,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
    padding:2,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#fff",*/

    position: 'relative',
    width: 120,
    height: 110,
    // eslint-disable-next-line no-dupe-keys
    backgroundColor: '#fff',
    borderRadius: 3,
    marginLeft: 1,
    borderTopColor: 'green',
    overflow: 'scroll',
    borderRightColor: 'black',
    borderTopColor: 'black',
  },
  photo: {
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  InputBox: {
    textAlign: 'left',
    //marginVertical: 8,
    borderBottomColor: '#737373',
    borderColor: '#737373',
    borderBottomWidth: 1,
    paddingTop: 25,
    paddingBottom: 5,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  selectBox: {
    padding: 10,
    height: 40,
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 30,
  },
  Options: {
    padding: 5,
    height: 55,
    width: 250,
    fontSize: 14,
    marginLeft: 30,
    marginRight: 30,
  },
  Heading: {
    padding: 5,
    fontSize: 16,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: 'black',
    padding: 8,
    opacity:0.2,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default commonstyles;
