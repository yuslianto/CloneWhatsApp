import React, { Component } from "react";
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { 
    Left, Right,
    Body, ListItem, Thumbnail,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

class CallItem extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        const {id, first_name, time, date, image, missed } = this.props;

        return (
            <View style={styles.container}>
                <ListItem avatar
                    button={true}
                    onLongPress={this.props.onLongPress}
                    onPress={this.props.onPress}
                    style={{flex:1}}
                >
                    <Left style={{flex:1}}>
                        <Thumbnail source={{uri:image}} resizeMode='contain'/>
                    </Left>
                    <Body style={{flex: 3, justifyContent:'space-between'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>{first_name}</Text>
                        <View style={{flex: 1, flexDirection: 'row', }}>
                            <MaterialCommunityIcons
                                name={missed ? "arrow-bottom-left" : "arrow-top-right"}
                                style={{fontSize:20}} color = {missed ? "red" : "green"}
                            />
                            <Text>{date} {time}</Text>
                        </View>
                    </Body>
                    <Right style={{flex: 1, justifyContent:'center'}}>
                        <Ionicons
                            name="md-call"
                            style={{color: 'green',fontSize:25}}
                        />
                    </Right>
                </ListItem>
            </View>
        );
    }
}
export default CallItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    initStyle: {
        borderRadius: 30,
        width: 60,
        height: 60
    }
});