import React, { Component } from "react";
import { 
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";

class KameraScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Kamera Screen</Text>
                <Button
                    title=" Go to Kamera Item"
                    onPress={() => this.props.navigation.navigate('KameraItem')}
                />
            </View>
        );
    }
}
export default KameraScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});