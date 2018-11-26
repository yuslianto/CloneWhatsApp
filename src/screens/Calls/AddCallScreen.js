import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class AddCallScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>AddCallScreen</Text>
            </View>
        );
    }
}
export default AddCallScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});