import React, { Component } from "react";
import { 
    View,
    Text,
    Alert,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { Thumbnail, Left, Right } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatDetailItemScreen from "../Chats/ChatDetailItemScreen";


class LogoTitle extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <TouchableOpacity onPress={()=> Alert.alert('this is onPres to call info')}>
                <View>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Call info</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class IconHeaderRight extends Component {
    render() {
        return (
            //<TouchableOpacity onPress={()=> Alert.alert('This is pop-up-menu')}>
            <View style={{
                flex: 1, flexDirection: 'row',  
                justifyContent: 'center', alignItems: 'center',
            }}>
                <TouchableOpacity onPress={()=> Alert.alert('this is onPress to navigate to ChatDetailItemScreen')}>
                    <Ionicons 
                        name="md-text"
                        style={{
                            color: 'white', fontSize: 25, paddingHorizontal: 5,
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('This is pop=up-menu')}
                    style={{height: 20, width: 50, borderRadius: 50, 
                        justifyContent: 'center', alignItems: 'center',
                    }}
                >
                    <Ionicons 
                        name="md-more"
                        style={{
                            color: 'white', fontSize: 25
                        }}
                    />
                </TouchableOpacity>
            </View>
            //</TouchableOpacity>

        );
    }
}


class CallItemScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <LogoTitle navigation={navigation}/>,
            headerRight: <IconHeaderRight navigation={navigation}/>,
            headerBackImage: (
                <View 
                    style={{flex: 1, flexDirection: 'row',
                    justifyContent: 'center', alignItems: 'center', 
                    }}
                >
                    <Ionicons 
                        name="md-arrow-back"
                        style={{
                            color: 'white', fontSize: 25, paddingRight: 5
                        }}
                    />
                </View>
            ),
            headerLeftContainerStyle: {
               // paddingStart: 50,
               //marginLeft: 50,
            },
            headerTitleContainerStyle: {
                width: '70%',
                marginLeft: 10
            },
            headerStyle:{
                backgroundColor: '#009933',
            },
            headerTintColor: 'white',
        };
    };

    render() {
        const {navigation} = this.props;
        const {item, first_name, message, date, image, read, time,} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <View style={styles.titlaCall}>
                    <Left style={styles.row}>
                        <Thumbnail style={{marginLeft: 0}} source={{uri:image}} resizeMode='contain'/>
                        <Text style={styles.txt}>{first_name}</Text>
                    </Left>
                    <Right style={styles.rowIcon}>
                        <Ionicons
                            name="ios-call"
                            style={[styles.icon, {color:"green", fontSize: 30}]}
                        />
                        <Ionicons
                            name="ios-videocam"
                            style={{color:"green", fontSize: 30}}
                        />
                    </Right>
                </View>
                <View style={styles.timeCall}>
                    <Text style={styles.txt}>{date}</Text>
                    <Left style={styles.row}>
                        <Thumbnail style={{marginLeft: 0}} source={{uri:image}} resizeMode='contain'/>
                        <Text style={styles.txt}>{time}</Text>
                    </Left>
                    <Right style={styles.rowIcon}>
                        <Ionicons
                            name="ios-call"
                            style={[styles.icon, {color:"green", fontSize: 30}]}
                        />
                        <Ionicons
                            name="ios-videocam"
                            style={{color:"green", fontSize: 30}}
                        />
                    </Right>
                </View>
                
            </View>
        );
    }
}
export default CallItemScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    titlaCall: {
        //flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    timeCall: {
        //flex: 1,
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10,
        //flexDirection: 'row',
        width: 370,
        backgroundColor: 'white',
        height: 130,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 10
    },
    rowIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    icon: {
        paddingHorizontal: 20,
    }
});