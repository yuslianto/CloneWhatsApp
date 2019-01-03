import React, { Component } from "react";
import { 
    View,
    Button,
    FlatList,
    Text,
    Alert,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
    List, ListItem, Left, Body, Thumbnail,
} from 'native-base';
import { fetch } from 'fetch';
//import Icon from 'react-native-vector-icons/Ionicons';
import { WHATSAPP_CONTACTS_API } from '../../data/data';

import ContactChats from '../../components/ContactChats';


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

class AddChatItemScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 'true',
            //data: data([]),
            loaded: true,
        };
    }

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

    componentDidMount(){
        return fetch(WHATSAPP_CONTACTS_API)
            .then((response) => response.json())
            .then((responseJson) => {
        
                this.setState({
                    loaded: false,
                    dataSource: responseJson,
                },);
        
            })
            .catch((error) =>{
                console.error(error);
            });
    }    

    _renderItem = ({item}) => (
    
        <ContactChats
            id={item.id}
            first_name={item.first_name}
            message={item.message}
            image={item.image}
            mobile={item.mobile}
            time={item.time}
            date={item.date}
            onLongPress={()=> Alert.alert("Thanks You long press this listitem")}
            onPress={() => this.props.navigation.navigate('ChatDetailItemScreen', 
                {
                    id: item.id,
                    first_name: item.first_name,
                    message: item.message,
                    image: item.image,
                    mobile: item.mobile,
                    time: item.time,
                    date: item.date,
                }
            )} 
        />
    );

    _keyExtractor = (item, index) => item.toString();

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <List containerStyle = {{borderTopWidth: 0, borderBottomWidth: 0, flex:1}}>
                    <ListItem avatar
                        style={{backgroundColor: 'white', width: '100%', marginLeft: 0, paddingLeft: 20, paddingVertical: 5, paddingRight: 40,}}
                        button={true}
                    >
                        <Left>
                            <View style={{justifyContent: 'center', backgroundColor:'green', height: 55, width: 55,
                                alignItems: 'center', borderRadius: 50,}}>
                                <Ionicons 
                                    name="md-people"
                                    style={{
                                        color: 'white', fontSize: 25,
                                    }}
                                />
                            </View>
                        </Left>
                        <Body>
                            <Text style={{fontWeight: 'bold', fontSize: 16}}>New group</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar
                        style={{backgroundColor: 'white', width: '100%', marginLeft: 0, paddingLeft: 20, paddingVertical: 5, paddingRight: 40,}}
                        button={true}
                    >
                        <Left>
                            <View style={{justifyContent: 'center', backgroundColor:'green', height: 55, width: 55,
                                alignItems: 'center', borderRadius: 50,}}>
                                <Ionicons 
                                    name="md-person-add"
                                    style={{
                                        color: 'white', fontSize: 25,
                                    }}
                                />
                            </View>
                        </Left>
                        <Body>
                            <Text style={{fontWeight: 'bold', fontSize: 16}}>New contact</Text>
                        </Body>
                    </ListItem>
                    <FlatList
                        data={this.state.dataSource}
                        keyExtractor={this._keyExtractor} 
                        renderItem={this._renderItem}
                        //renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                    />
                </List>
            </View>
        );
    }
}
export default AddChatItemScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});