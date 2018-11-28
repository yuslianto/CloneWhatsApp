import React, { Component } from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { 
    Left, Right,
    Body, ListItem, Thumbnail
} from 'native-base';

class ChatItem extends Component {
    constructor(props) {
        super(props);        
    }

    //onPress = ()=> {
      //  navigate('ChatDetailItemScreen')
    //};

    render() {
        const {id, name, message, date} = this.props;

        return (
            <View style={styles.container}>
                <ListItem avatar
                    button={true}
                    onPress={this.props.onPress}
                >
                    <Left>
                        <Thumbnail source={ require('../assets/images/regLogo.png') } />
                    </Left>
                    <Body>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>{name}</Text>
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
    }
});