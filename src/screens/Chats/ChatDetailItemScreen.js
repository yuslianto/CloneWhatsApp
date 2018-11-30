import React, { Component } from "react";
import { 
    View,
    Text,
    Alert,
    Button,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import {Thumbnail} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

class LogoTitle extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <TouchableOpacity onPress={()=> Alert.alert('this is onPress to navigate on screen detail profil contact/group')}>
                <View>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>{navigation.getParam('name')}</Text>
                    <Text style={{fontSize: 11, color: 'white'}}>160 contact</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class IconHeaderRight extends Component {
    render() {
        return (
            <TouchableOpacity onPress={()=> Alert.alert('This is pop-up-menu')}>
                <View style={{
                    flex: 1, flexDirection: 'row', paddingRight: 20, 
                    justifyContent: 'center', alignItems: 'center', marginLeft: 80,
                }}>
                    <Ionicons 
                        name="md-more"
                        style={{
                            color: 'white', fontSize: 25
                        }}
                    />
                </View>
            </TouchableOpacity>

        );
    }
}

class ChatDetailItemScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <LogoTitle navigation={navigation}/>,
            headerRight: <IconHeaderRight/>,
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
                    <Thumbnail
                        source={require('../../assets/images/regLogo.png')}
                        style={{width: 35, height: 35,}}
                    />
                </View>
            ),
            headerLeftContainerStyle: {
               // paddingStart: 50,
               //marginLeft: 50,
            },
            headerTitleContainerStyle: {
                width: '70%',
                marginLeft: 21
            },
            headerStyle:{
                backgroundColor: '#009933',
            },
            headerTintColor: 'white',
        };
    };

    render() {

        const {navigation} = this.props;
        const {item, name, message, date, } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <Text>{name}</Text>
                <Text>{message}</Text>
                <Text>{date}</Text>
            </View>
        );
    }
}
export default ChatDetailItemScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHeader:{
        //fontStyle: 'white',
    },
});