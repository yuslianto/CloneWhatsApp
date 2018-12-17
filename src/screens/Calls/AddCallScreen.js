import React, { Component } from "react";
import { 
    View,
    Button,
    Text,
    Alert,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Thumbnail} from 'native-base';

class LogoTitle extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <TouchableOpacity onPress={()=> Alert.alert('this is onPress to navigate on screen detail profil contact/group')}>
                <View>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Select contact</Text>
                    <Text style={{fontSize: 11, color: 'white'}}>160 contact</Text>
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
                <TouchableOpacity onPress={()=> Alert.alert('this is onPress to search')}>
                    <Ionicons 
                        name="md-search"
                        style={{
                            color: 'white', fontSize: 25, paddingHorizontal: 5,
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('this is pop-up-menu')}
                    style={{height: 20, width: 50, justifyContent: 'center', alignItems: 'center'}}
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

class AddCallScreen extends Component {

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
        return (
            <View style={styles.container}>
                <Text>AddCallScreen</Text>
            </View>
        );
    }
}
export default AddCallScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});