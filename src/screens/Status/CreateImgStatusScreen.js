import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class CreateImgStatusScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CreateImgStatusScreen</Text>
            </View>
        );
    }
}
export default CreateImgStatusScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});