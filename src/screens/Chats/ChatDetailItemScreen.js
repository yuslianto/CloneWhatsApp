import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class LogoTitle extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View>
                <Text>{navigation.getParam('name')}</Text>
                <Text>160 contact</Text>
            </View>
        );
    }
}

class IconHeaderRight extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row',}}>
                <Text>Select</Text>
                <Text>160</Text>
            </View>
        );
    }
}

class ChatDetailItemScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <LogoTitle navigation={navigation}/>,
            headerRight: <IconHeaderRight/>,
            headerStyle:{
                backgroundColor: '#009933',
            }
        };
    };

    render() {

        const {navigation} = this.props;
        const {item, name, message, date, } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <Text>{name}</Text>
                <Text>{message}</Text>
                <Text>{date}</Text>
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