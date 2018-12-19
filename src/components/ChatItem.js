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

class ChatItem extends Component {
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
                        <Text>{message}</Text>
                    </Body>
                    <Right>
                        <Text>{date}</Text>
                    </Right>
                </ListItem>
            </View>
        );
    }
}
export default ChatItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    initStyle: {
        borderRadius: 30,
        width: 60,
        height: 60
    }
});