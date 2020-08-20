import React from 'react';
import {TouchableHighlight, Image, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Textbox from '../TextBox/Textbox';

export default class Inputcard extends React.Component {
  render() {
    return (
      <View
        style={[
          styles.container,
          {width: this.props.width, height: this.props.height},
        ]}>
          
        <Image
          source={require('../../../assets/icons/covidlogo.png')}
          style={styles.logo}
        />
        <Textbox width={'130%'} height={'20%'} />
        {/*<TouchableHighlight
          onPress={this.props.onPress}
          style={styles.btnContainer}>
          <Image
            source={require('../../../assets/icons/backArrow.png')}
            style={styles.btnIcon}
          />
        </TouchableHighlight>*/}
      </View>
    );
  }
}

Inputcard.propTypes = {
  //onPress: PropTypes.func,
  //source: PropTypes.number,
  textboxno: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,\
};
