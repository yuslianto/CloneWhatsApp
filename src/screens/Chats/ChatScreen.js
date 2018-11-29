import React, { Component } from "react";
import { 
    View,
    Text,
    Alert,
    FlatList,
    TouchableHighlight,
    ScrollView,
    StyleSheet
} from "react-native";
import { 
    Fab, List
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import ChatItem from '../../components/ChatItem';

class ChatScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 'true',
            data : [
                {
                    id: "1",
                    name: "Doni",
                    message: "Hay",
                    date: "24/11/2018"
                },
                {
                    id: "2",
                    name: "Rini",
                    message: "Hay",
                    date: "24/11/2018"
                },
                {
                    id: "3",
                    name: "Susi",
                    message: "Hay",
                    date: "24/11/2018"
                },
                {
                    id: "4",
                    name: "Joko",
                    message: "Hay",
                    date: "24/11/2018"
                },
                {
                    id: "5",
                    name: "Dini",
                    message: "Hay",
                    date: "24/11/2018"
                },
                {
                    id: "6",
                    name: "Reno",
                    message: "Hay",
                    date: "24/11/2018"
                },
                {
                    id: "7",
                    name: "Lusi",
                    message: "Hay",
                    date: "24/11/2018"
                },
                {
                    id: "8",
                    name: "Jono",
                    message: "Hay",
                    date: "24/11/2018"
                },
                {
                    id: "9",
                    name: "Joni",
                    message: "Hay",
                    date: "24/11/2018"
                },
                {
                    id: "10",
                    name: "Dono",
                    message: "Hay",
                    date: "24/11/2018"
                },
            ]
        };
    }

    _renderItem = ({item}) => (
    
        <ChatItem
            id={item.id}
            name={item.name}
            message={item.message}
            date={item.date}
            
            onPress={() => this.props.navigation.navigate('ChatDetailItemScreen', 
                {
                    name: item.name, 
                    message: item.message,
                    date: item.date,
                }
            )} 
            //navigation={this.props.navigation}
        />
    );

    _keyExtractor = (item, index) => item.id;

    render() {

        return (
            <View style={styles.container}>
                <List>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={this._keyExtractor} 
                        renderItem={this._renderItem}
                    />
                </List>
                <Fab
                    active={this.state.active}
                    style={{ backgroundColor: '#009933' }}
                    position="bottomRight"
                    onPress={ ()=> this.props.navigation.navigate('AddChatItemScreen') }>
                    <Icon name="md-create" />
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