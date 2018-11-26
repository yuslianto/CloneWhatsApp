import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class CrreateTextStatusScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CrreateTextStatusScreen</Text>
            </View>
        );
    }
}
export default CrreateTextStatusScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});