import React, { Component } from "react";
import { 
    View,
    Text,
    Alert,
    FlatList,
    ListView,
    ActivityIndicator,
    TouchableHighlight,
    ScrollView,
    StyleSheet
} from "react-native";
import { 
    Fab, List
} from 'native-base';
import { fetch } from 'fetch';
import Icon from 'react-native-vector-icons/Ionicons';

import ChatItem from '../../components/ChatItem';
import { WHATSAPP_CHATS_API } from '../../data/data';

class ChatScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 'true',
            //data: data([]),
            loaded: false,
        };
    }

    componentDidMount(){
        return fetch(WHATSAPP_CHATS_API)
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
    
        <ChatItem
            id={item.id}
            first_name={item.first_name}
            message={item.message}
            image={item.image}
            read={item.read}
            time={item.time}
            date={item.date}
            onLongPress={()=> Alert.alert("Thanks You long press this listitem")}
            onPress={() => this.props.navigation.navigate('ChatDetailItemScreen', 
                {
                    id: item.id,
                    first_name: item.first_name,
                    message: item.message,
                    image: item.image,
                    read: item.read,
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
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <List containerStyle = {{borderTopWidth: 0, borderBottomWidth: 0}}>
                    <FlatList
                        data={this.state.dataSource}
                        keyExtractor={this._keyExtractor} 
                        renderItem={this._renderItem}
                        //renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                    />
                </List>
                <Fab
                    active={this.state.active}
                    style={{ backgroundColor: '#009933' }}
                    position="bottomRight"
                    onPress={ ()=> this.props.navigation.navigate('AddChatItemScreen') }>
                    <Icon 
                        name="md-text" 
                    />
                </Fab>
            </View>
        );
    }
}
export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});