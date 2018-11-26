import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class StatusItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>StatusItem</Text>
            </View>
        );
    }
}
export default StatusItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});