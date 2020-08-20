import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
    render() {
        return (
            <View style={{ width: '100%', height: '15%', marginTop: 0, justifyContent: 'center', flexDirection: 'row', }}>
                <View
                    style={{ marginLeft: 1, width: '10%' }}>
                    {(this.props.Left == 'backbutton') ?
                        <TouchableOpacity
                            onPress={this.props.LeftonPress}
                            style={styles.btnContainer}>
                            <Image
                                source={require('../../Images/backArrow.png')}
                                style={styles.btnIcon}
                            />
                        </TouchableOpacity> : null
                    }
                </View>
                <View
                    style={{
                        flex: 2,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        width: '80%',
                        height: '10%',
                        marginBottom: 10,
                    }}>
                    {this.props.title != null ?
                        <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold', alignSelf: 'center' }}>
                            {this.props.title}
                        </Text> : null
                    }
                </View>
                <View
                    style={{ marginRight: 1, width: '10%' }}>
                    {(this.props.Right == 'menu') ?
                        <TouchableOpacity
                            onPress={this.props.RightonPress}
                            style={styles.btnContainer}>
                            <Image
                                source={require('../../Images/menuIcon.png')}
                                style={styles.btnIcon}
                            />
                        </TouchableOpacity> : null
                    }
                </View>
            </View>
        );
    }
}

Header.propTypes = {
    LeftonPress: PropTypes.func,
    RightonPress: PropTypes.func,
    //source: PropTypes.number,
    title: PropTypes.string,
    Left: PropTypes.string,
    Right: PropTypes.string,
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: 'white',
        borderBottomWidth: 6,
        borderBottomColor: '#97ca3d',
        borderRadius: 15,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    backgroundImageStyle: {
        flex: 1,
    },
    backgroundheader: {
        flex: 0.1,
        width: '100%',
        height: '10%',
        marginTop: 0,
    },
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
        borderColor: 'green',
        borderWidth: 0.2
    },
});
