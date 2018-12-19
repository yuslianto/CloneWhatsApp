import React, { Component } from "react";
import { 
    View,
    Text,
    Alert,
    ScrollView,
    StyleSheet
} from "react-native";
import { 
    Button, Fab, Left, Right,
    Body, List, ListItem, Thumbnail
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

class CallsScreen extends Component {

    constructor() {
        super()
        this.state = {
            active: 'true'
        };
    }

    _onLongPross() {
        Alert.alert('You long pres the item!!!')
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style ={{flex: 1, backgroundColor: 'white'}} >
                    <List>
                        <ListItem avatar
                            button={true}
                            onPress= { ()=> this.props.navigation.navigate('CallItemScreen')}
                            onLongPress= {this._onLongPross}
                        >
                            <Left>
                                <Thumbnail source={ require('../../assets/images/regLogo.png') } />
                                </Left>
                            <Body>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>Rini</Text>
                                <Text>4 November 2018</Text>
                            </Body>
                            <Right>
                                <Icon name='md-call' style={{paddingTop: 10, fontSize: 25, color: 'red'}}/>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={ require('../../assets/images/television.png') } />
                            </Left>
                            <Body>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>Reno</Text>
                                <Text>30  April 2018</Text>
                            </Body>
                            <Right>
                                <Icon name='md-call' style={{paddingTop: 10, fontSize: 25, color: 'green'}}/>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={ require('../../assets/images/regLogo.png') } />
                                </Left>
                            <Body>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>Andi</Text>
                                <Text>4 November 2018</Text>
                            </Body>
                            <Right>
                                <Icon name='md-call' style={{paddingTop: 10, fontSize: 25, color: 'red'}}/>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={ require('../../assets/images/television.png') } />
                            </Left>
                            <Body>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>Kadir</Text>
                                <Text>30  April 2018</Text>
                            </Body>
                            <Right>
                                <Icon name='md-call' style={{paddingTop: 10, fontSize: 25, color: 'green'}}/>
                            </Right>
                        </ListItem>
                    </List>
                </ScrollView>
                <Fab
                    active={this.state.active}
                    style={{ backgroundColor: '#009933' }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('AddCallScreen')}>
                    <Icon name="md-call" />
                </Fab>
            </View>
        );
    }
}
export default CallsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});