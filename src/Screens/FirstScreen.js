import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  BackHandler,
  //TouchableHighlight,
  Alert,
} from 'react-native';
//import { Constants, CheckLoginstatus, getDBkeys, CheckConnectivity,GetDeviceId, GetLocation } from '../../network/Apicall';
//import Spinner from 'react-native-loading-spinner-overlay';
//import styles from './styles';
import ActionButton from '../Components/ActionButton/ActionButton';
import Header from '../Components/Header/header'
import { StyleSheet, Dimensions } from 'react-native';
//import commonstyles from '../../Appstyle';

export default class FirstScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
      onloaddata: true,
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  async componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
    /*  try {
        //this.setState({isdataload:true})
          let res=await GetDeviceId();
          if(!res.status){
            Alert("Not able to capture Device Id");
          }
          let resloc=await GetLocation();
          if(!resloc.status){
            console.log("Please turn on Your Locaton successfull");
          }
        let result = await CheckConnectivity();
        if (result.status) {
  
          let keys = await getDBkeys()
          console.log(keys);
          if (keys.data.length > 0) {
            console.log('keys=', keys.data)
            let result = await CheckLoginstatus();
            this.setState({ onloaddata: false })
            if (result.status) {
              //this.props.navigation.navigate('Home');
              if (Constants.user_profile.login_status && !Constants.user_profile.disabled) {
                this.props.navigation.navigate('Home');
              }
            } 
          } else {
            this.setState({ onloaddata: false })
          }
        } else {
          this.setState({ onloaddata: false })
          Alert.alert('Connectivity Error', 'Please connect to the Internet and try again');
        }
  
      } catch (error) {
        this.setState({ onloaddata: false })
        console.log(error);
      }*/
  }
  menufunction() {
    console.log("menu button pressed");
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  handleBackButtonClick() {
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    Alert.alert("Sales Crm", "Are You shure to exit this app", [{

    }]);
    return true
  }

  render() {
    const { navigation } = this.props;
    const loadData = this.state.onloaddata;
    return (
      <ImageBackground
        source={require('../Images/splash.jpg')}
        style={styles.backgroundimage}>
        <View style={{ flex: 1, height: '100%', width: '100%' }}>
          <View style={{ flex: 1, height: '10%', width: '100%', backgroundColor: 'white' }}>
            <ImageBackground
              source={require('../Images/splash.jpg')}
              style={{ width: '100%', height: '100%' }}>
              <ActionButton
                style={{}}
                title={'Login'}
                color={'lightblue'}
                textcolor={'white'}
                width={'50%'}
                height={'40%'}
                onPress={() => { this.props.navigation.navigate('Login') }}
              />
            </ImageBackground>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 3;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backgroundimage: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  LoginButtonStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#97ca3d',
    borderRadius: 20,
  },
  SignUpButtonStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#0295d8',
    borderRadius: 20,
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  ImageStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  SplashScreen_RootView:
  {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  SplashScreen_ChildView:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    flex: 1,
  },
  MainContainer:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
});


