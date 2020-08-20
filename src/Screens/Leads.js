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
import ActionButton from '../Components/ActionButton/ActionButton';
import Header from '../Components/Header/header';
import { StyleSheet, Dimensions } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import StepIndicator from 'react-native-step-indicator';
import DropDownPicker from 'react-native-dropdown-picker';

//import commonstyles from '../../Appstyle';

export default class Leads extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formno: 2,
            isVisible: true,
            onloaddata: true,
            uname: '',
            password: '',
            unamecolor: 'green',
            passwordcolor: 'green',
            validationuname: '',
            validationpassword: '',
            validationerr: '',
            currentPosition: 0
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.Submit = this.Submit.bind(this);
    }

    async componentDidMount() {
        BackHandler.addEventListener(
            'hardwareBackPress',
            this.handleBackButtonClick,
        );
    }
    Submit() {
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
        const labels = ["General Lead Details", "Contact Details", "Tender Details", "Other Details",];
        const customStyles = {
            stepIndicatorSize: 25,
            currentStepIndicatorSize: 30,
            separatorStrokeWidth: 2,
            currentStepStrokeWidth: 3,
            stepStrokeCurrentColor: 'green',
            stepStrokeWidth: 3,
            stepStrokeFinishedColor: '#fe7013',
            stepStrokeUnFinishedColor: '#aaaaaa',
            separatorFinishedColor: '#fe7013',
            separatorUnFinishedColor: '#aaaaaa',
            stepIndicatorFinishedColor: '#fe7013',
            stepIndicatorUnFinishedColor: '#ffffff',
            stepIndicatorCurrentColor: '#ffffff',
            stepIndicatorLabelFontSize: 13,
            currentStepIndicatorLabelFontSize: 13,
            stepIndicatorLabelCurrentColor: 'black',
            stepIndicatorLabelFinishedColor: '#ffffff',
            stepIndicatorLabelUnFinishedColor: '#aaaaaa',
            labelColor: 'black',
            labelSize: 13,
            currentStepLabelColor: 'green'
        }
        return (
            <ImageBackground
                source={require('../Images/login_bg.png')}
                style={styles.backgroundimage}>
                <Header
                    title={'Add Lead'}
                    LeftonPress={() => { this.props.navigation.goBack() }}
                    RightonPress={() => { console.log("entered to menu button") }}
                    Right={'menu'}
                    Left={'backbutton'}
                />
                <View style={styles.container}>
                    <View style={{ flex: 0.1, margin: 15 }}>
                        <StepIndicator
                            customStyles={customStyles}
                            currentPosition={this.state.currentPosition}
                            labels={labels}
                            stepCount={4}
                        />
                    </View>
                    {this.state.formn0 == 1 ?
                        <View style={styles.section1} >
                            <ScrollView style={{ flex: 1, height: '100%', width: '100%' }} >
                                <Text style={{ alignSelf: 'flex-start', color: 'blue', margin: 10, fontSize: 16, }}>Lead form</Text>
                                {this.state.validationerr == '' ? null : <Text style={styles.validationerr}>{this.state.validationerr}</Text>}
                                <Hoshi
                                    style={{ width: '90%', height: '60%', marginLeft: 15 }}
                                    label={'Lead Title'}
                                    borderColor={this.state.unamecolor}
                                    borderHeight={1}
                                    inputPadding={16}
                                    backgroundColor={'#F3F3F3'}
                                    //imagename='user'
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
                                <DropDownPicker
                                    items={[{ value: 'dropdown', label: 'dropdown' }, { value: 'dropdown', label: 'dropdown' }, { value: 'dropdown', label: 'dropdown' }]}
                                    placeholder="Select Risk Level"
                                    style={styles.dropdown}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    searchable={true}
                                    searchablePlaceholder={'search placeholder'}
                                    dropDownStyle={{ backgroundColor: '#F3F3F3', height: '250%', width: '90%', marginLeft: 15 }}
                                    onChangeItem={(item) => {
                                        console.log("dropdown1 selection = " + item)
                                        //this.setState({ riskid:item.value})
                                    }
                                    }
                                />
                                <DropDownPicker
                                    items={[{ value: 'dropdown', label: 'dropdown' }, { value: 'dropdown', label: 'dropdown' }, { value: 'dropdown', label: 'dropdown' }]}
                                    placeholder="Select Risk Level"
                                    style={styles.dropdown}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    searchable={true}
                                    dropDownStyle={{ backgroundColor: '#F3F3F3', height: '250%', width: '90%', marginLeft: 15 }}
                                    onChangeItem={(item) => {
                                        console.log("dropdown1 selection = " + item)
                                        //this.setState({ riskid:item.value})
                                    }
                                    }
                                />
                                <DropDownPicker
                                    items={[{ value: 'dropdown', label: 'dropdown' }, { value: 'dropdown', label: 'dropdown' }, { value: 'dropdown', label: 'dropdown' }]}
                                    placeholder="Select Risk Level"
                                    style={styles.dropdown}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    searchable={true}
                                    dropDownStyle={{ backgroundColor: '#F3F3F3', height: '250%', width: '90%', marginLeft: 15 }}
                                    onChangeItem={(item) => {
                                        console.log("dropdown1 selection = " + item)
                                        //this.setState({ riskid:item.value})
                                    }
                                    }
                                />
                                <DropDownPicker
                                    items={[{ value: 'dropdown', label: 'dropdown' }, { value: 'dropdown', label: 'dropdown' }, { value: 'dropdown', label: 'dropdown' }]}
                                    placeholder="Select Risk Level"
                                    style={styles.dropdown}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    searchable={true}
                                    dropDownStyle={{ backgroundColor: '#F3F3F3', height: '250%', width: '90%', marginLeft: 15 }}
                                    onChangeItem={(item) => {
                                        console.log("dropdown1 selection = " + item)
                                        //this.setState({ riskid:item.value})
                                    }
                                    }
                                />

                                <Hoshi
                                    style={{ width: '90%', height: '60%', marginLeft: 15, marginBottom: 15 }}
                                    label={'Username'}
                                    borderColor={this.state.unamecolor}
                                    borderHeight={1}
                                    inputPadding={16}
                                    backgroundColor={'#F3F3F3'}
                                    //imagename='user'
                                    value={this.state.uname}
                                    onChangeText={(text) => {
                                        if (text.includes(' ') || text.includes('*') || text.includes('+') || text.includes('=') || text.includes('?')) {
                                            this.setState({ unamecolor: 'darkred', validationuname: 'special character not allowed' });
                                        } else {
                                            this.setState({ uname: text, validationuname: '', unamecolor: 'green' })
                                        }
                                    }}
                                />
                                <ActionButton
                                    style={{}}
                                    title={'Next'}
                                    color={'skyblue'}
                                    textcolor={'white'}
                                    width={'20%'}
                                    height={'10%'}
                                    onPress={this.Submit}
                                    style={{ alignSelf: 'flex-end' }}
                                />

                            </ScrollView>
                        </View> : <View style={styles.section1} >
                            <ScrollView style={{ flex: 1, height: '100%', width: '100%' }} >
                                <View style={{ flex: 0.1, flexDirection: 'row' }}>
                                    <Text style={{ alignSelf: 'flex-start', color: 'blue', margin: 10, fontSize: 16, }}>Add Contact</Text>
                                    <Image style={{ alignSelf: 'flex-end', marginTop: 10, marginLeft: 5, borderRadius: 25, padding: 5, width: 30, height: 30 }} source={require('../Images/plus-icon.png')}></Image>
                                </View>
                                {this.state.validationerr == '' ? null : <Text style={styles.validationerr}>{this.state.validationerr}</Text>}
                                <View style={{ flex: 0.7, height: '100%', width: '100%', backgroundColor: 'green', }}>
                                </View>
                            </ScrollView>
                        </View>
                    }
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
    section1: {
        flex: 0.9,
        margin: 10,
        height: '100%',
        width: '95%',
        backgroundColor: '#0F0F0F0F',
        opacity: 1,
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
    dropdowncontainer: {
        width: '90%',
        margin: 15,
        borderBottomWidth: 2,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: 'lightgray',
    },
    dropdown: {
        backgroundColor: '#F3F3F3',
        width: '90%',
        marginLeft: 15,
        marginTop: 5,
        borderBottomWidth: 2,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderColor: 'lightgray',
    }
});


