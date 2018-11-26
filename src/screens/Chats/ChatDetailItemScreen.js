import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ChatDetailItemScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Chat details item Screen</Text>
            </View>
        );
    }
}
export default ChatDetailItemScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});