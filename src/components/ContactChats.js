import React, { Component } from "react";
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { 
    Left, Right,
    Body, ListItem, Thumbnail,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';


class ContactChats extends Component {
    constructor(props) {
        super(props);        
    }

    //onPress = ()=> {
      //  navigate('ChatDetailItemScreen')
    //};

    render() {
        const {id, first_name, message, date, image, } = this.props;

        return (
            <View style={styles.container}>
                <ListItem avatar
                    button={true}
                    onLongPress={this.props.onLongPress}
                    onPress={this.props.onPress}
                >
                    <Left>
                        <Thumbnail source={{uri:image}} resizeMode='contain'/>
                    </Left>
                    <Body>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>{first_name}</Text>
                        <Text numberOfLines={1}>{message}</Text>
                    </Body>
                </ListItem>
            </View>
        );
    }
}
export default ContactChats;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingRight: 40,
    },
    initStyle: {
        borderRadius: 30,
        width: 60,
        height: 60
    }
});