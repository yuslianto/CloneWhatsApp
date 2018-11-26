import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class KameraItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>KameraItem</Text>
            </View>
        );
    }
}
export default KameraItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});