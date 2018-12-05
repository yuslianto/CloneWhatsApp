import React, { Component } from "react";
import { 
    View,
    Alert,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import CallsScreen from "../screens/Calls/CallsScreen";
import CallItemScreen from "../screens/Calls/CallItemScreen";
import AddCallScreen from "../screens/Calls/AddCallScreen";
import AddChatItemScreen from "../screens/Chats/AddChatItemScreen";
import ChatDetailItemScreen from "../screens/Chats/ChatDetailItemScreen";
import ChatScreen from "../screens/Chats/ChatScreen";
import StatusScreen from "../screens/Status/StatusScreen";
import CreateTextStatusScreen from "../screens/Status/CreateTextStatusScreen";
import CreateImgStatusScreen from "../screens/Status/CreateImgStatusScreen";
import KameraScreen from "../screens/Kamera/KameraScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import KameraItem from '../components/KameraItem';


const RootTab = createMaterialTopTabNavigator(
    {
        KameraScreen : { 
            screen: KameraScreen,
            navigationOptions: {
                tabBarLabel: 'Camera',
                /*tabBarOptions: {
                    showLabel: false,
                    showIcon: true
                }*/
            },
        },
        ChatScreen : { 
            screen: ChatScreen,
            navigationOptions: {
                tabBarLabel: 'Chats',
            },
        },
        StatusScreen : { 
            screen: StatusScreen,
            navigationOptions: {
                tabBarLabel: 'Status',
            },
        },
        CallsScreen : { 
            screen: CallsScreen,
            navigationOptions: {
                tabBarLabel: 'Calls',
            },
        },
    },
    {
        initialRouteName: 'ChatScreen',
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'KameraScreen') {
                    iconName = "ios-camera";
                } 
                return <Icon name={iconName} size={30} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#f2f2f2',
            showIcon: true,
            showLabel: true,
            style : {
                backgroundColor: '#009933',
            },
            labelStyle: {
                fontWeight: 'bold',
            }
        },
    }
);

const RootStack = createStackNavigator(
    {
        KameraItem : KameraItem,
        SearchScreen : SearchScreen,
        AddCallScreen : AddCallScreen,
        CallItemScreen : CallItemScreen,
        AddChatItemScreen : AddChatItemScreen,
        ChatDetailItemScreen : ChatDetailItemScreen,
        CreateTextStatusScreen : CreateTextStatusScreen,
        CreateImgStatusScreen : CreateImgStatusScreen,
        RootTab : { 
            screen: RootTab,
            navigationOptions: ({ navigation }) => ({
                title: 'WhatsApps',
                headerStyle: {
                    backgroundColor: '#009933',
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTintColor: 'white',
                headerRight: (
                    <View style={{ paddingHorizontal: 10, flexDirection: "row"}}>
                        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
                            <View style={{ paddingHorizontal: 20}}>
                                <Icon name="ios-search" size={24} color="white"/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingHorizontal: 10}}
                            onPress={()=> Alert.alert('this is pop-up-menu')}
                        >
                            <Icon name="md-more" size={24} color="white"/>
                        </TouchableOpacity>
                    </View>
                )
            })
        },
    },
    {
        initialRouteName: 'RootTab',
    }
);

export default class AppWithNavigationState extends Component {
    render() {
        return (
            <RootStack/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});