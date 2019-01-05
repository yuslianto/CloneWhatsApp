import React, { Component } from "react";
import { 
    View,
    Text,
    Alert,
    FlatList,
    ActivityIndicator,
    ScrollView,
    StyleSheet
} from "react-native";
import { 
    Button, Fab, Left, Right,
    Body, List, ListItem, Thumbnail
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import CallItem from '../../components/CallItem';
import { WHATSAPP_CALLS_API } from '../../data/data';

class CallsScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 'true',
            //data: data([]),
            loaded: false,
        };
    }

    componentDidMount(){
        return fetch(WHATSAPP_CALLS_API)
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
    
        <CallItem
            id={item.id}
            first_name={item.first_name}
            missed={item.missed}
            image={item.image}
            read={item.read}
            time={item.time}
            date={item.date}
            onLongPress={()=> Alert.alert("Thanks You long press this listitem")}
            onPress={() => this.props.navigation.navigate('CallItemScreen', 
                {
                    id: item.id,
                    first_name: item.first_name,
                    missed: item.missed,
                    image: item.image,
                    read: item.read,
                    time: item.time,
                    date: item.date,
                }
            )} 
        />
    );

    _keyExtractor = (item, index) => item.toString();

    _onLongPross() {
        Alert.alert('You long pres the item!!!')
    }

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
                    onPress={() => this.props.navigation.navigate('AddCallScreen')}>
                    <MaterialCommunityIcons name="phone-plus" />
                </Fab>
            </View>
        );
    }
}
export default CallsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});