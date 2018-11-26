import React, { Component } from "react";
import { 
    View,
    Button,
    Text,
    Image,
    StyleSheet
} from "react-native";

class LogoTitle extends Component {
    render() {
        return (
            <View>
                <Text>Select Contact</Text>
                <Text>160 contact</Text>
            </View>
        );
    }
}

class IconHeaderRight extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row',}}>
                <Text>Selectt</Text>
                <Text>160</Text>
            </View>
        );
    }
}


class AddChatItemScreen extends Component {
    static navigationOptions = {
        headerTitle: <LogoTitle />,
        headerRight: <IconHeaderRight />,
        headerStyle: {
            backgroundColor: '#009933',
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>AddChatItemScreen</Text>
            </View>
        );
    }
}
export default AddChatItemScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});