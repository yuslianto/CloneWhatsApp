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

class StatusScreen extends Component {

    constructor() {
        super()
        this.state = {
            active: 'true'
        };
    }

    _onLongPresButton() {
        Alert.alert('You long press the item!!')
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style ={{flex: 1, backgroundColor: 'white'}} >
                    <List>
                        <ListItem avatar
                            button={true}
                            onPress={ ()=> this.props.navigation.navigate('StatusItem')}
                            onLongPress={this._onLongPresButton}
                        >
                            <Left>
                                <Thumbnail source={ require('../../assets/images/regLogo.png') } />
                            </Left>
                            <Body>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>My Status</Text>
                                <Text>Tap to add status update</Text>
                            </Body>
                        </ListItem>
                        <View style={{flex: 1, backgroundColor: 'rgb(232,232,232)', height: 35, width: '100%', paddingLeft: 15, justifyContent: 'center'}}>
                            <Text>Recent updates</Text>
                        </View>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={ require('../../assets/images/television.png') } />
                            </Left>
                            <Body>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>Gigi</Text>
                                <Text>Just now</Text>
                            </Body>
                        </ListItem>
                        <View style={{flex: 1, backgroundColor: 'rgb(232,232,232)', height: 35, width: '100%', paddingLeft: 15, justifyContent: 'center'}}>
                            <Text>Viewed updates</Text>
                        </View>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={ require('../../assets/images/television.png') } />
                            </Left>
                            <Body>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>Putri</Text>
                                <Text>10 hours ago</Text>
                            </Body>
                        </ListItem>
                    </List>
                </ScrollView>
                <Fab
                    active={this.state.active}
                    style={{ backgroundColor: '#009933' }}
                    position="bottomRight"
                    containerStyle={{marginTop: 50}}
                    onPress={() => this.props.navigation.navigate('CreateImgStatusScreen')}>
                    <Icon name="logo-instagram" />
                    <Button 
                        style={{ backgroundColor: 'white', marginBottom: 20}}
                        onPress={()=> this.props.navigation.navigate('CreateTextStatusScreen')}
                    >
                        <Icon name="md-create" style={{fontSize: 20}}/>
                    </Button>
                </Fab>
            </View>
        );
    }
}
export default StatusScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});