import React from 'react';
import {
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
    Image,
    BackHandler,
    ScrollView,
    Alert,
} from 'react-native';
//import { Constants, CheckLoginstatus, getDBkeys, CheckConnectivity,GetDeviceId, GetLocation } from '../../network/Apicall';
//import Spinner from 'react-native-loading-spinner-overlay';
import ActionButton from '../Components/ActionButton/ActionButton'
import { StyleSheet, Dimensions } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';

//import commonstyles from '../../Appstyle';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
            onloaddata: true,
            uname: '',
            password: '',
            unamecolor: 'green',
            passwordcolor: 'green',
            validationuname: '',
            validationpassword: '',
            validationerr: ''
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.Login = this.Login.bind(this);
    }

    async componentDidMount() {
        BackHandler.addEventListener(
            'hardwareBackPress',
            this.handleBackButtonClick,
        );
    }
    Login() {
        console.log(this.state.uname);
        console.log(this.state.password);
        this.setState({ validationerr: 'all fiends are mandatory' });
        this.props.navigation.navigate('Home')
    }

    componentWillUnmount() {
        BackHandler.removeEventListener(
            'hardwareBackPress',
            this.handleBackButtonClick,
        );
    }

    handleBackButtonClick() {
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.props.navigation.goBack();
        return true
    }

    render() {
        return (
            <ImageBackground
                source={require('../Images/login_bg.png')}
                style={styles.backgroundimage}>

                <View style={styles.container}>
                    <View style={{ flex: 0.1, justifyContent: 'center', alignSelf: "center", alignContent: 'center' }}>
                        <Text style={styles.logintext}>Login to your account</Text>
                    </View>
                    <View style={styles.logincontainer}>
                        <ScrollView style={{ flex: 1 }} >
                            <Text style={[styles.logintext, { marginTop: 1, color: 'black', fontSize: 19, }]}>Welcome</Text>
                            <Text style={{ alignSelf: 'center', color: 'black', fontSize: 14, }}>please enter your username and password</Text>
                            {this.state.validationerr == '' ? null : <Text style={styles.validationerr}>{this.state.validationerr}</Text>}
                            <Hoshi
                                style={{ width: '90%', padding: 5 }}
                                label={'Username'}
                                borderColor={this.state.unamecolor}
                                borderHeight={1}
                                inputPadding={16}
                                backgroundColor={'#F9F7F6'}
                                imagename='user'
                                value={this.state.uname}
                                onChangeText={(text) => {
                                    if (text.includes(' ') || text.includes('*') || text.includes('+') || text.includes('=') || text.includes('?')) {
                                        this.setState({ unamecolor: 'darkred', validationuname: 'special character not allowed' });
                                    } else {
                                        this.setState({ uname: text, validationuname: '', unamecolor: 'green' })
                                    }
                                }}
                            />
                            {this.state.validationuname == '' ? null : <Text style={styles.validationtext}>{this.state.validationuname}</Text>}
                            <Hoshi
                                style={{ width: '90%', padding: 5, marginBottom: 10 }}
                                label={'Password'}
                                borderColor={'green'}
                                borderHeight={1}
                                inputPadding={16}
                                backgroundColor={'#F9F7F6'}
                                inputtype={'password'}
                                value={this.state.password}
                                onChangeText={(text) => { this.setState({ password: text }) }}
                            />
                            {this.state.validationpassword == '' ? null : <Text style={styles.validationtext}>{this.state.validationpassword}</Text>}
                            <ActionButton
                                style={{}}
                                title={'Login'}
                                color={'lightblue'}
                                textcolor={'white'}
                                width={'50%'}
                                height={'40%'}
                                onPress={this.Login}
                            />
                            <TouchableOpacity onPress={() => { console.log("forget password clicked") }} style={{ flex: 1, marginBottom: 10, paddingTop: 10, justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
                                <Text style={{ color: 'blue', fontSize: 14 }}>Forget Password</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        // alignContent: 'center',
        justifyContent: 'center',
    },
    logincontainer: {

        flex: 0.5,
        padding: 10,
        height: '55%',
        width: '85%',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        opacity: 2,
        shadowColor: 'black',
        shadowRadius: 15,
        borderRadius: 25,
        borderWidth: 10,
        borderColor: '#F0F0F0F0',
    },
    logintext: {
        color: 'white',
        marginBottom: 10,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    backgroundimage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    text: {
        color: 'grey',
        fontSize: 30,
        fontWeight: 'bold',
    },
    validationtext: {
        color: 'darkred',
        fontSize: 12,
        alignSelf: 'center',
    },
    validationerr: {
        color: 'darkred',
        fontSize: 12,
        alignSelf: 'center',
        paddingTop: 10,
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


