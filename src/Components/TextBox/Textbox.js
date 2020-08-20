import React from 'react';
import {TouchableHighlight, Image, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {TextField} from 'react-native-material-textfield';

export default class Textbox extends React.Component {
  render() {
    return (
      <View
        style={[
          styles.container,
          {
            width: this.props.width,
            height: this.props.height,
            flexDirection: 'row',
          },
        ]}>
        <Image
          style={{
            width: '20%',
            padding: 10,
            alignSelf: 'center',
            borderRadius: 100,
          }}
          source={require('../../../assets/icons/user-icon.png')}
        />
        <TextField
          style={{flex: 1, width: '100%', padding: 2, alignSelf: 'center'}}
          label="Mobile-Number"
          value={''}
          keyboardType="phone-pad"
          maxLength={10}
        />
        <Image
          style={{
            width: '20%',
            padding: 10,
            alignSelf: 'center',
            borderRadius: 100,
          }}
          source={require('../../../assets/icons/arrow-button.png')}
        />
      </View>
    );
  }
}

Textbox.propTypes = {
  //onPress: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
};
