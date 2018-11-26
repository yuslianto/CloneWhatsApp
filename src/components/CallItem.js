import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class CallItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CallItem</Text>
            </View>
        );
    }
}
export default CallItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});