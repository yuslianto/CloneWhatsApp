import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class CallItemScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CallItemScreen</Text>
            </View>
        );
    }
}
export default CallItemScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});