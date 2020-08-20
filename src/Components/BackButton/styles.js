import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    //borderRadius: 180,
    padding: 8,
    margin: 5,
    /*backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },*/
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  btnIcon: {
    height: 25,
    width: 25,
    borderColor:'green',
    borderWidth:0.2
  },
});

export default styles;
