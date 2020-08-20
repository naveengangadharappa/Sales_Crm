import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ActionButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={[styles.container, this.props.style, { width: this.props.width, height: this.props.height, backgroundColor: this.props.color }]} onPress={this.props.onPress}>
        <Text style={[styles.text, { color: this.props.textcolor }]}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

ActionButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
  color: PropTypes.string,
  textcolor: PropTypes.string,
  width: PropTypes.string,
  Height: PropTypes.string,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    padding: 10,
    borderColor: 'green',
    borderWidth: 0.5,
    borderRadius: 25,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    color: '#2cd18a',
    alignSelf: 'center'
  }
});