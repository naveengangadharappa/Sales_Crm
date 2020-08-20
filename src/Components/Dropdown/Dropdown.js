import React from 'react';
import styles from './styles';
import {
  View,
  FlatList,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import {Constants, GetState, GetCountry, GetCity} from '../../network/Apicall';
import Spinner from 'react-native-loading-spinner-overlay';
import commonstyles from '../../Appstyle';

export default class MyDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onloaddata: false,
      textvalue: '',
      data: this.props.data,
      clicked: true,
    };
  }

  options: '';
  componentDidMount() {
    let {navigation} = this.props;
    let option = navigation.getParam('option');
    this.options = option;
    switch (this.options) {
      case 'country':
        this.loadcountry();
        break;
      case 'state':
        this.loadstate();
        break;
      case 'city':
        this.loadcity();
        break;
    }
  }

  Search(text) {
    this.setState({textvalue: text});
    let tempdata = text.toUpperCase();
    let tempArray = [];
    Constants.Dataarray.map(data => {
      let temp = JSON.stringify(data.value).toUpperCase();
      if (temp.includes(tempdata)) {
        tempArray.push(data);
      }
    });
    this.setState({data: tempArray});
  }

  getId(item) {
    switch (this.options) {
      case 'country':
        Constants.countryId.id = item.id;
        Constants.countryId.name = item.value;
        /*this.props.navigation.navigate('UpdateProfile', {
          otion: 'country',
          data: item.value,
        });*/
        this.props.navigation.navigate('UpdateProfile');
        break;
      case 'state':
        console.log('state');
        Constants.stateId.id = item.id;
        Constants.stateId.name = item.value;
        //state = item.value;
        /*this.props.navigation.navigate('UpdateProfile', {
          otion: 'state',
          data: item.value,
        });*/
        this.props.navigation.navigate('UpdateProfile');
        break;
      case 'city':
        console.log('city');
        Constants.cityId.id = item.id;
        Constants.cityId.name = item.value;
        //city = item.value;
        /* this.props.navigation.navigate('UpdateProfile', {
          otion: 'city',
          data: item.value,
        });*/
        this.props.navigation.navigate('UpdateProfile');
        break;
    }
  }

  async loadcountry() {
    try {
      this.setState({onloaddata: true});
      let result = await GetCountry();
      this.setState({onloaddata: false});
      if (result.status) {
        Constants.Dataarray = result.data;
        this.setState({data: Constants.Dataarray});
      } else {
        Alert.alert('Problem in County data loading');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async loadstate() {
    if (Constants.countryId.id <= 0) {
      Alert.alert('please select country');
      this.props.navigation.navigate('UpdateProfile');
    } else {
      try {
        this.setState({onloaddata: true});
        let result = await GetState(Constants.countryId.id);
        this.setState({onloaddata: false});
        if (result.status) {
          Constants.Dataarray = result.data;
          this.setState({data: Constants.Dataarray});
        } else {
          Alert.alert('Problem in State data loading');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  async loadcity() {
    this.props.navigation.navigate('Dropdown', {option: 'city'});
    if (Constants.stateId.id <= 0) {
      Alert.alert('please select state');
      this.props.navigation.navigate('UpdateProfile');
    } else {
      try {
        this.setState({onloaddata: true});
        let result = await GetCity(Constants.stateId.id);
        this.setState({onloaddata: false});
        if (result.status) {
          Constants.Dataarray = result.data;
          this.setState({data: Constants.Dataarray});
        } else {
          Alert.alert('Problem in City data loading');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  renderObjectData = ({item}) => (
    <TouchableHighlight
      onPress={() => {
        this.getId(item);
      }}>
      <View style={[styles.container]}>
        <Text style={styles.title}>{item.value}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    const {navigation} = this.props;
    const loadData = this.state.onloaddata;
    let option = 'country';
    if (loadData) {
      return (
        <View styles={commonstyles.container1}>
          <Spinner
            visible={loadData}
            textContent={'Loading...'}
            textStyle={commonstyles.spinnerTextStyle}
          />
        </View>
      );
    } else {
      return (
        <View style={{width: '100%', height: '100%'}}>
          <TextInput
            style={{padding: 5, width: '100%', height: '10%', borderWidth: 1}}
            placeholder="Search"
            underlineColorAndroid="transparent"
            value={this.state.textvalue}
            onChangeText={txt => this.Search(txt)}
          />
          <ScrollView style={styles.basecontainer}>
            <FlatList
              vertical
              showsVerticalScrollIndicator={true}
              numColumns={1}
              data={this.state.data}
              renderItem={this.renderObjectData}
              keyExtractor={item => `${item.id}`}
            />
          </ScrollView>
        </View>
      );
    }
  }
}
