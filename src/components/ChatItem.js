import React, { Component } from "react";
import { 
    View,
    Text,
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


    render() {
        const {id, name, message, date} = this.props;
        //const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <ListItem avatar
                    button={true}
                    onPress= { ()=> this.props.navigation.navigate('ChatDetailItemScreen') }
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