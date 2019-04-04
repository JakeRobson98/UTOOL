
import React from 'react'
import { StyleSheet,ActivityIndicator, Button, TextInput, Text, View } from 'react-native';
var styles = require('../../resources/style');
export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
        errorMessage: null,
        isLoading: true,
        titleText: 'Welcome to UTOOL!',
        bodyText: 'Please sign in.'
    }
    handleLogin = () => {
        const { email, password } = this.state
        console.log(email + password)
        this.props.navigation.navigate('Dashboard')
    }
    componentDidMount(){
       this.setState({isLoading : false});
    }
    render() {
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            );
        }
        else{
            return (
                <View style={styles.container}>
                    <Text style={styles.titleText}>
                        {this.state.titleText}
                    </Text>
                    <Text style={styles.bodyText}>
                        {this.state.bodyText}{'\n'}
                    </Text>
                    {this.state.errorMessage &&
                        <Text style={{ color: 'red' }}>
                            {this.state.errorMessage}
                        </Text>}
                    <TextInput
                        style={styles.textInput}
                        autoCapitalize="none"
                        selectionColor={'#26547C'}
                        placeholderTextColor={'#26547C'}
                        placeholder="Email"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                    <TextInput
                        secureTextEntry
                        style={styles.textInput}
                        autoCapitalize="none"
                        placeholder="Password"
                        selectionColor={'#26547C'}
                        placeholderTextColor={'#26547C'}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                <Button style={styles.button} color={'#26547C'} title="Login!" onPress={this.handleLogin}/>

                </View>
            );
        }
       
    }
}
