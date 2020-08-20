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
import Header from '../Components/Header/header';
import { StyleSheet, Dimensions } from 'react-native';

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
    }

    render() {
        return (
            <ImageBackground
                source={require('../Images/login_bg.png')}
                style={styles.backgroundimage}>
                <Header
                    title={'Dashboard'}
                    LeftonPress={() => { this.props.navigation.goBack() }}
                    RightonPress={() => { this.props.navigation.navigate('Login') }}
                    Right={'menu'}
                    Left={'backbutton'}
                />
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Lead') }} style={styles.leadscontiner}>
                        <Text style={{ alignSelf: 'center', marginRight: 10, fontSize: 16, color: 'blue' }}>Add Lead</Text>
                        <Image style={{ alignSelf: 'flex-end', marginTop: 10, marginLeft: 5, borderRadius: 25, padding: 5, width: 35, height: 35 }} source={require('../Images/plus-icon.png')}></Image>
                    </TouchableOpacity>
                    <View style={styles.headercontiner}>
                        <TouchableOpacity onPress={() => { console.log("navigating to heading 3 screen") }} style={{ flex: 0.25 }}>
                            <View style={{ flex: 1, height: "100%", width: '100%', flexDirection: 'column' }}>
                                <Image style={{ margin: 15, padding: 5, width: '60%', height: '53%' }} source={require('../Images/dashboard-icon1.png')}></Image>
                                <Text style={{ alignSelf: 'center' }}>heading 1</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { console.log("navigating to heading 3 screen") }} style={{ flex: 0.25 }}>
                            <View style={{ flex: 1, height: "100%", width: '100%', flexDirection: 'column' }}>
                                <Image style={{ margin: 15, padding: 5, width: '60%', height: '53%' }} source={require('../Images/dashboard-icon2.png')}></Image>
                                <Text style={{ alignSelf: 'center' }}>heading 2</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { console.log("navigating to heading 3 screen") }} style={{ flex: 0.25 }}>
                            <View style={{ flex: 1, height: "100%", width: '100%', flexDirection: 'column' }}>
                                <Image style={{ flexWrap: 'wrap', margin: 10, width: '55%', height: '60%' }} source={require('../Images/dashboard-icon3.png')}></Image>
                                <Text style={{ alignSelf: 'center' }}>heading 3</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.7, margin: 10 }}>
                        <TouchableOpacity style={{ flex: 0.25, margin: 10, flexDirection: 'row', shadowRadius: 2, elevation: 2, shadowColor: 'black', shadowOpacity: 0.8, shadowOffset: { width: 0, height: 2, }, }}>
                            <View style={{ marginLeft: 30, flexDirection: 'row', position: 'absolute', backgroundColor: 'white', height: '90%', width: '90%', borderRadius: 20, borderWidth: 1, borderColor: 'black' }}>
                                <View style={{ margin: 10, flex: 0.8, }}>
                                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', alignSelf: 'center' }}>Total Leads</Text>
                                    <Text style={{ fontSize: 13, color: 'gray', alignSelf: 'center' }}>Sales CRM Leads</Text>
                                </View>
                                <View style={{ margin: 10, flex: 0.2, }}>
                                    <Text style={{ fontSize: 24, color: 'green', alignSelf: 'center' }}>25</Text>
                                </View>
                            </View>
                            <View style={{ marginleft: 15, borderRadius: 10, borderColor: '#ddd', borderBottomWidth: 0, shadowRadius: 2, elevation: 2, marginBottom: 10, marginTop: 10, shadowOpacity: 0.8, shadowColor: '#000', shadowOffset: { width: 0, height: 2, }, height: '70%', width: '20%', backgroundColor: 'lightgreen' }}>
                                <Image style={{ margin: 10, marginLeft: 20, width: '40%', height: '60%' }} source={require('../Images/dashboard-icon4.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 0.25, margin: 10, flexDirection: 'row', shadowRadius: 2, elevation: 2, shadowColor: 'black', shadowOpacity: 0.8, shadowOffset: { width: 0, height: 2, }, }}>
                            <View style={{ marginLeft: 30, flexDirection: 'row', position: 'absolute', backgroundColor: 'white', height: '90%', width: '90%', borderRadius: 20, borderWidth: 1, borderColor: 'black' }}>
                                <View style={{ margin: 10, flex: 0.8, }}>
                                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', alignSelf: 'center' }}>Total Leads</Text>
                                    <Text style={{ fontSize: 13, color: 'gray', alignSelf: 'center' }}>Sales CRM Leads</Text>
                                </View>
                                <View style={{ margin: 10, flex: 0.2, }}>
                                    <Text style={{ fontSize: 24, color: 'green', alignSelf: 'center' }}>25</Text>
                                </View>
                            </View>
                            <View style={{ marginleft: 15, borderRadius: 10, borderColor: '#ddd', borderBottomWidth: 0, shadowRadius: 2, elevation: 2, marginBottom: 10, marginTop: 10, shadowOpacity: 0.8, shadowColor: '#000', shadowOffset: { width: 0, height: 2, }, height: '70%', width: '20%', backgroundColor: 'skyblue' }}>
                                <Image style={{ margin: 10, marginLeft: 20, width: '40%', height: '60%' }} source={require('../Images/dashboard-icon5.png')}></Image>
                            </View>
                        </TouchableOpacity>
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
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
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
    leadscontiner: {
        flex: 0.05,
        height: '10%',
        width: '40%',
        flexDirection: 'row',
        padding: 10,
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        borderRadius: 25,
        marginTop: 5,
    },
    headercontiner: {
        flex: 0.2,
        height: '20%',
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 10,
        alignSelf: 'center',
        alignContent: 'space-around',
        justifyContent: 'space-around',
        borderRadius: 25,
        marginTop: 5,
    },
    logintext: {
        color: 'white',
        marginBottom: 10,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
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


